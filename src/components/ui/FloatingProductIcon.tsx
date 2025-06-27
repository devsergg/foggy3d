'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FloatingProductIconProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: string;
    category: string;
    description?: string;
  };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: { x: number; y: number };
  floatIntensity?: 'low' | 'medium' | 'high';
  className?: string;
  onClick?: () => void;
}

export const FloatingProductIcon: React.FC<FloatingProductIconProps> = ({
  product,
  size = 'md',
  position = { x: 0, y: 0 },
  floatIntensity = 'medium',
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const floatAnimations = {
    low: {
      y: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    },
    medium: {
      y: [-4, 4, -4],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    },
    high: {
      y: [-6, 6, -6],
      transition: {
        duration: 2.5,
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div
      className={cn(
        'absolute cursor-pointer select-none',
        className
      )}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      animate={floatAnimations[floatIntensity]}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Main Product Icon */}
      <motion.div
        className={cn(
          'relative rounded-2xl bg-white/20 backdrop-blur-md border border-white/30',
          'shadow-soft hover:shadow-medium transition-all duration-300',
          sizeClasses[size]
        )}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -1, 1, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Product Image */}
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 64px, 80px"
          />
        </div>

        {/* Category Badge */}
        <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-colored">
          {product.category}
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-primary-500/20 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Information Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-large border border-white/20 min-w-[200px]">
              <h3 className="font-display font-semibold text-neutral-900 mb-1">
                {product.name}
              </h3>
              {product.description && (
                <p className="text-sm text-neutral-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-primary-600 font-semibold">
                  {product.price}
                </span>
                <button className="text-xs bg-primary-500 text-white px-3 py-1 rounded-full hover:bg-primary-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Tooltip Arrow */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/95 rotate-45 border-l border-t border-white/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingProductIcon; 