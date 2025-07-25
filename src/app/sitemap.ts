import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Main pages
  const mainPages = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/process`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
  ];

  // Service area pages
  const serviceCities = [
    'kalispell',
    'whitefish', 
    'bigfork',
    'columbia-falls',
    'lakeside',
    'polson'
  ];

  const serviceAreaPages = serviceCities.map(city => ({
    url: `${siteUrl}/service-areas/${city}`,
    lastModified: lastMonth,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Service-specific pages (if they exist)
  const servicePages = [
    {
      url: `${siteUrl}/services/custom-cabinetry`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/trim-molding`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/built-in-storage`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/custom-furniture`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Legal and business pages
  const businessPages = [
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: lastMonth,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: lastMonth,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/reviews`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ];

  return [
    ...mainPages,
    ...serviceAreaPages,
    ...servicePages,
    ...businessPages,
  ];
}