'use client';

import { useEffect, useRef } from 'react';

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
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                From Creative Trinkets to Functional Designs
              </h1>
              <p className="text-xl text-neutral-600 mt-6 leading-relaxed">
                San Francisco&apos;s premier 3D printing service combining artistic creativity with 
                precision engineering. We bring your ideas to life, one layer at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-500 text-black px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg"
              >
                Explore Products
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-neutral-300 text-black px-8 py-4 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-colors font-semibold text-lg"
              >
                Custom Project
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-neutral-600 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24h</div>
                <div className="text-neutral-600 mt-1">Avg. Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99%</div>
                <div className="text-neutral-600 mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className="relative">
            {/* 3D Printer Animation */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-neutral-200">
              <h3 className="text-xl font-bold text-black mb-4 text-center">Live 3D Printing</h3>
              <canvas 
                ref={canvasRef}
                className="w-full h-auto border border-neutral-200 rounded-lg"
                style={{ maxWidth: '400px', height: '300px' }}
              />
              <div className="mt-4 text-center text-sm text-neutral-600">
                Precision printing in progress...
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary-500 text-black px-4 py-2 rounded-full font-semibold text-sm animate-bounce">
              ⚡ Fast Delivery
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-500 text-black px-4 py-2 rounded-full font-semibold text-sm animate-pulse">
              🎯 Precision Quality
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
} 