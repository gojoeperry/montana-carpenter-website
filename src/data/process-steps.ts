export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  whatToExpect: string[];
  duration: string;
  icon: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'consultation',
    stepNumber: 1,
    title: 'Initial Consultation',
    subtitle: 'Free in-home visit to understand your vision',
    description: 'We begin every project with a comprehensive consultation at your home. This allows us to see your space firsthand, understand your needs, and discuss your vision in detail.',
    whatToExpect: [
      'Detailed discussion of your project goals and style preferences',
      'Precise measurements of your space',
      'Assessment of existing conditions and requirements',
      'Explanation of our process and timeline',
      'Preliminary budget discussion',
      'No-pressure environment to ask questions'
    ],
    duration: '1-2 hours',
    icon: '🏠',
    image: '/images/process/consultation.jpg'
  },
  {
    id: 'design-planning',
    stepNumber: 2,
    title: 'Design & Planning',
    subtitle: 'Custom design with 3D renderings and detailed plans',
    description: 'Our designers create detailed plans and 3D renderings that bring your vision to life. This step ensures every detail is perfect before we begin crafting.',
    whatToExpect: [
      'Professional CAD drawings and 3D renderings',
      'Multiple design options to choose from',
      'Detailed material and finish specifications',
      'Hardware selection and placement',
      'Revision process to perfect your design',
      'Final approval before production begins'
    ],
    duration: '3-5 business days',
    icon: '📐',
    image: '/images/process/design-planning.jpg'
  },
  {
    id: 'proposal-agreement',
    stepNumber: 3,
    title: 'Proposal & Agreement',
    subtitle: 'Detailed quote with timeline and project agreement',
    description: 'We provide a comprehensive proposal with detailed pricing, specifications, and timeline. Once approved, we schedule your project and order materials.',
    whatToExpect: [
      'Line-item pricing breakdown',
      'Detailed project specifications',
      'Material lists and finish schedules',
      'Project timeline with key milestones',
      'Terms and conditions review',
      'Signed agreement and deposit collection'
    ],
    duration: '1-2 business days',
    icon: '📋',
    image: '/images/process/proposal-agreement.jpg'
  },
  {
    id: 'material-selection',
    stepNumber: 4,
    title: 'Material Selection',
    subtitle: 'Choose wood, hardware, and finishes for your project',
    description: 'Visit our showroom or we\'ll bring samples to you for final material and finish selection. This ensures you\'re completely happy with every aspect of your project.',
    whatToExpect: [
      'Wood species selection with actual samples',
      'Stain and finish options demonstration',
      'Hardware styles and finish options',
      'Edge profiles and door styles',
      'Final material approval and ordering',
      'Confirmation of all specifications'
    ],
    duration: '1-2 weeks',
    icon: '🪵',
    image: '/images/process/material-selection.jpg'
  },
  {
    id: 'craftsmanship',
    stepNumber: 5,
    title: 'Craftsmanship',
    subtitle: 'Precision building in our Montana workshop',
    description: 'Your project is carefully crafted in our workshop using traditional techniques and modern precision tools. We maintain strict quality control throughout the building process.',
    whatToExpect: [
      'Regular progress updates with photos',
      'Quality control at each stage',
      'Traditional joinery techniques',
      'Precision fitting and finishing',
      'Pre-assembly and testing',
      'Careful packaging for delivery'
    ],
    duration: '4-6 weeks',
    icon: '🔨',
    image: '/images/process/craftsmanship.jpg'
  },
  {
    id: 'installation',
    stepNumber: 6,
    title: 'Installation',
    subtitle: 'Professional installation with attention to detail',
    description: 'Our experienced installation team carefully installs your custom pieces with precision and care. We protect your home and clean up thoroughly each day.',
    whatToExpect: [
      'Careful delivery and handling of your pieces',
      'Protection of floors and surrounding areas',
      'Precise installation and alignment',
      'On-site adjustments as needed',
      'Hardware installation and adjustment',
      'Daily cleanup and organization'
    ],
    duration: '2-5 days',
    icon: '🔧',
    image: '/images/process/installation.jpg'
  },
  {
    id: 'final-walkthrough',
    stepNumber: 7,
    title: 'Final Walkthrough',
    subtitle: 'Quality inspection and project completion',
    description: 'We conduct a thorough walkthrough with you to ensure every detail meets our high standards and your expectations. We provide care instructions and warranty information.',
    whatToExpect: [
      'Detailed quality inspection together',
      'Demonstration of features and hardware',
      'Care and maintenance instructions',
      'Warranty documentation',
      'Final cleanup and touch-ups',
      'Project completion celebration!'
    ],
    duration: '1-2 hours',
    icon: '✅',
    image: '/images/process/final-walkthrough.jpg'
  }
];