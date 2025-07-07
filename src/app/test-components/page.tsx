'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxContainer from '@/components/ui/ParallaxContainer';
import TransparentSection from '@/components/ui/TransparentSection';
import FloatingProductIcon from '@/components/ui/FloatingProductIcon';
import { useScrollState } from '@/hooks/useScrollState';
import { animationVariants } from '@/hooks/useAnimations';

const TestComponentsPage = () => {
  const scrollState = useScrollState();

  const sampleProducts = [
    {
      id: '1',
      name: 'Golden Gate Bridge Model',
      image: '/images/products/sf-souvenirs/Golden_gate_bridge.png',
      price: '$89.99',
      category: 'Architecture',
      description: 'Detailed 3D printed model of the iconic Golden Gate Bridge'
    },
    {
      id: '2',
      name: 'AXEL Modern Desk Lamp',
      image: '/images/products/lamps/AXEL LAMP 3 1080.png',
      price: '$45.00',
      category: 'Lighting',
      description: 'Sleek modern desk lamp with adjustable arm'
    },
    {
      id: '3',
      name: 'FREYA Geometric Planter',
      image: '/images/products/vases/FREYA_planter_green-front.jpg',
      price: '$32.50',
      category: 'Home & Garden',
      description: 'Modern geometric planter for small plants'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
          style={{ width: `${scrollState.scrollProgress * 100}%` }}
        />
      </div>

      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg bg-white/10 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <h1 className="font-display text-2xl font-bold text-white">
            Foggy3D Component Test
          </h1>
          <p className="text-white/70 text-sm">
            Scroll Y: {Math.round(scrollState.scrollY)} | Direction: {scrollState.scrollDirection} | 
            Progress: {Math.round(scrollState.scrollProgress * 100)}%
          </p>
        </div>
      </motion.header>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxContainer speed={0.5} className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-600/30 to-secondary-600/30" />
        </ParallaxContainer>
        
        <motion.div 
          className="relative z-10 text-center text-white"
          variants={animationVariants.fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-display text-6xl font-bold mb-6">
            Foundation Components
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Testing our parallax containers, transparent sections, and floating product icons
          </p>
        </motion.div>

        {/* Floating Product Icons */}
        <FloatingProductIcon
          product={sampleProducts[0]}
          position={{ x: 15, y: 20 }}
          size="lg"
          floatIntensity="medium"
        />
        
        <FloatingProductIcon
          product={sampleProducts[1]}
          position={{ x: 80, y: 30 }}
          size="md"
          floatIntensity="high"
        />
        
        <FloatingProductIcon
          product={sampleProducts[2]}
          position={{ x: 85, y: 70 }}
          size="sm"
          floatIntensity="low"
        />
      </section>

      {/* Transparent Sections */}
      <section className="relative py-32">
        <ParallaxContainer speed={0.3} className="absolute inset-0">
          <div className="w-full h-full bg-primary-500/20" />
        </ParallaxContainer>

        <div className="container mx-auto px-6 space-y-16">
          <TransparentSection
            blurIntensity="lg"
            background="white"
            padding="xl"
            enableHover={true}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={animationVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="font-display text-4xl font-bold text-neutral-900 mb-6">
                Transparent Section Component
              </h3>
              <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                This component features backdrop blur effects, customizable transparency levels, 
                and smooth animations. It automatically adapts to different backgrounds and 
                provides excellent readability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 p-6 rounded-xl">
                  <h4 className="font-display font-semibold text-primary-900 mb-2">
                    Backdrop Blur
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Advanced CSS backdrop-filter support with fallbacks
                  </p>
                </div>
                <div className="bg-secondary-50 p-6 rounded-xl">
                  <h4 className="font-display font-semibold text-secondary-900 mb-2">
                    Responsive Design
                  </h4>
                  <p className="text-secondary-700 text-sm">
                    Fully responsive with mobile-optimized interactions
                  </p>
                </div>
                <div className="bg-accent-50 p-6 rounded-xl">
                  <h4 className="font-display font-semibold text-accent-900 mb-2">
                    Performance
                  </h4>
                  <p className="text-accent-700 text-sm">
                    Optimized for smooth 60fps animations
                  </p>
                </div>
              </div>
            </motion.div>
          </TransparentSection>

          <TransparentSection
            blurIntensity="xl"
            background="dark"
            padding="lg"
            borderRadius="2xl"
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={animationVariants.slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Dark Theme Support
              </h3>
              <p className="text-white/80 leading-relaxed">
                Components automatically adapt to different themes and backgrounds. 
                This dark variant provides excellent contrast and readability 
                while maintaining the modern aesthetic.
              </p>
            </motion.div>
          </TransparentSection>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-6">
          <TransparentSection
            background="white"
            blurIntensity="md"
            padding="2xl"
            className="max-w-5xl mx-auto"
          >
            <motion.div
              variants={animationVariants.staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="font-display text-5xl font-bold text-neutral-900 mb-8 text-center"
                variants={animationVariants.staggerChild}
              >
                Typography System
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div variants={animationVariants.staggerChild}>
                  <h3 className="font-display text-2xl font-bold text-primary-600 mb-4">
                    Space Grotesk Display
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Our primary display font for headlines and important UI elements. 
                    Modern, geometric, and highly legible at all sizes.
                  </p>
                  <div className="space-y-2">
                    <p className="font-display text-4xl font-bold text-neutral-900">Aa Bb Cc</p>
                    <p className="font-display text-2xl font-semibold text-neutral-700">1234567890</p>
                  </div>
                </motion.div>
                
                <motion.div variants={animationVariants.staggerChild}>
                  <h3 className="font-technical text-2xl font-bold text-secondary-600 mb-4">
                    JetBrains Mono Technical
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Perfect for technical content, code snippets, and data display. 
                    Monospaced with excellent character distinction.
                  </p>
                  <div className="space-y-2">
                    <p className="font-technical text-2xl font-bold text-neutral-900">
                      const foggy3d = true;
                    </p>
                    <p className="font-technical text-lg text-neutral-700">
                      {"{ precision: 0.1mm }"}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </TransparentSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Foundation Complete ✅
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Phase 1 components are working perfectly. Ready to move on to 
              Phase 2: Homepage Immersive Experience with full-screen parallax 
              and transparent header implementation.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default TestComponentsPage; 