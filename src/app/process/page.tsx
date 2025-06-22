import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-neutral-50 via-accent-50/30 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Our
              <span className="block text-transparent bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text">
                Process
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              From initial consultation to final delivery, 
              discover how we bring your ideas to life with precision and care.
            </p>
          </div>
        </div>
      </section>
      
      <ProcessFlow />
      <Footer />
    </main>
  );
} 