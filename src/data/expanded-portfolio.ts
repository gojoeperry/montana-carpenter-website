export interface ExpandedPortfolioItem {
  id: string;
  title: string;
  category: 'kitchen' | 'bathroom' | 'built-in' | 'trim' | 'furniture';
  description: string;
  images: {
    before?: string;
    after: string;
    gallery: string[];
  };
  details: {
    client: string;
    location: string;
    completedDate: string;
    materials: string[];
    features: string[];
    challenges?: string[];
  };
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
  featured: boolean;
}

export const expandedPortfolio: ExpandedPortfolioItem[] = [
  {
    id: 'lakefront-kitchen-remodel',
    title: 'Lakefront Kitchen Transformation',
    category: 'kitchen',
    description: 'Complete kitchen renovation featuring custom cherry cabinets, granite countertops, and a large island perfect for entertaining.',
    images: {
      before: '/images/portfolio/lakefront-kitchen-before.jpg',
      after: '/images/portfolio/lakefront-kitchen-after.jpg',
      gallery: [
        '/images/portfolio/lakefront-kitchen-1.jpg',
        '/images/portfolio/lakefront-kitchen-2.jpg',
        '/images/portfolio/lakefront-kitchen-3.jpg',
        '/images/portfolio/lakefront-kitchen-4.jpg'
      ]
    },
    details: {
      client: 'The Johnson Family',
      location: 'Bigfork, MT',
      completedDate: '2023-08-15',
      materials: ['Cherry hardwood', 'Granite countertops', 'Soft-close hardware'],
      features: [
        'Custom island with seating for 4',
        'Pull-out pantry organizers',
        'Under-cabinet LED lighting',
        'Soft-close drawers throughout',
        'Wine storage built-in'
      ],
      challenges: ['Working around existing plumbing', 'Matching existing hardwood floors']
    },
    testimonial: {
      text: 'The team exceeded our expectations in every way. The quality of craftsmanship is outstanding, and they were professional throughout the entire process.',
      author: 'Sarah Johnson',
      rating: 5
    },
    featured: true
  },
  {
    id: 'master-bathroom-vanity',
    title: 'Master Bathroom Floating Vanity',
    category: 'bathroom',
    description: 'Modern floating vanity in walnut with integrated lighting and hidden storage compartments.',
    images: {
      after: '/images/portfolio/master-bathroom-after.jpg',
      gallery: [
        '/images/portfolio/master-bathroom-1.jpg',
        '/images/portfolio/master-bathroom-2.jpg',
        '/images/portfolio/master-bathroom-3.jpg'
      ]
    },
    details: {
      client: 'Mark & Lisa Chen',
      location: 'Whitefish, MT',
      completedDate: '2023-09-22',
      materials: ['Walnut hardwood', 'Integrated LED strips', 'Soft-close mechanisms'],
      features: [
        'Floating design with hidden mounting',
        'Integrated LED backlighting',
        'Custom drawer organizers',
        'Vessel sink cutouts',
        'Hidden electrical for outlets'
      ]
    },
    testimonial: {
      text: 'The floating vanity completely transformed our bathroom. The attention to detail and craftsmanship is exceptional.',
      author: 'Lisa Chen',
      rating: 5
    },
    featured: true
  },
  {
    id: 'home-office-built-ins',
    title: 'Home Office Built-in System',
    category: 'built-in',
    description: 'Floor-to-ceiling built-in office with integrated desk, filing, and display areas for a productive workspace.',
    images: {
      after: '/images/portfolio/home-office-after.jpg',
      gallery: [
        '/images/portfolio/home-office-1.jpg',
        '/images/portfolio/home-office-2.jpg',
        '/images/portfolio/home-office-3.jpg'
      ]
    },
    details: {
      client: 'Dr. Michael Roberts',
      location: 'Kalispell, MT',
      completedDate: '2023-07-10',
      materials: ['Maple hardwood', 'Adjustable shelving', 'File drawer slides'],
      features: [
        'Integrated desk with cord management',
        'Adjustable shelving system',
        'File drawer with lock',
        'Display areas for books and awards',
        'Hidden printer storage'
      ]
    },
    testimonial: {
      text: 'My new office is not only beautiful but incredibly functional. Everything has its place and the quality is outstanding.',
      author: 'Dr. Michael Roberts',
      rating: 5
    },
    featured: true
  },
  {
    id: 'dining-room-wainscoting',
    title: 'Victorian-Style Wainscoting',
    category: 'trim',
    description: 'Elegant raised panel wainscoting with chair rail and crown molding in a historic dining room.',
    images: {
      after: '/images/portfolio/wainscoting-after.jpg',
      gallery: [
        '/images/portfolio/wainscoting-1.jpg',
        '/images/portfolio/wainscoting-2.jpg',
        '/images/portfolio/wainscoting-3.jpg'
      ]
    },
    details: {
      client: 'Heritage Home Restoration',
      location: 'Somers, MT',
      completedDate: '2023-06-05',
      materials: ['Solid oak', 'Traditional profiles', 'Period-appropriate hardware'],
      features: [
        'Raised panel construction',
        'Chair rail and base cap',
        'Crown molding integration',
        'Hand-fitted joints',
        'Period-accurate profiles'
      ]
    },
    featured: false
  },
  {
    id: 'live-edge-dining-table',
    title: 'Live Edge Walnut Dining Table',
    category: 'furniture',
    description: 'Stunning 10-foot live edge walnut dining table with steel hairpin legs, perfect for family gatherings.',
    images: {
      after: '/images/portfolio/dining-table-after.jpg',
      gallery: [
        '/images/portfolio/dining-table-1.jpg',
        '/images/portfolio/dining-table-2.jpg',
        '/images/portfolio/dining-table-3.jpg'
      ]
    },
    details: {
      client: 'The Martinez Family',
      location: 'Columbia Falls, MT',
      completedDate: '2023-10-12',
      materials: ['Live edge walnut slab', 'Steel hairpin legs', 'Natural oil finish'],
      features: [
        'Single-slab walnut top',
        'Natural live edge preserved',
        'Custom steel hairpin legs',
        'Hand-rubbed oil finish',
        'Seats up to 10 people'
      ]
    },
    testimonial: {
      text: 'This table is absolutely gorgeous and has become the centerpiece of our dining room. The craftsmanship is incredible.',
      author: 'Maria Martinez',
      rating: 5
    },
    featured: true
  },
  {
    id: 'mudroom-organization',
    title: 'Family Mudroom Organization',
    category: 'built-in',
    description: 'Complete mudroom solution with individual lockers, bench seating, and upper storage cabinets.',
    images: {
      after: '/images/portfolio/mudroom-after.jpg',
      gallery: [
        '/images/portfolio/mudroom-1.jpg',
        '/images/portfolio/mudroom-2.jpg'
      ]
    },
    details: {
      client: 'The Thompson Family',
      location: 'Bigfork, MT',
      completedDate: '2023-05-20',
      materials: ['Painted maple', 'Bench cushions', 'Coat hooks'],
      features: [
        'Individual family member lockers',
        'Bench seating with storage',
        'Upper cabinets for seasonal items',
        'Coat hooks and shoe storage',
        'Easy-clean finishes'
      ]
    },
    featured: false
  },
  {
    id: 'entertainment-center',
    title: 'Built-in Entertainment Center',
    category: 'built-in',
    description: 'Custom entertainment center with hidden cable management and ambient lighting.',
    images: {
      after: '/images/portfolio/entertainment-center-after.jpg',
      gallery: [
        '/images/portfolio/entertainment-center-1.jpg',
        '/images/portfolio/entertainment-center-2.jpg'
      ]
    },
    details: {
      client: 'The Wilson Family',
      location: 'Whitefish, MT',
      completedDate: '2023-09-08',
      materials: ['Cherry hardwood', 'LED strip lighting', 'Cable management systems'],
      features: [
        'Custom TV mounting solution',
        'Hidden cable management',
        'Integrated LED lighting',
        'Component storage with ventilation',
        'Display shelves for decor'
      ]
    },
    featured: false
  },
  {
    id: 'craftsman-window-trim',
    title: 'Craftsman Window Casings',
    category: 'trim',
    description: 'Wide, flat window casings with decorative corner blocks in authentic Craftsman style.',
    images: {
      after: '/images/portfolio/window-trim-after.jpg',
      gallery: [
        '/images/portfolio/window-trim-1.jpg',
        '/images/portfolio/window-trim-2.jpg'
      ]
    },
    details: {
      client: 'Historic Craftsman Restoration',
      location: 'Kalispell, MT',
      completedDate: '2023-04-15',
      materials: ['Solid fir', 'Decorative corner blocks', 'Period stain'],
      features: [
        'Wide flat casings',
        'Decorative corner blocks',
        'Sill extensions',
        'Authentic proportions',
        'Period-appropriate stain'
      ]
    },
    featured: false
  },
  {
    id: 'kitchen-island-upgrade',
    title: 'Kitchen Island with Seating',
    category: 'furniture',
    description: 'Custom kitchen island with butcher block top and cabinet storage base.',
    images: {
      after: '/images/portfolio/kitchen-island-after.jpg',
      gallery: [
        '/images/portfolio/kitchen-island-1.jpg',
        '/images/portfolio/kitchen-island-2.jpg'
      ]
    },
    details: {
      client: 'The Anderson Family',
      location: 'Somers, MT',
      completedDate: '2023-08-30',
      materials: ['Butcher block maple', 'Painted base cabinets', 'Bar stools'],
      features: [
        'Thick butcher block top',
        'Cabinet storage base',
        'Bar seating overhang',
        'Electrical outlets integrated',
        'Matching kitchen cabinets'
      ]
    },
    featured: false
  },
  {
    id: 'master-closet-system',
    title: 'Walk-in Closet Organization',
    category: 'built-in',
    description: 'Complete closet system with custom shelving, drawers, and specialized storage solutions.',
    images: {
      after: '/images/portfolio/master-closet-after.jpg',
      gallery: [
        '/images/portfolio/master-closet-1.jpg',
        '/images/portfolio/master-closet-2.jpg'
      ]
    },
    details: {
      client: 'The Davis Family',
      location: 'Polson, MT',
      completedDate: '2023-07-25',
      materials: ['Melamine with wood veneer', 'Soft-close drawers', 'LED lighting'],
      features: [
        'Double hanging sections',
        'Custom shoe storage',
        'Jewelry drawer inserts',
        'LED strip lighting',
        'Laundry hamper integration'
      ]
    },
    featured: false
  },
  {
    id: 'guest-bathroom-vanity',
    title: 'Rustic Guest Bathroom Vanity',
    category: 'bathroom',
    description: 'Reclaimed wood vanity with vessel sink and rustic hardware.',
    images: {
      after: '/images/portfolio/guest-bathroom-after.jpg',
      gallery: [
        '/images/portfolio/guest-bathroom-1.jpg',
        '/images/portfolio/guest-bathroom-2.jpg'
      ]
    },
    details: {
      client: 'Mountain Lodge Retreat',
      location: 'Bigfork, MT',
      completedDate: '2023-06-18',
      materials: ['Reclaimed barn wood', 'Vessel sink', 'Rustic hardware'],
      features: [
        'Reclaimed wood construction',
        'Custom vessel sink cutout',
        'Rustic iron hardware',
        'Open shelf storage',
        'Natural edge details'
      ]
    },
    featured: false
  },
  {
    id: 'library-built-ins',
    title: 'Home Library Built-ins',
    category: 'built-in',
    description: 'Floor-to-ceiling library shelving with rolling ladder and reading nook.',
    images: {
      after: '/images/portfolio/library-after.jpg',
      gallery: [
        '/images/portfolio/library-1.jpg',
        '/images/portfolio/library-2.jpg'
      ]
    },
    details: {
      client: 'The Richardson Family',
      location: 'Whitefish, MT',
      completedDate: '2023-09-15',
      materials: ['Cherry hardwood', 'Rolling ladder hardware', 'LED accent lighting'],
      features: [
        'Floor-to-ceiling shelving',
        'Rolling ladder system',
        'Window seat reading nook',
        'Adjustable shelf heights',
        'Integrated task lighting'
      ]
    },
    featured: false
  }
];

export const portfolioCategories = [
  { id: 'all', name: 'All Projects', count: expandedPortfolio.length },
  { id: 'kitchen', name: 'Kitchens', count: expandedPortfolio.filter(p => p.category === 'kitchen').length },
  { id: 'bathroom', name: 'Bathrooms', count: expandedPortfolio.filter(p => p.category === 'bathroom').length },
  { id: 'built-in', name: 'Built-ins', count: expandedPortfolio.filter(p => p.category === 'built-in').length },
  { id: 'trim', name: 'Trim Work', count: expandedPortfolio.filter(p => p.category === 'trim').length },
  { id: 'furniture', name: 'Furniture', count: expandedPortfolio.filter(p => p.category === 'furniture').length }
];