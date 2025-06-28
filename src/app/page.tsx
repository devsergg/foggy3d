'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParallaxContainer from '@/components/ui/ParallaxContainer';
import TransparentSection from '@/components/ui/TransparentSection';
import FloatingProductIcon from '@/components/ui/FloatingProductIcon';
import { motion } from 'framer-motion';
import { ArrowRight, Printer, Clock, Award, Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { animationVariants } from '@/hooks/useAnimations';
import { useState } from 'react';

// Featured products for carousel
const featuredProducts = [
  {
    id: '1',
    name: 'Golden Gate Bridge Model',
    image: '/images/golden-gate-model.jpg',
    price: '$89.99',
    category: 'Architecture',
    description: 'Detailed architectural model with intricate cable work'
  },
  {
    id: '2',
    name: 'AXEL Modern Desk Lamp',
    image: '/images/desk-lamp.jpg',
    price: '$45.00',
    category: 'Lighting',
    description: 'Sleek modern design with adjustable positioning'
  },
  {
    id: '3',
    name: 'Modern Geometric Planter',
    image: '/images/planter.jpg',
    price: '$32.50',
    category: 'Home & Garden',
    description: 'Contemporary geometric design for modern spaces'
  },
  {
    id: '4',
    name: 'Sun Dragon Articulated Figure',
    image: '/images/dragon-figure.jpg',
    price: '$67.50',
    category: 'Collectibles',
    description: 'Fully articulated fantasy figure with detailed scales'
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
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
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Edge to Edge Featured Design */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background Image */}
        <ParallaxContainer speed={0.5} className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/golden-gate-model.jpg"
              alt="Featured 3D Design - Golden Gate Bridge Model"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/70 via-secondary-900/40 to-transparent" />
          </div>
        </ParallaxContainer>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              className="max-w-2xl"
              variants={animationVariants.slideRight}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Precision
                <span className="block text-transparent bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text">
                  3D Printing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your ideas into reality with professional 3D printing services in San Francisco.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#products"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5"
                >
                  View Products
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="#contact"
                  className="group inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm"
                >
                  Custom Project
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Product Icon */}
        <FloatingProductIcon
          product={featuredProducts[0]}
          position={{ x: 85, y: 20 }}
          size="lg"
          floatIntensity="low"
        />
      </section>

      {/* Products Carousel Section */}
      <section id="products" className="relative py-32 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <ParallaxContainer speed={0.2} className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-t from-white/50 to-transparent" />
        </ParallaxContainer>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Featured
              <span className="block text-transparent bg-gradient-to-r from-primary-500 to-secondary-900 bg-clip-text">
                Products
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our collection of precision-crafted 3D printed products, from architectural models to functional designs.
            </p>
          </motion.div>

          {/* Carousel */}
          <TransparentSection
            background="white"
            blurIntensity="lg"
            padding="xl"
            borderRadius="3xl"
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Main Product Display */}
              <motion.div 
                className="grid md:grid-cols-2 gap-12 items-center"
                key={currentSlide}
                variants={animationVariants.fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
              >
                {/* Product Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={featuredProducts[currentSlide].image}
                    alt={featuredProducts[currentSlide].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {featuredProducts[currentSlide].category}
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    {featuredProducts[currentSlide].name}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {featuredProducts[currentSlide].description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-3xl font-bold text-primary-600">
                      {featuredProducts[currentSlide].price}
                    </span>
                    
                    <Link 
                      href={`/products/${featuredProducts[currentSlide].id}`}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center mt-8 gap-4">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  aria-label="Previous product"
                >
                  <ArrowRight className="h-5 w-5 rotate-180 text-neutral-600" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {featuredProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-primary-500' : 'bg-neutral-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  aria-label="Next product"
                >
                  <ArrowRight className="h-5 w-5 text-neutral-600" />
                </button>
              </div>

              {/* View All Products Link */}
              <div className="text-center mt-8">
                <Link 
                  href="/products"
                  className="group inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  View All Products
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </TransparentSection>
        </div>
      </section>

      {/* 3D Printing Services Section */}
      <section className="relative py-32 overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-secondary-100/30 via-primary-50/20 to-secondary-200/40" />
        </ParallaxContainer>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              3D Printing
              <span className="block text-transparent bg-gradient-to-r from-primary-500 to-secondary-900 bg-clip-text">
                Services
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Professional 3D printing with multiple materials and fast turnaround times.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* High Quality */}
            <TransparentSection
              background="white"
              blurIntensity="lg"
              padding="lg"
              borderRadius="2xl"
              enableHover={true}
            >
              <motion.div
                variants={animationVariants.slideUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                  High Quality
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  Precision printing with layer heights as fine as 0.1mm for exceptional detail and smooth finishes.
                </p>
              </motion.div>
            </TransparentSection>

            {/* Fast Turnaround */}
            <TransparentSection
              background="white"
              blurIntensity="lg"
              padding="lg"
              borderRadius="2xl"
              enableHover={true}
            >
              <motion.div
                variants={animationVariants.slideUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-secondary-700" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                  Fast Turnaround
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  Most orders completed within 24-48 hours. Rush orders available for urgent projects.
                </p>
              </motion.div>
            </TransparentSection>

            {/* Multiple Materials */}
            <TransparentSection
              background="white"
              blurIntensity="lg"
              padding="lg"
              borderRadius="2xl"
              enableHover={true}
            >
              <motion.div
                variants={animationVariants.slideUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Printer className="h-8 w-8 text-accent-600" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                  Multiple Materials
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  PLA, PETG, TPU, and specialty filaments. Choose the perfect material for your project needs.
                </p>
              </motion.div>
            </TransparentSection>
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/services"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-900 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-800 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5"
            >
              Learn More About Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form for Custom Projects */}
      <section id="contact" className="relative py-32 bg-gradient-to-br from-neutral-50 to-secondary-50/30">
        <ParallaxContainer speed={0.2} className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-t from-white/50 to-transparent" />
        </ParallaxContainer>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Custom
              <span className="block text-transparent bg-gradient-to-r from-primary-500 to-secondary-900 bg-clip-text">
                Projects
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Have a unique project in mind? Let's bring your ideas to life with custom 3D printing and design services.
            </p>
          </motion.div>

          {/* Contact Form */}
          <TransparentSection
            background="white"
            blurIntensity="lg"
            padding="xl"
            borderRadius="3xl"
          >
            <motion.div
              variants={animationVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="prototype">Prototype Development</option>
                    <option value="custom-design">Custom Design</option>
                    <option value="production">Small Production Run</option>
                    <option value="replacement">Replacement Parts</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-900 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-800 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5"
                  >
                    Send Project Details
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="grid md:grid-cols-2 gap-8 text-center">
                  <div>
                    <Phone className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                    <p className="font-semibold text-neutral-900">Call Us</p>
                    <p className="text-neutral-600">(415) 555-0123</p>
                  </div>
                  
                  <div>
                    <Mail className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                    <p className="font-semibold text-neutral-900">Email Us</p>
                    <p className="text-neutral-600">hello@foggy3d.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TransparentSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
