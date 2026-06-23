import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { pressReleases } from '@/lib/press-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://achtrex.com';

    // Static Routes
    const routes: MetadataRoute.Sitemap = [
        '',
        '/about-us',
        '/products',
        '/products/automotive',
        '/products/lumi',
        '/products/enterprise-platforms',
        '/why-achtrex',
        '/contact-us',
        '/blog',
        '/request-quote',
        '/life-at-achtrex',
        '/partners',
        '/press-release',
        '/services/ai-training',
        '/use-cases',
        '/privacy',
        '/terms'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1 : (route.startsWith('/products') ? 0.9 : 0.8),
    }));

    // Dynamic Blog Routes
    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // Dynamic Press Release Routes
    const pressRoutes: MetadataRoute.Sitemap = pressReleases.map((press) => ({
        url: `${baseUrl}/press-release/${press.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Dynamic Industry Routes
    const industrySlugs = [
        'auto-insurance',
        'car-dealerships',
        'auto-repair',
        'car-website',
        'classifieds-websites',
        'car-rental',
        'auto-parts',
        'car-finance',
        'manufacturers'
    ];
    
    const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...routes, ...blogRoutes, ...pressRoutes, ...industryRoutes];
}
