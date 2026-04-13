import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://achtrex.com';

    // Static Routes
    const routes = [
        '',
        '/about-us',
        '/products',
        '/products/automotive',
        '/products/carkasa',
        '/products/lumi',
        '/products/vehiclereport',
        '/why-achtrex',
        '/contact-us',
        '/blog',
        '/request-quote'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
