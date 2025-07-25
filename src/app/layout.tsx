import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { defaultMetadata, structuredData } from "@/lib/metadata";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ErrorTracking } from "@/components/analytics/ErrorTracking";
import { generateGoogleSearchConsoleMetadata } from "@/components/analytics/GoogleSearchConsole";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  ...generateGoogleSearchConsoleMetadata(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/fonts/inter-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/fonts/playfair-display-latin-600-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A3A2E" />
        <meta name="msapplication-TileColor" content="#0A3A2E" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="US-MT" />
        <meta name="geo.placename" content="Somers, Montana" />
        <meta name="geo.position" content="48.0744;-114.2139" />
        <meta name="ICBM" content="48.0744, -114.2139" />
        
        {/* Local business markup */}
        <meta name="business-hours" content="Mo-Fr 08:00-18:00, Sa 09:00-16:00" />
        <meta name="payment-types-accepted" content="Cash, Check, Credit Card" />
        <meta name="price-range" content="$$$" />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="prefetch" href="/images/hero-bg.jpg" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/portfolio" />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {/* JSON-LD Structured Data for Local Business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusiness),
          }}
        />
        
        {/* JSON-LD Structured Data for Person (Owner) */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.person),
          }}
        />
        
        {/* JSON-LD Structured Data for Website */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
        
        {/* Main content */}
        {children}
        
        {/* Analytics and Monitoring */}
        <GoogleAnalytics 
          trackingId={process.env.NEXT_PUBLIC_GA_TRACKING_ID || ''} 
        />
        
        <ErrorTracking
          dsn={process.env.SENTRY_DSN || ''}
          environment={process.env.NODE_ENV || 'development'}
          tracesSampleRate={0.1}
        />
        
        {/* Google Business Profile integration */}
        <Script
          id="google-business-profile"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Google My Business API integration
              if (typeof google !== 'undefined' && google.maps) {
                const businessLocation = new google.maps.LatLng(48.0744, -114.2139);
                
                // Business location marker data
                window.businessData = {
                  location: businessLocation,
                  name: 'Montana Finish Carpenter',
                  address: '123 Mountain View Drive, Somers, MT 59932',
                  phone: '(406) 555-0123',
                  website: 'https://montanafinishcarpenter.com'
                };
              }
            `,
          }}
        />
      </body>
    </html>
  );
}