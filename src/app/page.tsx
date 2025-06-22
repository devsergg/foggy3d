import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';
import { ArrowRight, Printer, Cog, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Featured Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200 mb-6">
              <Sparkles className="h-4 w-4" />
              Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              What We
              <span className="block text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
                Offer
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              From custom products to engineering solutions, we bring your ideas to life with precision and creativity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 3D Printing Services */}
            <div className="group bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Printer className="h-8 w-8 text-primary-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">3D Printing Services</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                High-quality 3D printing from your CAD files or our custom designs. Fast turnaround, multiple materials, and precision quality.
              </p>
              
              <Link 
                href="/products"
                className="group/link inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                View Products
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Custom Engineering */}
            <div className="group bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-secondary-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cog className="h-8 w-8 text-secondary-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">Custom Engineering</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Complex engineering solutions from concept to production. Prototyping, functional parts, and innovative designs.
              </p>
              
              <Link 
                href="/engineering"
                className="group/link inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700 transition-colors"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Personalized Gifts */}
            <div className="group bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-accent-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-accent-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">Personalized Gifts</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Custom nameplates, decorative items, and artistic pieces. Perfect for gifts, events, or personal expression.
              </p>
              
              <Link 
                href="/products"
                className="group/link inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors"
              >
                Browse Gallery
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Process CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12 border-2 border-neutral-200">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                How We Work
              </h3>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                From consultation to delivery, our streamlined process ensures quality results and satisfied customers.
              </p>
              
              <Link 
                href="/process"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5"
              >
                See Our Process
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
}
