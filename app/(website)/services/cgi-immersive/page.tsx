import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'CGI & Immersive Experiences',
  description: 'There is more than one reality. CGI production, 3D visualization, WebGL, Unreal Engine 5, Augmented and Virtual Reality.',
  alternates: {
    canonical: 'https://achtrex.com/services/cgi-immersive',
  },
  openGraph: {
    title: 'CGI & Immersive Experiences | Achtrex Studio',
    description: 'We craft new visual languages: reproducing reality with absolute precision and taking it to higher levels.',
    url: 'https://achtrex.com/services/cgi-immersive',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/service-cgi-immersive.jpg',
      width: 1200,
      height: 630,
      alt: 'CGI and Immersive Experiences',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGI & Immersive Experiences | Achtrex Studio',
    description: 'Photorealistic CGI, real-time 3D, WebGL/WebGPU viewports, and spatial computing.',
    images: ['/studio-assets/service-cgi-immersive.jpg'],
  },
};

export default function CgiImmersivePage() {
  const service = ServicesDB.getBySlug('cgi-immersive') ?? SERVICES.find((s) => s.id === 'cgi-immersive');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
