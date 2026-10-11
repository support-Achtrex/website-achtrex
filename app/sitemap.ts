import { MetadataRoute } from 'next';
import { SERVICES, PROJECTS } from '@/data/studio-data';
import { blogPosts } from '@/lib/blog-data';
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
    '/legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/media' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/media' ? 0.9 : 0.85,
  }));

  // Service Detail Routes
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Project Detail Routes
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic Media Newsroom Routes
  const mediaItems = MediaDB.getAll();
  const mediaRoutes: MetadataRoute.Sitemap = mediaItems.map((item) => ({
    url: `${baseUrl}/media/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Blog Routes
  const blogRoutes: MetadataRoute.Sitemap = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    ...staticStudioRoutes, 
    ...serviceRoutes, 
    ...projectRoutes, 
    ...mediaRoutes, 
    ...blogRoutes
  ];
}
