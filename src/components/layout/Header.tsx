'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { NavigationItem } from '@/types';
import Image from 'next/image';

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Products', href: '#products', current: false },
  { name: 'Engineering', href: '#engineering', current: false },
  { name: 'Process', href: '#process', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/Foggy_logo.png"
                alt="Foggy3D Logo"
                width={180}
                height={90}
                className="h-16 w-auto"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-black hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Cart Icon */}
            <button className="relative p-2 text-black hover:text-primary-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="p-2 text-black hover:text-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-black hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button className="flex items-center px-3 py-2 text-black hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-colors w-full">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart (0)
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 