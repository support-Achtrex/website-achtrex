import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Experience Design Services',
  description: 'Design digital experiences that engage users, simplify complex systems, and connect brand and product identity.',
  alternates: {
    canonical: 'https://achtrex.com/services/experience-design',
  },
  openGraph: {
    title: 'Experience Design Services | Achtrex Studio',
    description: 'We turn abstract concepts into tangible digital journeys, responsive systems, and memorable user touchpoints.',
    url: 'https://achtrex.com/services/experience-design',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/service-experience-design.jpg',
      width: 1200,
      height: 630,
      alt: 'Experience Design Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience Design Services | Achtrex Studio',
    description: 'Human-centered UX/UI, digital journeys, design systems, tactile micro-interactions and immersive interfaces.',
    images: ['/studio-assets/service-experience-design.jpg'],
  },
};

export default function ExperienceDesignPage() {
  const service = ServicesDB.getBySlug('experience-design') ?? SERVICES.find((s) => s.id === 'experience-design');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
