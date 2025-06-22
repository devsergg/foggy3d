import { Product } from '@/types';

export const sampleProducts: Product[] = [
  // San Francisco Souvenirs
  {
    id: 'sf-001',
    name: 'Golden Gate Bridge Model',
    category: 'sf-souvenirs',
    price: 29.99,
    images: ['/images/products/sf-souvenirs/Golden_gate_bridge.png'],
    description: 'Detailed 3D printed replica of the iconic Golden Gate Bridge. Perfect desk ornament or gift.',
    materials: ['PLA Plastic'],
    dimensions: '8" x 2" x 3"',
    inStock: true,
    featured: true,
  },
  {
    id: 'sf-002', 
    name: 'Coit Tower Miniature',
    category: 'sf-souvenirs',
    price: 19.99,
    images: ['/images/products/sf-souvenirs/Coit_tower.png'],
    description: 'Authentic miniature of San Francisco\'s historic Coit Tower.',
    materials: ['PLA Plastic'],
    dimensions: '3" x 3" x 6"',
    inStock: true,
  },

  
  // Vases & Home Decor
  {
    id: 'vase-001',
    name: 'Modern Geometric Planter',
    category: 'vases',
    price: 45.99,
    images: ['/images/products/vases/2.png'],
    description: 'Contemporary geometric planter with unique angular design. Perfect for modern decor.',
    materials: ['PETG Plastic'],
    dimensions: '6" x 6" x 8"',
    inStock: true,
    featured: true,
  },
  {
    id: 'vase-002',
    name: 'FREYA Planter',
    category: 'vases',
    price: 32.99,
    images: ['/images/products/vases/FREYA_planter_green-front.jpg'],
    description: 'Elegant FREYA planter with modern aesthetic. Perfect for plants and succulents.',
    materials: ['PLA Plastic'],
    dimensions: '5" x 5" x 6"',
    inStock: true,
  },

  // Lamps
  {
    id: 'lamp-001',
    name: 'AXEL Modern Desk Lamp',
    category: 'lamps',
    price: 89.99,
    images: ['/images/products/lamps/AXEL LAMP 3 1080.png'],
    description: 'Sleek AXEL desk lamp with modern design and LED integration. Contemporary and functional.',
    materials: ['PLA Plastic', 'LED Strip'],
    dimensions: '8" x 6" x 12"',
    inStock: true,
    featured: true,
  },
  {
    id: 'lamp-002',
    name: 'Contemporary Table Lamp',
    category: 'lamps',
    price: 75.99,
    images: ['/images/products/lamps/2-6.11.jpg'],
    description: 'Modern table lamp with unique geometric design. Perfect ambient lighting.',
    materials: ['PLA Plastic', 'LED Components'],
    dimensions: '6" x 6" x 10"',
    inStock: true,
  },

  // Flexi Toys
  {
    id: 'toy-001',
    name: 'Sun Dragon Articulated Figure',
    category: 'flexi-toys',
    price: 24.99,
    images: ['/images/products/flexi-toys/Sun Dragon Articulated Keychain Figure.PNG'],
    description: 'Beautiful articulated dragon figure that bends and flexes. Comes with keychain attachment!',
    materials: ['Flexible PLA'],
    dimensions: '4" x 1.5" x 2"',
    inStock: true,
    featured: true,
  },
  {
    id: 'toy-002',
    name: 'Flexi Dog',
    category: 'flexi-toys',
    price: 19.99,
    images: ['/images/products/keychains/Flexi Dog7.jpg'],
    description: 'Adorable flexible dog model with articulated joints. Perfect fidget toy and desk companion.',
    materials: ['Flexible PLA'],
    dimensions: '3" x 2" x 2"',
    inStock: true,
  },


]; 