import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const tiktokPost = {
  'tiktok-wachstum': {
    title: 'TikTok Growth: Virale Reichweite erzielen',
    metaDescription: 'Wie Sie den TikTok-Algorithmus verstehen und für Ihr Business nutzen - Strategien für organisches Wachstum',
    alternates: {
      canonical: 'https://www.caitsocialmedia.com/blog/social-media/tiktok-wachstum',
    },
    content: `
      <h2 class="text-2xl font-bold text-blue-100 mt-8 mb-4">Warum TikTok für Ihr Business unverzichtbar ist</h2>
      <p class="text-blue-200 mb-6">Mit über 1 Milliarde aktiven Nutzern bietet TikTok einzigartige Möglichkeiten für virale Reichweite. Im Gegensatz zu anderen Plattformen kann hier auch ohne große Follower-Basis organisches Wachstum erzielt werden - wenn Sie den Algorithmus verstehen.</p>

      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Statistik:</p>
        <p class="text-blue-200">TikTok-Videos erhalten durchschnittlich 17% höhere Engagement-Raten als Instagram Reels.</p>
      </div>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">1. Den TikTok-Algorithmus verstehen</h3>
      <p class="text-blue-200 mb-4">So funktioniert die TikTok-For-You-Page (FYP):</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li><span class="font-medium text-blue-300">Completion Rate:</span> Videos die bis zum Ende geschaut werden, werden bevorzugt</li>
        <li><span class="font-medium text-blue-300">Wiedergabelisten:</span> Videos die mehrfach angesehen werden</li>
        <li><span class="font-medium text-blue-300">Interaktionen:</span> Likes, Kommentare, Shares und Bookmarks</li>
        <li><span class="font-medium text-blue-300">Relevanz:</span> Hashtags, Captions und Audio-Trends</li>
      </ul>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
          <h4 class="font-bold text-blue-300 mb-3">Optimale Video-Länge</h4>
          <ul class="space-y-2 text-blue-200">
            <li>• 21-34 Sekunden für maximale Completion Rate</li>
            <li>• 7-15 Sekunden für schnelle Botschaften</li>
            <li>• 55+ Sekunden für Tutorials/How-Tos</li>
          </ul>
        </div>
        <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
          <h4 class="font-bold text-blue-300 mb-3">Wichtige KPIs</h4>
          <ul class="space-y-2 text-blue-200">
            <li>• 50-80% Completion Rate</li>
            <li>• 5-10% Like-Rate</li>
            <li>• 1-3% Share-Rate</li>
          </ul>
        </div>
      </div>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">2. Content-Strategien die viral gehen</h3>
      <p class="text-blue-200 mb-4">Bewährte Formate für Business-Accounts:</p>

      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Profi-Tipp:</p>
        <p class="text-blue-200">Nutzen Sie den "3-2-1 Ansatz": 3 Unterhaltungsvideos, 2 informative Videos, 1 Verkaufsvideo pro Woche.</p>
      </div>

      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li><span class="font-medium text-blue-300">Before/After:</span> Produktdemonstrationen</li>
        <li><span class="font-medium text-blue-300">Day-in-the-Life:</span> Hinter den Kulissen</li>
        <li><span class="font-medium text-blue-300">Challenges:</span> Markenspezifische Trends</li>
        <li><span class="font-medium text-blue-300">Duette:</span> Interaktion mit Kunden</li>
        <li><span class="font-medium text-blue-300">How-Tos:</span> Problemlösungen zeigen</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">3. Hashtag-Strategie</h3>
      <p class="text-blue-200 mb-4">So finden Sie die perfekten Hashtags:</p>

      <div class="grid md:grid-cols-3 gap-4 my-6">
        <div class="bg-blue-900/30 p-4 rounded-lg shadow border border-blue-800 text-center">
          <div class="text-blue-300 mb-2 text-2xl">#️⃣</div>
          <h4 class="font-bold text-blue-300 mb-2">1 Mega-Hashtag</h4>
          <p class="text-blue-200 text-sm">500M+ Aufrufe (z.B. #fyp)</p>
        </div>
        <div class="bg-blue-900/30 p-4 rounded-lg shadow border border-blue-800 text-center">
          <div class="text-blue-300 mb-2 text-2xl">#️⃣</div>
          <h4 class="font-bold text-blue-300 mb-2">3 Mid-Range</h4>
          <p class="text-blue-200 text-sm">1-10M Aufrufe</p>
        </div>
        <div class="bg-blue-900/30 p-4 rounded-lg shadow border border-blue-800 text-center">
          <div class="text-blue-300 mb-2 text-2xl">#️⃣</div>
          <h4 class="font-bold text-blue-300 mb-2">2 Nischen-Hashtags</h4>
          <p class="text-blue-200 text-sm">10k-500k Aufrufe</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">4. Audio-Trends nutzen</h3>
      <p class="text-blue-200 mb-4">Sound ist entscheidend für virales Potenzial:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li>Trending Sounds in der Discover-Sektion finden</li>
        <li>Originale Audio-Creation für Markenidentität</li>
        <li>Voiceovers für bessere Zugänglichkeit</li>
        <li>Lautstärke anpassen (80% Musik, 100% Voice)</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">5. Posting-Zeiten optimieren</h3>
      <p class="text-blue-200 mb-4">Beste Zeiten für Engagement:</p>
      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Zeitplan:</p>
        <p class="text-blue-200">Deutschland: 16-20 Uhr Wochentage, 10-14 Uhr Wochenenden | B2B: 8-10 Uhr Dienstag-Donnerstag</p>
      </div>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'TikTok Marketing Experte',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi hat über 50 TikTok-Kampagnen für Unternehmen verschiedener Branchen erfolgreich umgesetzt. Als Gründer von CAIT Social Media hilft er Unternehmen, virale Reichweite auf TikTok zu erzielen - ganz ohne bezahlte Werbung.'
    },
    date: '5. August 2024',
    readTime: '11 min',
    tags: ['TikTok', 'Video Marketing', 'Algorithmus']
  },
};

export default function TikTokGrowthPage() {
  const post = tiktokPost['tiktok-wachstum'];
  if (!post) return notFound();

  return (
    <div className="bg-[#0c1832] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            TikTok Strategie
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
            src="/tiktokPhoto.webp"
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

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-blue-100 mb-8">Weitere Social Media Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Instagram Reels Article */}
          <div className="bg-blue-900/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-blue-800/50">
            <div className="relative h-48">
              <Image
                src="/instagram-strategien.webp"
                alt="Professionelle Instagram Reels Produktion"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-medium mb-2 border border-blue-800">
                Instagram
              </span>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Reels Masterclass</h3>
              <p className="text-blue-200 mb-4">Professionelle Produktion auf Budget</p>
              <Link 
                href="/blog/social-media/instagram-reels" 
                className="text-blue-300 hover:text-blue-400 font-medium flex items-center"
                aria-label="Mehr über Instagram Reels Produktion erfahren"
              >
                Reels-Produktion lernen
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
                alt="Content Strategien für Social Media"
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
                aria-label="Mehr über Content Strategien erfahren"
              >
                Content-Strategien entdecken
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
  const post = tiktokPost['tiktok-wachstum'];
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
          url: '/tiktokPhoto.webp',
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
      images: ['/tiktokPhoto.webp'],
    },
  };
}