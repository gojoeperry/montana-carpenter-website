/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // Image optimization configuration
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
    
    // Configure image domains (add your actual domain and any CDNs)
    domains: [
      'montanafinishcarpenter.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Define image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Enable dangerouslyAllowSVG only if needed (security risk)
    dangerouslyAllowSVG: false,
    
    // Enable optimized loading
    loader: 'default',
    
    // Minimize layout shift
    minimumCacheTTL: 31536000, // 1 year
  },

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn', 'info']
    } : false,
    // Enable styled-jsx if needed
    styledComponents: false,
    // Enable emotion if needed
    emotion: false,
  },

  // Enable experimental features for better performance
  experimental: {
    // Improve build performance
    optimizeCss: true,
    
    // Enable faster refresh
    optimizeServerReact: true,
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://script.hotjar.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://*.hotjar.com wss://*.hotjar.com",
              "frame-src 'self' https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'
          },
          // Additional security headers
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        // Cache fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        // Cache JS and CSS files
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        // API routes caching
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=60'
          }
        ],
      }
    ];
  },

  // Compression
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,

  // Trailing slash configuration
  trailingSlash: false,

  // Generate ETags for caching
  generateEtags: true,

  // Production optimizations
  swcMinify: true,
  
  // Output configuration
  output: 'standalone',
  
  // Performance optimizations
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    'lodash': {
      transform: 'lodash/{{member}}',
    },
  },

  // Environment-specific configuration
  env: {
    CUSTOM_BUILD_ID: process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize for production
    if (!dev && !isServer) {
      // Tree shaking optimizations
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }

    return config;
  },

  // Static page generation timeout
  staticPageGenerationTimeout: 1000,

  // Reduce build output
  productionBrowserSourceMaps: false,

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Example: redirect old URLs
      // {
      //   source: '/old-services',
      //   destination: '/services',
      //   permanent: true,
      // },
    ];
  },

  // Rewrites for API routes (if needed)
  async rewrites() {
    return [
      // Example: rewrite API routes
      // {
      //   source: '/api/contact',
      //   destination: '/api/contact-form',
      // },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);