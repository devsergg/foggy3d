'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 300;

    let animationFrame: number;
    let printHead = { x: 50, y: 100 };
    let layerHeight = 250;
    let printProgress = 0;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw print bed
      ctx.fillStyle = '#e5e5e5';
      ctx.fillRect(30, 250, 340, 20);

      // Draw layers being printed
      const layers = [
        { height: layerHeight, color: '#ff6b35' },
        { height: layerHeight + 15, color: '#f7931e' },
        { height: layerHeight + 30, color: '#ffd700' },
      ];

      layers.forEach((layer) => {
        if (printProgress > 0) {
          ctx.fillStyle = layer.color;
          const width = Math.min(printProgress * 4, 200);
          ctx.fillRect(150, layer.height, width, 8);
        }
      });

      // Draw print head
      ctx.fillStyle = '#333';
      ctx.fillRect(printHead.x, printHead.y, 20, 15);

      // Draw filament line
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(printHead.x + 10, printHead.y + 15);
      ctx.lineTo(printHead.x + 10, printHead.y + 25);
      ctx.stroke();

      // Update animation
      printHead.x += 2;
      if (printHead.x > 300) {
        printHead.x = 50;
        printProgress += 10;
        if (printProgress > 100) {
          printProgress = 0;
          layerHeight -= 45;
          if (layerHeight < 150) layerHeight = 250;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                <Sparkles className="h-4 w-4" />
                San Francisco's Premier 3D Printing
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight">
                From Creative
                <span className="block text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
                  Trinkets
                </span>
                to Functional
                <span className="block text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text">
                  Designs
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
                Combining artistic creativity with precision engineering. 
                We bring your ideas to life, one layer at a time.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link 
                href="/contact"
                className="group border-2 border-neutral-300 text-black px-8 py-4 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 font-semibold text-lg backdrop-blur-sm bg-white/80 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Custom Project
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-neutral-600 mt-2 font-medium">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-secondary-600 to-secondary-700 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  24h
                </div>
                <div className="text-neutral-600 mt-2 font-medium">Avg. Turnaround</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-neutral-600 mt-2 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Animation */}
          <div className="relative animate-slide-up">
            {/* 3D Printer Animation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neutral-200/50 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-black">Live 3D Printing</h3>
              </div>
              
              <canvas 
                ref={canvasRef}
                className="w-full h-auto border border-neutral-200 rounded-xl shadow-inner"
                style={{ maxWidth: '400px', height: '300px' }}
              />
              
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-neutral-600 font-medium ml-2">
                  Precision printing in progress...
                </span>
              </div>
            </div>

            {/* Enhanced Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg animate-float border-2 border-white">
              ⚡ Fast Delivery
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg animate-float border-2 border-white" style={{ animationDelay: '1s' }}>
              🎯 Precision Quality
            </div>

            <div className="absolute top-1/2 -left-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-xl font-semibold text-xs shadow-lg animate-float border-2 border-white" style={{ animationDelay: '2s' }}>
              ✨ Custom Design
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
} 