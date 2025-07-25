import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export function ContactHero() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact/contact-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
        
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Let's Start Your Project
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed">
            Ready to bring your Flathead Valley vision to life? Get in touch for a free consultation 
            throughout Somers, Kalispell, Whitefish, and Bigfork areas.
          </p>
        </div>
      </div>
    </section>
  );
}