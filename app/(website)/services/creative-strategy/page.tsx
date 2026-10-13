import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Creative Strategy & Digital Content',
  description: 'Digital content creation, creative direction, brand storytelling and multimedia production for brands that dare to lead.',
  alternates: {
    canonical: 'https://achtrex.com/services/creative-strategy',
  },
  openGraph: {
    title: 'Creative Strategy & Digital Content | Achtrex Studio',
    description: 'We conceive and execute bold creative narratives, dynamic digital campaigns, and multi-format content architectures.',
    url: 'https://achtrex.com/services/creative-strategy',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/service-creative-strategy.jpg',
      width: 1200,
      height: 630,
      alt: 'Creative Strategy and Digital Content',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Strategy & Digital Content | Achtrex Studio',
    description: 'Creative direction, cinematic studio production, storytelling, and brand worlds.',
    images: ['/studio-assets/service-creative-strategy.jpg'],
  },
};

export default function CreativeStrategyPage() {
  const service = ServicesDB.getBySlug('creative-strategy') ?? SERVICES.find((s) => s.id === 'creative-strategy');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
