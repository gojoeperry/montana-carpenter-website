'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PortfolioError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Portfolio page error:', error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-4">
              Portfolio Loading Issue
            </h1>
            
            <p className="text-[#333333] mb-8 leading-relaxed">
              We&apos;re having trouble loading our project gallery. While we fix this, here are other ways to see our work.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <Button 
              onClick={reset}
              className="w-full bg-[#0A3A2E] hover:bg-[#083529] text-white"
            >
              Try Loading Portfolio Again
            </Button>
            
            <Button 
              onClick={() => window.location.href = '/services'}
              variant="outline"
              className="w-full border-[#0A3A2E] text-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white"
            >
              View Our Services
            </Button>
            
            <Button 
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="w-full border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white"
            >
              Request Custom Quote
            </Button>
          </div>
          
          <div className="bg-white rounded-rustic p-6 border border-[#333333]">
            <h3 className="font-semibold text-[#0F0F0F] mb-4">See Our Work Other Ways</h3>
            
            <div className="space-y-3 text-sm">
              <p className="text-[#333333]">
                <strong>Call us</strong> at{' '}
                <a href="tel:+14065550123" className="text-[#0A3A2E] hover:underline">
                  (406) 555-0123
                </a>{' '}
                to discuss specific projects
              </p>
              
              <p className="text-[#333333]">
                <strong>Visit our social media</strong> for recent project photos
              </p>
              
              <p className="text-[#333333]">
                <strong>Schedule a consultation</strong> to see examples in person
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
              <p className="text-xs text-[#666666]">
                We showcase custom cabinetry, built-ins, trim work, and furniture throughout the Flathead Valley
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}