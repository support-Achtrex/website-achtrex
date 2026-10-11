import { Metadata } from 'next';
import { ProjectsDB } from '@/lib/projects-db';
import { ProjectsGalleryClient } from './ProjectsGalleryClient';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Concept Experiences & Production Architecture | Achtrex Studio',
  description:
    'Interactive 3D configurators, autonomous AI systems, kinetic storytelling and clinical product engineering demonstrations across automotive, spatial and high-tech sectors.',
  openGraph: {
    title: 'Concept Experiences & Production Architecture | Achtrex Studio',
    description:
      'Explore live concept simulators, real-time 3D environments, and engineering prototypes developed by Achtrex Studio.',
    images: ['/studio-assets/preview-lumen.jpg'],
  },
};

export default function ProjectsGalleryPage() {
  const projects = ProjectsDB.getAll();
  return <ProjectsGalleryClient projects={projects} />;
}
