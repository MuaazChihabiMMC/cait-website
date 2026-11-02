import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: { absolute: 'Marketing Tipps & Strategien | CAIT Blog für SEO, Ads & Social Media' },
  description: 'Praxisnahe Marketing-Tipps, SEO-Strategien, Google Ads Guides und Social Media Insights. Expertenwissen für Ihren digitalen Erfolg.',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog',
  },
};

const blogCategories = [
  {
    id: 'seo',
    title: 'SEO Strategien Berlin',
    description: 'On-Page, Off-page und technische SEO für bessere Rankings, Expertenwissen speziell für Berliner Unternehmen',
    image: '/seo-content.svg',
    color: 'from-night-700 to-night-600',
    icon: '🔍',
    buttonText: 'SEO Tipps lesen'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Agentur-Einblicke zu Instagram, TikTok & LinkedIn, Erfolgsstrategien für Berliner Unternehmen',
    image: '/social-media-content.svg',
    color: 'from-night-700 to-night-600',
    icon: '📱',
    buttonText: 'Social Media Guide'
  },
  {
    id: 'google-ads',
    title: 'Google Ads Berlin',
    description: 'Google Ads Agentur-Tipps: Kampagnen-Optimierung & Conversion-Strategien für Berliner Unternehmen',
    image: '/google-ads-content.svg',
    color: 'from-night-700 to-night-600',
    icon: '📈',
    buttonText: 'Zu Google Ads'
  },
  {
    id: 'webdesign',
    title: 'Webentwicklung Berlin',
    description: 'Professionelle Websites aus Berlin, UX-optimiertes Webdesign & Entwicklung für höhere Conversion-Raten',
    image: '/webdesign-content.svg',
    color: 'from-night-700 to-night-600',
    icon: '💻',
    buttonText: 'Web-Tipps'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0c1527] text-ink-soft">
      {/* Hero Section - Enhanced with SEO keywords */}
      <section className="bg-[#0c1527] py-16 px-6 border-b border-night-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-night-700/50 text-gold-200 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Deine Marketing Agentur aus Berlin
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">
              SEO, Google Ads & Social Media
            </span>{' '}
            Expertenwissen aus Berlin
          </h1>
          <p className="text-xl text-ink-soft max-w-2xl mx-auto">
            Der CAIT Marketing Blog bietet strategische Insights zu Suchmaschinenoptimierung, bezahlter Werbung und Social Media, speziell für Unternehmen in Berlin. Erhalten Sie bewährte Strategien für bessere Online-Sichtbarkeit und höhere Conversion-Raten.
          </p>
        </div>
      </section>

      {/* Blog Categories - Optimized category titles and descriptions */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogCategories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-80 border border-night-600/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 z-0`}></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white text-center">
                <span className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {category.title}
                </h2>
                <p className="text-ink-soft mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                <Link
                  href={`/blog/${category.id}`}
                  className={`inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium group-hover:bg-white/30 transition-all bg-gradient-to-br ${category.color}`}
                  aria-label={`Mehr erfahren über ${category.title}`}
                >
                  {category.buttonText}
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Aktuelle Highlights - Added semantic structure */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Aktuelle Blog-Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-night-700/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-night-600/50">
              <div className="relative h-48">
                <Image
                  src="/seo-technical.webp"
                  alt="Technische SEO Optimierung für Websites"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-xs font-medium mb-2 backdrop-blur-sm">
                  SEO Optimierung
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Technische SEO 2024: Die wichtigsten Ranking-Faktoren</h3>
                <p className="text-ink-soft mb-4">Erfahren Sie, welche technischen SEO-Faktoren 2024 entscheidend für Ihr Ranking in Berlin sind.</p>
                <Link href="/blog/seo/technische-seo" className="text-gold-300 hover:text-gold-200 font-medium flex items-center" aria-label="Technische SEO lernen">
                  Jetzt lesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="bg-night-700/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-night-600/50">
              <div className="relative h-48">
                <Image
                  src="/google-ads-guide.webp"
                  alt="Google Ads Kampagnen richtig starten"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-night-700/50 text-gold-200 rounded-full text-xs font-medium mb-2 backdrop-blur-sm">
                  Google Ads
                </span>
                <span className="inline-block px-3 py-1 bg-night-700/50 text-gold-200 rounded-full text-xs font-medium mb-2 backdrop-blur-sm">
                  SEA Strategien
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Google Ads Guide 2024: Professioneller Einstieg für Berliner Unternehmen</h3>
                <p className="text-ink-soft mb-4">Der komplette Leitfaden für erfolgreiche Google Ads Kampagnen - speziell für Unternehmen aus Berlin.</p>
                <Link href="/blog/google-ads/google-ads-einsteiger-guide" className="text-gold-300 hover:text-gold-200 font-medium flex items-center" aria-label="Zum Google Ads Guide">
                  Guide ansehen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>

        {/* SEO Textblock - Enhanced with semantic HTML and keywords */}
        <section className="mt-20 max-w-4xl mx-auto text-ink-soft text-lg space-y-6">
          <h2 className="text-3xl font-bold text-white">CAIT - Ihre Marketing Agentur für Berlin</h2>
          <p>
            Als <strong className="text-white">SEO Agentur Berlin</strong> und <strong className="text-white">Google Ads Spezialisten</strong> kombinieren wir technisches Know-how mit kreativen Marketing-Strategien. Unsere Expertise umfasst <strong className="text-white">Suchmaschinenoptimierung</strong>, <strong className="text-white">Conversion Optimierung</strong> und datengetriebenes <strong className="text-white">Online Marketing</strong>.
          </p>
          <p>
            Ob Sie eine <strong className="text-white">SEO Agentur in Berlin</strong>, <strong className="text-white">Social Media Experten</strong> oder eine <strong className="text-white">Webagentur</strong> suchen - wir entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen. Unser Fokus liegt auf nachhaltigen Ergebnissen und messbarem Erfolg.
          </p>
          <p>
            Entdecken Sie in unserem Blog praxiserprobte Strategien für <Link href="/blog/seo" className="text-gold-300 hover:underline">SEO in Berlin</Link>, effektive <Link href="/blog/google-ads" className="text-gold-300 hover:underline">Google Ads Kampagnen</Link> und erfolgreiches <Link href="/blog/social-media" className="text-gold-300 hover:underline">Social Media Marketing</Link>. Alle Tipps stammen aus unserer täglichen Arbeit mit Berliner Unternehmen.
          </p>
        </section>
      </section>
      <section className="mt-20 max-w-4xl mx-auto text-ink-soft text-lg space-y-6 px-6 pb-20">
        <h2 className="text-3xl font-bold text-white">Warum ein Marketing-Blog für Berlin entscheidend ist</h2>
        <p>
          In einer digitalisierten Welt, in der Sichtbarkeit über Erfolg oder Misserfolg entscheidet, ist ein strategisch geführter Marketing-Blog essenziell, besonders für Unternehmen in Berlin. Die Hauptstadt ist nicht nur kultureller und politischer Mittelpunkt, sondern auch einer der wettbewerbsintensivsten Märkte für Dienstleistungen und Produkte. Wer hier gefunden werden möchte, muss über klassische Werbung hinausdenken. Genau hier setzt der CAIT Marketing Blog an: Er ist Informationsquelle, Ideengeber und SEO-Turbo in einem.
        </p>
        <p>
          Mit Beiträgen über <Link href="/blog/seo" className="text-gold-300 hover:underline">Suchmaschinenoptimierung</Link>, <Link href="/blog/google-ads" className="text-gold-300 hover:underline">Google Ads</Link>, <Link href="/blog/social-media" className="text-gold-300 hover:underline">Social Media Marketing</Link> und <Link href="/blog/webdesign" className="text-gold-300 hover:underline">Webdesign</Link> erhalten Leser fundierte Einblicke in aktuelle Trends, Algorithmen, Tools und Best Practices. Unsere Artikel basieren nicht auf Vermutungen, sondern auf echter Projekterfahrung mit Berliner Unternehmen aus verschiedenen Branchen.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-8">Suchmaschinenoptimierung für Berlin, lokal gedacht, strategisch umgesetzt</h3>
        <p>
          SEO ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Gerade in Berlin, wo lokale Konkurrenz auf Bundesebene agiert, ist eine durchdachte Strategie entscheidend. Wir zeigen in unseren Blogartikeln, wie man mit gezielter Keyword-Recherche, einer klugen Seitenstruktur, technisch sauberem Aufbau und nutzerzentrierten Inhalten langfristig im Ranking steigt. Besonders wichtig ist dabei die Kombination aus lokalem Bezug (z.B. „Zahnarzt Berlin Charlottenburg") und fachlichem Mehrwert.
        </p>
        <p>
          Unsere Tipps zu technischem SEO, Content-Optimierung, Linkbuilding und PageSpeed sind so formuliert, dass sie für Anfänger verständlich und für Fortgeschrittene hilfreich sind. Wir nehmen regelmäßig Tools wie Google Search Console, Screaming Frog oder Sistrix unter die Lupe, immer mit dem Ziel, unsere Leser:innen zum digitalen Erfolg zu führen.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-8">Google Ads, maximal effizient für Berliner Unternehmen</h3>
        <p>
          Wer sofortige Sichtbarkeit will, kommt an Google Ads nicht vorbei. Aber hohe Klickkosten und niedrige Conversion-Rates sind keine Seltenheit, besonders in Berlin. In unseren Google Ads Beiträgen geben wir konkrete Tipps zur Kampagnenstruktur, Keyword-Gruppierung, Anzeigenerstellung, A/B-Tests und Conversion-Tracking. Auch Themen wie Smart Bidding, Performance Max und Remarketing werden praxisnah erklärt.
        </p>
        <p>
          Ob für Startups in Friedrichshain oder Dienstleister in Mitte, mit den richtigen Strategien holen wir aus jedem Budget das Maximum heraus. Unsere Blogartikel helfen dabei, typische Fehler zu vermeiden und nachhaltige Erfolge zu erzielen.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-8">Social Media Marketing, lokal relevant und visuell stark</h3>
        <p>
          In einer Stadt wie Berlin, die von Events, Trends und Communitys lebt, ist Social Media mehr als nur ein netter Kanal. Es ist Sprachrohr, Branding-Plattform und Umsatztreiber zugleich. Wir zeigen in unserem Blog, wie Unternehmen durch organische Strategien auf Instagram, TikTok und LinkedIn Reichweite aufbauen, ohne auf Follower-Käufe oder Bots zurückzugreifen.
        </p>
        <p>
          Mit Themen wie Instagram Reels, Content-Planung, Hashtag-Recherche und Community Management bieten wir einen Rundumblick auf die Welt der sozialen Medien, immer mit Fokus auf Berliner Zielgruppen. Ergänzt wird das Ganze durch echte Case Studies und Content-Ideen, die sich sofort umsetzen lassen.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-8">Webdesign & UX, damit aus Besuchern Kunden werden</h3>
        <p>
          Die schönste Kampagne bringt nichts, wenn die Website nicht konvertiert. Deshalb widmen wir uns auch regelmäßig dem Thema Webdesign und User Experience. In unseren Beiträgen analysieren wir, wie Landingpages aufgebaut sein müssen, wie Vertrauen entsteht und welche Design-Trends 2024 wirklich konvertieren.
        </p>
        <p>
          Dabei achten wir besonders auf mobile Optimierung, Ladezeiten, Call-to-Actions und psychologische Trigger. Ob Dienstleister oder Onlineshop, wir zeigen, wie Design und Marketing zusammenarbeiten, um messbare Ergebnisse zu erzielen.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-8">Warum Google unseren Blog liebt, E-E-A-T & Content-Qualität</h3>
        <p>
          Wir schreiben nicht für Suchmaschinen, aber mit SEO im Hinterkopf. Unsere Inhalte erfüllen die E-E-A-T-Kriterien (Experience, Expertise, Authoritativeness, Trustworthiness) und werden von echten Expert:innen erstellt. Durch transparente Autor:innenangaben, strukturierte Inhalte und hochwertige Quellen sichern wir nicht nur Top-Rankings, sondern auch das Vertrauen unserer Leser:innen.
        </p>
        <p>
          Zusätzlich nutzen wir semantisches HTML, sinnvolle Zwischenüberschriften (H2/H3), interne Verlinkung und strukturierte Daten, alles im Sinne der Sichtbarkeit und Nutzerfreundlichkeit.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-8">Fazit: Der CAIT Blog ist mehr als Content, er ist Strategie</h3>
        <p>
          Unser Blog ist nicht nur ein Newsfeed, er ist ein strategisches Instrument zur Kundengewinnung, Markenbildung und Marktpositionierung. Wir glauben an Qualität statt Quantität, an nutzerzentrierte Inhalte statt Textwüsten. Und wir glauben daran, dass Berliner Unternehmen mehr Sichtbarkeit verdienen, lokal, national und international.
        </p>
        <p>
          Egal ob du gerade startest oder schon etabliert bist, der <strong className="text-white">Marketing Blog von CAIT</strong> ist deine Ressource für nachhaltiges Wachstum in der digitalen Welt.
        </p>
      </section>
    </div>
  );
}