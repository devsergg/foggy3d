#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuration
const PRODUCTS_FILE = path.join(__dirname, '../src/data/products.ts');
const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images/products');
const SUPPORTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Categories mapping
const CATEGORIES = {
  '1': 'sf-souvenirs',
  '2': 'vases', 
  '3': 'lamps',
  '4': 'flexi-toys',
  '5': 'keychains',
  '6': 'functional',
  '7': 'home-decor'
};

// Materials options
const MATERIALS = {
  '1': 'PLA Plastic',
  '2': 'PETG Plastic', 
  '3': 'Flexible PLA',
  '4': 'ABS Plastic',
  '5': 'Wood-filled PLA',
  '6': 'Metal-filled PLA',
  '7': 'Glow-in-the-dark PLA',
  '8': 'Carbon Fiber PLA'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function generateProductId(category) {
  const categoryPrefixes = {
    'sf-souvenirs': 'sf',
    'vases': 'vase',
    'lamps': 'lamp',
    'flexi-toys': 'toy',
    'keychains': 'key',
    'functional': 'func',
    'home-decor': 'decor'
  };
  
  const prefix = categoryPrefixes[category] || 'prod';
  const timestamp = Date.now().toString().slice(-6);
  return `${prefix}-${timestamp}`;
}

function copyImages(sourcePath, category, productId) {
  const categoryDir = path.join(PUBLIC_IMAGES_DIR, category);
  
  // Create category directory if it doesn't exist
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  
  const files = fs.readdirSync(sourcePath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return SUPPORTED_IMAGE_EXTENSIONS.includes(ext);
  });
  
  if (imageFiles.length === 0) {
    console.log('⚠️  No supported image files found in the source directory');
    return [];
  }
  
  const copiedImages = [];
  
  imageFiles.forEach((file, index) => {
    const sourceFile = path.join(sourcePath, file);
    const ext = path.extname(file);
    const newFileName = index === 0 ? `${productId}${ext}` : `${productId}-${index}${ext}`;
    const destFile = path.join(categoryDir, newFileName);
    
    try {
      fs.copyFileSync(sourceFile, destFile);
      copiedImages.push(`/images/products/${category}/${newFileName}`);
      console.log(`✅ Copied: ${file} → ${newFileName}`);
    } catch (error) {
      console.error(`❌ Error copying ${file}:`, error.message);
    }
  });
  
  return copiedImages;
}

function updateProductsFile(newProduct) {
  try {
    let content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
    
    // Find the last product entry and add the new one
    const lastProductMatch = content.match(/\},\s*\n\s*\n\s*\]; $/);
    if (lastProductMatch) {
      const productEntry = `  {
    id: '${newProduct.id}',
    name: '${newProduct.name}',
    category: '${newProduct.category}',
    price: ${newProduct.price},
    images: [${newProduct.images.map(img => `'${img}'`).join(', ')}],
    description: '${newProduct.description}',
    materials: [${newProduct.materials.map(mat => `'${mat}'`).join(', ')}],
    dimensions: '${newProduct.dimensions}',
    inStock: ${newProduct.inStock},${newProduct.featured ? '\n    featured: true,' : ''}
  },

]; `;
      
      content = content.replace(/\]; $/, productEntry);
      fs.writeFileSync(PRODUCTS_FILE, content);
      console.log('✅ Updated products.ts file');
    } else {
      console.error('❌ Could not find the right place to insert the new product');
    }
  } catch (error) {
    console.error('❌ Error updating products file:', error.message);
  }
}

async function main() {
  console.log('🚀 Foggy3D Product Addition Tool\n');
  
  // Get source folder path
  const sourcePath = await question('📁 Enter the full path to your product folder: ');
  
  if (!fs.existsSync(sourcePath)) {
    console.error('❌ Source folder does not exist!');
    process.exit(1);
  }
  
  // Get product details
  console.log('\n📝 Product Information:');
  const productName = await question('Product Name: ');
  
  // Category selection
  console.log('\n📂 Select Category:');
  Object.entries(CATEGORIES).forEach(([key, value]) => {
    console.log(`${key}. ${value}`);
  });
  const categoryChoice = await question('Enter category number: ');
  const category = CATEGORIES[categoryChoice];
  
  if (!category) {
    console.error('❌ Invalid category selection!');
    process.exit(1);
  }
  
  const price = parseFloat(await question('💰 Price (USD): '));
  const description = await question('📄 Description: ');
  const dimensions = await question('📏 Dimensions (e.g., "8\" x 2\" x 3\""): ');
  
  // Materials selection
  console.log('\n🧱 Select Materials (comma-separated numbers):');
  Object.entries(MATERIALS).forEach(([key, value]) => {
    console.log(`${key}. ${value}`);
  });
  const materialChoices = await question('Enter material numbers: ');
  const materials = materialChoices.split(',').map(choice => MATERIALS[choice.trim()]).filter(Boolean);
  
  const featured = (await question('⭐ Featured product? (y/n): ')).toLowerCase() === 'y';
  
  // Generate product ID and copy images
  const productId = generateProductId(category);
  console.log(`\n🔄 Processing product with ID: ${productId}`);
  
  const copiedImages = copyImages(sourcePath, category, productId);
  
  if (copiedImages.length === 0) {
    console.error('❌ No images were copied. Aborting.');
    process.exit(1);
  }
  
  // Create product object
  const newProduct = {
    id: productId,
    name: productName,
    category: category,
    price: price,
    images: copiedImages,
    description: description,
    materials: materials,
    dimensions: dimensions,
    inStock: true,
    featured: featured
  };
  
  // Update products file
  updateProductsFile(newProduct);
  
  console.log('\n🎉 Product added successfully!');
  console.log('📋 Summary:');
  console.log(`   ID: ${newProduct.id}`);
  console.log(`   Name: ${newProduct.name}`);
  console.log(`   Category: ${newProduct.category}`);
  console.log(`   Price: $${newProduct.price}`);
  console.log(`   Images: ${newProduct.images.length} files`);
  console.log(`   Featured: ${newProduct.featured ? 'Yes' : 'No'}`);
  
  console.log('\n💡 Next steps:');
  console.log('1. Review the product in your website');
  console.log('2. Test the product page');
  console.log('3. Commit and push changes when ready');
  
  rl.close();
}

// Handle errors
process.on('uncaughtException', (error) => {
  console.error('❌ Unexpected error:', error.message);
  rl.close();
  process.exit(1);
});

// Run the script
main().catch((error) => {
  console.error('❌ Script error:', error.message);
  rl.close();
  process.exit(1);
}); 