import { MetadataRoute } from 'next';
import { ServicesDB } from '@/lib/services-db';
import { ProjectsDB } from '@/lib/projects-db';
import { MediaDB } from '@/lib/media-db';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://achtrex.com';

  // Primary Studio Routes
  const staticStudioRoutes: MetadataRoute.Sitemap = [
    '',
    '/projects',
    '/services',
    '/media',
    '/about',
    '/contact',
    '/terms',
    '/privacy',
    '/legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/media' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/media' ? 0.9 : route === '/terms' || route === '/privacy' ? 0.7 : 0.85,
  }));

  // Dynamic Service Detail Routes from DB
  const services = ServicesDB.getAll();
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic Project Detail Routes from DB
  const projects = ProjectsDB.getAll();
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic Media Newsroom Routes from DB
  const mediaItems = MediaDB.getAll();
  const mediaRoutes: MetadataRoute.Sitemap = mediaItems.map((item) => ({
    url: `${baseUrl}/media/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticStudioRoutes, 
    ...serviceRoutes, 
    ...projectRoutes, 
    ...mediaRoutes
  ];
}
