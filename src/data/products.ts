import { Product } from '@/types';

export const sampleProducts: Product[] = [
  // Vases & Home Decor
  {
    id: 'vase-001',
    name: 'Modern Geometric Planter',
    category: 'vases',
    price: 28.99,
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
    price: 24.99,
    images: ['/images/products/vases/FREYA_planter_green-front.jpg'],
    description: 'Elegant FREYA planter with modern aesthetic. Perfect for plants and succulents.',
    materials: ['PLA Plastic'],
    dimensions: '5" x 5" x 6"',
    inStock: true,
  },
  {
    id: 'vase-003',
    name: 'Nido Vase',
    category: 'vases',
    price: 32.99,
    images: ['/images/products/nido-vase/nido.png'],
    description: 'Elegant nest-inspired vase with organic curves and modern minimalist design. Perfect for flowers or as a standalone art piece.',
    materials: ['PLA Plastic'],
    dimensions: '6" x 6" x 7"',
    inStock: true,
    featured: true,
  },

  // Lamps
  {
    id: 'lamp-001',
    name: 'AXEL Modern Desk Lamp',
    category: 'lamps',
    price: 39.99,
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
    price: 34.99,
    images: ['/images/products/lamps/2-6.11.jpg'],
    description: 'Modern table lamp with unique geometric design. Perfect ambient lighting.',
    materials: ['PLA Plastic', 'LED Components'],
    dimensions: '6" x 6" x 10"',
    inStock: true,
  },
  {
    id: 'lamp-003',
    name: 'Amanita Table Lamp',
    category: 'lamps',
    price: 49.99,
    images: [
      '/images/products/amanita-lamp/17-4.7.jpg',
      '/images/products/amanita-lamp/17-4.8.jpg',
      '/images/products/amanita-lamp/17-4.9.jpg'
    ],
    description: 'Elegant mushroom-inspired table lamp with organic curves and warm lighting. A stunning conversation piece.',
    materials: ['PLA Plastic', 'LED Components'],
    dimensions: '6" x 6" x 8"',
    inStock: true,
    featured: true,
  },
  {
    id: 'lamp-004',
    name: 'Brisa Lamp',
    category: 'lamps',
    price: 44.99,
    images: [
      '/images/products/brisa-lamp/19-5.5.jpg',
      '/images/products/brisa-lamp/19-5.6.jpg',
      '/images/products/brisa-lamp/13-5.9.jpg',
      '/images/products/brisa-lamp/13-5.10.jpg'
    ],
    description: 'Modern twisted lamp design with flowing curves that create beautiful ambient lighting patterns.',
    materials: ['PLA Plastic', 'LED Strip'],
    dimensions: '5" x 5" x 10"',
    inStock: true,
    featured: true,
  },

  // Flexi Toys
  {
    id: 'toy-001',
    name: 'Sun Dragon Articulated Figure',
    category: 'flexi-toys',
    price: 18.99,
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
    price: 14.99,
    images: ['/images/products/keychains/Flexi Dog7.jpg'],
    description: 'Adorable flexible dog model with articulated joints. Perfect fidget toy and desk companion.',
    materials: ['Flexible PLA'],
    dimensions: '3" x 2" x 2"',
    inStock: true,
  },

  // Home Decor
  {
    id: 'decor-inyo',
    name: 'Inyo Incense Holder',
    category: 'home-decor',
    price: 19.99,
    images: [
      '/images/products/home-decor/decor-inyo.png',
      '/images/products/home-decor/decor-inyo-1.png',
      '/images/products/home-decor/decor-inyo-2.png',
      '/images/products/home-decor/decor-inyo-3.png'
    ],
    description: 'Modern geometric incense holder with clean lines and minimalist design. Perfect for creating a zen atmosphere in any space.',
    materials: ['PLA Plastic'],
    dimensions: '4" x 2" x 1"',
    inStock: true,
    featured: true,
  },


]; 