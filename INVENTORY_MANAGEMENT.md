# Inventory Management System

This document explains how to manage your Foggy3D inventory using Google Sheets instead of editing code directly.

## 🚀 Quick Start

1. **Export current inventory**: `npm run export-csv`
2. **Upload to Google Sheets**
3. **Configure automatic sync**
4. **Edit prices/inventory in Google Sheets**
5. **Changes sync automatically to your website**

## 📋 System Overview

Your inventory management system has three main components:

### 1. **Google Sheets** (Your Control Panel)
- Edit prices, descriptions, stock status
- Add/remove products
- Control featured products
- User-friendly interface

### 2. **Automatic Sync** (GitHub Actions)
- Checks for changes every hour during business hours
- Downloads your Google Sheet data
- Updates your website automatically
- Deploys changes to Vercel

### 3. **Manual Sync** (For immediate updates)
- `npm run sync-inventory` - Sync changes now
- Perfect for urgent price changes

## 🔧 Setup Instructions

### Step 1: Export Current Inventory

```bash
npm run export-csv
```

This creates `inventory.csv` with all your current products.

### Step 2: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Import your `inventory.csv` file:
   - File → Import → Upload → Select `inventory.csv`
   - Choose "Replace spreadsheet"

### Step 3: Configure Your Sheet

Your sheet should have these columns:

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| **id** | Text | Unique product ID | `sf-001` |
| **name** | Text | Product name | `Golden Gate Bridge Model` |
| **category** | Text | Product category | `sf-souvenirs` |
| **price** | Number | Price in USD | `14.99` |
| **images** | Text | Image paths (semicolon-separated) | `/images/products/sf-souvenirs/bridge.png` |
| **description** | Text | Product description | `Detailed 3D printed replica...` |
| **materials** | Text | Materials (semicolon-separated) | `PLA Plastic;LED Strip` |
| **dimensions** | Text | Product dimensions | `8" x 2" x 3"` |
| **inStock** | Boolean | Stock status | `TRUE` or `FALSE` |
| **featured** | Boolean | Featured on homepage | `TRUE` or `FALSE` |

### Step 4: Make Sheet Public

1. Click "Share" button (top right)
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Copy the sharing link

### Step 5: Get CSV Export URL

Transform your sharing URL:
- **From**: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=0`
- **To**: `https://docs.google.com/spreadsheets/d/SHEET_ID/export?format=csv&gid=0`

### Step 6: Configure GitHub Secrets

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add new secret:
   - **Name**: `GOOGLE_SHEET_CSV_URL`
   - **Value**: Your CSV export URL from Step 5

## 📊 Managing Your Inventory

### Editing Prices

1. Open your Google Sheet
2. Find the product row
3. Update the `price` column
4. Changes sync automatically within 1 hour
5. For immediate sync: `npm run sync-inventory`

### Adding New Products

1. Add a new row to your Google Sheet
2. Fill in all required columns:
   - **id**: Use format `category-######` (e.g., `vase-123456`)
   - **name**: Product name
   - **category**: One of: `sf-souvenirs`, `vases`, `lamps`, `flexi-toys`, `keychains`, `functional`, `home-decor`
   - **price**: Numeric value
   - **images**: Image paths separated by semicolons
   - **description**: Product description
   - **materials**: Materials separated by semicolons
   - **dimensions**: Product dimensions
   - **inStock**: `TRUE` or `FALSE`
   - **featured**: `TRUE` or `FALSE`

### Removing Products

1. Delete the entire row from your Google Sheet
2. Changes sync automatically

### Managing Stock

Update the `inStock` column:
- `TRUE` - Product is available
- `FALSE` - Product is out of stock

### Featured Products

Update the `featured` column:
- `TRUE` - Show on homepage
- `FALSE` - Don't feature

## 🔄 Sync Options

### Automatic Sync (Recommended)
- Runs every hour during business hours (9 AM - 6 PM PST)
- No action required
- Perfect for regular updates

### Manual Sync (For urgent changes)
```bash
npm run sync-inventory
```

### Trigger Sync via GitHub
1. Go to your GitHub repository
2. Actions tab
3. "Sync Inventory from Google Sheets"
4. Click "Run workflow"

## 📱 Categories Reference

| Category | Description | ID Prefix |
|----------|-------------|-----------|
| `sf-souvenirs` | San Francisco themed items | `sf-` |
| `vases` | Planters and decorative vases | `vase-` |
| `lamps` | Lighting fixtures | `lamp-` |
| `flexi-toys` | Flexible/articulated toys | `toy-` |
| `keychains` | Small accessories | `key-` |
| `functional` | Practical items | `func-` |
| `home-decor` | Home decoration items | `decor-` |

## 🧱 Materials Reference

Common materials for your products:
- `PLA Plastic`
- `PETG Plastic`
- `Flexible PLA`
- `ABS Plastic`
- `Wood-filled PLA`
- `Metal-filled PLA`
- `Glow-in-the-dark PLA`
- `Carbon Fiber PLA`
- `LED Strip`
- `LED Components`

## 🖼️ Image Management

### Image Paths Format
```
/images/products/CATEGORY/FILENAME.EXT
```

### Multiple Images
Separate multiple images with semicolons:
```
/images/products/vases/vase1.jpg;/images/products/vases/vase1-2.jpg;/images/products/vases/vase1-3.jpg
```

### Adding New Images
1. Add image files to `public/images/products/CATEGORY/`
2. Update the `images` column in your Google Sheet
3. Use semicolons to separate multiple images

## 🚨 Troubleshooting

### Common Issues

**❌ "Could not download CSV data"**
- Check your Google Sheet is public
- Verify the CSV URL is correct
- Ensure the sheet has data

**❌ "Syntax errors in products file"**
- Check for special characters in descriptions
- Ensure all required fields are filled
- Verify boolean values are `TRUE` or `FALSE`

**❌ "Sync not working"**
- Check GitHub Actions logs
- Verify `GOOGLE_SHEET_CSV_URL` secret is set
- Ensure CSV URL is accessible

### Getting Help

1. Check the GitHub Actions logs:
   - Go to your repository → Actions
   - Click on latest "Sync Inventory" run
   - Check the logs for error messages

2. Test manually:
   ```bash
   npm run sync-inventory
   ```

3. Validate your CSV:
   - Download your Google Sheet as CSV
   - Check for formatting issues

## 🎯 Best Practices

### Data Entry
- **Consistent formatting**: Use the same format for dimensions, materials
- **Unique IDs**: Never duplicate product IDs
- **Valid categories**: Only use the predefined categories
- **Proper booleans**: Use `TRUE`/`FALSE`, not `Yes`/`No`

### Price Updates
- **Regular reviews**: Check competitor pricing monthly
- **Seasonal adjustments**: Update for holidays/seasons
- **Bulk changes**: Use Google Sheets' fill-down feature

### Inventory Management
- **Stock tracking**: Keep `inStock` updated
- **Featured rotation**: Rotate featured products monthly
- **Description quality**: Write compelling, accurate descriptions

## 🔐 Security Notes

- Your Google Sheet is read-only public
- No sensitive data is exposed
- GitHub secrets are encrypted
- Automatic backups are created before each sync

## 📈 Example Workflow

### Scenario: Update prices for holiday sale

1. **Open Google Sheet**
2. **Select price column**
3. **Apply 20% discount formula**: `=ORIGINAL_PRICE*0.8`
4. **Copy values and paste as values**
5. **Wait 1 hour for auto-sync** OR **run manual sync**
6. **Verify changes on website**

### Scenario: Add new product

1. **Add images to**: `public/images/products/CATEGORY/`
2. **Add new row to Google Sheet**:
   - `id`: `lamp-789012`
   - `name`: `Modern LED Desk Lamp`
   - `category`: `lamps`
   - `price`: `45.99`
   - `images`: `/images/products/lamps/lamp-789012.jpg`
   - `description`: `Sleek modern desk lamp with adjustable brightness`
   - `materials`: `PLA Plastic;LED Strip`
   - `dimensions`: `8" x 6" x 14"`
   - `inStock`: `TRUE`
   - `featured`: `FALSE`
3. **Sync automatically** OR **run manual sync**
4. **Check website for new product**

## 🎉 Benefits

✅ **No code editing required**
✅ **User-friendly Google Sheets interface**
✅ **Automatic website updates**
✅ **Version control and backups**
✅ **Team collaboration support**
✅ **Mobile-friendly editing**
✅ **Completely free solution**

---

*Need help? Check the troubleshooting section or run `npm run sync-inventory` to test your setup.* 