import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Google Ads Strategien | CAITSocialMedia Blog',
  description: 'Erfolgreiche SEA-Taktiken mit Google Ads. Anzeigenerstellung, Conversion-Optimierung & Budgetkontrolle',
};

const googleAdsPosts = [
  {
    slug: 'google-ads-einsteiger-guide',
    title: 'Google Ads Guide 2024: So starten Sie richtig',
    excerpt: 'Von der Kontoerstellung bis zu ersten Kampagnen. Der Einstieg in bezahlte Suchanzeigen leicht gemacht.',
    image: '/google-ads-guide.webp',
    tags: ['Google Ads', 'SEA Basics'],
    readTime: '7 min',
    ctaText: 'Zum Google Ads Guide'
  },
  {
    slug: 'conversion-optimierung-ads',
    title: 'Conversion-Optimierung in Google Ads',
    excerpt: 'Erfahren Sie, wie Sie mit Landingpages, A/B-Tests und Anzeigenerweiterungen mehr aus Ihrem Budget holen.',
    image: '/google-ads-guide.webp',
    tags: ['Conversions', 'Landingpages'],
    readTime: '9 min',
    ctaText: 'Conversion-Tipps lesen'
  },
  {
    slug: 'google-ads-budget-strategien',
    title: 'Effektives Budgetmanagement in Google Ads',
    excerpt: 'Lernen Sie, wie Sie Ihr Werbebudget gezielt einsetzen und Streuverluste vermeiden.',
    image: '/google-ads-guide.webp',
    tags: ['Budgetierung', 'Kampagnen'],
    readTime: '8 min',
    ctaText: 'Budgetstrategien entdecken'
  },
];

export default function GoogleAdsBlogPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Google Ads Wissen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Google Ads Strategien
            </span>{' '}
            für profitables Wachstum
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Praxisnahe Tipps zu Kampagnenaufbau, Budgetierung und Optimierung Ihrer Google-Anzeigen
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleAdsPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link 
                href={`/blog/google-ads/${post.slug}`} 
                className="block h-full"
                aria-label={`Mehr über ${post.title} erfahren`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Coverbild für ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={post.slug === 'google-ads-einsteiger-guide'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime} Lesezeit</span>
                    <span className="text-yellow-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
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
        <div className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Google Ads Know-how direkt ins Postfach</h2>
            <p className="text-yellow-100 mb-6">Jetzt zum Newsletter anmelden und exklusive SEA-Tipps erhalten</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                aria-label="E-Mail für Google Ads Newsletter"
              />
              <button 
                className="px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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