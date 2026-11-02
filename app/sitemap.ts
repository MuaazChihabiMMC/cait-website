import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.caitsocialmedia.com';

    // Statische Routen
    const routes = [
        '',
        '/ueber-uns',
        '/kontakt',
        '/impressum',
        '/datenschutz',
        '/referenzen',
        '/leistungen',
        '/webentwicklung',
        '/softwareentwicklung',
        '/ki-loesungen',
        '/social-media',
        '/google-ads-agentur-berlin',
        '/pr-agentur-berlin',
        '/seo-agentur-berlin',
    ];

    // SEO Unterseiten
    const seoRoutes = [
        '/seo-agentur-berlin/beratung',
        '/seo-agentur-berlin/content-erstellung',
        '/seo-agentur-berlin/ecommerce-seo',
        '/seo-agentur-berlin/keyword-recherche',
        '/seo-agentur-berlin/lokale-seo',
        '/seo-agentur-berlin/monitoring-reporting',
        '/seo-agentur-berlin/offpage-seo',
        '/seo-agentur-berlin/onpage-seo',
        '/seo-agentur-berlin/technisches-seo',
    ];

    // Blog Kategorien
    const blogRoutes = [
        '/blog',
        '/blog/google-ads',
        '/blog/seo',
        '/blog/social-media',
        '/blog/webdesign',
    ];

    // Blog Artikel (Manuell pflegen oder später dynamisch machen)
    const blogPosts = [
        // Social Media
        '/blog/social-media/content-strategien',
        '/blog/social-media/tiktok-wachstum',
        '/blog/social-media/instagram-reels',
        // Webdesign
        '/blog/webdesign/responsives-webdesign',
        '/blog/webdesign/performance-optimierung',
        '/blog/webdesign/web-accessibility',
        '/blog/webdesign/modernes-css',
        '/blog/webdesign/javascript-frameworks',
        '/blog/webdesign/wordpress-entwicklung',
        // Google Ads
        '/blog/google-ads/google-ads-einsteiger-guide',
        '/blog/google-ads/conversion-optimierung-ads',
        '/blog/google-ads/google-ads-budget-strategien',
        // SEO
        '/blog/seo/technische-seo',
        '/blog/seo/content-marketing',
        '/blog/seo/linkbuilding-strategien',
    ];

    const allRoutes = [...routes, ...seoRoutes, ...blogRoutes, ...blogPosts];

    const core = ['/leistungen', '/seo-agentur-berlin', '/webentwicklung', '/google-ads-agentur-berlin', '/social-media', '/softwareentwicklung', '/ki-loesungen', '/kontakt'];
    const legal = ['/impressum', '/datenschutz'];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: legal.includes(route) ? 'yearly' : route.startsWith('/blog') ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : core.includes(route) ? 0.9 : legal.includes(route) ? 0.3 : 0.7,
    }));
}
