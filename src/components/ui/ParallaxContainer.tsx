'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
  enableOnMobile?: boolean;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.5,
  className = '',
  offset = 0,
  enableOnMobile = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to parallax offset
  const y = useTransform(scrollYProgress, [0, 1], [offset, offset + (speed * 100)]);

  // Check if device prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  // Check if mobile device
  const isMobile = typeof window !== 'undefined' 
    ? window.innerWidth < 768 
    : false;

  // Disable parallax if reduced motion is preferred or on mobile (unless explicitly enabled)
  const shouldAnimate = !prefersReducedMotion && (!isMobile || enableOnMobile);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={shouldAnimate ? { y } : {}}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer; 