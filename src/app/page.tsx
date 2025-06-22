import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import EngineeringPortfolio from '@/components/sections/EngineeringPortfolio';
import ProcessFlow from '@/components/sections/ProcessFlow';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      <ProductsSection />
      
      <EngineeringPortfolio />
      
      <ProcessFlow />
      
      <AboutSection />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}
