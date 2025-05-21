import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const socialMediaPosts = {
  'content-strategien': {
    title: 'Social Media Content Strategien 2024',
    metaDescription: 'Aktuelle Content-Strategien für Instagram, TikTok & LinkedIn - Wie Sie organische Reichweite steigern',
    content: `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warum Content-Strategien entscheidend sind</h2>
<p class="text-gray-700 mb-6">In der schnelllebigen Welt der sozialen Medien entscheidet Ihre Content-Strategie über Erfolg oder Unsichtbarkeit. Wir zeigen Ihnen bewährte Methoden, um organische Reichweite zu generieren und eine treue Community aufzubauen.</p>

<div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-purple-800 mb-1">Statistik:</p>
  <p class="text-purple-700">Marken mit konsistenter Content-Strategie verzeichnen 3x höhere Engagement-Raten.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Plattformspezifische Inhalte erstellen</h3>
<p class="text-gray-700 mb-4">Jede Plattform erfordert einen eigenen Ansatz:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Instagram:</span> Hochwertige Visuals + Story-Highlights</li>
  <li><span class="font-medium">TikTok:</span> Authentische, unterhaltsame Kurzvideos</li>
  <li><span class="font-medium">LinkedIn:</span> Fachwissen + Karriere-Insights</li>
  <li><span class="font-medium">Facebook:</span> Gemeinschaftsorientierte Inhalte</li>
</ul>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-purple-600 mb-3">Optimale Posting-Zeiten</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Instagram: 11-13 Uhr Wochentage</li>
      <li>• TikTok: 16-18 Uhr Wochenenden</li>
      <li>• LinkedIn: 8-10 Uhr Dienstag/Mittwoch</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-purple-600 mb-3">Content-Mix Empfehlung</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• 50% wertvolle Infos</li>
      <li>• 30% Community-Inhalte</li>
      <li>• 20% Promotion</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. TikTok Growth Strategien</h3>
<p class="text-gray-700 mb-4">So gewinnen Sie virale Reichweite:</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-1">Profi-Tipp:</p>
  <p class="text-blue-700">Nutzen Sie aktuelle Sounds und Challenges, aber fügen Sie immer einen einzigartigen Twist hinzu.</p>
</div>

<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Nischen-Hashtags:</span> 3-5 mittelgroße Hashtags</li>
  <li><span class="font-medium">Erste Kommentare:</span> Algorithmus-Boost durch Engagement</li>
  <li><span class="font-medium">Duette/Reacts:</span> Interaktion mit größeren Accounts</li>
  <li><span class="font-medium">Consistency:</span> 3-5 Posts pro Woche</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Instagram Reels Optimierung</h3>
<p class="text-gray-700 mb-4">Maximieren Sie Ihre Sichtbarkeit:</p>

<div class="grid md:grid-cols-3 gap-4 my-6">
  <div class="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
    <div class="text-purple-500 mb-2 text-2xl">👁️</div>
    <h4 class="font-bold text-purple-600 mb-2">Aufmerksamkeit</h4>
    <p class="text-gray-700 text-sm">Erste 3 Sekunden entscheidend</p>
  </div>
  <div class="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
    <div class="text-purple-500 mb-2 text-2xl">🔄</div>
    <h4 class="font-bold text-purple-600 mb-2">Wiedergabezeit</h4>
    <p class="text-gray-700 text-sm">Mindestens 75% Completion Rate</p>
  </div>
  <div class="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
    <div class="text-purple-500 mb-2 text-2xl">💬</div>
    <h4 class="font-bold text-purple-600 mb-2">Interaktion</h4>
    <p class="text-gray-700 text-sm">Fragen in Captions stellen</p>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. LinkedIn für B2B-Marketing</h3>
<p class="text-gray-700 mb-4">So positionieren Sie sich als Experte:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li>Lösungsorientierte Case Studies teilen</li>
  <li>Persönliche Erfolgsgeschichten</li>
  <li>Kommentare auf relevanten Posts</li>
  <li>Newsletter-Integration</li>
</ul>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Social Media Experte',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi hat über 5 Jahre Erfahrung im Aufbau erfolgreicher Social-Media-Strategien für Unternehmen verschiedener Branchen. Als Inhaber von CAIT Social Media entwickelt er datengetriebene Content-Pläne, die organische Reichweite und Engagement steigern.'
    },
    date: '10. Juli 2024',
    readTime: '11 min',
    tags: ['Social Media', 'Content Strategie', 'TikTok', 'Instagram']
  },
};

export default function SocialMediaPage() {
  const post = socialMediaPosts['content-strategien'];
  if (!post) return notFound();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Social Media
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-purple-100">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src="/socialmediacontent.webp"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>

       <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-xl">
         <div className="flex flex-col md:flex-row items-center gap-6">
           {/* Autor Bild - Jetzt richtig proportioniert */}
           <div className="w-24 h-24 md:w-60 md:h-32 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
             <Image
               src={post.author.image}
               alt={`Portrait von ${post.author.name}`}
               fill
               className="object-cover"
               sizes="(max-width: 768px) 96px, 128px"
               priority
             />
           </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900">{post.author.name}</h3>
              <p className="text-purple-600 font-medium mb-2 md:mb-3">{post.author.role}</p>
              <p className="text-gray-700 text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                
                <a href="https://www.linkedin.com/in/muaaz-chihabi/" className="text-purple-500 hover:text-purple-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

{/* SEO-Fließtext zur Einleitung (für Google & Nutzer) */}
<section className="max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed px-6 py-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum Content-Strategien auf Social Media über Erfolg entscheiden</h2>
  <p className="mb-4">
    In der heutigen digitalen Landschaft sind durchdachte <strong>Content-Strategien für Social Media</strong> der Schlüssel zu Sichtbarkeit, Vertrauen und Reichweite. 
    Plattformen wie <strong>Instagram</strong>, <strong>TikTok</strong> und <strong>LinkedIn</strong> bieten enorme Chancen – doch nur wer gezielt kommuniziert, erzielt nachhaltige Ergebnisse.
  </p>
  <p>
    In diesem Beitrag zeigen wir dir datenbasierte Ansätze, um deine Contentplanung zu optimieren und mit relevanten Formaten auf jeder Plattform zu überzeugen. 
    Von Posting-Zeiten bis Reels-Strategien – lerne, wie du Inhalte erstellst, die algorithmusfreundlich und gleichzeitig zielgruppengerecht sind.
  </p>
</section>

     {/* Related Articles */}
<section className="max-w-4xl mx-auto px-6 mb-20">
  <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Social Media Artikel</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {/* TikTok Article */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src="/tiktokPhoto.webp"
          alt="TikTok Strategien"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-2">
          TikTok
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Virale TikTok-Strategien</h3>
        <p className="text-gray-600 mb-4">Wie Sie den Algorithmus verstehen und nutzen</p>
        <Link 
          href="/blog/social-media/tiktok-wachstum" 
          className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
          aria-label="TikTok Algorithmus Strategien ansehen"
        >
          TikTok-Algorithmus verstehen
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>

    {/* Instagram Article */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src="/instagram-strategien.webp"
          alt="Instagram Reels Produktion"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-2">
          Instagram
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Reels Masterclass</h3>
        <p className="text-gray-600 mb-4">Professionelle Produktion auf Budget</p>
        <Link 
          href="/blog/social-media/instagram-reels" 
          className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
          aria-label="Instagram Reels Produktions-Tipps ansehen"
        >
          Reels-Produktion lernen
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export async function generateMetadata() {
  const post = socialMediaPosts['content-strategien'];
  return {
    title: `${post.title} | CAITSocialMedia`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: '/social-media-hero.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: ['/social-media-hero.webp'],
    },
  };
}