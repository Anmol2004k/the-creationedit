
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  client: string;
 videoEmbedId?: string; 

}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
