'use client';

import { useState, useMemo } from 'react';
import { Product, ProductCategory } from '@/types';
import { sampleProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import FilterBar from '@/components/ui/FilterBar';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory);

  // Calculate product counts for each category
  const productCounts = useMemo(() => {
    const counts: Record<ProductCategory | 'all', number> = {
      'all': sampleProducts.length,
      'keychains': 0,
      'flexi-toys': 0,
      'vases': 0,
      'lamps': 0,
      'sf-souvenirs': 0,
      'functional': 0,
    };

    sampleProducts.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });

    return counts;
  }, []);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    // TODO: Open product modal
    console.log('View details for:', product.name);
  };

  const handleAddToCart = (product: Product) => {
    // TODO: Add to cart functionality
    console.log('Add to cart:', product.name);
    // You could show a toast notification here
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our Product Collection
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From San Francisco-inspired souvenirs to functional home accessories, 
            each piece is crafted with precision and attention to detail.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          productCount={filteredProducts.length}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl text-neutral-300 mb-4">🔍</div>
            <h3 className="text-xl font-bold text-black mb-2">No products found</h3>
            <p className="text-neutral-600">Try selecting a different category or browse all products.</p>
          </div>
        )}

        {/* Custom Project CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Don&apos;t See What You&apos;re Looking For?
          </h3>
          <p className="text-lg text-neutral-800 mb-6 max-w-2xl mx-auto">
            Every great product starts with a great idea. Let&apos;s create something unique together.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
          >
            Start Custom Project
          </button>
        </div>
      </div>
    </section>
  );
} 