export type Category = 'kitchen' | 'bathroom' | 'furniture' | 'trim' | 'cabinet';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  priceRange?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  images: {
    before?: string;
    after: string;
  };
  gallery?: string[];
  testimonial?: string;
  client?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  project?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  timeline: string;
  budget: string;
}