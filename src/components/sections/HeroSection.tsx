'use client';

import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const featuredProducts = [
    {
      name: 'Golden Gate Bridge Model',
      image: '/images/products/sf-souvenirs/Golden_gate_bridge.png',
      price: '$29.99'
    },
    {
      name: 'AXEL Modern Desk Lamp',
      image: '/images/products/lamps/AXEL LAMP 3 1080.png',
      price: '$89.99'
    },
    {
      name: 'Sun Dragon Articulated Figure',
      image: '/images/products/flexi-toys/Sun Dragon Articulated Keychain Figure.PNG',
      price: '$24.99'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                <Sparkles className="h-4 w-4" />
                San Francisco's Premier 3D Printing
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight">
                From Creative
                <span className="block text-transparent bg-gradient-to-r from-primary-500 to-secondary-900 bg-clip-text">
                  Trinkets
                </span>
                to Functional
                <span className="block text-transparent bg-gradient-to-r from-secondary-900 to-primary-500 bg-clip-text">
                  Designs
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
                Combining artistic creativity with precision engineering. 
                We bring your ideas to life, one layer at a time.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products"
                className="group bg-gradient-to-r from-primary-500 to-secondary-900 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact"
                className="group border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 font-semibold text-lg backdrop-blur-sm bg-white/80 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Custom Project
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-neutral-600 mt-2 font-medium">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-secondary-700 to-secondary-900 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  24h
                </div>
                <div className="text-neutral-600 mt-2 font-medium">Avg. Turnaround</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-neutral-600 mt-2 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Featured Products Showcase */}
          <div className="relative animate-slide-up">
            {/* Products Showcase */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neutral-200/50 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900">Featured Products</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-warning-500 fill-current" />
                  <span className="text-sm text-neutral-600 font-medium">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="grid gap-4">
                {featuredProducts.map((product, index) => (
                  <div 
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-50/50 hover:bg-white transition-all duration-300 hover:shadow-md border border-transparent hover:border-neutral-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900 text-sm group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-primary-600 font-bold text-sm">{product.price}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/products"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                >
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Enhanced Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg animate-float border-2 border-white">
              ⚡ Fast Delivery
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-secondary-700 to-secondary-900 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg animate-float border-2 border-white" style={{ animationDelay: '1s' }}>
              🎯 Precision Quality
            </div>

            <div className="absolute top-1/2 -left-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-xl font-semibold text-xs shadow-lg animate-float border-2 border-white" style={{ animationDelay: '2s' }}>
              ✨ Custom Design
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
} 