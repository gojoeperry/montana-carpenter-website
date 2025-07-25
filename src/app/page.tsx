import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { TrustBadges } from '@/components/common/TrustBadges';
import { CTA } from '@/components/common/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Trust Badges */}
        <TrustBadges 
          variant="horizontal" 
          className="py-12 bg-background"
        />
        
        {/* Services Section */}
        <Services />
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Call to Action Section */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}