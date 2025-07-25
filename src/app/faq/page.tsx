import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/metadata';
import { FAQPageClient } from '@/components/faq/FAQPageClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQs | Finish Carpentry Questions | Somers, MT',
  description: 'Frequently asked questions about finish carpentry services in Somers, Montana. Get answers about pricing, timeline, process, and materials for custom cabinets and trim work.',
  path: '/faq',
  keywords: [
    'finish carpentry FAQ Montana',
    'custom cabinet questions Somers',
    'Montana carpenter pricing',
    'Flathead Valley woodwork questions',
    'trim work FAQ Montana'
  ]
});

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQPageClient />
      <Footer />
    </>
  );
}