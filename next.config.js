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