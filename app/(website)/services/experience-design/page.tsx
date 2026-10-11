import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Experience Design Services',
  description: 'Design digital experiences that engage users, simplify complex systems, and connect brand and product identity.',
  openGraph: {
    title: 'Experience Design Services | Achtrex Studio',
    description: 'We turn abstract concepts into tangible digital journeys, responsive systems, and memorable user touchpoints.',
    images: ['/studio-assets/service-experience-design.jpg'],
  },
};

export default function ExperienceDesignPage() {
  const service = ServicesDB.getBySlug('experience-design') ?? SERVICES.find((s) => s.id === 'experience-design');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
