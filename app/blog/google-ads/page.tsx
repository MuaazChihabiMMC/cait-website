import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Google Ads Tipps & SEA Strategien | CAIT Blog',
  description: 'Praxisnahe Google Ads Tipps: Kampagnenaufbau, Conversion-Optimierung und Budget-Strategien. Expertenwissen für erfolgreiche SEA-Kampagnen.',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/google-ads',
  },
};

const googleAdsPosts = [
  {
    slug: 'google-ads-einsteiger-guide',
    title: 'Google Ads Agentur Guide: Professioneller Einstieg 2024',
    excerpt: 'Als SEA Agentur Berlin zeigen wir Ihnen den optimalen Start mit Google Ads - von der Kontoerstellung bis zu ersten erfolgreichen Kampagnen',
    image: '/google-ads-guide.webp',
    tags: ['Google Ads Agentur', 'SEA Basics'],
    readTime: '7 min',
    ctaText: 'Zum Google Ads Guide'
  },
  {
    slug: 'conversion-optimierung-ads',
    title: 'Conversion-Optimierung durch Ihre SEA Agentur Berlin',
    excerpt: 'Erfahren Sie von unserer Google Ads Agentur, wie Sie mit Landingpages und A/B-Tests mehr Conversions erzielen',
    image: '/google-ads-guide.webp',
    tags: ['Google Ads Berlin', 'Conversions'],
    readTime: '9 min',
    ctaText: 'Optimierung lernen'
  },
  {
    slug: 'google-ads-budget-strategien',
    title: 'Budgetstrategien Ihrer Google Ads Agentur Berlin',
    excerpt: 'Wie Sie als Berliner Unternehmen Ihr Werbebudget maximal effizient einsetzen - Tipps unserer SEA Agentur',
    image: '/google-ads-guide.webp',
    tags: ['SEA Agentur', 'Budgetierung'],
    readTime: '8 min',
    ctaText: 'Budget-Tipps lesen'
  },
];

export default function GoogleAdsBlogPage() {
  return (
    <section className="bg-[#0c1832] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header with optimized keywords */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            SEA Agentur Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Google Ads Agentur
            </span>{' '}
            Wissen aus Berlin
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Als <strong className="text-white">Google Ads Agentur Berlin</strong> teilen wir unsere besten Strategien für Kampagnenaufbau und Conversion-Optimierung
          </p>
        </div>

        {/* Blog Posts Grid with keyword optimization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleAdsPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-blue-900/30 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-800/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.title} - Google Ads Agentur Berlin`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={post.slug === 'google-ads-einsteiger-guide'}
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
                    href={`/blog/google-ads/${post.slug}`}
                    className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform hover:text-blue-300"
                    aria-label={`Mehr erfahren über ${post.title} - Google Ads Agentur Berlin`}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Google Ads Updates für Berliner Unternehmen</h2>
            <p className="text-blue-100 mb-6">Ihre <strong className="text-white">SEA Agentur Berlin</strong> versorgt Sie mit exklusiven Tipps zu Kampagnenoptimierung</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="E-Mail für Google Ads Agentur Newsletter"
              />
              <button
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Google Ads Tipps erhalten"
              >
                Jetzt abonnieren
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Branchenlösungen unserer <span className="text-blue-400">Google Ads Agentur Berlin</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ärzte */}
            <div className="bg-blue-900/30 rounded-xl p-6 shadow-md border border-blue-800/50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white mb-2">Google Ads für Ärzte</h3>
              <p className="text-blue-200 mb-2">
                Ihre <strong className="text-white">Google Ads Agentur Berlin</strong> kennt die Herausforderungen in der Gesundheitsbranche. Wir helfen Arztpraxen, gezielt neue Patient:innen aus Berlin zu erreichen, mit lokaler Suchmaschinenwerbung, die Vertrauen schafft.
              </p>
              <p className="text-sm text-blue-400 font-medium">Gezielte Kampagnen für Fachärzt:innen & Hausärzt:innen</p>
            </div>

            {/* E-Commerce */}
            <div className="bg-blue-900/30 rounded-xl p-6 shadow-md border border-blue-800/50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white mb-2">Google Ads für E-Commerce</h3>
              <p className="text-blue-200 mb-2">
                Als erfahrene <strong className="text-white">SEA Agentur Berlin</strong> entwickeln wir performante Kampagnen für Onlineshops, inklusive Google Shopping, Remarketing und Conversion-Tracking. Ideal für nachhaltiges Wachstum im E-Commerce.
              </p>
              <p className="text-sm text-blue-400 font-medium">Mehr Umsatz durch datengetriebene Strategien</p>
            </div>

            {/* Juwelier */}
            <div className="bg-blue-900/30 rounded-xl p-6 shadow-md border border-blue-800/50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white mb-2">Google Ads für Juweliere</h3>
              <p className="text-blue-200 mb-2">
                Unsere <strong className="text-white">Google Ads Agentur</strong> bringt hochwertige Schmuckstücke ins Rampenlicht. Mit lokaler Werbung und exklusiven Suchbegriffen positionieren wir Juweliere erfolgreich in der Google-Suche.
              </p>
              <p className="text-sm text-blue-400 font-medium">Ideale Sichtbarkeit für Schmuckgeschäfte in Berlin</p>
            </div>

            {/* Anwälte */}
            <div className="bg-blue-900/30 rounded-xl p-6 shadow-md border border-blue-800/50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white mb-2">Google Ads für Anwälte</h3>
              <p className="text-blue-200 mb-2">
                Ob Familienrecht, Strafrecht oder IT-Recht, mit unserer <strong className="text-white">Google Ads Agentur Berlin</strong> erreichen Sie Mandant:innen, die gezielt nach rechtlicher Unterstützung suchen. Effektiv & konform mit Werberichtlinien.
              </p>
              <p className="text-sm text-blue-400 font-medium">Strategische SEA-Lösungen für Kanzleien</p>
            </div>
          </div>
        </div>

        {/* SEO-Textblock für Google Ads Agentur Berlin */}
        <section className="mt-24 max-w-5xl mx-auto text-blue-200 text-lg leading-relaxed space-y-6 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-white">
            Deine Google Ads Agentur Berlin für messbare Erfolge
          </h2>

          <p>
            Als spezialisierte Agentur bieten wir dir nicht nur standardisierte Anzeigenkampagnen, sondern individuelle, datengetriebene Strategien für nachhaltige Performance. In der heutigen digitalen Welt reicht es nicht aus, einfach nur online zu werben. Der Unterschied liegt in der richtigen Keyword-Auswahl, einer klugen Kampagnenstruktur und laufender Optimierung.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8">Was macht unsere SEA Agentur besonders?</h3>
          <p>
            Unsere SEA-Spezialisten in Berlin arbeiten eng mit dir zusammen, um maßgeschneiderte Kampagnen zu entwickeln. Wir setzen auf kontinuierliche A/B-Tests, Conversion-Tracking und eine klare Zielgruppenansprache. Dabei spielen Tools wie Google Analytics, der Google Tag Manager und das Zusammenspiel mit deiner Website eine zentrale Rolle.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8">Welche Branchen profitieren besonders?</h3>
          <ul className="list-disc ml-6 text-blue-200">
            <li><strong className="text-white">Ärzte & Praxen:</strong> Lokale Sichtbarkeit in Berlin für neue Patienten.</li>
            <li><strong className="text-white">Onlineshops:</strong> Skalierung mit Google Shopping & Performance Max.</li>
            <li><strong className="text-white">Rechtsanwälte:</strong> Hochkonvertierende Suchanzeigen mit rechtssicherer Ansprache.</li>
            <li><strong className="text-white">Handwerker & Dienstleister:</strong> Gezielte Leads in deiner Region durch Google Ads Local Services.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8">Unsere Leistungen als Google Ads Agentur:</h3>
          <ul className="list-disc ml-6 text-blue-200">
            <li>Marktanalyse & Zielgruppenbestimmung</li>
            <li>Keyword-Recherche & Anzeigengruppen-Struktur</li>
            <li>Responsive Suchanzeigen & Erweiterungen</li>
            <li>Google Shopping-Kampagnen für E-Commerce</li>
            <li>Conversion-Tracking & Zielvorhaben in Analytics</li>
            <li>Remarketing-Strategien mit hoher Relevanz</li>
            <li>Performance Max Kampagnen & lokale Werbung</li>
            <li>Laufende Optimierung & transparente Reportings</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8">Fehler, die wir als erfahrene Agentur vermeiden:</h3>
          <p>
            Viele Unternehmen verbrennen Werbebudget, weil sie ihre Kampagnen nicht regelmäßig prüfen. Oft fehlen Conversion-Ziele, das Keyword-Match ist zu breit oder Anzeigen haben keine Relevanz zur Landingpage. Wir wissen, wie man diese Fehler vermeidet, mit Erfahrung, Analyse und einem strukturierten Vorgehen.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8">Warum in Google Ads investieren?</h3>
          <p>
            Google Ads ist eines der effektivsten Tools, um kurzfristig Sichtbarkeit und Leads zu generieren, gerade in einem wettbewerbsintensiven Umfeld wie Berlin. Es ermöglicht dir, gezielt Kunden zu erreichen, die bereits aktiv nach deinen Leistungen suchen. Als <Link href="/kontakt" className="text-blue-400 hover:underline">SEA Agentur</Link> begleiten wir dich von der Planung bis zum Reporting.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8">Was kostet eine Google Ads Agentur in Berlin?</h3>
          <p>
            Unsere Leistungen sind transparent und skalierbar. Du kannst bereits mit kleinen Budgets starten und diese nach Erfolg ausbauen. Wir bieten sowohl projektbezogene Unterstützung als auch laufende Betreuungspakete, perfekt abgestimmt auf Start-ups, KMUs und wachsende Unternehmen.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8">Jetzt durchstarten mit deiner Ads Agentur Berlin</h3>
          <p>
            Möchtest du mehr qualifizierte Anfragen, mehr Verkäufe oder einfach nur mehr Sichtbarkeit? Dann sprich mit uns, deiner erfahrenen <strong className="text-white">Google Ads Agentur Berlin</strong>. Wir analysieren deine aktuelle Situation, entwickeln eine passende Strategie und begleiten dich bei jedem Schritt.
          </p>

          <div className="mt-8">
            <Link href="/kontakt" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition">
              Jetzt Google Ads Beratung sichern
            </Link>
          </div>
        </section>

        {/* Additional SEO text block (hidden on mobile) */}
        <div className="mt-16 hidden md:block">
          <div className="bg-blue-900/30 p-6 rounded-lg shadow-sm border border-blue-800/50">
            <h2 className="text-2xl font-bold text-white mb-4">CAIT - Ihre Google Ads Agentur in Berlin</h2>
            <p className="text-blue-200 mb-3">
              Als erfahrene Agentur bieten wir ganzheitliche SEA-Strategien für Unternehmen jeder Größe. Unsere SEA-Spezialisten kombinieren technisches Know-how mit strategischer Kampagnenführung und Conversion-Optimierung.
            </p>
            <p className="text-blue-200">
              Egal ob Sie Unterstützung für Neukundengewinnung suchen oder bessere Werbeergebnisse benötigen - wir entwickeln maßgeschneiderte Lösungen für Ihr Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}