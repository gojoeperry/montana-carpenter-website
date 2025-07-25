import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrustBadges } from '@/components/common/TrustBadges';
import { generatePageMetadata } from '@/lib/metadata';
import { ContactPageClient } from '@/components/contact/ContactPageClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Montana Finish Carpenter | Free Estimates in Somers',
  description: 'Contact Montana Finish Carpenter for free estimates in Somers, MT. Serving Flathead Valley, Kalispell, Whitefish, Bigfork. Custom cabinets, trim work, built-ins. Call (406) 555-0123.',
  path: '/contact',
  keywords: [
    'contact Montana carpenter',
    'free estimates Somers MT',
    'Flathead Valley carpenter contact',
    'Montana finish carpentry quote',
    'custom cabinet estimate Montana'
  ]
});


export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageClient />
      
      {/* Trust Badges */}
      <TrustBadges 
        title="Why Choose Montana Finish Carpenter?"
        variant="grid" 
        className="py-16 bg-[#FAFAF8]"
      />
      <Footer />
    </>
  );
}