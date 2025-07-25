import { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/common/CTA';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { detailedServices } from '@/data/detailed-services';
import { processSteps } from '@/data/process-steps';
import { generatePageMetadata, siteUrl } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Finish Carpentry Services in Somers, MT | Custom Cabinets & Trim',
  description: 'Expert finish carpentry services in Somers, Montana. Custom cabinetry, trim & molding, built-in storage, and furniture. Serving Flathead Valley, Kalispell, Whitefish, and Bigfork since 2004.',
  path: '/services',
  keywords: [
    'finish carpentry Somers MT',
    'custom cabinets Flathead Valley',
    'trim work Kalispell',
    'built-in storage Whitefish',
    'custom furniture Bigfork',
    'Montana carpenter services',
    'Flathead Valley woodworker'
  ],
  images: ['/images/services/services-hero-og.jpg']
});


// Hero Section
function ServicesHero() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/services/services-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
        
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Expert Finish Carpentry Services in Flathead Valley
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            Serving Somers, Kalispell, Whitefish, and Bigfork since 2004. From custom cabinetry to precision trim work, 
            we bring decades of Montana craftsmanship to create beautiful, functional spaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get Free Estimate
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A3A2E] px-8 py-4 text-lg font-semibold"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Detail Section
function ServiceDetail({ service, index }: { service: typeof detailedServices[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <section className={`py-24 ${isEven ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
              {service.title}
            </h2>
            <p className="text-xl text-[#333333] mb-6 leading-relaxed">
              {service.subtitle}
            </p>
            <p className="text-[#333333] mb-8 leading-relaxed">
              {service.description}
            </p>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0F0F0F] mb-4">What&apos;s Included:</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#333333]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price and Timeline */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-rustic border border-[#333333]">
                <h4 className="font-semibold text-[#0F0F0F] mb-2">Investment</h4>
                <p className="text-[#333333]">{service.priceRange}</p>
              </div>
              <div className="bg-white p-6 rounded-rustic border border-[#333333]">
                <h4 className="font-semibold text-[#0F0F0F] mb-2">Timeline</h4>
                <p className="text-[#333333]">{service.timeline}</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#0A3A2E] hover:bg-[#083529] text-white px-8 py-4 text-lg font-semibold"
            >
              Learn More About {service.title}
            </Button>
          </div>
          
          {/* Image */}
          <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
            <div className="relative aspect-[4/3] rounded-rustic overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${service.heroImage}')`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Overview Section
function ProcessOverview() {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Every project follows our time-tested process to ensure exceptional results 
            and a smooth experience from initial consultation to final installation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.slice(0, 4).map((step) => (
            <div key={step.id} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {step.icon}
              </div>
              <div className="mb-4">
                <div className="text-sm text-white mb-1">Step {step.stepNumber}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white text-sm">{step.subtitle}</p>
              </div>
              <div className="text-xs text-white bg-white/10 rounded-full px-3 py-1 inline-block">
                {step.duration}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            View Complete Process
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  // Generate service schema markup
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/services#services`,
    name: 'Finish Carpentry Services',
    description: 'Expert finish carpentry services including custom cabinetry, trim work, built-in storage, and custom furniture in Somers, Montana.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteUrl}#business`,
      name: 'Montana Finish Carpenter'
    },
    areaServed: [
      { '@type': 'City', name: 'Somers, MT' },
      { '@type': 'City', name: 'Kalispell, MT' },
      { '@type': 'City', name: 'Whitefish, MT' },
      { '@type': 'City', name: 'Bigfork, MT' },
      { '@type': 'City', name: 'Columbia Falls, MT' },
      { '@type': 'City', name: 'Lakeside, MT' },
      { '@type': 'City', name: 'Polson, MT' }
    ],
    serviceType: [
      'Custom Cabinetry',
      'Trim & Molding', 
      'Built-in Storage',
      'Custom Furniture',
      'Kitchen Remodeling',
      'Finish Carpentry'
    ],
    offers: detailedServices.map(service => ({
      '@type': 'Offer',
      name: service.title,
      description: service.description,
      priceRange: service.priceRange,
      availability: 'InStock'
    }))
  };

  return (
    <>
      {/* Service Schema Markup */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      
      <Header />
      <main>
        <ServicesHero />
        
        {/* Service Details */}
        {detailedServices.map((service, index) => (
          <ServiceDetail key={service.id} service={service} index={index} />
        ))}
        
        <ProcessOverview />
        
        <CTA 
          title="Ready to Start Your Project in the Flathead Valley?"
          subtitle="Let's discuss your vision and create something beautiful together. Free consultations throughout Somers, Kalispell, Whitefish, and surrounding areas."
          primaryButtonText="Get Free Estimate"
          backgroundVariant="solid"
        />
      </main>
      <Footer />
    </>
  );
}