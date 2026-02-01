/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.caitsocialmedia.com',
  generateRobotsTxt: false, // We manually maintain robots.txt in public/
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude: [
    '/*?*', // Exclude all URLs with query parameters
    '/api/*',
  ],
};