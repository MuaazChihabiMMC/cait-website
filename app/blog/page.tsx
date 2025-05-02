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
    image: '/blog-seo.jpg',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Content-Strategien für Instagram, TikTok & LinkedIn',
    image: '/blog-social.jpg',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Kampagnen-Optimierung für maximale Conversion',
    image: '/blog-ads.jpg',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'webdesign',
    title: 'Webdesign',
    description: 'Moderne Websites die konvertieren',
    image: '/blog-design.jpg',
    color: 'from-indigo-500 to-blue-700',
  },
];

export default function BlogPage() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Marketing Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aktuelle Strategien und Trends für digitale Sichtbarkeit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogCategories.map((category) => (
            <Link 
              href={`/blog/${category.id}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-90 z-10 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} mix-blend-multiply opacity-80`} />
              </div>
              
              <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                <div className="transform transition-all duration-500 group-hover:-translate-y-3">
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="text-gray-100 mb-4">{category.description}</p>
                  <span className="inline-block px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-semibold transition-all group-hover:bg-opacity-90 group-hover:translate-y-2">
                    Artikel entdecken →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}