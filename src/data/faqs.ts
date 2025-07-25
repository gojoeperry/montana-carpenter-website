export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: 'pricing', name: 'Pricing & Estimates', icon: '💰' },
  { id: 'timeline', name: 'Project Timeline', icon: '⏰' },
  { id: 'materials', name: 'Materials & Quality', icon: '🪵' },
  { id: 'process', name: 'Process', icon: '🔨' },
  { id: 'credentials', name: 'Credentials', icon: '🎖️' }
];

export const faqs: FAQ[] = [
  // Pricing & Estimates
  {
    id: 'free-estimates',
    category: 'pricing',
    question: 'Do you provide free estimates?',
    answer: 'Yes! We offer free, no-obligation estimates for all projects. We\'ll visit your home, discuss your vision, take measurements, and provide a detailed written estimate within 48 hours.'
  },
  {
    id: 'payment-terms',
    category: 'pricing',
    question: 'What are your payment terms?',
    answer: 'We typically require 50% down to begin your project, 40% at substantial completion, and 10% final payment upon project completion. We accept cash, check, and credit cards.'
  },
  {
    id: 'financing-options',
    category: 'pricing',
    question: 'Do you offer financing options?',
    answer: 'Yes, we partner with local lenders to offer financing options for larger projects. We can help you explore 0% interest options for qualified customers on projects over $10,000.'
  },
  {
    id: 'cost-factors',
    category: 'pricing',
    question: 'What factors affect the cost of custom cabinetry?',
    answer: 'Several factors influence pricing: wood species, finish complexity, hardware selection, size of the project, and special features like soft-close drawers or pull-out organizers. We\'ll discuss all options during your consultation.'
  },
  {
    id: 'change-orders',
    category: 'pricing',
    question: 'What if I want to make changes during the project?',
    answer: 'Minor changes can often be accommodated, but significant changes may require a change order with adjusted pricing and timeline. We\'ll discuss any changes with you before proceeding.'
  },

  // Project Timeline
  {
    id: 'typical-timeline',
    category: 'timeline',
    question: 'How long does a typical kitchen cabinet project take?',
    answer: 'Most kitchen cabinet projects take 6-8 weeks from design approval to installation. This includes 4-6 weeks for crafting in our shop and 1-2 weeks for installation and finishing touches.'
  },
  {
    id: 'scheduling-process',
    category: 'timeline',
    question: 'How far in advance should I schedule my project?',
    answer: 'We recommend scheduling 2-3 months in advance, especially during our busy season (spring and summer). However, we can sometimes accommodate rush projects with additional scheduling fees.'
  },
  {
    id: 'weather-delays',
    category: 'timeline',
    question: 'Can weather affect my project timeline?',
    answer: 'Severe weather can occasionally delay delivery or installation, but our workshop production continues year-round. We\'ll keep you updated if any weather-related delays occur.'
  },
  {
    id: 'installation-time',
    category: 'timeline',
    question: 'How long will installation take?',
    answer: 'Installation typically takes 2-5 days depending on project complexity. We work efficiently to minimize disruption to your daily routine and always clean up thoroughly each day.'
  },

  // Materials & Quality
  {
    id: 'wood-types',
    category: 'materials',
    question: 'What types of wood do you work with?',
    answer: 'We work with a wide variety of hardwoods including maple, cherry, oak, walnut, hickory, and alder. We can also source specialty woods upon request. All our lumber is kiln-dried and carefully selected for quality.'
  },
  {
    id: 'finish-options',
    category: 'materials',
    question: 'What finish options are available?',
    answer: 'We offer stains, paints, glazes, and clear protective topcoats. Our finishes are durable and designed to withstand daily use. We can match existing finishes or create custom colors.'
  },
  {
    id: 'warranty-coverage',
    category: 'materials',
    question: 'What warranty do you provide?',
    answer: 'We provide a lifetime warranty on craftsmanship and a 5-year warranty on finishes. Hardware is covered by manufacturer warranties. We stand behind our work and will address any issues promptly.'
  },
  {
    id: 'care-maintenance',
    category: 'materials',
    question: 'How do I care for my custom cabinets?',
    answer: 'Regular dusting and cleaning with mild soap and water is usually sufficient. Avoid harsh chemicals and abrasive cleaners. We provide detailed care instructions with every project.'
  },
  {
    id: 'hardware-quality',
    category: 'materials',
    question: 'What quality of hardware do you use?',
    answer: 'We use premium hardware from brands like Blum, Hafele, and Salice. All drawers include soft-close mechanisms as standard, and we offer upgrade options for specialized hardware.'
  },

  // Process
  {
    id: 'consultation-process',
    category: 'process',
    question: 'What happens during the initial consultation?',
    answer: 'We\'ll discuss your vision, take detailed measurements, assess your space, and understand your functional needs. We\'ll also explain our process, timeline, and answer any questions you have.'
  },
  {
    id: 'design-approval',
    category: 'process',
    question: 'How does the design approval process work?',
    answer: 'After our consultation, we create detailed drawings and 3D renderings. We\'ll review these with you and make any necessary revisions before you approve the final design to begin production.'
  },
  {
    id: 'site-preparation',
    category: 'process',
    question: 'What preparation is needed before installation?',
    answer: 'We\'ll provide a detailed preparation checklist, which may include clearing the work area, ensuring utilities are accessible, and protecting adjacent surfaces. We handle most preparation ourselves.'
  },
  {
    id: 'cleanup-process',
    category: 'process',
    question: 'Do you clean up after installation?',
    answer: 'Absolutely! We clean up thoroughly each day and perform a final cleanup upon project completion. We\'ll leave your space clean and ready to enjoy.'
  },

  // Credentials
  {
    id: 'licensing-insurance',
    category: 'credentials',
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed contractors in Montana and carry comprehensive liability insurance and workers\' compensation coverage. We can provide proof of insurance upon request.'
  },
  {
    id: 'experience-background',
    category: 'credentials',
    question: 'How long have you been in business?',
    answer: 'We\'ve been serving the Flathead Valley for over 20 years. Our team has completed more than 500 custom projects, ranging from single cabinets to complete home renovations.'
  },
  {
    id: 'references-reviews',
    category: 'credentials',
    question: 'Can you provide references?',
    answer: 'Absolutely! We have many satisfied customers who are happy to serve as references. You can also find reviews on Google, Better Business Bureau, and Angie\'s List.'
  },
  {
    id: 'certifications-training',
    category: 'credentials',
    question: 'What certifications and training do you have?',
    answer: 'Our craftsmen have extensive training in traditional woodworking techniques and modern cabinet construction. We stay current with industry best practices through continuing education and trade associations.'
  },
  {
    id: 'service-area',
    category: 'credentials',
    question: 'What areas do you serve?',
    answer: 'We primarily serve the Flathead Valley including Kalispell, Whitefish, Bigfork, Columbia Falls, Somers, Lakeside, and Polson. We may consider projects outside this area depending on scope and scheduling.'
  }
];