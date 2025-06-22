import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              About
              <span className="block text-transparent bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text">
                Foggy3D
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Learn about our story, mission, and the passion that drives us 
              to create exceptional 3D printing solutions.
            </p>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <Footer />
    </main>
  );
} 