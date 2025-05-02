import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Marketing Blog | CAITSocialMedia',
  description: 'Aktuelle Insights zu SEO, Social Media, Google Ads und Webdesign',
};

const blogCategories = [
  {
    id: 'seo',
    title: 'SEO Strategien',
    description: 'On-Page, Off-Page und technische SEO für bessere Rankings',
    image: '/seo-content.svg',
    color: 'from-green-500 to-green-700',
    icon: '🔍'
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Content-Strategien für Instagram, TikTok & LinkedIn',
    image: '/social-media-content.svg',
    color: 'from-blue-500 to-purple-600',
    icon: '📱'
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Kampagnen-Optimierung für maximale Conversion',
    image: '/google-ads-content.svg',
    color: 'from-red-500 to-orange-500',
    icon: '📈'
  },
  {
    id: 'webdesign',
    title: 'Webdesign',
    description: 'Moderne Websites die konvertieren',
    image: '/webdesign-content.svg',
    color: 'from-indigo-500 to-blue-700',
    icon: '💻'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Marketing Wissen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Digitale Strategien
            </span>{' '}
            für Ihr Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aktuelle Trends und bewährte Methoden für mehr Sichtbarkeit und Conversion
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogCategories.map((category) => (
            <Link 
              href={`/blog/${category.id}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-80"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 z-0`}></div>
              
              {/* Content */}
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
                  Mehr erfahren
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Featured Articles Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aktuelle Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/seo-technical.webp"
                  alt="Technische SEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-2">
                  SEO
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technische SEO 2024</h3>
                <p className="text-gray-600 mb-4">Die wichtigsten Ranking-Faktoren für Ihre Website</p>
                <Link href="/blog/seo/technische-seo" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Weiterlesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/featured-social.jpg"
                  alt="Social Media Strategien"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-2">
                  Social Media
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Content-Strategien für TikTok</h3>
                <p className="text-gray-600 mb-4">Wie Sie virale Reichweite erzielen</p>
                <Link href="/blog/social-media/tiktok-strategien" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Weiterlesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bleiben Sie auf dem Laufenden</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Abonnieren Sie unseren Newsletter für exklusive Marketing-Tipps und Updates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ihre E-Mail-Adresse" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Abonnieren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}