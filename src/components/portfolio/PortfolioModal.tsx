'use client';

import { useState } from 'react';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { Button } from '@/components/ui/Button';
import { expandedPortfolio } from '@/data/expanded-portfolio';

interface PortfolioModalProps {
  project: typeof expandedPortfolio[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const allImages = [project.images.after, ...project.images.gallery];

  const handlePrevious = () => {
    setCurrentImageIndex(prev => prev === 0 ? allImages.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => prev === allImages.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/80" onClick={onClose} />
        
        <div className="relative bg-white rounded-rustic max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image Carousel */}
          <div className="relative aspect-[4/3]">
            <OptimizedImage
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Project Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-4">
                  {project.title}
                </h2>
                <p className="text-[#333333] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#0F0F0F] mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-[#333333] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                {/* Project Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-[#0F0F0F]">Client: </span>
                    <span className="text-[#333333] text-sm">{project.details.client}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#0F0F0F]">Location: </span>
                    <span className="text-[#333333] text-sm">{project.details.location}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#0F0F0F]">Materials: </span>
                    <span className="text-[#333333] text-sm">{project.details.materials.join(', ')}</span>
                  </div>
                </div>
                
                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-[#FAFAF8] p-6 rounded-rustic border border-[#333333]">
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`text-lg ${i < project.testimonial!.rating ? 'text-[#F57C00]' : 'text-[#333333]'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <blockquote className="text-[#333333] mb-3 italic">
                      &ldquo;{project.testimonial.text}&rdquo;
                    </blockquote>
                    <cite className="text-sm font-semibold text-[#0F0F0F]">
                      - {project.testimonial.author}
                    </cite>
                  </div>
                )}
                
                {/* CTA */}
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="w-full bg-[#0A3A2E] hover:bg-[#083529] text-white"
                    onClick={onClose}
                  >
                    Contact Us About This Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}