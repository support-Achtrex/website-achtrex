import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Artificial Intelligence Development Services',
  description: 'Develop intelligent AI solutions, applications and digital products that help businesses automate processes, improve decision-making and create better digital experiences.',
  openGraph: {
    title: 'Artificial Intelligence Development Services | Achtrex Studio',
    description: 'Develop intelligent AI solutions, applications and digital products that help businesses automate processes, improve decision-making and create better digital experiences.',
    images: ['/studio-assets/service-ai-intelligent.jpg'],
  },
};

export default function AiIntelligentExperiencesPage() {
  const service = ServicesDB.getBySlug('ai-intelligent-experiences') ?? SERVICES.find((s) => s.id === 'ai-intelligent-experiences');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
