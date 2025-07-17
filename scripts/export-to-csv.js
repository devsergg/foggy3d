#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function loadProducts() {
  const productsFile = path.join(__dirname, '../src/data/products.ts');
  const content = fs.readFileSync(productsFile, 'utf8');
  
  // Extract the products array from the TypeScript file
  const match = content.match(/export const sampleProducts: Product\[\] = \[([\s\S]*?)\];/);
  if (!match) {
    throw new Error('Could not find products array in products.ts');
  }
  
  // Create a simple function to evaluate the products array
  const Product = {}; // Mock the Product type
  const sampleProducts = eval(`[${match[1]}]`);
  return sampleProducts;
}

// Configuration
const OUTPUT_FILE = path.join(__dirname, '../inventory.csv');

// Helper function to escape CSV values
function escapeCSV(value) {
  if (typeof value === 'string') {
    // Escape quotes and wrap in quotes if contains comma, quote, or newline
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
  return value;
}

// Helper function to format arrays for CSV
function formatArray(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.join(';');
}

// Generate CSV content
function generateCSV(products) {
  const headers = [
    'id',
    'name', 
    'category',
    'price',
    'images',
    'description',
    'materials',
    'dimensions',
    'inStock',
    'featured'
  ];
  
  let csv = headers.join(',') + '\n';
  
  products.forEach(product => {
    const row = [
      escapeCSV(product.id),
      escapeCSV(product.name),
      escapeCSV(product.category),
      product.price,
      escapeCSV(formatArray(product.images)),
      escapeCSV(product.description),
      escapeCSV(formatArray(product.materials)),
      escapeCSV(product.dimensions),
      product.inStock,
      product.featured || false
    ];
    
    csv += row.join(',') + '\n';
  });
  
  return csv;
}

// Main export function
function exportToCSV() {
  try {
    console.log('📊 Exporting current inventory to CSV...');
    
    const sampleProducts = loadProducts();
    const csvContent = generateCSV(sampleProducts);
    
    fs.writeFileSync(OUTPUT_FILE, csvContent);
    
    console.log('✅ CSV export completed successfully!');
    console.log(`📁 File saved to: ${OUTPUT_FILE}`);
    console.log(`📈 Exported ${sampleProducts.length} products`);
    console.log('\n📋 Next steps:');
    console.log('1. Upload this CSV to Google Sheets');
    console.log('2. Share the sheet and get the public CSV URL');
    console.log('3. Update your environment variables');
    console.log('4. Run npm run sync-inventory to test');
    
  } catch (error) {
    console.error('❌ Error exporting to CSV:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  exportToCSV();
}

module.exports = { exportToCSV }; 