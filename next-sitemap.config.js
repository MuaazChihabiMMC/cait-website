/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.caitsocialmedia.com', // <-- deine Domain
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/api/*'], // falls du /api nicht willst
  };