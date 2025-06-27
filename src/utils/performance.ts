// Performance optimization utilities for the Foggy3D website

// Debounce function for expensive operations
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// RAF-based throttle for smooth animations
export const rafThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null;
  return (...args: Parameters<T>) => {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func.apply(null, args);
        rafId = null;
      });
    }
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check device capabilities
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isLowEndDevice: false,
      supportsWebGL: false,
      supportsBackdropFilter: false,
      connectionSpeed: 'unknown' as const,
    };
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  // Rough estimation of device performance
  const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                        (navigator as any).deviceMemory <= 2;
  
  // Check WebGL support
  const canvas = document.createElement('canvas');
  const supportsWebGL = !!(
    canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  );
  
  // Check backdrop-filter support
  const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)') ||
                                CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
  
  // Check connection speed
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const connectionSpeed = connection?.effectiveType || 'unknown';
  
  return {
    isMobile,
    isLowEndDevice,
    supportsWebGL,
    supportsBackdropFilter,
    connectionSpeed,
  };
};

// Adaptive animation configuration based on device capabilities
export const getAnimationConfig = () => {
  const capabilities = getDeviceCapabilities();
  const reducedMotion = prefersReducedMotion();
  
  if (reducedMotion) {
    return {
      enableParallax: false,
      enableComplexAnimations: false,
      animationDuration: 0,
      enableAutoplay: false,
    };
  }
  
  if (capabilities.isLowEndDevice || capabilities.isMobile) {
    return {
      enableParallax: false,
      enableComplexAnimations: false,
      animationDuration: 0.3,
      enableAutoplay: false,
    };
  }
  
  return {
    enableParallax: true,
    enableComplexAnimations: true,
    animationDuration: 0.6,
    enableAutoplay: true,
  };
};

// Intersection Observer with performance optimization
export const createOptimizedObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Lazy loading utility
export const lazyLoad = (
  target: HTMLElement,
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const observer = createOptimizedObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  observer.observe(target);
  return observer;
};

// Image preloading utility
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloading
export const preloadImages = async (srcs: string[]): Promise<HTMLImageElement[]> => {
  const promises = srcs.map(preloadImage);
  return Promise.all(promises);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined') return fn();
  
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();
  
  console.log(`${name} took ${endTime - startTime} milliseconds`);
  return result;
};

// Memory usage monitoring (if available)
export const getMemoryUsage = () => {
  if (typeof window === 'undefined' || !(performance as any).memory) {
    return null;
  }
  
  const memory = (performance as any).memory;
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
  };
};

// Critical resource preloading
export const preloadCriticalResources = (resources: string[]) => {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    
    // Determine resource type based on extension
    if (resource.includes('.woff2') || resource.includes('.woff')) {
      link.as = 'font';
      link.crossOrigin = 'anonymous';
    } else if (resource.includes('.css')) {
      link.as = 'style';
    } else if (resource.includes('.js')) {
      link.as = 'script';
    } else if (resource.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
      link.as = 'image';
    }
    
    document.head.appendChild(link);
  });
};

// Viewport-based optimization
export const isInViewport = (element: HTMLElement, threshold: number = 0): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= windowHeight + threshold &&
    rect.right <= windowWidth + threshold
  );
};

// Efficient element measurement
export const measureElement = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
};

// CSS custom property optimization
export const setCSSCustomProperty = (property: string, value: string | number) => {
  document.documentElement.style.setProperty(property, String(value));
};

export const getCSSCustomProperty = (property: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
}; 