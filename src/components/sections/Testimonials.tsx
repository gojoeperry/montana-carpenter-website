import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={cn("w-5 h-5", filled ? "text-[#F57C00]" : "text-[#333333]")}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-[#F57C00] opacity-50" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
  </svg>
);

export function Testimonials() {
  // Show first 3 testimonials for homepage
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#0F0F0F] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from Montana homeowners who have 
            experienced our craftsmanship firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredTestimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="relative overflow-hidden bg-white border-[#333333] hover:shadow-rustic-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <QuoteIcon />
                </div>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-[#0F0F0F] leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-[#333333] pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#0F0F0F] text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#333333]">
                        {testimonial.location}
                      </div>
                    </div>
                    
                    {/* Project Badge */}
                    {testimonial.project && (
                      <div className="text-right">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F57C00]/10 text-[#0F0F0F] border border-[#333333]">
                          {testimonial.project}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A3A2E] via-[#F57C00] to-[#3E2723]"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-rustic p-8 border border-[#333333]">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0F0F0F] mb-2">5.0⭐</div>
              <div className="text-sm text-[#333333]">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F0F0F] mb-2">100%</div>
              <div className="text-sm text-[#333333]">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F0F0F] mb-2">500+</div>
              <div className="text-sm text-[#333333]">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F0F0F] mb-2">20+</div>
              <div className="text-sm text-[#333333]">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-12 text-center">
          <p className="text-[#333333] mb-6">Find us on:</p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-[#333333] hover:text-[#0A3A2E] transition-colors cursor-pointer">
              <div className="w-6 h-6 bg-[#0A3A2E] rounded"></div>
              <span className="font-medium">Google Reviews</span>
            </div>
            <div className="flex items-center space-x-2 text-[#333333] hover:text-[#0A3A2E] transition-colors cursor-pointer">
              <div className="w-6 h-6 bg-[#F57C00] rounded"></div>
              <span className="font-medium">Better Business Bureau</span>
            </div>
            <div className="flex items-center space-x-2 text-[#333333] hover:text-[#0A3A2E] transition-colors cursor-pointer">
              <div className="w-6 h-6 bg-[#3E2723] rounded"></div>
              <span className="font-medium">Angie&apos;s List</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}