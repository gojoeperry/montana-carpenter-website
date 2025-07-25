'use client';

import Script from 'next/script';
import { generateBreadcrumbSchema, siteUrl } from '@/lib/metadata';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include Home as the first item
  const allItems = [
    { name: 'Home', href: '/' },
    ...items
  ];

  // Generate schema markup
  const schemaItems = allItems.map(item => ({
    name: item.name,
    url: item.href.startsWith('http') ? item.href : `${siteUrl}${item.href}`
  }));

  const breadcrumbSchema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      {/* JSON-LD Schema for Breadcrumbs */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Visual Breadcrumb Navigation */}
      <nav 
        className={`mb-8 ${className}`} 
        aria-label="Breadcrumb"
        role="navigation"
      >
        <ol 
          className="flex space-x-2 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            
            return (
              <li 
                key={item.href}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                {!isLast ? (
                  <>
                    <a 
                      href={item.href}
                      itemProp="item"
                      className="text-[#333333] hover:text-[#0A3A2E] transition-colors"
                    >
                      <span itemProp="name">{item.name}</span>
                    </a>
                    <meta itemProp="position" content={String(index + 1)} />
                    <span className="mx-2 text-[#333333]" aria-hidden="true">
                      /
                    </span>
                  </>
                ) : (
                  <>
                    <span 
                      className="text-[#0F0F0F] font-medium"
                      itemProp="name"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                    <meta itemProp="position" content={String(index + 1)} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}