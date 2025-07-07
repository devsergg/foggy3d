import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductsSection from '@/components/sections/ProductsSection';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Our Product
              <span className="block text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
                Collection
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              From San Francisco-inspired souvenirs to functional home accessories, 
              each piece is crafted with precision and attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      <ProductsSection />
      <Footer />
    </main>
  );
} 