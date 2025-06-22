import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EngineeringPortfolio from '@/components/sections/EngineeringPortfolio';

export default function EngineeringPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-neutral-50 via-secondary-50/30 to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Engineering
              <span className="block text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Showcasing our expertise in custom engineering solutions, 
              from concept to production-ready designs.
            </p>
          </div>
        </div>
      </section>
      
      <EngineeringPortfolio />
      <Footer />
    </main>
  );
} 