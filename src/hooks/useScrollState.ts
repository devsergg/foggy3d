'use client';

import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | 'none';
  isScrolling: boolean;
  scrollProgress: number;
  isAtTop: boolean;
  isAtBottom: boolean;
}

let globalScrollState: ScrollState = {
  scrollY: 0,
  scrollX: 0,
  scrollDirection: 'none',
  isScrolling: false,
  scrollProgress: 0,
  isAtTop: true,
  isAtBottom: false,
};

let listeners: Array<(state: ScrollState) => void> = [];
let scrollTimeout: NodeJS.Timeout | null = null;

const updateScrollState = () => {
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = documentHeight > 0 ? scrollY / documentHeight : 0;
  
  const scrollDirection = scrollY > globalScrollState.scrollY ? 'down' : 
                         scrollY < globalScrollState.scrollY ? 'up' : 'none';
  
  const isAtTop = scrollY <= 10;
  const isAtBottom = scrollY >= documentHeight - 10;
  
  globalScrollState = {
    scrollY,
    scrollX,
    scrollDirection,
    isScrolling: true,
    scrollProgress,
    isAtTop,
    isAtBottom,
  };
  
  // Notify all listeners
  listeners.forEach(listener => listener(globalScrollState));
  
  // Set scrolling to false after a delay
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  
  scrollTimeout = setTimeout(() => {
    globalScrollState = { ...globalScrollState, isScrolling: false };
    listeners.forEach(listener => listener(globalScrollState));
  }, 150);
};

// Throttle scroll events
let ticking = false;
const throttledScrollHandler = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollState();
      ticking = false;
    });
    ticking = true;
  }
};

// Initialize scroll listener
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', throttledScrollHandler, { passive: true });
  window.addEventListener('resize', throttledScrollHandler, { passive: true });
}

export const useScrollState = () => {
  const [scrollState, setScrollState] = useState<ScrollState>(globalScrollState);
  
  useEffect(() => {
    const listener = (state: ScrollState) => {
      setScrollState(state);
    };
    
    listeners.push(listener);
    
    // Initial state update
    if (typeof window !== 'undefined') {
      updateScrollState();
    }
    
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);
  
  return scrollState;
};

// Hook for specific scroll thresholds
export const useScrollThreshold = (threshold: number) => {
  const { scrollY } = useScrollState();
  return scrollY > threshold;
};

// Hook for scroll direction
export const useScrollDirection = () => {
  const { scrollDirection } = useScrollState();
  return scrollDirection;
};

// Hook for scroll progress
export const useScrollProgressState = () => {
  const { scrollProgress } = useScrollState();
  return scrollProgress;
};

// Hook for header behavior
export const useHeaderBehavior = (hideThreshold: number = 100) => {
  const { scrollY, scrollDirection, isAtTop } = useScrollState();
  
  const shouldHideHeader = scrollDirection === 'down' && scrollY > hideThreshold && !isAtTop;
  const shouldShowHeader = scrollDirection === 'up' || isAtTop;
  
  return {
    shouldHideHeader,
    shouldShowHeader,
    isAtTop,
    scrollY,
  };
};

// Utility function to scroll to element
export const scrollToElement = (
  elementId: string, 
  offset: number = 0, 
  behavior: ScrollBehavior = 'smooth'
) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior,
    });
  }
};

// Utility function to scroll to top
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior,
  });
}; 