#!/usr/bin/env node

// Test script to demonstrate product addition functionality
// This simulates adding the Inyo Incense Holder product

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Product Addition System\n');

// Simulate the product data that would be generated
const testProduct = {
  id: 'func-123456',
  name: 'Inyo Incense Holder',
  category: 'functional',
  price: 24.99,
  images: ['/images/products/functional/func-123456.jpg', '/images/products/functional/func-123456-1.png'],
  description: 'Modern geometric incense holder with clean lines and minimalist design. Perfect for creating a zen atmosphere.',
  materials: ['PLA Plastic'],
  dimensions: '4" x 2" x 1"',
  inStock: true,
  featured: false
};

console.log('📋 Example Product Data:');
console.log(JSON.stringify(testProduct, null, 2));

console.log('\n✅ Product Addition Script is ready to use!');
console.log('\n🚀 To add your Inyo Incense Holder product, run:');
console.log('   npm run add-product');
console.log('\n📁 Then provide the path:');
console.log('   /Users/sergiogarcia/Desktop/3Dprinting/Foggy3d/Cubee Products/Inyo - Incense Holder');

// Check if the source folder exists (optional demonstration)
const examplePath = '/Users/sergiogarcia/Desktop/3Dprinting/Foggy3d/Cubee Products/Inyo - Incense Holder';
if (fs.existsSync(examplePath)) {
  console.log('\n✅ Source folder found! Ready to add product.');
  
  // List files in the directory
  try {
    const files = fs.readdirSync(examplePath);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });
    
    console.log(`\n📸 Found ${imageFiles.length} image files:`);
    imageFiles.forEach(file => console.log(`   - ${file}`));
  } catch (error) {
    console.log('\n⚠️  Could not read directory contents');
  }
} else {
  console.log('\n⚠️  Source folder not found at expected location');
  console.log('   Make sure the folder exists before running the add-product script');
} 