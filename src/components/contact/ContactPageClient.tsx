'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/Button';
import { businessInfo, siteUrl } from '@/lib/metadata';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactHero } from '@/components/contact/ContactHero';

export function ContactPageClient() {
  // Contact Point schema
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': `${siteUrl}/contact#contact`,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    contactType: 'Customer Service',
    areaServed: businessInfo.serviceArea.map(area => ({
      '@type': 'City',
      name: area
    })),
    availableLanguage: 'English',
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ]
  };

  // Service Area schema
  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeoShape',
    '@id': `${siteUrl}/contact#servicearea`,
    name: 'Montana Finish Carpenter Service Area',
    description: 'Our service area covers the Flathead Valley including Somers, Kalispell, Whitefish, Bigfork, Columbia Falls, Lakeside, and Polson.',
    addressCountry: 'US',
    addressRegion: 'Montana'
  };

  return (
    <>
      {/* Contact Schema Markup */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      
      {/* Service Area Schema */}
      <Script
        id="service-area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />
      
      <main>
        <ContactHero />
        
        {/* Contact Form and Info Section */}
        <section className="py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-[#0F0F0F] mb-4">
                Serving the Entire Flathead Valley
              </h2>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto">
                From our shop in Somers, we proudly serve families and businesses throughout 
                Montana's beautiful Flathead Valley with expert finish carpentry.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Area Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-4">
                Our Montana Service Area
              </h3>
              <p className="text-lg text-[#333333]">
                Proudly serving these Flathead Valley communities since 2004
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {businessInfo.serviceArea.map((area, index) => (
                <div key={index} className="text-center p-4 bg-[#FAFAF8] rounded-rustic border border-[#333333]">
                  <h4 className="font-semibold text-[#0F0F0F] mb-2">{area}</h4>
                  <p className="text-sm text-[#333333]">Full service area</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}