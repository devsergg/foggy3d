#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const PRODUCTS_FILE = path.join(__dirname, '../src/data/products.ts');
const GOOGLE_SHEET_CSV_URL = process.env.GOOGLE_SHEET_CSV_URL || 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0';

// Helper function to download CSV data
function downloadCSV(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => resolve(data));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Helper function to parse CSV
function parseCSV(csvText) {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const products = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length >= headers.length) {
      const product = {};
      headers.forEach((header, index) => {
        let value = values[index] || '';
        value = value.replace(/"/g, ''); // Remove quotes
        
        // Type conversion based on header
        switch (header.toLowerCase()) {
          case 'price':
            product[header] = parseFloat(value) || 0;
            break;
          case 'instock':
          case 'featured':
            product[header] = value.toLowerCase() === 'true' || value === '1';
            break;
          case 'images':
          case 'materials':
            // Handle arrays - split by semicolon or pipe
            product[header] = value.split(/[;|]/).map(item => item.trim()).filter(item => item);
            break;
          default:
            product[header] = value;
        }
      });
      
      if (product.id && product.name) {
        products.push(product);
      }
    }
  }

  return products;
}

// Helper function to generate products.ts content
function generateProductsFile(products) {
  const imports = "import { Product } from '@/types';\n\n";
  
  let content = "export const sampleProducts: Product[] = [\n";
  
  products.forEach((product, index) => {
    content += "  {\n";
    content += `    id: '${product.id}',\n`;
    content += `    name: '${product.name}',\n`;
    content += `    category: '${product.category}',\n`;
    content += `    price: ${product.price},\n`;
    content += `    images: [${product.images.map(img => `'${img}'`).join(', ')}],\n`;
    content += `    description: '${product.description.replace(/'/g, "\\'")}',\n`;
    content += `    materials: [${product.materials.map(mat => `'${mat}'`).join(', ')}],\n`;
    content += `    dimensions: '${product.dimensions}',\n`;
    content += `    inStock: ${product.inStock},\n`;
    if (product.featured) {
      content += `    featured: true,\n`;
    }
    content += "  }";
    
    if (index < products.length - 1) {
      content += ",\n\n";
    } else {
      content += "\n";
    }
  });
  
  content += "];\n";
  
  return imports + content;
}

// Main sync function
async function syncInventory() {
  try {
    console.log('🔄 Syncing inventory from Google Sheets...');
    
    // Download CSV data
    const csvData = await downloadCSV(GOOGLE_SHEET_CSV_URL);
    console.log('✅ Downloaded CSV data');
    
    // Parse CSV into products
    const products = parseCSV(csvData);
    console.log(`✅ Parsed ${products.length} products`);
    
    // Generate new products file
    const newContent = generateProductsFile(products);
    
    // Backup existing file
    const backupPath = PRODUCTS_FILE + '.backup';
    if (fs.existsSync(PRODUCTS_FILE)) {
      fs.copyFileSync(PRODUCTS_FILE, backupPath);
      console.log('✅ Created backup of existing products file');
    }
    
    // Write new products file
    fs.writeFileSync(PRODUCTS_FILE, newContent);
    console.log('✅ Updated products.ts file');
    
    // Validate the new file
    try {
      require(PRODUCTS_FILE);
      console.log('✅ New products file is valid');
    } catch (error) {
      console.error('❌ New products file has syntax errors, restoring backup');
      fs.copyFileSync(backupPath, PRODUCTS_FILE);
      throw error;
    }
    
    console.log('🎉 Inventory sync completed successfully!');
    console.log(`📊 Updated ${products.length} products`);
    
  } catch (error) {
    console.error('❌ Error syncing inventory:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  syncInventory();
}

module.exports = { syncInventory }; 