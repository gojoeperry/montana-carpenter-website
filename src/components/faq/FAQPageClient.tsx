'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/common/CTA';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { faqs, faqCategories, FAQ } from '@/data/faqs';
import { cn } from '@/lib/utils';
import { generateFAQSchema } from '@/lib/metadata';

// Hero Section
function FAQHero() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/faq/faq-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
        
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            Get answers to the most common questions about our finish carpentry services in Somers, Montana. 
            If you don&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Ask a Question
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A3A2E] px-8 py-4 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Search Component
function FAQSearch({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (query: string) => void }) {
  return (
    <div className="mb-12">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-4 pl-14 text-lg border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent"
        />
        <svg 
          className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#333333]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}

// Category Filters
function CategoryFilters({ 
  activeCategory, 
  onCategoryChange 
}: { 
  activeCategory: string; 
  onCategoryChange: (category: string) => void; 
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {faqCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            'px-6 py-3 rounded-rustic font-semibold transition-colors border-2',
            activeCategory === category.id
              ? 'bg-[#0A3A2E] text-white border-[#0A3A2E]'
              : 'bg-white text-[#0A3A2E] border-[#0A3A2E] hover:bg-[#0A3A2E] hover:text-white'
          )}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
}

// FAQ Item Component
function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#333333] rounded-rustic overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#FAFAF8] transition-colors"
      >
        <h3 className="text-lg font-semibold text-[#0F0F0F] pr-8">
          {faq.question}
        </h3>
        <svg 
          className={cn(
            'w-6 h-6 text-[#0A3A2E] transform transition-transform flex-shrink-0',
            isOpen ? 'rotate-180' : ''
          )} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-8 pb-6">
          <div className="text-[#333333] leading-relaxed space-y-4">
            {faq.answer.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// FAQ List Component
function FAQList({ 
  faqs, 
  openItems, 
  onToggle 
}: { 
  faqs: FAQ[]; 
  openItems: Set<string>; 
  onToggle: (id: string) => void; 
}) {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 text-[#333333] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-[#0F0F0F] mb-2">No questions found</h3>
        <p className="text-[#333333] mb-6">
          Try adjusting your search or browse different categories.
        </p>
        <Button className="bg-[#0A3A2E] hover:bg-[#083529] text-white">
          Contact Us
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openItems.has(faq.id)}
          onToggle={() => onToggle(faq.id)}
        />
      ))}
    </div>
  );
}

export function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Filter FAQs based on category and search
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Group FAQs by category for display
  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  const handleToggle = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Generate FAQ Schema for SEO
  const faqSchema = generateFAQSchema(filteredFAQs);

  return (
    <>
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <main>
        <FAQHero />
        
        {/* FAQ Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
                Get Your Questions Answered
              </h2>
              <p className="text-xl text-[#333333] leading-relaxed">
                We&apos;ve compiled answers to the questions we hear most often from our Montana clients.
              </p>
            </div>
            
            <FAQSearch 
              searchQuery={searchQuery} 
              onSearchChange={setSearchQuery} 
            />
            
            <CategoryFilters 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            
            {activeCategory === 'all' ? (
              // Show all categories with headers
              <div className="space-y-12">
                {Object.entries(groupedFAQs).map(([categoryId, categoryFAQs]) => {
                  const category = faqCategories.find(c => c.id === categoryId);
                  if (!category || categoryFAQs.length === 0) return null;
                  
                  return (
                    <div key={categoryId}>
                      <h3 className="text-2xl font-heading font-bold text-[#0F0F0F] mb-6 pb-3 border-b-2 border-[#0A3A2E]">
                        {category.name}
                      </h3>
                      <FAQList 
                        faqs={categoryFAQs} 
                        openItems={openItems} 
                        onToggle={handleToggle} 
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              // Show filtered category
              <FAQList 
                faqs={filteredFAQs} 
                openItems={openItems} 
                onToggle={handleToggle} 
              />
            )}
          </div>
        </section>
        
        <CTA 
          title="Still Have Questions?"
          subtitle="Can't find the answer you're looking for? We're here to help with any questions about your finish carpentry project."
          primaryButtonText="Contact Us"
          secondaryButtonText="Request Quote"
          backgroundVariant="solid"
        />
      </main>
    </>
  );
}