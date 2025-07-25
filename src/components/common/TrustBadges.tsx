import { cn } from '@/lib/utils';

const badges = [
  {
    id: 'licensed-insured',
    title: 'Licensed & Insured',
    subtitle: 'Full Liability Coverage',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'experience',
    title: '20+ Years',
    subtitle: 'Experience in Montana',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'bbb-accredited',
    title: 'BBB Accredited',
    subtitle: 'A+ Rating',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    id: 'satisfaction-guarantee',
    title: 'Satisfaction Guarantee',
    subtitle: '100% Quality Promise',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

interface TrustBadgesProps {
  className?: string;
  variant?: 'horizontal' | 'grid';
  showTitle?: boolean;
}

export function TrustBadges({ 
  className, 
  variant = 'horizontal',
  showTitle = false 
}: TrustBadgesProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Your peace of mind is our priority. We're committed to delivering 
              exceptional service you can trust.
            </p>
          </div>
        )}

        <div className={cn(
          "gap-6",
          variant === 'horizontal' 
            ? "flex flex-wrap justify-center lg:justify-between items-center"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        )}>
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={cn(
                "flex items-center space-x-4 p-6 bg-surface rounded-rustic border border-border hover:shadow-rustic transition-all duration-300 hover:-translate-y-1",
                variant === 'horizontal' ? "flex-shrink-0" : "text-center flex-col space-x-0 space-y-4"
              )}
            >
              {/* Icon */}
              <div className={cn(
                "flex-shrink-0 w-12 h-12 bg-primary rounded-rustic flex items-center justify-center text-cream",
                variant === 'grid' && "mx-auto"
              )}>
                {badge.icon}
              </div>

              {/* Content */}
              <div className={cn(variant === 'grid' && "text-center")}>
                <div className="font-semibold text-primary text-lg">
                  {badge.title}
                </div>
                <div className="text-sm text-muted">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-muted">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-sm">Google Verified</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm">Background Checked</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span className="text-sm">Local References</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}