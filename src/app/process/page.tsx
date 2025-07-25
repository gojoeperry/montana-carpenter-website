import { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/common/CTA';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { processSteps } from '@/data/process-steps';
import { generatePageMetadata, generateHowToSchema } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process | Custom Carpentry Process in Montana',
  description: 'Learn about our proven 7-step custom carpentry process in Somers, Montana. From consultation to installation, see how we create beautiful woodwork in the Flathead Valley.',
  path: '/process',
  keywords: [
    'custom carpentry process Montana',
    'finish carpentry steps Somers',
    'Montana woodwork process',
    'Flathead Valley carpenter process',
    'custom cabinet process Montana'
  ]
});


// Hero Section
function ProcessHero() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/process/process-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Process', href: '/process' }]} />
        
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Our Process: From Vision to Reality
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            Every project follows our proven 7-step process, ensuring exceptional results 
            and a smooth experience from initial consultation to final installation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Project
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

// Timeline Overview Component
function TimelineOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
            A Proven Process
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Over 20 years of experience has taught us that great results come from great process. 
            Here&apos;s how we turn your vision into reality.
          </p>
        </div>
        
        {/* Timeline Visualization */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0A3A2E] hidden lg:block"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0A3A2E] rounded-full flex items-center justify-center text-2xl text-white z-10 hidden lg:flex">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text Content */}
                  <div className={index % 2 === 0 ? 'lg:text-right lg:pr-20' : 'lg:pl-20'}>
                    <div className="flex items-center space-x-3 mb-4 lg:hidden">
                      <div className="w-12 h-12 bg-[#0A3A2E] rounded-full flex items-center justify-center text-xl text-white">
                        {step.icon}
                      </div>
                      <div className="text-sm font-semibold text-[#0A3A2E]">
                        Step {step.stepNumber}
                      </div>
                    </div>
                    
                    <div className="hidden lg:block text-sm font-semibold text-[#0A3A2E] mb-2">
                      Step {step.stepNumber}
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-[#333333] mb-4 leading-relaxed">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-[#333333] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-[#0A3A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold text-[#0F0F0F]">Duration:</span>
                        <span className="text-[#333333]">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={index % 2 === 0 ? 'lg:pl-20' : 'lg:pr-20'}>
                    <div className="relative aspect-[4/3] rounded-rustic overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${step.image}')`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Step Detail Component
function ProcessStepDetail({ step, index }: { step: typeof processSteps[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <section className={`py-24 ${isEven ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-[#0A3A2E] rounded-rustic flex items-center justify-center text-2xl text-white">
                {step.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0A3A2E] mb-1">
                  Step {step.stepNumber}
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#0F0F0F]">
                  {step.title}
                </h2>
              </div>
            </div>
            
            <p className="text-xl text-[#333333] mb-6 leading-relaxed">
              {step.subtitle}
            </p>
            
            <p className="text-[#333333] mb-8 leading-relaxed">
              {step.description}
            </p>
            
            {/* What to Expect */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0F0F0F] mb-4">What to Expect:</h3>
              <ul className="space-y-3">
                {step.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Duration */}
            <div className="bg-white p-6 rounded-rustic border border-[#333333] mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#0A3A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[#0F0F0F]">Typical Duration</h4>
                  <p className="text-[#333333]">{step.duration}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
            <div className="relative aspect-[4/3] rounded-rustic overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${step.image}')`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Summary Component
function ProcessSummary() {
  const totalDuration = "8-12 weeks typical";
  
  return (
    <section className="py-24 bg-[#0A3A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Your Journey to Custom Craftsmanship
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            From consultation to completion, our process ensures you get exactly what you envision, 
            delivered with the quality and craftsmanship you deserve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-[#0A3A2E] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
            <p className="text-sm opacity-90">No obligation, personalized service</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-[#0A3A2E] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
            <p className="text-sm opacity-90">20+ years of Montana experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-[#0A3A2E] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
            <p className="text-sm opacity-90">We stand behind our work</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 rounded-rustic px-6 py-4 mb-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <span className="font-semibold">Total Project Timeline: </span>
              <span>{totalDuration}</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Start the Process
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function ProcessPage() {
  // Generate How-to schema
  const howToSchema = generateHowToSchema(
    processSteps.map(step => ({
      title: step.title,
      description: step.description,
      image: step.image
    }))
  );

  return (
    <>
      {/* How-to Schema Markup */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      
      <Header />
      <main>
        <ProcessHero />
        <TimelineOverview />
        
        {/* Detailed Process Steps */}
        {processSteps.map((step, index) => (
          <ProcessStepDetail key={step.id} step={step} index={index} />
        ))}
        
        <ProcessSummary />
        
        <CTA 
          title="Ready to Begin Your Montana Project?"
          subtitle="Let's start with a free consultation to discuss your vision and see how our proven Flathead Valley process can bring it to life."
          primaryButtonText="Schedule Consultation"
          backgroundVariant="solid"
        />
      </main>
      <Footer />
    </>
  );
}