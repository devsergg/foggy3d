export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  images: string[];
  description: string;
  materials: string[];
  dimensions: string;
  inStock: boolean;
  featured?: boolean;
}

export type ProductCategory = 
  | 'keychains'
  | 'flexi-toys' 
  | 'vases'
  | 'lamps'
  | 'functional'
  | 'home-decor';

export interface EngineeringProject {
  id: string;
  title: string;
  description: string;
  category: 'automotive' | 'industrial' | 'prototyping';
  images: string[];
  challenges: string[];
  solutions: string[];
  technologies: string[];
  featured?: boolean;
  status?: 'Coming Soon' | 'In Development' | 'Completed';
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: 'custom-part' | 'cad-printing' | 'personalized-gift' | 'bulk-order' | 'general';
  message: string;
  projectDetails?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
} 