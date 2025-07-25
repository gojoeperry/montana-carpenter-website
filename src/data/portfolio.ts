import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'lakefront-kitchen',
    title: 'Lakefront Kitchen Remodel',
    category: 'kitchen',
    description: 'Complete kitchen transformation featuring custom maple cabinets, granite countertops, and a large island with breakfast bar. The warm wood tones complement the stunning lake views.',
    images: {
      before: '/images/portfolio/lakefront-kitchen-before.jpg',
      after: '/images/portfolio/lakefront-kitchen-after.jpg'
    },
    gallery: [
      '/images/portfolio/lakefront-kitchen-1.jpg',
      '/images/portfolio/lakefront-kitchen-2.jpg',
      '/images/portfolio/lakefront-kitchen-3.jpg'
    ],
    testimonial: 'The craftsmanship exceeded our expectations. Our kitchen is now the heart of our home.',
    client: 'Sarah & Mike Johnson'
  },
  {
    id: 'master-bathroom-vanity',
    title: 'Master Bathroom Built-ins',
    category: 'bathroom',
    description: 'Elegant master bathroom featuring a double vanity with custom storage, matching linen tower, and beautiful crown molding details.',
    images: {
      after: '/images/portfolio/master-bathroom-after.jpg'
    },
    gallery: [
      '/images/portfolio/master-bathroom-1.jpg',
      '/images/portfolio/master-bathroom-2.jpg'
    ],
    testimonial: 'Professional work and attention to detail. Highly recommended!',
    client: 'Jennifer Martinez'
  },
  {
    id: 'home-office-builtin',
    title: 'Home Office Built-in System',
    category: 'furniture',
    description: 'Custom home office featuring built-in desk, shelving, and file storage. Designed to maximize productivity while maintaining a clean, organized appearance.',
    images: {
      after: '/images/portfolio/home-office-after.jpg'
    },
    gallery: [
      '/images/portfolio/home-office-1.jpg',
      '/images/portfolio/home-office-2.jpg'
    ],
    client: 'David Chen'
  },
  {
    id: 'crown-molding-installation',
    title: 'Whole House Crown Molding',
    category: 'trim',
    description: 'Comprehensive crown molding installation throughout a 3,200 sq ft home, including complex angles and cathedral ceilings.',
    images: {
      after: '/images/portfolio/crown-molding-after.jpg'
    },
    gallery: [
      '/images/portfolio/crown-molding-1.jpg',
      '/images/portfolio/crown-molding-2.jpg',
      '/images/portfolio/crown-molding-3.jpg'
    ],
    testimonial: 'The attention to detail is incredible. Every corner is perfect.',
    client: 'Robert & Linda Thompson'
  },
  {
    id: 'rustic-dining-table',
    title: 'Reclaimed Pine Dining Table',
    category: 'furniture',
    description: 'Handcrafted dining table made from reclaimed Montana pine, featuring a live-edge design and custom steel legs.',
    images: {
      after: '/images/portfolio/dining-table-after.jpg'
    },
    gallery: [
      '/images/portfolio/dining-table-1.jpg',
      '/images/portfolio/dining-table-2.jpg'
    ],
    client: 'Amanda Wilson'
  },
  {
    id: 'mudroom-storage',
    title: 'Mudroom Organization System',
    category: 'cabinet',
    description: 'Complete mudroom makeover with custom cubbies, bench seating, and overhead storage. Perfect for busy Montana families.',
    images: {
      before: '/images/portfolio/mudroom-before.jpg',
      after: '/images/portfolio/mudroom-after.jpg'
    },
    gallery: [
      '/images/portfolio/mudroom-1.jpg',
      '/images/portfolio/mudroom-2.jpg'
    ],
    testimonial: 'Finally, a place for everything! Our mornings are so much easier now.',
    client: 'The Peterson Family'
  }
];