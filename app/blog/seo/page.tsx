import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'SEO Agentur Berlin | SEO Optimierung & Strategien - CAIT Blog',
  description: 'Experten-Tipps Ihrer SEO Agentur Berlin: Technische SEO Optimierung, Content Marketing & Linkbuilding für bessere Rankings in Suchmaschinen',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/seo',
  },
};

const seoPosts = [
  {
    slug: 'technische-seo',
    title: 'SEO Optimierung Berlin: Technische Faktoren 2024',
    excerpt: 'Ihre SEO Agentur verrät: Ladezeiten optimieren, Core Web Vitals verbessern und Indexierung kontrollieren für bessere Rankings',
    image: '/seo-technical.webp',
    tags: ['SEO Optimierung', 'Technical SEO'],
    readTime: '8 min',
    ctaText: 'SEO Optimierung lernen'
  },
  {
    slug: 'content-marketing',
    title: 'Content SEO Strategien Ihrer Agentur aus Berlin',
    excerpt: 'Als SEO Agentur zeigen wir: Keyword-Recherche, Content-Cluster und semantische Optimierung für Top-Rankings',
    image: '/seo-content.svg',
    tags: ['SEO Agentur', 'Content'],
    readTime: '10 min',
    ctaText: 'Content SEO entdecken'
  },
  {
    slug: 'linkbuilding-strategien',
    title: 'Linkbuilding Berlin: Methoden Ihrer SEO Agentur',
    excerpt: 'Natürliches Linkbuilding ohne Risiko - die bewährten Strategien unserer SEO Agentur für Berliner Unternehmen',
    image: '/link-building.svg',
    tags: ['SEO Berlin', 'Off-Page'],
    readTime: '12 min',
    ctaText: 'Linkbuilding Strategien'
  },
];

export default function SeoBlogPage() {
  return (
    <section className="bg-[#0c1832] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header with optimized keywords */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            SEO Agentur Wissen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              SEO Optimierung
            </span>{' '}
            für Berliner Unternehmen
          </h1>
          <p className="text-sm text-blue-300 mt-4">
            Die <strong className="text-white">SEO Agentur Berlin</strong> CAIT teilt ihr Expertenwissen zu <strong className="text-white">SEO Optimierung</strong>, technischer SEO und Content Marketing für nachhaltige Rankings.
          </p>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Als führende <strong className="text-white">SEO Agentur</strong> zeigen wir aktuelle Strategien für technische <strong className="text-white">SEO Optimierung Berlin</strong> und Content-Marketing
          </p>
        </div>

        {/* Blog Posts Grid with keyword-rich content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-blue-900/30 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-800/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.title} - SEO Agentur Berlin`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-800/50 text-blue-300 text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-blue-200 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-400">{post.readTime} Lesezeit</span>
                  <Link 
                    href={`/blog/seo/${post.slug}`} 
                    className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform hover:text-blue-300"
                    aria-label={`Mehr erfahren über ${post.title} - SEO Agentur Berlin`}
                  >
                    {post.ctaText}
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA with location reference */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float border border-blue-400/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SEO Updates für Berliner Unternehmen</h2>
            <p className="text-blue-100 mb-6">Ihre <strong className="text-white">SEO Agentur Berlin</strong> versorgt Sie mit exklusiven Tipps zu <strong className="text-white">SEO Optimierung</strong></p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="E-Mail für SEO Agentur Newsletter"
              />
              <button 
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="SEO Optimierung Tipps erhalten"
              >
                Jetzt abonnieren
              </button>
            </div>
          </div>
        </div>

        {/* Additional SEO text block */}
        <div className="mt-16">
          <div className="bg-blue-900/30 p-6 rounded-lg shadow-sm border border-blue-800/50 space-y-6 text-blue-200 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-white">CAIT - Ihre SEO Agentur in Berlin</h2>
            <p>
              Als erfahrene <strong className="text-white">SEO Agentur Berlin</strong> bieten wir ganzheitliche <strong className="text-white">SEO Optimierung</strong> für Unternehmen jeder Größe. Unsere <strong className="text-white">SEO Agentur</strong> Spezialisten kombinieren technisches Know-how mit strategischem Content Marketing und effektivem Linkbuilding.
            </p>
            <p>
              Egal ob Sie eine <strong className="text-white">SEO Agentur</strong> für technische Optimierung suchen oder eine <strong className="text-white">SEO Optimierung Berlin</strong> für bessere Rankings benötigen - wir entwickeln maßgeschneiderte Lösungen für Ihr Business.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6">Technische SEO Optimierung</h3>
            <p>
              Unsere technische SEO Beratung sorgt dafür, dass Ihre Website in puncto Crawling, Indexierung, Ladezeiten und interner Verlinkung Bestwerte erzielt. Wir analysieren und optimieren Ihre Seitenstruktur, um die Sichtbarkeit in Suchmaschinen zu erhöhen.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6">Content Marketing Strategien</h3>
            <p>
              Mit gezieltem Content Marketing stärken wir Ihre Online-Präsenz. Wir erstellen hochwertige Inhalte, die sowohl für Ihre Zielgruppe als auch für Suchmaschinen relevant sind, und unterstützen Sie bei der Entwicklung einer effektiven Content-Strategie.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6">Linkbuilding Methoden</h3>
            <p>
              Natürliches Linkbuilding ist ein zentraler Bestandteil unserer SEO-Strategie. Wir setzen auf bewährte Methoden, um hochwertige Backlinks zu generieren, die Ihre Domain-Autorität stärken und Ihre Rankings verbessern.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6">Lokale SEO für Berliner Unternehmen</h3>
            <p>
              Für Unternehmen in Berlin ist lokale Sichtbarkeit entscheidend. Wir optimieren Ihre Website für lokale Suchanfragen, damit potenzielle Kunden Sie in Ihrer Region leicht finden können.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6">Fazit</h3>
            <p>
              Mit unserer umfassenden Expertise als <strong className="text-white">SEO Agentur Berlin</strong> unterstützen wir Sie dabei, Ihre Online-Präsenz zu stärken und nachhaltige Erfolge in den Suchmaschinen zu erzielen. Kontaktieren Sie uns für eine individuelle Beratung und erfahren Sie, wie wir Ihr Unternehmen nach vorne bringen können.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}