'use client';

import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        {/* Dark overlay for WCAG compliance - rgba(0,0,0,0.7) */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Main Content - Centered on mobile, left-aligned on desktop */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white">
              <span className="mr-3 text-lg">🏔️</span>
              Serving the Flathead Valley for 20+ Years
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight">
              Master Craftsmanship for Your{' '}
              <span className="text-white">Montana Home</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From custom cabinetry to precision trim work, we bring decades of expertise 
              to create beautiful, functional spaces that reflect Montana&apos;s natural beauty.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                <span className="font-medium">Free Estimates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                <span className="font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button 
                size="lg" 
                className="btn-high-contrast bg-[#0A3A2E] hover:bg-[#083529] text-white shadow-rustic-lg px-8 py-4 text-lg font-semibold"
              >
                View Our Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-high-contrast bg-white border-2 border-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white text-lg text-center lg:text-left">
                Call us today:{' '}
                <a 
                  href="tel:+14065550123" 
                  className="text-white hover:text-gray-200 transition-colors font-bold text-xl"
                >
                  (406) 555-0123
                </a>
              </p>
            </div>
          </div>

          {/* Stats - Right side on desktop */}
          <div className="hidden lg:block mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-rustic p-8 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white font-medium">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-rustic p-8 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-white font-medium">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-rustic p-8 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white font-medium">Satisfaction Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-rustic p-8 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">5⭐</div>
                <div className="text-white font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}