import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/metadata';
import { PortfolioPageClient } from '@/components/portfolio/PortfolioPageClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Finish Carpentry Portfolio | Somers Montana Custom Woodwork',
  description: 'Browse our portfolio of custom cabinetry, built-ins, trim work, and furniture projects throughout Somers, Kalispell, Whitefish, and the Flathead Valley.',
  path: '/portfolio',
  keywords: [
    'Montana carpenter portfolio',
    'Somers custom cabinetry examples',
    'Flathead Valley woodwork gallery',
    'Montana finish carpentry projects',
    'custom furniture portfolio Montana'
  ]
});

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioPageClient />
      <Footer />
    </>
  );
}