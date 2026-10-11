import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';

export const metadata: Metadata = {
  title: 'Creative Strategy & Content',
  description: 'Every experience needs a story. Creative concepts, storytelling, brand experiences, and digital communication.',
  openGraph: {
    title: 'Creative Strategy & Content | Achtrex Studio',
    description: 'We translate brand ambitions into stories: unique and personalized digital narratives.',
    images: ['/studio-assets/service-creative-strategy.jpg'],
  },
};

export default function CreativeStrategyPage() {
  const service = SERVICES.find((s) => s.id === 'creative-strategy');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
