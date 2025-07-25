import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  showPhone?: boolean;
  backgroundVariant?: 'wood' | 'solid' | 'gradient';
  className?: string;
}

export function CTA({
  title = "Ready to Transform Your Space?",
  subtitle = "Let's discuss your vision and create something beautiful together. Serving homeowners throughout the Flathead Valley with quality craftsmanship and personalized service.",
  primaryButtonText = "Get Free Quote",
  secondaryButtonHref = "tel:+14065550123",
  showPhone = true,
  backgroundVariant = 'wood',
  className
}: CTAProps) {
  const backgroundStyles = {
    wood: "bg-[#1A1A1A]",
    solid: "bg-[#0A3A2E]",
    gradient: "bg-gradient-to-r from-[#0A3A2E] via-[#3E2723] to-[#0A3A2E]"
  };

  return (
    <section className={cn("py-24 relative overflow-hidden", className)}>
      {/* Background */}
      <div className={cn(
        "absolute inset-0",
        backgroundStyles[backgroundVariant]
      )}>
        {/* Wood grain overlay pattern */}
        {backgroundVariant === 'wood' && (
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        )}
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white mb-8">
          <span className="mr-2">📞</span>
          Free Consultation & Estimate
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
            {title}
          </h2>
          
          <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            {subtitle}
          </p>

          {/* Service Areas */}
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Whitefish</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Kalispell</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Bigfork</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Columbia Falls</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Somers</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-[#0A3A2E] hover:bg-gray-100 shadow-rustic-lg text-lg px-8 py-4"
            >
              {primaryButtonText}
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block w-px h-8 bg-white/30"></div>
              
              {showPhone && (
                <div className="text-center sm:text-left">
                  <div className="text-white text-sm mb-1">Or call us directly:</div>
                  <a 
                    href={secondaryButtonHref}
                    className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
                  >
                    (406) 555-0123
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-12 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Quick Response</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-white">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 opacity-20">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-8 right-8 opacity-20">
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        </svg>
      </div>
    </section>
  );
}