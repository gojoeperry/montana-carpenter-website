'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ContactError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Contact page error:', error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-4">
              Contact Form Issue
            </h1>
            
            <p className="text-[#333333] mb-8 leading-relaxed">
              We&apos;re having trouble loading the contact form. Don&apos;t worry - you can still reach us directly!
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <Button 
              onClick={reset}
              className="w-full bg-[#0A3A2E] hover:bg-[#083529] text-white"
            >
              Try Loading Form Again
            </Button>
            
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="w-full border-[#0A3A2E] text-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white"
            >
              Go to Homepage
            </Button>
          </div>
          
          <div className="bg-white rounded-rustic p-6 border border-[#333333]">
            <h3 className="font-semibold text-[#0F0F0F] mb-4">Contact Us Directly</h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#0F0F0F]">Call Us</p>
                  <a href="tel:+14065550123" className="text-[#0A3A2E] hover:underline">
                    (406) 555-0123
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#0F0F0F]">Email Us</p>
                  <a href="mailto:info@montanafinishcarpenter.com" className="text-[#0A3A2E] hover:underline">
                    info@montanafinishcarpenter.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#0F0F0F]">Business Hours</p>
                  <p className="text-sm text-[#333333]">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-[#333333]">Saturday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}