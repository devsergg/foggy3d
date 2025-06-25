'use client';

import { ArrowRight, Star, ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { sampleProducts } from '@/data/products';

export default function FeaturedProductsSection() {
  // Get featured products from the data
  const featuredProducts = sampleProducts.filter(product => product.featured);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-neutral-50/30 to-primary-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200 mb-6">
            <Star className="h-4 w-4" />
            Featured Products
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Popular
            <span className="block text-transparent bg-gradient-to-r from-primary-500 to-secondary-900 bg-clip-text">
              Creations
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Discover our most loved designs, from San Francisco landmarks to functional home accessories.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl p-6 shadow-soft hover:shadow-large transition-all duration-500 border border-neutral-100 hover:border-primary-200 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-50">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-4 w-4 text-neutral-700" />
                  </button>
                  <button className="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors">
                    <ShoppingCart className="h-4 w-4 text-white" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-700">
                  {product.category === 'sf-souvenirs' && 'SF Souvenir'}
                  {product.category === 'vases' && 'Home Decor'}
                  {product.category === 'lamps' && 'Lighting'}
                  {product.category === 'flexi-toys' && 'Flexi Toy'}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary-600 transition-colors overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {product.name}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-warning-500 fill-current" />
                  ))}
                  <span className="text-xs text-neutral-500 ml-1">(4.9)</span>
                </div>

                {/* Price and Materials */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    ${product.price}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {product.materials[0]}
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  href={`/products#${product.id}`}
                  className="group/btn w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12 border-2 border-neutral-200 inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Explore Our Full Collection
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl">
              From San Francisco landmarks to custom engineering solutions, 
              discover all the ways we can bring your ideas to life.
            </p>
            
            <Link 
              href="/products"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-900 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-800 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5"
            >
              Browse All Products
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 