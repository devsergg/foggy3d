# Product Management System

This document explains how to add new products to your Foggy3D website using the automated product addition tool.

## Quick Start

To add a new product, run:

```bash
npm run add-product
```

## Step-by-Step Process

### 1. Prepare Your Product Folder

Organize your product files in a local folder with:
- High-quality product images (JPG, PNG, WebP, GIF)
- All related media files

**Example folder structure:**
```
/Users/sergiogarcia/Desktop/3Dprinting/Foggy3d/Cubee Products/Inyo - Incense Holder/
├── main-image.jpg
├── detail-shot.png
├── angle-view.jpg
└── lifestyle-photo.png
```

### 2. Run the Addition Tool

```bash
npm run add-product
```

### 3. Follow the Interactive Prompts

The tool will ask for:

#### 📁 **Product Folder Path**
- Enter the full path to your product folder
- Example: `/Users/sergiogarcia/Desktop/3Dprinting/Foggy3d/Cubee Products/Inyo - Incense Holder`

#### 📝 **Product Information**
- **Product Name**: "Inyo Incense Holder"
- **Category**: Select from:
  1. sf-souvenirs
  2. vases
  3. lamps
  4. flexi-toys
  5. keychains
  6. functional
- **Price**: 24.99 (USD)
- **Description**: "Modern geometric incense holder with clean lines and minimalist design"
- **Dimensions**: '4" x 2" x 1"'

#### 🧱 **Materials** (comma-separated numbers)
1. PLA Plastic
2. PETG Plastic
3. Flexible PLA
4. ABS Plastic
5. Wood-filled PLA
6. Metal-filled PLA
7. Glow-in-the-dark PLA
8. Carbon Fiber PLA

#### ⭐ **Featured Product**
- Choose if this should be featured on the homepage

### 4. Automatic Processing

The tool will:
- ✅ Copy all images to the appropriate category folder
- ✅ Rename images with consistent naming (productId.jpg, productId-1.jpg, etc.)
- ✅ Generate a unique product ID
- ✅ Add the product to your products database
- ✅ Provide a summary of changes

### 5. Review and Deploy

After the tool completes:
1. **Test locally**: Run `npm run dev` and check your product
2. **Review the product**: Ensure images and details look correct
3. **Commit changes**: `git add . && git commit -m "Add new product: [Product Name]"`
4. **Deploy**: `git push origin main`

## File Structure

### Images
Images are automatically organized in:
```
public/images/products/
├── sf-souvenirs/
├── vases/
├── lamps/
├── flexi-toys/
├── keychains/
└── functional/
```

### Product Data
Product information is stored in:
```
src/data/products.ts
```

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

## Product ID Generation

Product IDs are automatically generated using:
- Category prefix (e.g., `vase-`, `lamp-`, `toy-`)
- Timestamp suffix for uniqueness
- Example: `vase-123456`, `lamp-789012`

## Categories

| Category | Description | Prefix |
|----------|-------------|---------|
| sf-souvenirs | San Francisco themed items | `sf-` |
| vases | Planters and decorative vases | `vase-` |
| lamps | Lighting fixtures | `lamp-` |
| flexi-toys | Flexible/articulated toys | `toy-` |
| keychains | Small accessories | `key-` |
| functional | Practical items | `func-` |

## Troubleshooting

### Common Issues

**❌ "Source folder does not exist"**
- Double-check the folder path
- Use absolute paths (starting with `/Users/...`)

**❌ "No supported image files found"**
- Ensure your folder contains JPG, PNG, WebP, or GIF files
- Check file extensions are lowercase

**❌ "Could not find the right place to insert"**
- The products.ts file structure may have changed
- Manually add the product or restore the file structure

### Getting Help

If you encounter issues:
1. Check the console output for specific error messages
2. Ensure all file paths are correct
3. Verify image file formats are supported
4. Make sure you have write permissions to the project directory

## Example Complete Workflow

```bash
# 1. Run the tool
npm run add-product

# 2. Follow prompts with example data:
# Folder: /Users/sergiogarcia/Desktop/3Dprinting/Foggy3d/Cubee Products/Inyo - Incense Holder
# Name: Inyo Incense Holder
# Category: 6 (functional)
# Price: 24.99
# Description: Modern geometric incense holder with clean lines
# Dimensions: 4" x 2" x 1"
# Materials: 1 (PLA Plastic)
# Featured: n

# 3. Review output
# 4. Test the website
npm run dev

# 5. Commit and deploy
git add .
git commit -m "Add new product: Inyo Incense Holder"
git push origin main
```

## Advanced Usage

### Adding Multiple Products

Run the script multiple times for different products. Each will get a unique ID and proper organization.

### Updating Existing Products

To update an existing product:
1. Manually edit `src/data/products.ts`
2. Replace images in the appropriate `public/images/products/[category]/` folder
3. Keep the same product ID to maintain consistency 