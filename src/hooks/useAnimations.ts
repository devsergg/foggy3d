'use client';

import { useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Hook for parallax scrolling effects
export const useParallax = (speed: number = 0.5, offset: string[] = ["start end", "end start"]) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  return { ref, y: smoothY };
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-10%'
  });
  
  return { ref, isInView };
};

// Hook for staggered animations
export const useStaggerAnimation = (delay: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);
  
  const getStaggerDelay = (index: number) => index * delay;
  
  return { ref, isVisible, getStaggerDelay };
};

// Hook for hover animations
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const hoverProps = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  };
  
  return { isHovered, hoverProps };
};

// Hook for reduced motion preferences
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

// Hook for scroll progress
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return { scrollYProgress, scaleX };
};

// Hook for viewport detection
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  
  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };
    
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);
  
  return viewport;
};

// Animation variants for common use cases
export const animationVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  
  // Stagger container
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  
  // Stagger child
  staggerChild: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
}; 