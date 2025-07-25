'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/common/CTA';
import { expandedPortfolio, portfolioCategories } from '@/data/expanded-portfolio';
import { cn } from '@/lib/utils';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

// Dynamic import for the modal to reduce initial bundle size
const PortfolioModal = dynamic(
  () => import('@/components/portfolio/PortfolioModal').then(mod => ({ default: mod.PortfolioModal })),
  { 
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
        <div className="text-white text-lg">Loading project details...</div>
      </div>
    )
  }
);

// Hero Section
function PortfolioHero() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/portfolio/portfolio-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Portfolio', href: '/portfolio' }]} />
        
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Our Work
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            Explore our portfolio of Montana custom craftsmanship. Each Flathead Valley project showcases our commitment 
            to quality, attention to detail, and the unique beauty of Montana living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#0A3A2E] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A3A2E] px-8 py-4 text-lg font-semibold"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Filter Buttons Component
function FilterButtons({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: string; 
  onFilterChange: (filter: string) => void; 
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {portfolioCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={cn(
            'px-6 py-3 rounded-rustic font-semibold transition-colors border-2',
            activeFilter === category.id
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

// Portfolio Grid Component
function PortfolioGrid({ 
  projects, 
  onProjectClick 
}: { 
  projects: typeof expandedPortfolio; 
  onProjectClick: (project: typeof expandedPortfolio[0]) => void; 
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group cursor-pointer bg-white border border-[#333333] rounded-rustic overflow-hidden hover:shadow-rustic-lg transition-all duration-300 hover:-translate-y-1"
          onClick={() => onProjectClick(project)}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('${project.images.after}')`,
              }}
            />
            
            <div className="absolute inset-0 bg-black/60">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold bg-[#0A3A2E] text-white border border-white/20">
                  {portfolioCategories.find(c => c.id === project.category)?.name}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-heading font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm text-white leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description.split('.')[0]}.
                </p>

                <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="bg-white text-[#0A3A2E] hover:bg-gray-100 text-xs font-semibold px-4 py-2"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PortfolioPageClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof expandedPortfolio[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const filteredProjects = activeFilter === 'all' 
    ? expandedPortfolio 
    : expandedPortfolio.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleProjectClick = (project: typeof expandedPortfolio[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <>
      <main>
        <PortfolioHero />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
                Browse Our Work
              </h2>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
                Each project tells a story of craftsmanship, creativity, and collaboration. 
                Filter by category to explore specific types of work.
              </p>
            </div>
            
            <FilterButtons 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
            
            <PortfolioGrid 
              projects={displayedProjects} 
              onProjectClick={handleProjectClick} 
            />
            
            {visibleProjects < filteredProjects.length && (
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  onClick={handleLoadMore}
                  className="bg-[#0A3A2E] hover:bg-[#083529] text-white px-8 py-4 text-lg font-semibold"
                >
                  Load More Projects
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <CTA 
          title="Ready to Create Your Dream Space?"
          subtitle="Let's bring your vision to life with the same quality and attention to detail you see in our portfolio."
          primaryButtonText="Start Your Project"
          backgroundVariant="solid"
        />
      </main>
      
      <PortfolioModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}