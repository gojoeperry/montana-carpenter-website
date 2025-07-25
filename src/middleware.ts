import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers for all routes
  const securityHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  };

  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // API route specific security
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Rate limiting headers (actual rate limiting is in the API route)
    response.headers.set('X-RateLimit-Limit', '10');
    
    // CORS headers for API routes
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL,
      'https://montanafinishcarpenter.com',
      'https://www.montanafinishcarpenter.com',
    ].filter(Boolean);

    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
    }

    response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');

    // Additional API security
    response.headers.set('X-API-Version', '1.0');
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  }

  // Bot detection and blocking
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousBots = [
    'scrapy',
    'python-requests',
    'curl',
    'wget',
    'bot',
    'crawler',
    'spider',
  ];
  
  const isSuspiciousBot = suspiciousBots.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  // Allow legitimate crawlers but block suspicious ones
  const legitimateCrawlers = [
    'googlebot',
    'bingbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
  ];

  const isLegitimateBot = legitimateCrawlers.some(bot =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isSuspiciousBot && !isLegitimateBot) {
    // Block suspicious bots for API routes and forms
    if (request.nextUrl.pathname.startsWith('/api/') || 
        request.nextUrl.pathname.includes('contact')) {
      return new NextResponse('Access Denied', { status: 403 });
    }
  }

  // Redirect www to non-www (or vice versa based on preference)
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');
  
  if (hostname?.startsWith('www.') && process.env.NODE_ENV === 'production') {
    url.hostname = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // Security for admin or sensitive routes (if any)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Add additional authentication checks here
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.ico$).*)',
  ],
};