
import { Service, Project, Testimonial, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cinematic Editing',
    description: 'We turn raw footage into compelling stories with industry-leading pacing and emotional depth.',
    icon: '🎬'
  },
  {
    id: '2',
    title: 'Motion Design',
    description: 'Bespoke 2D/3D animations that elevate your brand narrative and keep viewers engaged.',
    icon: '✨'
  },
  {
    id: '3',
    title: 'Precision Color',
    description: 'Expert color grading to create specific moods, consistency, and a high-end filmic look.',
    icon: '🎨'
  },
  {
    id: '4',
    title: 'Sound Design',
    description: 'Immersive soundscapes and clean audio mixing that complete the visual experience.',
    icon: '🔊'
  },

  {
    id: '5',
    title: 'Cinematic Editing',
    description: 'We turn raw footage into compelling stories with industry-leading pacing and emotional depth.',
    icon: '🎉'
  },
  {
    id: '6',
    title: 'Cinematic Editing',
    description: 'We turn raw footage into compelling stories with industry-leading pacing and emotional depth.',
    icon: '❣️'
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: '1',
    title: 'The Modern Nomad',
    category: 'Commercial',
    imageUrl: 'https://picsum.photos/seed/nomad/1200/800',
    client: 'Stellar Gear'
  },
  {
    id: '2',
    title: 'Velocity 2025',
    category: 'Brand Film',
    imageUrl: 'https://picsum.photos/seed/car/1200/800',
    client: 'Nexus Automotive'
  },
  {
    id: '3',
    title: 'Urban Rhythm',
    category: 'Music Video',
    imageUrl: 'https://picsum.photos/seed/music/1200/800',
    client: 'Aria Records'
  },
  {
    id: '4',
    title: 'Silicon Minds',
    category: 'Documentary',
    imageUrl: 'https://picsum.photos/seed/tech/1200/800',
    client: 'Future Corp'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Creative Director',
    company: 'Visionary Lab',
    content: 'LUMOS transformed our vision into something better than we imagined. Their attention to detail in the final cut was astonishing.',
    avatar: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Head of Marketing',
    company: 'Peak Performance',
    content: 'The turnaround speed combined with the premium quality of motion graphics is what sets this agency apart from the rest.',
    avatar: 'https://picsum.photos/seed/marcus/200/200'
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Standard',
    price: '2,499Rs.',
    features: ['Up to 5 min final cut', 'Color Grading', 'Single Revision', '4K Export']
  },
  {
    id: 'pro',
    name: 'Creative Pro',
    price: '4,999Rs',
    features: ['Up to 15 min final cut', 'Motion Graphics', 'Unlimited Revisions', 'Sound Design', 'Raw Files'],
    isPopular: true
  },
  {
    id: 'custom',
    name: 'Enterprise',
    price: 'Custom',
    features: ['Full Series Editing', 'Director Collaboration', 'Social Media Cuts', 'Dedicated Editor']
  }
];
