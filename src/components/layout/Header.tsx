'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sparkles } from 'lucide-react';
import { NavigationItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'Engineering', href: '/engineering', current: false },
  { name: 'Process', href: '/process', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect with more granular control
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    // If it's a hash link (contact section), scroll to it
    if (href.includes('#')) {
      const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // For regular navigation, Next.js Link will handle it
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-white/60 backdrop-blur-md border-b border-white/10'
      }`}>
        {/* Gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-primary-50/10 to-secondary-50/10 pointer-events-none" />
        
        <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-3">
            {/* Enhanced Logo */}
            <div className="flex items-center">
              <Link 
                href="/"
                className="group flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-xl p-2 -m-2"
              >
                <div className="relative">
                  <Image
                    src="/images/Foggy_logo.png"
                    alt="Foggy3D Logo"
                    width={180}
                    height={90}
                    className="h-12 w-auto transition-all duration-300 group-hover:brightness-110"
                    priority
                  />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                      active 
                        ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-secondary-50 shadow-soft border border-primary-100' 
                        : 'text-neutral-800 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {active && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-glow" />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                );
              })}
              
              {/* Enhanced Cart Icon */}
              <div className="ml-6 pl-6 border-l border-neutral-200/50">
                <button className="group relative p-3 text-neutral-800 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 rounded-xl hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent">
                  <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg font-semibold animate-pulse">
                    0
                  </span>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
                </button>
              </div>

              {/* Enhanced CTA Button */}
              <div className="ml-4">
                <Link 
                  href="/contact"
                  className="group relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2.5 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden inline-flex items-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    Get Quote
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Cart */}
              <button className="group relative p-2.5 text-neutral-800 hover:text-primary-600 transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent">
                <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center shadow-lg font-semibold">
                  0
                </span>
              </button>

              <button
                type="button"
                className={`group p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                  mobileMenuOpen 
                    ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-secondary-50 shadow-soft' 
                    : 'text-neutral-800 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="relative">
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 transition-transform duration-300 rotate-90" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Ultra-Modern Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-4 pb-8 space-y-3 bg-white/90 backdrop-blur-xl border-t border-white/20 rounded-b-3xl shadow-2xl mx-2 mb-2">
              {/* Mobile navigation items */}
              {navigation.map((item, index) => {
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between w-full px-5 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                      active 
                        ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-secondary-50 shadow-soft border border-primary-100' 
                        : 'text-neutral-800 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="font-semibold">{item.name}</span>
                    {active && (
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-glow animate-pulse" />
                    )}
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-6 mt-6 border-t border-neutral-200/50">
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group relative w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-4 rounded-2xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-semibold shadow-colored hover:shadow-colored-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden inline-flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    Get Your Quote
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
} 