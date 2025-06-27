'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TransparentSectionProps {
  children: ReactNode;
  className?: string;
  blurIntensity?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  opacity?: number;
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  background?: 'white' | 'dark' | 'primary' | 'secondary' | 'custom';
  customBg?: string;
  enableHover?: boolean;
  animateOnScroll?: boolean;
}

export const TransparentSection: React.FC<TransparentSectionProps> = ({
  children,
  className = '',
  blurIntensity = 'lg',
  opacity = 0.9,
  borderRadius = 'xl',
  padding = 'lg',
  background = 'white',
  customBg,
  enableHover = false,
  animateOnScroll = true,
}) => {
  const blurClasses = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
  };

  const radiusClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
    '2xl': 'p-16',
  };

  const backgroundClasses = {
    white: 'bg-white/90 border border-white/20',
    dark: 'bg-neutral-900/90 border border-neutral-700/20',
    primary: 'bg-primary-500/90 border border-primary-400/20',
    secondary: 'bg-secondary-900/90 border border-secondary-700/20',
    custom: customBg || 'bg-white/90 border border-white/20',
  };

  const baseClasses = cn(
    'relative',
    blurClasses[blurIntensity],
    radiusClasses[borderRadius],
    paddingClasses[padding],
    backgroundClasses[background],
    'backdrop-saturate-150',
    'shadow-soft',
    enableHover && 'transition-all duration-300 hover:shadow-medium hover:scale-[1.02]',
    className
  );

  const motionProps = animateOnScroll
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <motion.div
      className={baseClasses}
      style={{ 
        opacity: opacity,
        ...(customBg && background === 'custom' ? { backgroundColor: customBg } : {})
      }}
      {...motionProps}
    >
      {/* Backdrop gradient overlay for enhanced transparency effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-inherit pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default TransparentSection; 