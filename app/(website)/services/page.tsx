import { Metadata } from 'next';
import { ServicesDB } from '@/lib/services-db';
import { ServicesOverviewClient } from './ServicesOverviewClient';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Services & Capabilities | Achtrex Studio',
  description:
    'Strategies, experiences, stories, contents, interfaces, intelligence and millions of lines of code. Explore our 6 core studio disciplines.',
  openGraph: {
    title: 'Services & Disciplines | Achtrex Studio',
    description:
      'Discover our full-spectrum spatial computing, 3D configurators, custom AI architectures, and interactive digital product capabilities.',
    images: ['/studio-assets/service-cgi-immersive.jpg'],
  },
};

export default function ServicesOverviewPage() {
  const services = ServicesDB.getAll();
  return <ServicesOverviewClient services={services} />;
}
