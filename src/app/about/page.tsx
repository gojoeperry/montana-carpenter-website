import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/common/CTA';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'About | Montana Master Carpenter Serving Flathead Valley Since 2004',
  description: 'Meet Mike Thompson, Montana master carpenter serving Somers, Kalispell, Whitefish, and Flathead Valley since 2004. 20+ years of custom carpentry expertise.',
  path: '/about',
  keywords: [
    'Montana master carpenter',
    'Mike Thompson carpenter',
    'Somers Montana craftsman',
    'Flathead Valley carpenter experience',
    'Montana finish carpentry expert'
  ]
});

function Breadcrumb() {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-sm">
        <li>
          <a href="/" className="text-[#333333] hover:text-[#0A3A2E] transition-colors">
            Home
          </a>
        </li>
        <li className="text-[#333333]">
          <span className="mx-2">/</span>
          <span className="text-[#0F0F0F] font-medium">About</span>
        </li>
      </ol>
    </nav>
  );
}

function AboutHero() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about/craftsman-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
        
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Master Craftsman in the Flathead Valley
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed">
            For over 20 years, we have been creating custom carpentry that combines traditional 
            techniques with modern functionality, one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

function OwnerStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
              Meet Mike Thompson
            </h2>
            <p className="text-xl text-[#333333] mb-6 leading-relaxed">
              Montana born and raised, with sawdust in my veins and a passion for creating 
              beautiful, functional spaces.
            </p>
            <p className="text-[#333333] mb-6 leading-relaxed">
              I started Montana Finish Carpenter in 2004 after years of working with my father, 
              who taught me that quality craftsmanship is about more than just tools and techniques.
              It is about taking pride in your work and building relationships with your community.
            </p>
            <p className="text-[#333333] mb-6 leading-relaxed">
              What sets us apart is our commitment to traditional joinery methods combined with 
              modern precision tools. Every piece is built to last generations, not just years. 
              We take the time to understand your vision and bring it to life with meticulous 
              attention to detail.
            </p>
            <p className="text-[#333333] mb-8 leading-relaxed">
              When I am not in the workshop, you will find me fishing the local streams, 
              hiking the mountains, or spending time with my family. Montana is not just where 
              I work - it is home, and I am honored to help make it feel like home for my clients too.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#0A3A2E] hover:bg-[#083529] text-white px-8 py-4 text-lg font-semibold"
              >
                View Our Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-2 border-[#0A3A2E] text-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
          
          <div className="lg:order-2">
            <div className="relative aspect-[4/5] rounded-rustic overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/about/mike-thompson-portrait.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const values = [
    {
      icon: '🎯',
      title: 'Uncompromising Quality',
      description: 'We use only premium materials and time-tested construction methods. Every joint is precise, every finish is flawless, and every detail matters.'
    },
    {
      icon: '🤝',
      title: 'Reliability You Can Count On',
      description: 'We show up when we say we will, complete projects on time, and stand behind our work with comprehensive warranties.'
    },
    {
      icon: '🏔️',
      title: 'Local Montana Expertise',
      description: 'We understand Montana living - from harsh winters to mountain humidity. Our designs and materials are chosen specifically for our climate.'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
            Why Choose Montana Finish Carpenter?
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Three core values guide everything we do - from initial consultation 
            to final installation and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 border border-[#333333]">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0F0F0F] mb-4">
                {value.title}
              </h3>
              <p className="text-[#333333] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceHighlights() {
  const highlights = [
    { number: '20+', label: 'Years Experience', description: 'Serving the Flathead Valley since 2004' },
    { number: '500+', label: 'Projects Completed', description: 'From single cabinets to full home renovations' },
    { number: '100%', label: 'Licensed & Insured', description: 'Full liability and workers comp coverage' },
    { number: '5⭐', label: 'Average Rating', description: 'Consistently rated 5 stars by clients' }
  ];

  return (
    <section className="py-24 bg-[#0A3A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Experience You Can Trust
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Two decades of craftsmanship, hundreds of satisfied clients, 
            and a reputation built on quality and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{highlight.number}</div>
              <div className="text-xl font-semibold mb-2">{highlight.label}</div>
              <div className="text-sm opacity-90">{highlight.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OwnerStory />
        <WhyChooseUs />
        <ExperienceHighlights />
        
        <CTA 
          title="Ready to Work Together?"
          subtitle="Experience the difference that comes from working with a true craftsman who cares about quality as much as you do."
          primaryButtonText="View Our Portfolio"
          backgroundVariant="solid"
        />
      </main>
      <Footer />
    </>
  );
}