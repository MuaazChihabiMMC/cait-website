import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Google Ads Agentur Berlin | SEA Strategien & Kampagnen - CAIT Blog',
  description: 'Ihre Google Ads Agentur in Berlin bietet professionelle SEA-Strategien, Kampagnenoptimierung und Conversion-Steigerung für maximale Werbeerfolge',
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header with optimized keywords */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            SEA Agentur Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Google Ads Agentur
            </span>{' '}
            Wissen aus Berlin
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Als <strong>Google Ads Agentur Berlin</strong> teilen wir unsere besten Strategien für Kampagnenaufbau und Conversion-Optimierung
          </p>
        </div>

        {/* Blog Posts Grid with keyword optimization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleAdsPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.title} - Google Ads Agentur Berlin`}
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
                  <Link 
                    href={`/blog/google-ads/${post.slug}`} 
                    className="text-yellow-600 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                    aria-label={`Mehr erfahren über ${post.title} - Google Ads Agentur Berlin`}
                  >
                    {post.ctaText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA with location reference */}
        <div className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Google Ads Updates für Berliner Unternehmen</h2>
            <p className="text-yellow-100 mb-6">Ihre <strong>SEA Agentur Berlin</strong> versorgt Sie mit exklusiven Tipps zu Kampagnenoptimierung</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                aria-label="E-Mail für Google Ads Agentur Newsletter"
              />
              <button 
                className="px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Google Ads Tipps erhalten"
              >
                Jetzt abonnieren
              </button>
            </div>
          </div>
        </div>


         <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
      Branchenlösungen unserer <span className="text-yellow-600">Google Ads Agentur Berlin</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Ärzte */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-yellow-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads für Ärzte</h3>
        <p className="text-gray-700 mb-2">
          Ihre <strong>Google Ads Agentur Berlin</strong> kennt die Herausforderungen in der Gesundheitsbranche. Wir helfen Arztpraxen, gezielt neue Patient:innen aus Berlin zu erreichen – mit lokaler Suchmaschinenwerbung, die Vertrauen schafft.
        </p>
        <p className="text-sm text-yellow-700 font-medium">Gezielte Kampagnen für Fachärzt:innen & Hausärzt:innen</p>
      </div>

      {/* E-Commerce */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-yellow-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads für E-Commerce</h3>
        <p className="text-gray-700 mb-2">
          Als erfahrene <strong>SEA Agentur Berlin</strong> entwickeln wir performante Kampagnen für Onlineshops – inklusive Google Shopping, Remarketing und Conversion-Tracking. Ideal für nachhaltiges Wachstum im E-Commerce.
        </p>
        <p className="text-sm text-yellow-700 font-medium">Mehr Umsatz durch datengetriebene Strategien</p>
      </div>

      {/* Juwelier */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-yellow-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads für Juweliere</h3>
        <p className="text-gray-700 mb-2">
          Unsere <strong>Google Ads Agentur</strong> bringt hochwertige Schmuckstücke ins Rampenlicht. Mit lokaler Werbung und exklusiven Suchbegriffen positionieren wir Juweliere erfolgreich in der Google-Suche.
        </p>
        <p className="text-sm text-yellow-700 font-medium">Ideale Sichtbarkeit für Schmuckgeschäfte in Berlin</p>
      </div>

      {/* Anwälte */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-yellow-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads für Anwälte</h3>
        <p className="text-gray-700 mb-2">
          Ob Familienrecht, Strafrecht oder IT-Recht – mit unserer <strong>Google Ads Agentur Berlin</strong> erreichen Sie Mandant:innen, die gezielt nach rechtlicher Unterstützung suchen. Effektiv & konform mit Werberichtlinien.
        </p>
        <p className="text-sm text-yellow-700 font-medium">Strategische SEA-Lösungen für Kanzleien</p>
      </div>
    </div>
  </div>

{/* SEO-Textblock für Google Ads Agentur Berlin */}
<section className="mt-24 max-w-5xl mx-auto text-gray-800 text-lg leading-relaxed space-y-6 px-4 md:px-0">
  <h2 className="text-3xl font-bold text-gray-900">
    Deine Google Ads Agentur Berlin für messbare Erfolge
  </h2>

  <p>
    Als <strong>Google Ads Agentur Berlin</strong> bieten wir dir nicht nur standardisierte Anzeigenkampagnen, sondern individuelle, datengetriebene Strategien für nachhaltige Performance. In der heutigen digitalen Welt reicht es nicht aus, einfach nur online zu werben. Der Unterschied liegt in der richtigen Keyword-Auswahl, einer klugen Kampagnenstruktur und laufender Optimierung.
  </p>

  <h3 className="text-2xl font-semibold mt-8">Was macht unsere SEA Agentur besonders?</h3>
  <p>
    Unsere SEA-Spezialisten in Berlin arbeiten eng mit dir zusammen, um maßgeschneiderte Kampagnen zu entwickeln. Wir setzen auf kontinuierliche A/B-Tests, Conversion-Tracking und eine klare Zielgruppenansprache. Dabei spielen Tools wie Google Analytics, der Google Tag Manager und das Zusammenspiel mit deiner Website eine zentrale Rolle.
  </p>

  <h3 className="text-2xl font-semibold mt-8">Welche Branchen profitieren besonders?</h3>
  <ul className="list-disc ml-6">
    <li><strong>Ärzte & Praxen:</strong> Lokale Sichtbarkeit in Berlin für neue Patienten.</li>
    <li><strong>Onlineshops:</strong> Skalierung mit Google Shopping & Performance Max.</li>
    <li><strong>Rechtsanwälte:</strong> Hochkonvertierende Suchanzeigen mit rechtssicherer Ansprache.</li>
    <li><strong>Handwerker & Dienstleister:</strong> Gezielte Leads in deiner Region durch Google Ads Local Services.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8">Unsere Leistungen als Google Ads Agentur:</h3>
  <ul className="list-disc ml-6">
    <li>Marktanalyse & Zielgruppenbestimmung</li>
    <li>Keyword-Recherche & Anzeigengruppen-Struktur</li>
    <li>Responsive Suchanzeigen & Erweiterungen</li>
    <li>Google Shopping-Kampagnen für E-Commerce</li>
    <li>Conversion-Tracking & Zielvorhaben in Analytics</li>
    <li>Remarketing-Strategien mit hoher Relevanz</li>
    <li>Performance Max Kampagnen & lokale Werbung</li>
    <li>Laufende Optimierung & transparente Reportings</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8">Fehler, die wir als erfahrene Agentur vermeiden:</h3>
  <p>
    Viele Unternehmen verbrennen Werbebudget, weil sie ihre Kampagnen nicht regelmäßig prüfen. Oft fehlen Conversion-Ziele, das Keyword-Match ist zu breit oder Anzeigen haben keine Relevanz zur Landingpage. Als <strong>Google Ads Agentur Berlin</strong> wissen wir, wie man diese Fehler vermeidet – mit Erfahrung, Analyse und einem strukturierten Vorgehen.
  </p>

  <h3 className="text-2xl font-semibold mt-8">Warum in Google Ads investieren?</h3>
  <p>
    Google Ads ist eines der effektivsten Tools, um kurzfristig Sichtbarkeit und Leads zu generieren – gerade in einem wettbewerbsintensiven Umfeld wie Berlin. Es ermöglicht dir, gezielt Kunden zu erreichen, die bereits aktiv nach deinen Leistungen suchen. Als <Link href="/kontakt" className="text-yellow-600 hover:underline">SEA Agentur</Link> begleiten wir dich von der Planung bis zum Reporting.
  </p>

  <h3 className="text-2xl font-semibold mt-8">Was kostet eine Google Ads Agentur in Berlin?</h3>
  <p>
    Unsere Leistungen sind transparent und skalierbar. Du kannst bereits mit kleinen Budgets starten und diese nach Erfolg ausbauen. Wir bieten sowohl projektbezogene Unterstützung als auch laufende Betreuungspakete – perfekt abgestimmt auf Start-ups, KMUs und wachsende Unternehmen.
  </p>

  <h3 className="text-2xl font-semibold mt-8">Jetzt durchstarten mit deiner Ads Agentur Berlin</h3>
  <p>
    Möchtest du mehr qualifizierte Anfragen, mehr Verkäufe oder einfach nur mehr Sichtbarkeit? Dann sprich mit uns – deiner erfahrenen <strong>Google Ads Agentur Berlin</strong>. Wir analysieren deine aktuelle Situation, entwickeln eine passende Strategie und begleiten dich bei jedem Schritt.
  </p>

  <div className="mt-8">
    <Link href="/kontakt" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition">
      Jetzt Google Ads Beratung sichern
    </Link>
  </div>
</section>

        {/* Additional SEO text block (hidden on mobile) */}
        <div className="mt-16 hidden md:block">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CAIT - Ihre Google Ads Agentur in Berlin</h2>
            <p className="text-gray-700 mb-3">
              Als erfahrene <strong>Google Ads Agentur Berlin</strong> bieten wir ganzheitliche SEA-Strategien für Unternehmen jeder Größe. Unsere <strong>SEA Agentur</strong> Spezialisten kombinieren technisches Know-how mit strategischer Kampagnenführung und Conversion-Optimierung.
            </p>
            <p className="text-gray-700">
              Egal ob Sie eine <strong>Google Ads Agentur</strong> für Neukundengewinnung suchen oder eine <strong>SEA Agentur Berlin</strong> für bessere Werbeergebnisse benötigen - wir entwickeln maßgeschneiderte Lösungen für Ihr Business.
            </p>
          </div>
        </div>
      </div>
    </section>

    
  );
}