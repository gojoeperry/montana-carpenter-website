'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  trackingId: string;
}

export function GoogleAnalytics({ trackingId }: GoogleAnalyticsProps) {
  if (!trackingId || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'business_type',
                'custom_parameter_2': 'service_area'
              }
            });
            
            // Track business-specific events
            gtag('config', '${trackingId}', {
              custom_map: {
                'business_type': 'finish_carpentry',
                'service_area': 'flathead_valley_montana'
              }
            });
          `,
        }}
      />
    </>
  );
}

// Hook for tracking custom events
export function useGoogleAnalytics() {
  const trackEvent = (
    eventName: string,
    parameters: Record<string, unknown> = {}
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const trackConversion = (value: number, currency = 'USD') => {
    trackEvent('conversion', {
      value,
      currency,
      event_category: 'ecommerce',
    });
  };

  const trackContactFormSubmission = (service?: string) => {
    trackEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: service || 'general_inquiry',
      value: 1,
    });
  };

  const trackPhoneCall = () => {
    trackEvent('phone_call_click', {
      event_category: 'engagement',
      event_label: 'header_phone_number',
      value: 1,
    });
  };

  const trackPortfolioView = (projectId: string, projectTitle: string) => {
    trackEvent('portfolio_view', {
      event_category: 'engagement',
      event_label: projectTitle,
      custom_project_id: projectId,
    });
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', {
      event_category: 'engagement',
      event_label: serviceName,
    });
  };

  return {
    trackEvent,
    trackConversion,
    trackContactFormSubmission,
    trackPhoneCall,
    trackPortfolioView,
    trackServiceView,
  };
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}