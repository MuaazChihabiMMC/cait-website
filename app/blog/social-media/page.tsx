import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Social Media Strategien | CAITSocialMedia Blog',
  description: 'Aktuelle Tipps für Instagram, TikTok & LinkedIn - Content-Strategien und organisches Wachstum',
};

const socialMediaPosts = [
  {
    slug: 'content-strategien',
    title: 'Content-Strategien für Social Media 2024',
    excerpt: 'Plattformspezifische Inhalte erstellen für maximale Reichweite',
    image: '/socialmediacontent.webp',
    tags: ['Content', 'Strategie'],
    readTime: '9 min',
    ctaText: 'Content-Strategien ansehen'
  },
  {
    slug: 'tiktok-wachstum',
    title: 'TikTok Growth: Virale Reichweite erzielen',
    excerpt: 'Algorithmus verstehen und für Ihr Business nutzen',
    image: '/tiktokPhoto.webp',
    tags: ['TikTok', 'Video'],
    readTime: '11 min',
    ctaText: 'TikTok-Tipps entdecken'
  },
  {
    slug: 'instagram-reels',
    title: 'Instagram Reels: Professionell produzieren',
    excerpt: 'Wie Sie mit Reels neue Zielgruppen erreichen',
    image: '/instagram-strategien.webp',
    tags: ['Instagram', 'Reels'],
    readTime: '7 min',
    ctaText: 'Reels-Guide lesen'
  },
];

export default function SocialMediaBlogPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            Social Media
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Social Media
            </span>{' '}
            für Business-Wachstum
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aktuelle Strategien für Instagram, TikTok und LinkedIn Marketing
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link 
                href={`/blog/social-media/${post.slug}`} 
                className="block h-full"
                aria-label={`Mehr über ${post.title} erfahren`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Coverbild für ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={post.slug === 'content-strategien'} // Erstes Bild priorisieren
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime} Lesezeit</span>
                    <span className="text-purple-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
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
        <div className="mt-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Social Media Updates erhalten</h2>
            <p className="text-purple-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Strategien</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                aria-label="E-Mail für Social Media Newsletter"
              />
              <button 
                className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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