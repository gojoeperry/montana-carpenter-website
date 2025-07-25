export interface DetailedService {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  features: string[];
  process: string[];
  priceRange: string;
  materials: string[];
  timeline: string;
  examples: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const detailedServices: DetailedService[] = [
  {
    id: 'custom-cabinetry',
    title: 'Custom Cabinetry',
    subtitle: 'Handcrafted cabinets built to your exact specifications',
    heroImage: '/images/services/custom-cabinetry-hero.jpg',
    description: 'Transform your kitchen, bathroom, or any room with custom cabinetry that perfectly fits your space and style. Each piece is handcrafted in our Montana workshop using traditional joinery techniques and premium materials.',
    features: [
      'Full custom design to fit any space perfectly',
      'Choice of premium hardwoods and finishes',
      'Soft-close drawers and doors standard',
      'Custom storage solutions and organizers',
      'Professional installation included',
      'Lifetime craftsmanship warranty'
    ],
    process: [
      'In-home consultation and measurements',
      'Custom design with 3D renderings',
      'Material and finish selection',
      'Precision crafting in our workshop',
      'Professional installation',
      'Final inspection and walkthrough'
    ],
    priceRange: 'Starting at $8,000 for kitchen projects',
    materials: ['Solid hardwoods', 'Plywood boxes', 'Soft-close hardware', 'Custom finishes'],
    timeline: '4-8 weeks from design approval',
    examples: [
      {
        title: 'Lakefront Kitchen',
        description: 'Shaker-style cherry cabinets with custom island and built-in wine storage',
        image: '/images/portfolio/lakefront-kitchen-after.jpg'
      },
      {
        title: 'Master Bath Vanity',
        description: 'Floating walnut vanity with vessel sinks and hidden storage',
        image: '/images/portfolio/master-bathroom-after.jpg'
      },
      {
        title: 'Home Office Built-ins',
        description: 'Floor-to-ceiling maple cabinets with integrated desk and filing',
        image: '/images/portfolio/home-office-after.jpg'
      }
    ]
  },
  {
    id: 'trim-molding',
    title: 'Trim & Molding',
    subtitle: 'Precision millwork that adds character and elegance',
    heroImage: '/images/services/trim-molding-hero.jpg',
    description: 'Add architectural detail and refinement to your home with custom trim and molding. From crown molding to baseboards, window casings to wainscoting, we create millwork that enhances your home\'s character.',
    features: [
      'Crown molding and coffered ceilings',
      'Custom baseboards and chair rails',
      'Window and door casings',
      'Wainscoting and paneling',
      'Built-up molding profiles',
      'Seamless mitered joints'
    ],
    process: [
      'Room assessment and measurement',
      'Profile selection or custom design',
      'Precision milling in our shop',
      'Expert installation with perfect joints',
      'Caulking and finishing prep',
      'Final quality inspection'
    ],
    priceRange: 'Starting at $12 per linear foot',
    materials: ['Solid hardwoods', 'MDF for paint grade', 'Flexible polyurethane options'],
    timeline: '1-3 weeks depending on complexity',
    examples: [
      {
        title: 'Victorian Crown Molding',
        description: 'Elaborate built-up crown molding with traditional profiles',
        image: '/images/portfolio/crown-molding-after.jpg'
      },
      {
        title: 'Craftsman Window Casings',
        description: 'Wide, flat casings with decorative corner blocks',
        image: '/images/portfolio/window-trim-after.jpg'
      },
      {
        title: 'Dining Room Wainscoting',
        description: 'Raised panel wainscoting with chair rail and base cap',
        image: '/images/portfolio/wainscoting-after.jpg'
      }
    ]
  },
  {
    id: 'built-in-storage',
    title: 'Built-in Storage',
    subtitle: 'Custom solutions that maximize every inch of space',
    heroImage: '/images/services/built-in-storage-hero.jpg',
    description: 'Maximize your home\'s potential with custom built-in storage solutions. From walk-in closets to entertainment centers, we create organized, beautiful spaces that work perfectly for your lifestyle.',
    features: [
      'Custom closet organization systems',
      'Entertainment centers and media walls',
      'Home office built-ins with desks',
      'Mudroom lockers and cubbies',
      'Under-stair storage solutions',
      'Window seats with storage'
    ],
    process: [
      'Space analysis and needs assessment',
      'Custom design with detailed drawings',
      'Material selection and approval',
      'Precision manufacturing',
      'Professional installation',
      'Organization system setup'
    ],
    priceRange: 'Starting at $3,500 for closet systems',
    materials: ['Melamine and wood veneer', 'Adjustable shelving', 'Soft-close drawers', 'Custom hardware'],
    timeline: '2-4 weeks from design approval',
    examples: [
      {
        title: 'Master Closet System',
        description: 'Walk-in closet with custom shelving, drawers, and shoe storage',
        image: '/images/portfolio/master-closet-after.jpg'
      },
      {
        title: 'Living Room Entertainment Center',
        description: 'Built-in media wall with hidden cable management',
        image: '/images/portfolio/entertainment-center-after.jpg'
      },
      {
        title: 'Mudroom Organization',
        description: 'Family entryway with lockers, bench, and coat storage',
        image: '/images/portfolio/mudroom-after.jpg'
      }
    ]
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    subtitle: 'One-of-a-kind pieces that reflect your personal style',
    heroImage: '/images/services/custom-furniture-hero.jpg',
    description: 'Create heirloom-quality furniture pieces designed specifically for your home and lifestyle. Each piece is handcrafted using traditional woodworking techniques and finished to perfection.',
    features: [
      'Dining tables and kitchen islands',
      'Custom benches and seating',
      'Desks and work surfaces',
      'Bedroom furniture and nightstands',
      'Specialty pieces and repairs',
      'Antique restoration services'
    ],
    process: [
      'Design consultation and sketching',
      'Wood selection and preparation',
      'Traditional joinery construction',
      'Hand sanding and finishing',
      'Delivery and placement',
      'Care instructions provided'
    ],
    priceRange: 'Starting at $2,500 for dining tables',
    materials: ['Solid hardwoods', 'Live edge slabs', 'Premium hardware', 'Hand-rubbed finishes'],
    timeline: '6-12 weeks for custom pieces',
    examples: [
      {
        title: 'Live Edge Dining Table',
        description: 'Montana walnut slab with steel hairpin legs',
        image: '/images/portfolio/dining-table-after.jpg'
      },
      {
        title: 'Kitchen Island',
        description: 'Butcher block top with custom cabinet base',
        image: '/images/portfolio/kitchen-island-after.jpg'
      },
      {
        title: 'Entryway Bench',
        description: 'Reclaimed barn wood with hidden storage compartment',
        image: '/images/portfolio/entryway-bench-after.jpg'
      }
    ]
  }
];