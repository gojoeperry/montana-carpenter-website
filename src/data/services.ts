import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'custom-cabinetry',
    title: 'Custom Cabinetry',
    description: 'Handcrafted kitchen and bathroom cabinets designed to fit your space perfectly and match your style.',
    features: [
      'Kitchen cabinet design & installation',
      'Bathroom vanity cabinets',
      'Custom storage solutions',
      'High-quality wood materials',
      'Soft-close hinges & drawers',
      'Professional finish options'
    ],
    image: '/images/services/custom-cabinetry.jpg',
    priceRange: 'Starting at $8,000'
  },
  {
    id: 'trim-molding',
    title: 'Trim & Molding',
    description: 'Precision trim work and decorative molding that adds character and elegance to any room.',
    features: [
      'Crown molding installation',
      'Baseboards & shoe molding',
      'Window & door trim',
      'Wainscoting & chair rails',
      'Coffered ceilings',
      'Custom millwork'
    ],
    image: '/images/services/trim-molding.jpg',
    priceRange: 'Starting at $15/linear foot'
  },
  {
    id: 'built-in-storage',
    title: 'Built-in Storage',
    description: 'Maximize your space with custom built-in storage solutions that blend seamlessly with your home.',
    features: [
      'Entertainment centers',
      'Bedroom closet systems',
      'Home office built-ins',
      'Mudroom organization',
      'Pantry shelving systems',
      'Book shelves & display cases'
    ],
    image: '/images/services/built-in-storage.jpg',
    priceRange: 'Starting at $2,500'
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    description: 'One-of-a-kind furniture pieces crafted from premium Montana woods to last generations.',
    features: [
      'Dining tables & chairs',
      'Kitchen islands',
      'Bedroom furniture',
      'Entry benches',
      'Coffee tables',
      'Custom designs welcome'
    ],
    image: '/images/services/custom-furniture.jpg',
    priceRange: 'Starting at $1,200'
  }
];