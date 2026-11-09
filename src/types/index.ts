export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  duration?: string;
  deliveryTime: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  scopeNote?: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface JourneyStage {
  step: number;
  title: string;
  tagline: string;
  description: string;
  state: 'problem' | 'transition' | 'active' | 'outcome';
  keyPoints: string[];
  icon: string;
  insight: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export interface TransparencyBoundaries {
  badge: string;
  title: string;
  description: string;
  whatWeDo: string[];
  whatWeDoNotDo: string[];
}

export interface EnquiryFormData {
  name: string;
  email: string;
  academicYear: string;
  programmingKnowledge: string;
  interestedField: string;
  learningGoal: string;
  currentConfusion: string;
  preferredService: string;
  additionalMessage: string;
}
