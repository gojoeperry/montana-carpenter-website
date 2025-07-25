'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Global error:', error);
    
    // Send to error tracking service (Sentry, etc.)
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error);
    }
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-[#333333] mb-8 leading-relaxed">
                We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={reset}
                className="w-full bg-[#0A3A2E] hover:bg-[#083529] text-white"
              >
                Try Again
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full border-[#0A3A2E] text-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white"
              >
                Go to Homepage
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/contact'}
                variant="outline"
                className="w-full border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white"
              >
                Contact Support
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-rustic border border-[#333333]">
              <h3 className="font-semibold text-[#0F0F0F] mb-2">Need immediate help?</h3>
              <p className="text-sm text-[#333333] mb-2">
                Call us directly at{' '}
                <a href="tel:+14065550123" className="text-[#0A3A2E] hover:underline">
                  (406) 555-0123
                </a>
              </p>
              <p className="text-sm text-[#333333]">
                Or email{' '}
                <a href="mailto:info@montanafinishcarpenter.com" className="text-[#0A3A2E] hover:underline">
                  info@montanafinishcarpenter.com
                </a>
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm font-medium text-[#666666] hover:text-[#0A3A2E]">
                  Error Details (Development)
                </summary>
                <pre className="mt-4 p-4 bg-red-50 border border-red-200 rounded text-xs text-red-800 overflow-auto">
                  {error.message}
                  {error.stack && '\n\n' + error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}