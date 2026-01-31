import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Social Media Strategien | CAITSocialMedia Blog',
  description: 'Aktuelle Tipps für Instagram, TikTok & LinkedIn - Content-Strategien und organisches Wachstum',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/social-media',
  },
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
    <section className="bg-gradient-to-b from-[#0c1832] to-[#1a2b5a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full text-sm font-semibold mb-4">
            Social Media
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Social Media
            </span>{' '}
            für Business-Wachstum
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Aktuelle Strategien für Instagram, TikTok und LinkedIn Marketing – für echtes Business-Wachstum und mehr Reichweite
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={`Coverbild für ${post.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={post.slug === 'content-strategien'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-300 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime} Lesezeit</span>

                  <Link
                    href={`/blog/social-media/${post.slug}`}
                    className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                    aria-label={`Mehr erfahren über ${post.title}`}
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

        {/* Erweiterter SEO-Text */}
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-white">Warum Social Media Marketing so entscheidend ist</h2>
          <p>
            Social Media ist nicht nur ein Kommunikationskanal, es ist heute einer der stärksten Hebel für Markenbekanntheit, Vertrauen und Kundengewinnung. Ob für Start-ups, etablierte Unternehmen oder Selbstständige, Plattformen wie Instagram, TikTok oder LinkedIn bieten enorme Potenziale zur Reichweitensteigerung und Kundenbindung.
          </p>
          <p className="mt-4">
            Aber Vorsicht: Die organische Reichweite ist kein Selbstläufer mehr. Algorithmen werden komplexer, und Nutzer erwarten hochwertige, unterhaltsame oder lehrreiche Inhalte (Edutainment). Wer heute noch plumpe Werbung postet, wird ignoriert. Erfolgreiche Marken erzählen Geschichten, interagieren mit ihrer Community und nutzen die technologischen Möglichkeiten der Plattformen voll aus.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">Instagram Marketing: Branding & Community</h3>
          <p>
            Instagram ist weiterhin eine der wichtigsten Plattformen für Branding und Community-Aufbau. Mit Reels, Stories, Karussell-Posts und Guides stehen vielseitige Formate zur Verfügung.
          </p>
          <p className="mt-2">
            Der Schlüssel liegt im Mix: Reels sorgen für Reichweite bei neuen Nutzern (Discovery), während Stories die Bindung zu bestehenden Followern festigen. Karussell-Posts eignen sich hervorragend für Expertenwissen ("Slide-Content"), das häufig gespeichert wird – ein starkes Signal für den Algorithmus. Wir helfen Ihnen, eine visuelle Sprache zu entwickeln, die Ihre Marke unverwechselbar macht.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">TikTok: Virales Wachstum für Unternehmen</h3>
          <p>
            TikTok hat sich zu einem der mächtigsten Tools für organisches Wachstum entwickelt. Der Algorithmus ("For You Page") ist einzigartig: Er bewertet Content fast ausschließlich nach der Performance des einzelnen Videos, nicht nach der Follower-Zahl des Accounts.
          </p>
          <p className="mt-2">
            Das bedeutet: Auch neue Accounts können über Nacht Millionen erreichen. Entscheidend sind die ersten 3 Sekunden (Hook), schnelle Schnitte, Trend-Sounds und Authentizität. Hochglanz-Werbung funktioniert hier nicht. Unternehmen müssen lernen, "TikTok-native" zu kommunizieren – unterhaltsam, schnell und nahbar.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">LinkedIn: B2B Social Selling & Personal Branding</h3>
          <p>
            LinkedIn ist das perfekte Netzwerk für B2B-Unternehmen, Berater, Agenturen und Coaches. Wer hier relevante Inhalte postet, positioniert sich als Thought Leader und baut Vertrauen auf.
          </p>
          <p className="mt-2">
            Hier funktionieren persönliche Einblicke, Case Studies und fundierte Meinungen zu Branchentrends am besten. Anders als bei Instagram steht hier der fachliche Austausch im Vordergrund. Social Selling bedeutet dabei nicht, plumpe Verkaufsnachrichten zu versenden, sondern durch Kompetenz Sogwirkung zu erzeugen (Inbound Marketing).
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">Fazit: Social Media braucht Strategie</h3>
          <p>Der Unterschied zwischen erfolgreichem und erfolglosem Social Media liegt in der Strategie. Wer seine Zielgruppe kennt, relevante Inhalte liefert und regelmäßig postet, baut nicht nur Follower, sondern auch Kundenbeziehungen auf.</p>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Social Media Updates erhalten</h2>
            <p className="text-blue-200 mb-6">Abonnieren Sie unseren Newsletter für exklusive Strategien</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="E-Mail für Social Media Newsletter"
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