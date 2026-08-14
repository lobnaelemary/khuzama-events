export type PageRoute = 'home' | 'works' | 'project-detail' | 'about' | 'contact' | 'faq' | 'privacy' | 'terms';

export type CategoryFilter = 
  | 'all'
  | 'government'
  | 'corporate'
  | 'conferences'
  | 'exhibitions'
  | 'employees'
  | 'entertainment'
  | 'private';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: CategoryFilter;
  categoryLabel: string;
  city: string;
  year: string;
  duration?: string;
  attendees?: string;
  coverImage: string;
  heroVideoUrl?: string;
  isFeatured?: boolean;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  gallery: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface PartnerTestimonial {
  id: string;
  quote: string;
  clientName: string;
  entityTitle: string;
  eventTitle: string;
  logoUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EventPlannerForm {
  eventType: string;
  city: string;
  expectedDate: string;
  approxAttendees: string;
  services: string[];
}
