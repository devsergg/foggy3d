'use client';

import { useState, useMemo } from 'react';
import { Product, ProductCategory } from '@/types';
import { sampleProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import FilterBar from '@/components/ui/FilterBar';

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active filter
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') {
      return sampleProducts;
    }
    return sampleProducts.filter(product => product.category === activeFilter);
  }, [activeFilter]);

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

  const handleFilterChange = (filter: ProductCategory | 'all') => {
    setActiveFilter(filter);
  };

  return (
    <section id="products" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Creative Collections
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Discover our unique 3D printed products, from San Francisco-themed souvenirs 
            to artistic home decor. Each piece is crafted with precision and creativity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            productCounts={productCounts}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-black mb-2">No products found</h3>
            <p className="text-neutral-600 mb-6">
              Try selecting a different category or check back soon for new products.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* Featured Products Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 border-2 border-neutral-200 shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4">
              Need Something Custom?
            </h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? We specialize in custom 3D printing 
              projects. From personalized gifts to functional engineering solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-secondary-500 text-white px-8 py-4 rounded-xl hover:bg-secondary-600 transition-colors font-bold text-lg"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 