import { supabase } from './supabase'
import { Database } from './database.types'
import { Product } from '../src/types'

type DatabaseProduct = Database['public']['Tables']['products']['Row']
type ProductInsert = Database['public']['Tables']['products']['Insert']
type ProductUpdate = Database['public']['Tables']['products']['Update']

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    throw error
  }

  // Transform database format to match Product interface
  return (data || []).map((dbProduct: DatabaseProduct) => ({
    id: dbProduct.id,
    name: dbProduct.name,
    category: dbProduct.category as Product['category'],
    price: dbProduct.price,
    images: dbProduct.images,
    description: dbProduct.description,
    materials: dbProduct.materials,
    dimensions: dbProduct.dimensions,
    inStock: dbProduct.in_stock,
    featured: dbProduct.featured,
  }))
}

// Get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching featured products:', error)
    throw error
  }

  // Transform database format to match Product interface
  return (data || []).map((dbProduct: DatabaseProduct) => ({
    id: dbProduct.id,
    name: dbProduct.name,
    category: dbProduct.category as Product['category'],
    price: dbProduct.price,
    images: dbProduct.images,
    description: dbProduct.description,
    materials: dbProduct.materials,
    dimensions: dbProduct.dimensions,
    inStock: dbProduct.in_stock,
    featured: dbProduct.featured,
  }))
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products by category:', error)
    throw error
  }

  return data || []
}

// Get single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    throw error
  }

  return data
}

// Create new product
export async function createProduct(product: ProductInsert): Promise<Product> {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single()

  if (error) {
    console.error('Error creating product:', error)
    throw error
  }

  return data
}

// Update product
export async function updateProduct(id: string, updates: ProductUpdate): Promise<Product> {
  const { data, error } = await supabase
    .from('products')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating product:', error)
    throw error
  }

  return data
}

// Delete product
export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting product:', error)
    throw error
  }
} 