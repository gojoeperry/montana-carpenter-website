'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { portfolioItems } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const categoryLabels = {
  kitchen: 'Kitchen',
  bathroom: 'Bathroom', 
  furniture: 'Furniture',
  trim: 'Trim Work',
  cabinet: 'Cabinetry'
};

export function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Show first 6 items for homepage
  const featuredItems = portfolioItems.slice(0, 6);

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="center-content mb-20">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl leading-relaxed">
            Take a look at some of our recent work. Each project showcases our commitment 
            to quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredItems.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden bg-white border-[#333333] hover:shadow-rustic-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Project Image */}
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.images.after}')`,
                  }}
                />
                
                {/* Dark overlay for WCAG compliance - rgba(0,0,0,0.6) */}
                <div className="absolute inset-0 bg-black/60">
                  {/* Category Badge - Always visible */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold bg-[#0A3A2E] text-white border border-white/20">
                      {categoryLabels[item.category]}
                    </span>
                  </div>

                  {/* Project Info - Always visible with enhanced readability */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    {/* Project Title - Always visible */}
                    <h3 className="text-lg font-heading font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Project Description - Visible on hover */}
                    <p className={cn(
                      "text-sm text-white leading-relaxed mb-3 transition-all duration-300",
                      hoveredItem === item.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                    )}>
                      {item.description.split('.')[0]}.
                    </p>

                    {/* Client Info - Visible on hover */}
                    {item.client && (
                      <p className={cn(
                        "text-xs text-white font-medium mb-3 transition-all duration-300",
                        hoveredItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}>
                        Client: {item.client}
                      </p>
                    )}

                    {/* View More Button - Enhanced on hover */}
                    <div className={cn(
                      "transition-all duration-300",
                      hoveredItem === item.id ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"
                    )}>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="btn-high-contrast bg-white border-2 border-white text-[#0A3A2E] hover:bg-gray-100 text-xs font-semibold px-4 py-2"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="center-content mb-20">
          <p className="text-lg text-[#333333] mb-6">
            Want to see more of our work?
          </p>
          <Button 
            size="lg" 
            className="btn-high-contrast bg-[#0A3A2E] hover:bg-[#083529] text-white px-8 py-4 text-lg font-semibold shadow-rustic-lg"
          >
            View All Projects
          </Button>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-[#FAFAF8] rounded-rustic border border-[#333333] hover:shadow-rustic transition-all duration-300">
            <div className="text-2xl font-bold text-[#0F0F0F] mb-3">Before & After</div>
            <p className="text-[#333333] leading-relaxed">See the transformation in every project</p>
          </div>
          <div className="p-8 bg-[#FAFAF8] rounded-rustic border border-[#333333] hover:shadow-rustic transition-all duration-300">
            <div className="text-2xl font-bold text-[#0F0F0F] mb-3">Detailed Photos</div>
            <p className="text-[#333333] leading-relaxed">High-quality images of our craftsmanship</p>
          </div>
          <div className="p-8 bg-[#FAFAF8] rounded-rustic border border-[#333333] hover:shadow-rustic transition-all duration-300">
            <div className="text-2xl font-bold text-[#0F0F0F] mb-3">Client Stories</div>
            <p className="text-[#333333] leading-relaxed">Real testimonials from satisfied customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}