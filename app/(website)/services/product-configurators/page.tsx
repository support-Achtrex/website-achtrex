import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';

export const metadata: Metadata = {
  title: 'Product Configuration & Customization',
  description: 'Make every choice part of the experience. Real-time 3D configurators, customizer frameworks, and industrial business logic.',
  openGraph: {
    title: 'Product Configuration & Customization | Achtrex Studio',
    description: 'Immersive 3D product customization engines combining WebGL photorealism with robust pricing and ordering logic.',
    images: ['/studio-assets/service-product-configurators.jpg'],
  },
};

export default function ProductConfiguratorsPage() {
  const service = SERVICES.find((s) => s.id === 'product-configurators');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
