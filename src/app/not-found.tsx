import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            {/* 404 Illustration */}
            <div className="relative mb-8">
              <div className="text-[120px] sm:text-[150px] lg:text-[200px] font-heading font-bold text-[#0A3A2E] opacity-10 leading-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#0A3A2E] rounded-rustic flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-4">
              Page Not Found
            </h1>
            
            <p className="text-xl text-[#333333] mb-8 leading-relaxed">
              Looks like this page wandered off to the workshop. Let&apos;s get you back on track 
              to find the custom carpentry services you&apos;re looking for.
            </p>
          </div>
          
          {/* Navigation Options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Link href="/" className="group">
              <div className="p-6 bg-white rounded-rustic border border-[#333333] hover:shadow-rustic-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0F0F0F] mb-2">Homepage</h3>
                <p className="text-sm text-[#333333]">Start fresh from our main page</p>
              </div>
            </Link>
            
            <Link href="/services" className="group">
              <div className="p-6 bg-white rounded-rustic border border-[#333333] hover:shadow-rustic-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0F0F0F] mb-2">Our Services</h3>
                <p className="text-sm text-[#333333]">Explore our carpentry services</p>
              </div>
            </Link>
            
            <Link href="/portfolio" className="group">
              <div className="p-6 bg-white rounded-rustic border border-[#333333] hover:shadow-rustic-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0F0F0F] mb-2">Portfolio</h3>
                <p className="text-sm text-[#333333]">View our completed projects</p>
              </div>
            </Link>
          </div>
          
          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-[#0A3A2E] hover:bg-[#083529] text-white">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#0A3A2E] text-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white">
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white rounded-rustic p-6 border border-[#333333]">
            <h3 className="font-semibold text-[#0F0F0F] mb-4">Need Help Finding Something?</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#333333] mb-1">Call us directly:</p>
                <a href="tel:+14065550123" className="text-[#0A3A2E] hover:underline font-medium">
                  (406) 555-0123
                </a>
              </div>
              <div>
                <p className="text-[#333333] mb-1">Send us an email:</p>
                <a href="mailto:info@montanafinishcarpenter.com" className="text-[#0A3A2E] hover:underline font-medium">
                  info@montanafinishcarpenter.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Sitemap Link */}
          <div className="mt-8">
            <Link href="/sitemap" className="text-sm text-[#666666] hover:text-[#0A3A2E] underline">
              View complete sitemap
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}