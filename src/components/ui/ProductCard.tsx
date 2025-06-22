'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-xl border-2 border-neutral-200 hover:border-primary-400 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={product.images[0] || '/images/placeholder-product.jpg'}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
        
        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">Out of Stock</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white text-black p-3 rounded-full hover:bg-primary-100 transition-colors shadow-lg"
            aria-label="View details"
          >
            <Eye className="h-5 w-5" />
          </button>
          {product.inStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-colors shadow-lg"
              aria-label="View on Etsy"
            >
              <ExternalLink className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-black line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-600 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Materials */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.materials.slice(0, 2).map((material, index) => (
            <span
              key={index}
              className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs font-medium"
            >
              {material}
            </span>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-black">${product.price}</span>
            <span className="text-sm text-neutral-500 ml-1">USD</span>
          </div>
          
          {product.inStock ? (
            <button
              onClick={() => onAddToCart(product)}
              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-sm flex items-center gap-1"
            >
              <ExternalLink className="h-4 w-4" />
              View on Etsy
            </button>
          ) : (
            <span className="text-red-500 font-semibold text-sm">Unavailable</span>
          )}
        </div>

        {/* Dimensions */}
        <div className="mt-2 text-xs text-neutral-500">
          Dimensions: {product.dimensions}
        </div>
      </div>
    </div>
  );
} 