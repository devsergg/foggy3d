export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          category: string
          price: number
          description: string
          materials: string[]
          dimensions: string
          in_stock: boolean
          featured: boolean
          images: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          price: number
          description: string
          materials: string[]
          dimensions: string
          in_stock?: boolean
          featured?: boolean
          images: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          price?: number
          description?: string
          materials?: string[]
          dimensions?: string
          in_stock?: boolean
          featured?: boolean
          images?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
} 