import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const instagramPost = {
  'instagram-strategien': {
    title: 'Content-Strategien für Instagram 2024',
    metaDescription: 'Bewährte Methoden für organische Reichweite auf Instagram - Algorithmus verstehen, Reels optimieren und Engagement steigern',
    alternates: {
      canonical: 'https://www.caitsocialmedia.com/blog/social-media/instagram-reels',
    },
    content: `
      <h2 class="text-2xl font-bold text-blue-100 mt-8 mb-4">Instagram Marketing im Jahr 2024</h2>
      <p class="text-blue-200 mb-6">Mit über 2 Milliarden monatlich aktiven Nutzern bleibt Instagram eine der wichtigsten Plattformen für Marken. Doch der Algorithmus hat sich verändert - wir zeigen Ihnen, wie Sie organische Reichweite erzielen.</p>

      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Statistik:</p>
        <p class="text-blue-200">Instagram Reels erhalten 40% mehr Reichweite als normale Posts.</p>
      </div>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">1. Den Instagram-Algorithmus verstehen</h3>
      <p class="text-blue-200 mb-4">So funktioniert die Content-Verteilung 2024:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li><span class="font-medium text-blue-300">Engagement:</span> Likes, Kommentare, Shares und Saves</li>
        <li><span class="font-medium text-blue-300">Watch Time:</span> Wie lange Nutzer Ihre Videos anschauen</li>
        <li><span class="font-medium text-blue-300">Beziehungen:</span> Interaktion mit Followern</li>
        <li><span class="font-medium text-blue-300">Timeliness:</span> Aktualität der Inhalte</li>
      </ul>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
          <h4 class="font-bold text-blue-300 mb-3">Optimale Posting-Zeiten</h4>
          <ul class="space-y-2 text-blue-200">
            <li>• 9-11 Uhr Wochentage</li>
            <li>• 19-21 Uhr Abends</li>
            <li>• 11-13 Uhr Sonntage</li>
          </ul>
        </div>
        <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
          <h4 class="font-bold text-blue-300 mb-3">Content-Mix Empfehlung</h4>
          <ul class="space-y-2 text-blue-200">
            <li>• 50% Reels</li>
            <li>• 30% Stories</li>
            <li>• 20% Feed-Posts</li>
          </ul>
        </div>
      </div>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">2. Reels-Strategien die funktionieren</h3>
      <p class="text-blue-200 mb-4">So erstellen Sie virale Instagram Reels:</p>

      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Profi-Tipp:</p>
        <p class="text-blue-200">Die ersten 3 Sekunden entscheiden über 70% des Erfolgs - starten Sie mit einer starken Hook!</p>
      </div>

      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li><span class="font-medium text-blue-300">Trending Audio:</span> Nutzen Sie aktuelle Sounds</li>
        <li><span class="font-medium text-blue-300">Text-Overlays:</span> Für stummes Zuschauen</li>
        <li><span class="font-medium text-blue-300">Captions:</span> Fügen Sie Untertitel hinzu</li>
        <li><span class="font-medium text-blue-300">CTA:</span> Klare Handlungsaufforderung</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">3. Instagram Stories für Engagement</h3>
      <p class="text-blue-200 mb-4">Stories haben eine 15-25% höhere Interaktionsrate:</p>

      <div class="grid md:grid-cols-3 gap-4 my-6">
        <div class="bg-blue-900/30 p-4 rounded-lg shadow border border-blue-800 text-center">
          <div class="text-blue-300 mb-2 text-2xl">📊</div>
          <h4 class="font-bold text-blue-300 mb-2">Umfragen</h4>
          <p class="text-blue-200 text-sm">Steigern Interaktion</p>
        </div>
        <div class="bg-blue-900/30 p-4 rounded-lg shadow border border-blue-800 text-center">
          <div class="text-blue-300 mb-2 text-2xl">🔄</div>
          <h4 class="font-bold text-blue-300 mb-2">Swipe-Up</h4>
          <p class="text-blue-200 text-sm">Für Link-Klicks</p>
        </div>
        <div class="bg-blue-900/30 p-4 rounded-lg shadow border border-blue-800 text-center">
          <div class="text-blue-300 mb-2 text-2xl">💬</div>
          <h4 class="font-bold text-blue-300 mb-2">Fragen</h4>
          <p class="text-blue-200 text-sm">Generieren DMs</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">4. Hashtag-Strategie</h3>
      <p class="text-blue-200 mb-4">Die perfekte Hashtag-Kombination:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li>3-5 große Hashtags (500k+ Posts)</li>
        <li>5-7 mittlere Hashtags (50k-500k Posts)</li>
        <li>3-5 Nischen-Hashtags (<50k Posts)</li>
        <li>1-2 Branded Hashtags</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">5. Instagram SEO optimieren</h3>
      <p class="text-blue-200 mb-4">So werden Sie in Suchen gefunden:</p>
      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Keywords einbinden:</p>
        <p class="text-blue-200">In Bio, Captions, Alt-Text und Hashtags. Nutzen Sie spezifische Suchbegriffe Ihrer Zielgruppe.</p>
      </div>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Instagram Marketing Experte',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi hat über 200 Instagram-Kampagnen für Unternehmen verschiedener Größen umgesetzt. Als Gründer von CAIT Social Media entwickelt er datengetriebene Content-Strategien, die organische Reichweite und Engagement auf Instagram maximieren.'
    },
    date: '12. August 2024',
    readTime: '10 min',
    tags: ['Instagram', 'Content Strategie', 'Reels', 'Algorithmus']
  },
};

export default function InstagramStrategiesPage() {
  const post = instagramPost['instagram-strategien'];
  if (!post) return notFound();

  return (
    <div className="bg-[#0c1832] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Instagram Marketing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-blue-200">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto bg-[#0c1832] border border-blue-800/50 shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src="/instagram-strategien.webp"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-blue-100 prose-p:text-blue-200 prose-ul:text-blue-200 prose-li:text-blue-200 prose-strong:text-blue-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-800">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Section */}
        <div className="mt-16 p-6 md:p-8 bg-blue-900/20 rounded-xl border border-blue-800/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 md:w-60 md:h-32 relative rounded-full overflow-hidden border-4 border-blue-800/50 shadow-lg">
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
              <h3 className="text-xl font-bold text-blue-100">{post.author.name}</h3>
              <p className="text-blue-300 font-medium mb-2 md:mb-3">{post.author.role}</p>
              <p className="text-blue-200 text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/muaaz-chihabi/" className="text-blue-300 hover:text-blue-400 transition-colors" aria-label="LinkedIn Profil">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SEO-Fließtext */}
      <section className="max-w-4xl mx-auto text-blue-200 text-lg leading-relaxed px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-100 mb-4">Warum Instagram-Marketing 2024 mehr Strategie denn je erfordert</h2>
        <p className="mb-4">
          Instagram bleibt auch im Jahr 2024 eine der wichtigsten Plattformen für Branding, Community-Aufbau und Conversion, vor allem im B2C-Bereich.
          Doch durch <strong className="text-blue-300">algorithmische Veränderungen</strong>, steigende Konkurrenz und neue Features wie Reels oder Guides reicht es nicht mehr,
          einfach nur Bilder zu posten.
        </p>
        <p className="mb-4">
          Um <strong className="text-blue-300">organische Reichweite</strong> und <strong className="text-blue-300">Engagement</strong> zu erzielen, braucht es eine gezielte <strong className="text-blue-300">Content-Strategie für Instagram</strong>,
          abgestimmt auf Zielgruppe, Posting-Zeiten, Format-Mix und Hashtag-Nutzung. In diesem Beitrag lernst du, wie du deine Inhalte so planst und
          optimierst, dass sie im Feed performen, und langfristig Vertrauen sowie Reichweite aufbauen.
        </p>
        <p>
          Als <strong className="text-blue-300">CAIT Social Media Agentur</strong> entwickeln wir datengetriebene Instagram-Kampagnen für Unternehmen in ganz Deutschland, von
          Reels-Konzepten über Content-Kalender bis zur algorithmusfreundlichen Optimierung.
        </p>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-blue-100 mb-8">Weitere Social Media Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* TikTok Article */}
          <div className="bg-blue-900/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-blue-800/50">
            <div className="relative h-48">
              <Image
                src="/tiktokPhoto.webp"
                alt="TikTok Algorithmus verstehen - Wachstumsstrategien"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-medium border border-blue-800">
                  TikTok
                </span>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Virale TikTok-Strategien</h3>
              <p className="text-blue-200 mb-4">Algorithmus verstehen und nutzen</p>
              <Link 
                href="/blog/social-media/tiktok-wachstum" 
                className="text-blue-300 hover:text-blue-400 font-medium flex items-center"
                aria-label="TikTok Algorithmus Strategien ansehen"
              >
                TikTok-Algorithmus meistern
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Content Strategies Article */}
          <div className="bg-blue-900/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-blue-800/50">
            <div className="relative h-48">
              <Image
                src="/socialmediacontent.webp"
                alt="Content Strategien für maximale Reichweite auf Social Media"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-medium border border-blue-800">
                  Content
                </span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-medium border border-blue-800">
                  Strategie
                </span>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Content Strategien für Social Media</h3>
              <p className="text-blue-200 mb-4">Plattformspezifische Inhalte erstellen für maximale Reichweite</p>
              <Link 
                href="/blog/social-media/content-strategien" 
                className="text-blue-300 hover:text-blue-400 font-medium flex items-center"
                aria-label="Content Strategien für Social Media entdecken"
              >
                Content-Strategien optimieren
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
  const post = instagramPost['instagram-strategien'];
  return {
    title: `${post.title} | CAIT Social Media`,
    description: post.metaDescription,
    alternates: {
      canonical: post.alternates.canonical,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: post.alternates.canonical,
      images: [
        {
          url: '/instagram-strategies.webp',
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
      images: ['/instagram-strategies.webp'],
    },
  };
}