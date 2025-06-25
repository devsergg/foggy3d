import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import ContactSection from '@/components/sections/ContactSection';
import { ArrowRight, Printer, Cog, Sparkles, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProductsSection />
      
      {/* Services Section - Focused on 3D Printing and Custom Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary-50 text-secondary-800 px-4 py-2 rounded-full text-sm font-semibold border border-secondary-200 mb-6">
              <Sparkles className="h-4 w-4" />
              Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Professional
              <span className="block text-transparent bg-gradient-to-r from-primary-500 to-secondary-900 bg-clip-text">
                3D Services
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              From rapid prototyping to custom manufacturing, we provide comprehensive 3D printing and design solutions.
            </p>
          </div>

          {/* Services Grid - Focused on 2 main services */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* 3D Printing Services */}
            <div className="group bg-gradient-to-br from-white to-primary-50/20 rounded-3xl p-10 border-2 border-neutral-200 hover:border-primary-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-6 w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Printer className="h-10 w-10 text-primary-600" />
              </div>
              
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">3D Printing Services</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                High-precision 3D printing with multiple material options. From prototypes to production runs, 
                we deliver quality results with fast turnaround times.
              </p>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Multiple Material Options (PLA, PETG, TPU)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">24-48 Hour Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Quality Assurance & Finishing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Competitive Pricing</span>
                </div>
              </div>
              
              <Link 
                href="/products"
                className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                View Products
                <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Custom Design Services */}
            <div className="group bg-gradient-to-br from-white to-secondary-50/20 rounded-3xl p-10 border-2 border-neutral-200 hover:border-secondary-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-3xl p-6 w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Wrench className="h-10 w-10 text-secondary-700" />
              </div>
              
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Custom Design Services</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                Professional CAD design and engineering services. From concept sketches to production-ready files, 
                we bring your ideas to life with precision and creativity.
              </p>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">CAD Design & 3D Modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Prototyping & Iteration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Engineering Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Production-Ready Files</span>
                </div>
              </div>
              
              <Link 
                href="/engineering"
                className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-secondary-700 to-secondary-900 text-white px-6 py-3 rounded-xl hover:from-secondary-800 hover:to-secondary-900 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Process CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12 border-2 border-neutral-200">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                From initial consultation to final delivery, our streamlined process ensures 
                quality results and complete satisfaction with every project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/process"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-900 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-800 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5"
                >
                  See Our Process
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/contact"
                  className="group inline-flex items-center gap-2 border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 font-semibold backdrop-blur-sm bg-white/80 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Get Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
}
