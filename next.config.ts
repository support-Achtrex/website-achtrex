import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dzxlcxwnkddnrijzbnix.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/fonts/:all*(woff2|woff|ttf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/hero-videos/:all*(mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/studio-assets/:all*(svg|jpg|jpeg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/legal#privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/legal#terms',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/legal#security',
        permanent: true,
      },
      {
        source: '/portal/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/portal',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/admin/projects/:path*',
        destination: '/admin',
        permanent: true,
      },
      {
        source: '/admin/projects',
        destination: '/admin',
        permanent: true,
      },
      {
        source: '/press-release/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/press-release',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/projects/aura-interactive-vehicle',
        destination: '/projects/automotive-spatial-configurator',
        permanent: true,
      },
      {
        source: '/projects/nova-immersive-property',
        destination: '/projects/architectural-spatial-experience',
        permanent: true,
      },
      {
        source: '/projects/lumen-intelligent-product',
        destination: '/projects/intelligent-copilot-interface',
        permanent: true,
      },
      {
        source: '/projects/after-dark-brand-campaign',
        destination: '/projects/interactive-storytelling-campaign',
        permanent: true,
      },
      {
        source: '/projects/form-product-customization',
        destination: '/projects/realtime-product-customizer',
        permanent: true,
      },
      {
        source: '/projects/careflow-digital-healthcare',
        destination: '/projects/intelligent-clinical-platform',
        permanent: true,
      },
      {
        source: '/projects/sora-digital-resort',
        destination: '/projects/connected-hospitality-platform',
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  transpilePackages: ['framer-motion'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
