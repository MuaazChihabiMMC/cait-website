import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Marketing Blog | CAIT SEO & Social Media Agentur Berlin',
  description: 'Aktuelle Insights zu SEO, Google Ads und Social Media Marketing aus Berlin. Experten-Tipps für bessere Rankings, mehr Conversions und erfolgreiche Online-Marketing Strategien.',
};

const blogCategories = [
  {
    id: 'seo',
    title: 'SEO Strategien Berlin',
    description: 'On-Page, Off-Page und technische SEO für bessere Rankings – Expertenwissen speziell für Berliner Unternehmen',
    image: '/seo-content.svg',
    color: 'from-green-500 to-green-700',
    icon: '🔍'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Agentur-Einblicke zu Instagram, TikTok & LinkedIn – Erfolgsstrategien für Berliner Unternehmen',
    image: '/social-media-content.svg',
    color: 'from-blue-500 to-purple-600',
    icon: '📱'
  },
  {
    id: 'google-ads',
    title: 'Google Ads Berlin',
    description: 'Google Ads Agentur-Tipps: Kampagnen-Optimierung & Conversion-Strategien für Berliner Unternehmen',
    image: '/google-ads-content.svg',
    color: 'from-red-500 to-orange-500',
    icon: '📈'
  },
  {
    id: 'webdesign',
    title: 'Webentwicklung Berlin',
    description: 'Professionelle Websites aus Berlin – UX-optimiertes Webdesign & Entwicklung für höhere Conversion-Raten',
    image: '/webdesign-content.svg',
    color: 'from-indigo-500 to-blue-700',
    icon: '💻'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced with SEO keywords */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Deine Marketing Agentur aus Berlin
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              SEO, Google Ads & Social Media
            </span>{' '}
            Expertenwissen aus Berlin
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Der CAIT Marketing Blog bietet strategische Insights zu Suchmaschinenoptimierung, bezahlter Werbung und Social Media – speziell für Unternehmen in Berlin. Erhalten Sie bewährte Strategien für bessere Online-Sichtbarkeit und höhere Conversion-Raten.
          </p>
        </div>
      </section>

      {/* Blog Categories - Optimized category titles and descriptions */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogCategories.map((category) => (
            <Link 
              href={`/blog/${category.id}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-80"
              aria-label={`Mehr erfahren über ${category.title}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 z-0`}></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white text-center">
                <span className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {category.title}
                </h2>
                <p className="text-gray-100 mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium group-hover:bg-white/30 transition-all">
                  Artikel lesen
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Aktuelle Highlights - Added semantic structure */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aktuelle Blog-Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/seo-technical.webp"
                  alt="Technische SEO Optimierung für Websites"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-2">
                  SEO Optimierung
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technische SEO 2024: Die wichtigsten Ranking-Faktoren</h3>
                <p className="text-gray-600 mb-4">Erfahren Sie, welche technischen SEO-Faktoren 2024 entscheidend für Ihr Ranking in Berlin sind.</p>
                <Link href="/blog/seo/technische-seo" className="text-blue-600 hover:text-blue-800 font-medium flex items-center" aria-label="Technische SEO lernen">
                  Jetzt lesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/google-ads-guide.webp"
                  alt="Google Ads Kampagnen richtig starten"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-2">
                  Google Ads
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-2">
                  SEA Strategien
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Google Ads Guide 2024: Professioneller Einstieg für Berliner Unternehmen</h3>
                <p className="text-gray-600 mb-4">Der komplette Leitfaden für erfolgreiche Google Ads Kampagnen - speziell für Unternehmen aus Berlin.</p>
                <Link href="/blog/google-ads/google-ads-einsteiger-guide" className="text-blue-600 hover:text-blue-800 font-medium flex items-center" aria-label="Zum Google Ads Guide">
                  Guide ansehen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>

        {/* SEO Textblock - Enhanced with semantic HTML and keywords */}
        <section className="mt-20 max-w-4xl mx-auto text-gray-700 text-lg space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">CAIT - Ihre Marketing Agentur für Berlin</h2>
          <p>
            Als führende <strong>SEO Agentur Berlin</strong> und <strong>Google Ads Spezialisten</strong> kombinieren wir technisches Know-how mit kreativen Marketing-Strategien. Unsere Expertise umfasst <strong>Suchmaschinenoptimierung</strong>, <strong>Conversion Optimierung</strong> und datengetriebenes <strong>Online Marketing</strong>.
          </p>
          <p>
            Ob Sie eine <strong>SEO Agentur in Berlin</strong>, <strong>Social Media Experten</strong> oder eine <strong>Webagentur</strong> suchen - wir entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen. Unser Fokus liegt auf nachhaltigen Ergebnissen und messbarem Erfolg.
          </p>
          <p>
            Entdecken Sie in unserem Blog praxiserprobte Strategien für <Link href="/blog/seo" className="text-blue-600 hover:underline">SEO in Berlin</Link>, effektive <Link href="/blog/google-ads" className="text-blue-600 hover:underline">Google Ads Kampagnen</Link> und erfolgreiches <Link href="/blog/social-media" className="text-blue-600 hover:underline">Social Media Marketing</Link>. Alle Tipps stammen aus unserer täglichen Arbeit mit Berliner Unternehmen.
          </p>
        </section>
      </section>
    </div>
  );
}