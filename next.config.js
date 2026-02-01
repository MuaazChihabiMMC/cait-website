/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Consolidated redirects
  async redirects() {
    return [
      {
        source: '/google-ads',
        destination: '/google-ads-agentur-berlin',
        permanent: true,
      },
      {
        source: '/seo',
        destination: '/seo-agentur-berlin',
        permanent: true,
      },
      {
        source: '/seo/content-erstellung',
        destination: '/seo-agentur-berlin/content-erstellung',
        permanent: true,
      },
      {
        source: '/seo/keyword-recherche',
        destination: '/seo-agentur-berlin/keyword-recherche',
        permanent: true,
      },
      {
        source: '/seo/lokale-seo',
        destination: '/seo-agentur-berlin/lokale-seo',
        permanent: true,
      },
      {
        source: '/seo/monitoring-reporting',
        destination: '/seo-agentur-berlin/monitoring-reporting',
        permanent: true,
      },
      {
        source: '/seo/offpage-seo',
        destination: '/seo-agentur-berlin/offpage-seo',
        permanent: true,
      },
      {
        source: '/seo/onpage-seo',
        destination: '/seo-agentur-berlin/onpage-seo',
        permanent: true,
      },
      {
        source: '/seo/technisches-seo',
        destination: '/seo-agentur-berlin/technisches-seo',
        permanent: true,
      },
      {
        source: '/social-media-marketing-berlin',
        destination: '/social-media',
        permanent: true,
      },
      {
        source: '/webenticklung-webdesign',
        destination: '/webentwicklung',
        permanent: true,
      },
      {
        source: '/seo-optimierung',
        destination: '/seo-agentur-berlin',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/ueber-uns',
        permanent: true,
      },
      {
        source: '/content-writing-berlin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ads-management-berlin',
        destination: '/google-ads-agentur-berlin',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;