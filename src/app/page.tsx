'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParallaxContainer from '@/components/ui/ParallaxContainer';
import TransparentSection from '@/components/ui/TransparentSection';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Printer, Clock, Award, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { animationVariants } from '@/hooks/useAnimations';
import { useState, useEffect } from 'react';

// Hero slides data - Mollyjogger style
const heroSlides = [
  {
    id: 1,
    image: '/images/golden-gate-model.jpg',
    title: 'Precision Crafted Models',
    description: 'Architectural masterpieces brought to life with meticulous attention to detail.',
    link: '/products',
    buttonText: 'Explore Collection'
  },
  {
    id: 2,
    image: '/images/desk-lamp.jpg',
    title: 'Functional Design',
    description: 'Beautiful, practical pieces that enhance your everyday life.',
    link: '/products',
    buttonText: 'Shop Designs'
  },
  {
    id: 3,
    image: '/images/planter.jpg',
    title: 'Modern Living',
    description: 'Contemporary pieces that bring nature and style into your space.',
    link: '/products',
    buttonText: 'View Products'
  }
];

// Featured products - curated selection
const featuredProducts = [
  {
    id: '1',
    name: 'Golden Gate Bridge Model',
    image: '/images/golden-gate-model.jpg',
    price: '$89.99',
    category: 'Architecture'
  },
  {
    id: '2',
    name: 'AXEL Modern Desk Lamp',
    image: '/images/desk-lamp.jpg',
    price: '$45.00',
    category: 'Lighting'
  },
  {
    id: '3',
    name: 'Geometric Planter',
    image: '/images/planter.jpg',
    price: '$32.50',
    category: 'Home & Garden'
  },
  {
    id: '4',
    name: 'Sun Dragon Figure',
    image: '/images/dragon-figure.jpg',
    price: '$67.50',
    category: 'Collectibles'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Slider Section - Mollyjogger Style */}
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/60 via-neutral-900/30 to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-8 w-full">
                <motion.div
                  className="max-w-xl"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-6 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  
                  <p className="font-body text-lg md:text-xl text-neutral-100 mb-8 leading-relaxed max-w-lg">
                    {heroSlides[currentSlide].description}
                  </p>
                  
                  <Link 
                    href={heroSlides[currentSlide].link}
                    className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-neutral-50 px-8 py-4 rounded-none font-body font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {heroSlides[currentSlide].buttonText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-neutral-50/20 hover:bg-neutral-50/30 backdrop-blur-sm text-neutral-50 p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-neutral-50/20 hover:bg-neutral-50/30 backdrop-blur-sm text-neutral-50 p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-neutral-50 scale-125' 
                  : 'bg-neutral-50/50 hover:bg-neutral-50/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section - Mollyjogger Grid Style */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-700 mb-6">
              Featured Products
            </h2>
            <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of precision-crafted pieces, each designed with care and attention to detail.
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                variants={animationVariants.slideUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-neutral-50 border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Link href={`/products/${product.id}`} className="block">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6">
                      <p className="font-body text-sm text-primary-600 mb-2 uppercase tracking-wide">
                        {product.category}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-neutral-700 mb-3 leading-tight">
                        {product.name}
                      </h3>
                      <p className="font-body text-lg font-semibold text-secondary-500">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shop All Button */}
          <motion.div 
            className="text-center"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-neutral-50 px-8 py-4 rounded-none font-body font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Custom Projects Section - Mollyjogger Two-Column Style */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              variants={animationVariants.slideRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-700 mb-6 leading-tight">
                Bring Your Ideas to Life
              </h2>
              
              <p className="font-body text-lg text-neutral-600 mb-8 leading-relaxed">
                Have a unique 3D printing project in mind? From concept to creation, we specialize in 
                custom solutions tailored to your vision. Whether it's a prototype, architectural model, 
                or one-of-a-kind piece, we'll work with you every step of the way.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-body text-neutral-600">Custom design consultation and 3D modeling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-body text-neutral-600">Material selection and finish recommendations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-body text-neutral-600">Prototype development and iteration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-body text-neutral-600">Production-ready file preparation</p>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-neutral-50 px-8 py-4 rounded-none font-body font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Custom Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              variants={animationVariants.slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
                <Image
                  src="/images/golden-gate-model.jpg"
                  alt="Custom 3D printing project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview - Clean Three Column */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-700 mb-6">
              Our Services
            </h2>
            <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Professional 3D printing services with attention to quality, speed, and precision.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* High Quality */}
            <motion.div
              className="text-center"
              variants={animationVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-primary-600" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-neutral-700 mb-4">
                Premium Quality
              </h3>
              
              <p className="font-body text-neutral-600 leading-relaxed">
                Precision printing with layer heights as fine as 0.1mm for exceptional detail and smooth finishes.
              </p>
            </motion.div>

            {/* Fast Turnaround */}
            <motion.div
              className="text-center"
              variants={animationVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-secondary-600" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-neutral-700 mb-4">
                Fast Delivery
              </h3>
              
              <p className="font-body text-neutral-600 leading-relaxed">
                Most orders completed within 24-48 hours. Rush orders available for urgent projects.
              </p>
            </motion.div>

            {/* Multiple Materials */}
            <motion.div
              className="text-center"
              variants={animationVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-neutral-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Printer className="h-10 w-10 text-neutral-600" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-neutral-700 mb-4">
                Material Options
              </h3>
              
              <p className="font-body text-neutral-600 leading-relaxed">
                PLA, PETG, TPU, and specialty filaments. Choose the perfect material for your project needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
