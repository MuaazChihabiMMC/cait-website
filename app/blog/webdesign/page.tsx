import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Webdesign & Entwicklung | CAITSocialMedia Blog',
  description: 'Aktuelle Trends und Best Practices für modernes Webdesign und Webentwicklung',
};

const webDesignPosts = [
  {
    slug: 'responsives-webdesign',
    title: 'Responsive Webdesign: Best Practices 2024',
    excerpt: 'Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.',
    image: '/responsive-design.svg',
    tags: ['Responsive', 'UI/UX'],
    readTime: '7 min',
    date: '15. November 2024',
    ctaText: 'Responsive Design lernen'
  },
  {
    slug: 'performance-optimierung',
    title: 'Website-Performance maximieren',
    excerpt: 'Wie Sie Ladezeiten reduzieren und die User Experience verbessern.',
    image: '/website-speed.webp',
    tags: ['Performance', 'Optimierung'],
    readTime: '9 min',
    date: '5. November 2024',
    ctaText: 'Performance-Tipps sehen'
  },
  {
    slug: 'web-accessibility',
    title: 'Barrierefreies Webdesign',
    excerpt: 'Inklusive Gestaltung für alle Nutzer gemäß WCAG-Richtlinien.',
    image: '/accessibility.webp',
    tags: ['Accessibility', 'UI/UX'],
    readTime: '8 min',
    date: '28. Oktober 2024',
    ctaText: 'Zum Accessibility-Guide'
  },
  {
    slug: 'modernes-css',
    title: 'Moderne CSS-Techniken 2024',
    excerpt: 'CSS Grid, Container Queries und neue Features effektiv nutzen.',
    image: '/css-trends.webp',
    tags: ['CSS', 'Frontend'],
    readTime: '6 min',
    date: '20. Oktober 2024',
    ctaText: 'CSS-Techniken entdecken'
  },
  {
    slug: 'javascript-frameworks',
    title: 'JavaScript Frameworks im Vergleich',
    excerpt: 'React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.',
    image: '/js-frameworks.webp',
    tags: ['JavaScript', 'Frameworks'],
    readTime: '10 min',
    date: '12. Oktober 2024',
    ctaText: 'Frameworks vergleichen'
  },
  {
    slug: 'wordpress-entwicklung',
    title: 'Moderne WordPress-Entwicklung',
    excerpt: 'Block-Themes, Headless CMS und Performance-Tuning für WordPress.',
    image: '/wordpress-dev.webp',
    tags: ['WordPress', 'CMS'],
    readTime: '8 min',
    date: '5. Oktober 2024',
    ctaText: 'WordPress-Tipps lesen'
  }
];

export default function WebDesignBlogPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Webdesign & Entwicklung
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Moderne Webtechnologien
            </span>{' '}
            für digitale Präsenz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aktuelle Trends und Technologien für moderne Websites und Anwendungen
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDesignPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link 
                href={`/blog/webdesign/${post.slug}`} 
                className="block h-full"
                aria-label={`Mehr über ${post.title} erfahren`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Coverbild für ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={post.slug === 'responsives-webdesign'} // Erstes Bild priorisieren
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime} Lesezeit • {post.date}</span>
                    <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      {post.ctaText}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Webdesign Updates erhalten</h2>
            <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Tipps und Trends</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="E-Mail für Webdesign-Newsletter"
              />
              <button 
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Newsletter abonnieren"
              >
                Abonnieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}