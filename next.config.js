/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export'
}
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
};
module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {
        source: '/google-ads',
        destination: '/google-ads-agentur-berlin',
        permanent: true,
      },
    ];
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/seo',
        destination: '/seo-agentur-berlin',
        permanent: true,
      },
    ];
  },
};

module.exports = {
  async redirects() {
    return [
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
    ];
  },
};