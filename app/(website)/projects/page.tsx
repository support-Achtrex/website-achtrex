import { Metadata } from 'next';
import { ProjectsDB } from '@/lib/projects-db';
import { ProjectsGalleryClient } from './ProjectsGalleryClient';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Concept Experiences & Production Architecture | Achtrex Studio',
  description:
    'Interactive 3D configurators, autonomous AI systems, kinetic storytelling and clinical product engineering demonstrations across automotive, spatial and high-tech sectors.',
  alternates: {
    canonical: 'https://achtrex.com/projects',
  },
  openGraph: {
    title: 'Concept Experiences & Production Architecture | Achtrex Studio',
    description:
      'Explore live concept simulators, real-time 3D environments, and engineering prototypes developed by Achtrex Studio.',
    url: 'https://achtrex.com/projects',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/preview-lumen.jpg',
      width: 1200,
      height: 630,
      alt: 'Achtrex Concept Experiences and Production Architecture',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concept Experiences & Production Architecture | Achtrex Studio',
    description:
      'Interactive 3D configurators, autonomous AI systems, and engineering prototypes developed by Achtrex Studio.',
    images: ['/studio-assets/preview-lumen.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://achtrex.com/projects#webpage',
  'name': 'Achtrex Concept Experiences & Production Projects',
  'url': 'https://achtrex.com/projects',
  'description': 'Interactive 3D configurators, autonomous AI systems, kinetic storytelling and product engineering prototypes.',
  'publisher': {
    '@type': 'Corporation',
    '@id': 'https://achtrex.com/#corporation',
    'name': 'Achtrex',
    'url': 'https://achtrex.com'
  }
};

export default function ProjectsGalleryPage() {
  const projects = ProjectsDB.getAll();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsGalleryClient projects={projects} />
    </>
  );
}
