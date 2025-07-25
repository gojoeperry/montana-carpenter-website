import { Metadata } from 'next';

// Base URL for the site
export const siteUrl = 'https://montanafinishcarpenter.com';

// Business information
export const businessInfo = {
  name: 'Montana Finish Carpenter',
  legalName: 'Montana Finish Carpenter LLC',
  description: 'Expert finish carpentry services in Somers, Montana. Custom cabinets, trim work, built-ins, and furniture serving the Flathead Valley since 2004.',
  owner: 'Mike Thompson',
  email: 'info@montanafinishcarpenter.com',
  phone: '(406) 555-0123',
  phoneDisplay: '(406) 555-0123',
  address: {
    streetAddress: '123 Mountain View Drive',
    city: 'Somers',
    state: 'Montana',
    postalCode: '59932',
    country: 'US'
  },
  geo: {
    latitude: 48.0744,
    longitude: -114.2139
  },
  serviceArea: [
    'Somers, MT',
    'Kalispell, MT', 
    'Whitefish, MT',
    'Bigfork, MT',
    'Columbia Falls, MT',
    'Lakeside, MT',
    'Polson, MT',
    'Flathead Valley, MT'
  ],
  established: '2004',
  yearsInBusiness: '20+',
  licenseNumber: 'MT-CC-2024-001',
  website: siteUrl,
  socialMedia: {
    facebook: 'https://facebook.com/montanafinishcarpenter',
    instagram: 'https://instagram.com/montanafinishcarpenter'
  }
};

// Service categories for SEO
export const services = [
  {
    name: 'Custom Cabinetry',
    description: 'Kitchen cabinets, bathroom vanities, and built-in storage solutions',
    keywords: ['custom cabinets Montana', 'kitchen cabinets Somers', 'bathroom vanities Flathead Valley']
  },
  {
    name: 'Trim & Molding',
    description: 'Crown molding, baseboards, window and door casings',
    keywords: ['trim carpentry Montana', 'crown molding Somers', 'finish carpentry Flathead Valley']
  },
  {
    name: 'Built-in Storage',
    description: 'Closet systems, entertainment centers, home office built-ins',
    keywords: ['built-in storage Montana', 'custom closets Somers', 'entertainment centers Flathead Valley']
  },
  {
    name: 'Custom Furniture',
    description: 'Tables, benches, and specialty furniture pieces',
    keywords: ['custom furniture Montana', 'handcrafted tables Somers', 'Montana woodworker']
  }
];

// Local keywords for Montana
export const localKeywords = [
  'Flathead Valley carpenter',
  'Montana custom cabinets', 
  'Somers finish carpentry',
  'Northwest Montana woodwork',
  'Glacier Country craftsman',
  'Big Sky State carpentry',
  'Montana master craftsman',
  'Flathead Lake carpenter'
];

// Default metadata configuration
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Montana Finish Carpenter | Custom Cabinets & Trim in Somers, MT',
    template: '%s | Montana Finish Carpenter'
  },
  description: businessInfo.description,
  keywords: [
    'finish carpenter Montana',
    'custom cabinets Somers MT',
    'trim carpentry Flathead Valley',
    'built-in storage Montana',
    'custom furniture Somers',
    'Montana woodworker',
    'Flathead Valley craftsman',
    ...localKeywords
  ],
  authors: [{ name: businessInfo.owner }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: businessInfo.name,
    title: 'Montana Finish Carpenter | Custom Cabinets & Trim in Somers, MT',
    description: businessInfo.description,
    url: siteUrl,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Montana Finish Carpenter - Custom woodwork in Somers, Montana',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Montana Finish Carpenter - Expert craftsmanship since 2004',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Montana Finish Carpenter | Custom Cabinets & Trim in Somers, MT',
    description: businessInfo.description,
    images: ['/images/twitter-card.jpg'],
    creator: '@montanacarpenter',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'US-MT',
    'geo.placename': 'Somers, Montana',
    'geo.position': `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`,
    'ICBM': `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`,
  }
};

// Function to generate canonical URLs
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

// Function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  images,
  keywords,
  noIndex = false
}: {
  title: string;
  description: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  
  return {
    title,
    description,
    keywords: keywords ? [...defaultMetadata.keywords as string[], ...keywords] : defaultMetadata.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: images ? images.map(img => ({
        url: img,
        width: 1200,
        height: 630,
        alt: title,
      })) : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title,
      description,
      images: images || ['/images/twitter-card.jpg'],
    },
    robots: noIndex ? {
      index: false,
      follow: true,
    } : defaultMetadata.robots,
  };
}

// Structured data templates
export const structuredData = {
  // Local Business Schema
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteUrl}#business`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    description: businessInfo.description,
    url: businessInfo.website,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/business-photo.jpg`,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    foundingDate: businessInfo.established,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },
    areaServed: businessInfo.serviceArea.map(area => ({
      '@type': 'City',
      name: area
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    priceRange: '$$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    currenciesAccepted: 'USD',
    serviceOffered: services.map(service => ({
      '@type': 'Service',
      name: service.name,
      description: service.description
    })),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'State of Montana'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      businessInfo.socialMedia.facebook,
      businessInfo.socialMedia.instagram
    ]
  },

  // Person Schema for owner
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#owner`,
    name: businessInfo.owner,
    jobTitle: 'Master Carpenter',
    worksFor: {
      '@id': `${siteUrl}#business`
    },
    description: 'Master craftsman with over 20 years of experience in finish carpentry, serving the Flathead Valley since 2004.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      addressCountry: businessInfo.address.country
    },
    knowsAbout: [
      'Custom Cabinetry',
      'Finish Carpentry', 
      'Trim Work',
      'Built-in Storage',
      'Custom Furniture',
      'Woodworking'
    ]
  },

  // Website Schema
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: businessInfo.name,
    description: businessInfo.description,
    publisher: {
      '@id': `${siteUrl}#business`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
};

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// FAQ schema generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// How-to schema generator
export function generateHowToSchema(steps: Array<{ title: string; description: string; image?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Custom Carpentry Process',
    description: 'Our proven 7-step process for creating custom carpentry projects',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      image: step.image ? `${siteUrl}${step.image}` : undefined
    }))
  };
}