'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationFrame: number;
    let layers: { y: number; opacity: number; speed: number }[] = [];
    
    // Initialize layers
    for (let i = 0; i < 8; i++) {
      layers.push({
        y: canvas.offsetHeight - (i * 40),
        opacity: 0.1 + (i * 0.1),
        speed: 0.5 + Math.random() * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw 3D printing layers
      layers.forEach((layer, index) => {
        ctx.fillStyle = `rgba(245, 158, 11, ${layer.opacity})`;
        ctx.fillRect(50, layer.y, canvas.offsetWidth - 100, 3);
        
        // Animate layers growing
        layer.y -= layer.speed;
        if (layer.y < 100) {
          layer.y = canvas.offsetHeight - 20;
        }
      });

      // Draw printer head
      const headX = 100 + Math.sin(Date.now() * 0.002) * 200;
      ctx.fillStyle = '#374151';
      ctx.fillRect(headX, 80, 40, 20);
      ctx.fillStyle = '#F59E0B';
      ctx.fillRect(headX + 15, 95, 10, 5);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [isClient]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center overflow-hidden">
      {/* Background Canvas */}
      {isClient && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ width: '100%', height: '100%' }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Logo for mobile/tablet */}
            <div className="lg:hidden flex justify-center mb-8">
              <Image
                src="/images/Foggy_logo.png"
                alt="Foggy3D Logo"
                width={200}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-bold mb-6 border-2 border-primary-400 shadow-lg">
              <span className="mr-2">🌁</span>
              San Francisco's Premier 3D Printing Studio
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              From Creative
              <span className="block text-black drop-shadow-sm">Trinkets</span>
              to Functional
              <span className="block text-black drop-shadow-sm">Designs</span>
            </h1>
            
            <p className="text-xl text-black mb-8 max-w-2xl font-semibold">
              Bridging artistry and engineering through precision 3D printing. 
              Whether you need unique home decor or custom functional parts, 
              we bring your vision to life with unmatched quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('#products')}
                className="group inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-xl border-3 border-black hover:bg-primary-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-xl border-3 border-black hover:border-secondary-600 hover:text-black hover:bg-secondary-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Custom Projects
                <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-black">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-base text-black font-bold">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-black">24h</div>
                <div className="text-base text-black font-bold">Average Turnaround</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-black">99%</div>
                <div className="text-base text-black font-bold">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute inset-0">
                <div className="animate-float absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-80 shadow-lg"></div>
                <div className="animate-float absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-full opacity-80 shadow-lg" style={{animationDelay: '1s'}}></div>
                <div className="animate-float absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full opacity-80 shadow-lg" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Main Visual */}
                             <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-neutral-300">
                                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-black">3D Printing in Progress</div>
                      <div className="text-sm text-black font-bold bg-primary-100 px-2 py-1 rounded">Layer 47/120</div>
                    </div>
                    
                    <div className="bg-neutral-100 rounded-lg p-6 h-48 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0">
                        {[95, 87, 92, 85, 89, 93, 86, 91, 88, 94, 90, 96].map((width, i) => (
                          <div
                            key={i}
                            className="h-2 bg-gradient-to-r from-primary-400 to-primary-500 mb-1 rounded-sm"
                            style={{
                              width: `${width}%`,
                              opacity: 0.3 + (i * 0.05),
                              animationDelay: `${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-black font-bold">
                      <span className="bg-accent-100 px-2 py-1 rounded">Material: PLA+</span>
                      <span className="bg-secondary-100 px-2 py-1 rounded">Time Remaining: 2h 15m</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 