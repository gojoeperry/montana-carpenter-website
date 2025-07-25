import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

const serviceIcons = {
  'custom-cabinetry': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  'trim-molding': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  'built-in-storage': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  'custom-furniture': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
};

export function Services() {
  return (
    <section className="section-spacing bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="center-content mb-20">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl leading-relaxed">
            We specialize in custom carpentry that combines traditional craftsmanship 
            with modern functionality. Every project is built to last with attention to detail 
            that sets us apart.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-rustic-lg transition-all duration-300 hover:-translate-y-1 bg-white border-[#333333] h-full flex flex-col"
            >
              {/* Card Header with Icon and Title */}
              <CardHeader className="text-center pb-6 flex-shrink-0">
                {/* Icon Container */}
                <div className="mx-auto mb-6 w-18 h-18 bg-[#0A3A2E] rounded-rustic flex items-center justify-center text-white group-hover:bg-[#083529] transition-colors shadow-rustic">
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                </div>
                
                {/* Service Title */}
                <CardTitle className="text-xl font-heading font-bold text-[#0F0F0F] mb-3">
                  {service.title}
                </CardTitle>
                
                {/* Service Description */}
                <CardDescription className="text-[#333333] leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="pt-0 flex-grow flex flex-col">
                {/* Key Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-[#333333] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Range */}
                {service.priceRange && (
                  <div className="mb-6 p-4 bg-[#FAFAF8] rounded-rustic border border-[#333333]">
                    <p className="text-sm font-semibold text-[#0F0F0F] text-center">{service.priceRange}</p>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full mt-auto bg-white border-2 border-[#0A3A2E] text-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white transition-colors font-semibold"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="center-content">
          <p className="text-lg text-[#333333] mb-8 max-w-2xl">
            Need something custom? We love unique challenges and creating one-of-a-kind pieces.
          </p>
          <Button 
            size="lg" 
            className="bg-[#0A3A2E] hover:bg-[#083529] text-white px-8 py-4 text-lg font-semibold shadow-rustic-lg"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}