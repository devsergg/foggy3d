'use client';

import { useState, useMemo } from 'react';
import { Product, ProductCategory } from '@/types';
import { sampleProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import FilterBar from '@/components/ui/FilterBar';
import { Sparkles, ArrowRight, Search } from 'lucide-react';

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | 'all'>('all');
  
  const filteredProducts = activeFilter === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === activeFilter);

  // Calculate product counts for each category
  const productCounts = useMemo(() => {
    const counts: Record<ProductCategory | 'all', number> = {
      'all': sampleProducts.length,
      'sf-souvenirs': 0,
      'vases': 0,
      'lamps': 0,
      'flexi-toys': 0,
      'keychains': 0,
      'functional': 0,
    };

    sampleProducts.forEach(product => {
      counts[product.category]++;
    });

    return counts;
  }, []);

  const handleViewDetails = (product: Product) => {
    // Handle product details view
    console.log('View details for:', product.name);
  };

  const handleAddToCart = (product: Product) => {
    // Handle add to cart
    console.log('Add to cart:', product.name);
  };

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Filter Bar */}
        <div className="mb-16 animate-slide-up">
          <FilterBar 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            productCounts={productCounts}
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20 animate-scale-in">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard 
                  product={product}
                  onViewDetails={handleViewDetails}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Search className="h-12 w-12 text-neutral-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">No products found</h3>
            <p className="text-lg text-neutral-700 mb-8">Try selecting a different category or browse all products.</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* Enhanced Custom Project CTA */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient-x"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-white/20 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 mb-6">
                <Sparkles className="h-4 w-4" />
                Custom Solutions
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{color: '#2F5233'}}>
                Don't See What You're
                <span className="block">Looking For?</span>
              </h3>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{color: '#2F5233'}}>
                Every great product starts with a great idea. Let's collaborate to create something 
                unique that perfectly matches your vision and requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group border-2 px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#2F5233',
                    borderColor: '#2F5233',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.borderColor = '#1F3422';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#2F5233';
                  }}
                >
                  Start Custom Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => document.getElementById('engineering')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group border-2 border-white/30 px-8 py-4 rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{
                    color: '#2F5233',
                  }}
                >
                  View Engineering Portfolio
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 