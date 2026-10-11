import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Creative Strategy & Digital Content',
  description: 'Digital content creation, creative direction, brand storytelling and multimedia production for brands that dare to lead.',
  openGraph: {
    title: 'Creative Strategy & Digital Content | Achtrex Studio',
    description: 'We conceive and execute bold creative narratives, dynamic digital campaigns, and multi-format content architectures.',
    images: ['/studio-assets/service-creative-strategy.jpg'],
  },
};

export default function CreativeStrategyPage() {
  const service = ServicesDB.getBySlug('creative-strategy') ?? SERVICES.find((s) => s.id === 'creative-strategy');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
