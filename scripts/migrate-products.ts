import { createClient } from '@supabase/supabase-js'
import { sampleProducts } from '../src/data/products'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: '.env.local' })

// Make sure you have your environment variables set up
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function migrateProducts() {
  console.log('Starting product migration...')
  
  try {
    // Transform products to match database schema
    const productsToInsert = sampleProducts.map(product => ({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      materials: product.materials,
      dimensions: product.dimensions,
      in_stock: product.inStock,
      featured: product.featured || false,
      images: product.images,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }))

    // Insert products into database
    const { data, error } = await supabase
      .from('products')
      .insert(productsToInsert)
      .select()

    if (error) {
      console.error('Error inserting products:', error)
      throw error
    }

    console.log(`Successfully migrated ${data.length} products!`)
    console.log('Products migrated:')
    data.forEach(product => {
      console.log(`- ${product.name} (${product.category})`)
    })
    
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateProducts() 