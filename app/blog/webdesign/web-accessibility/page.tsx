import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Barrierefreies Webdesign | WCAG-Richtlinien 2024',
  description: 'Umfassender Leitfaden zur Erstellung zugänglicher Websites gemäß WCAG-Standards für inklusive Nutzererfahrung',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/webdesign/web-accessibility',
  },
};

const post = {
  slug: 'web-accessibility',
  title: 'Barrierefreies Webdesign',
  excerpt: 'Inklusive Gestaltung für alle Nutzer gemäß WCAG-Richtlinien.',
  image: '/accessibility.webp',
  tags: ['Accessibility', 'UI/UX', 'Inklusion', 'WCAG'],
  readTime: '10 min',
  date: '28. Oktober 2024',
  author: {
    name: 'Muaaz Chihabi',
    role: 'Accessibility-Experte',
    image: '/author-muaaz.webp',
    bio: 'Muaaz Chihabi ist zertifizierter Accessibility-Spezialist mit über 6 Jahren Erfahrung in barrierefreiem Webdesign. Als Berater hilft er Unternehmen, ihre digitalen Angebote für alle Nutzer zugänglich zu machen.'
  },
  content: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Warum Barrierefreiheit im Web essenziell ist</h2>
<p class="text-gray-300 mb-6">Barrierefreies Webdesign ermöglicht etwa 20% der Bevölkerung mit Behinderungen den gleichberechtigten Zugang zu digitalen Inhalten. Neben der gesetzlichen Verpflichtung (z.B. BITV in Deutschland) bietet es auch wirtschaftliche Vorteile durch eine größere Zielgruppe.</p>

<div class="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-200 mb-1">Statistik:</p>
  <p class="text-blue-100">Laut WHO leben weltweit über 1 Milliarde Menschen mit einer Form von Behinderung - das sind 15% der Weltbevölkerung.</p>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">1. WCAG-Richtlinien verstehen</h3>
<p class="text-gray-300 mb-4">Die Web Content Accessibility Guidelines (WCAG) 2.1 sind der internationale Standard:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-700">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-white">Prinzip</th>
        <th class="py-3 px-4 text-left font-semibold text-white">Beschreibung</th>
        <th class="py-3 px-4 text-left font-semibold text-white">Beispiele</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-700">
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Wahrnehmbar</td>
        <td class="py-3 px-4 text-gray-300">Informationen müssen präsentierbar sein</td>
        <td class="py-3 px-4 text-gray-300">Alt-Texte, Kontrastverhältnis</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Bedienbar</td>
        <td class="py-3 px-4 text-gray-300">Navigation muss funktionieren</td>
        <td class="py-3 px-4 text-gray-300">Tastaturbedienbarkeit</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Verständlich</td>
        <td class="py-3 px-4 text-gray-300">Inhalte müssen nachvollziehbar sein</td>
        <td class="py-3 px-4 text-gray-300">Klare Sprache</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Robust</td>
        <td class="py-3 px-4 text-gray-300">Kompatibilität mit Hilfstechnologien</td>
        <td class="py-3 px-4 text-gray-300">Semantisches HTML</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">2. Praktische Umsetzung</h3>
<p class="text-gray-300 mb-4">So setzen Sie Barrierefreiheit technisch um:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Semantisches HTML</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• Korrekte Heading-Hierarchie (h1-h6)</li>
      <li>• ARIA-Labels für komplexe Komponenten</li>
      <li>• Landmark-Rollen (header, main, nav, footer)</li>
      <li>• Formularlabels mit for-Attribut</li>
    </ul>
  </div>
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Design & Interaktion</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• Kontrastverhältnis mindestens 4.5:1</li>
      <li>• Fokus-Indikatoren für Tastaturnavigation</li>
      <li>• Keine reine Farbkodierung von Informationen</li>
      <li>• Ausreichend große Klickflächen</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">3. Barrierefreie Medien</h3>
<p class="text-gray-300 mb-4">Multimedia-Inhalte für alle zugänglich machen:</p>

<div class="bg-green-900/30 border-l-4 border-green-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-200 mb-1">Best Practice:</p>
  <p class="text-green-100">Bieten Sie für Videos Untertitel, Transkripte und Audiodeskription an. Für Bilder verwenden Sie aussagekräftige Alt-Texte.</p>
</div>

<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">Bilder:</span> Alt-Texte für informative Bilder, leere Alt-Attribute für dekorative</li>
  <li><span class="font-medium">Videos:</span> Untertitel für Dialoge und wichtige Geräusche</li>
  <li><span class="font-medium">Audio:</span> Transkripte für Podcasts und Audio-Inhalte</li>
  <li><span class="font-medium">Infografiken:</span> Textalternative oder detaillierte Beschreibung</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">4. Testing & Validierung</h3>
<p class="text-gray-300 mb-4">So testen Sie die Barrierefreiheit Ihrer Website:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Automatisierte Tools</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• WAVE Evaluation Tool</li>
      <li>• axe DevTools Browser Extension</li>
      <li>• Lighthouse Accessibility Audit</li>
      <li>• Pa11y für automatisierte Tests</li>
    </ul>
  </div>
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Manuelle Tests</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• Tastaturnavigation ohne Maus</li>
      <li>• Screenreader-Tests (NVDA, VoiceOver)</li>
      <li>• Zoom auf 200% testen</li>
      <li>• Farbkontrast-Checker</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">5. Häufige Barrieren & Lösungen</h3>
<p class="text-gray-300 mb-4">Typische Probleme und wie Sie sie beheben:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-700">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-white">Problem</th>
        <th class="py-3 px-4 text-left font-semibold text-white">Betroffene Gruppe</th>
        <th class="py-3 px-4 text-left font-semibold text-white">Lösung</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-700">
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Fehlende Alt-Texte</td>
        <td class="py-3 px-4 text-gray-300">Sehbehinderte</td>
        <td class="py-3 px-4 text-gray-300">Beschreibende Alt-Attribute</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Schlechter Kontrast</td>
        <td class="py-3 px-4 text-gray-300">Farbenblinde</td>
        <td class="py-3 px-4 text-gray-300">Mindestens 4.5:1 Kontrast</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Keine Tastaturbedienbarkeit</td>
        <td class="py-3 px-4 text-gray-300">Mobilitätseingeschränkte</td>
        <td class="py-3 px-4 text-gray-300">Tab-Reihenfolge, Fokus-States</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Komplexe Sprache</td>
        <td class="py-3 px-4 text-gray-300">Kognitiv Eingeschränkte</td>
        <td class="py-3 px-4 text-gray-300">Einfache Sprache, klare Struktur</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-white mt-12 mb-6">Zukunft der Barrierefreiheit</h2>
<p class="text-gray-300 mb-6">Neue Entwicklungen im Bereich inklusives Design:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">AI-gestützte Accessibility:</span> Automatische Alt-Texte für Bilder</li>
  <li><span class="font-medium">Adaptive Interfaces:</span> Dynamische Anpassung an Nutzerbedürfnisse</li>
  <li><span class="font-medium">Voice User Interfaces:</span> Sprachsteuerung als Standard</li>
  <li><span class="font-medium">WCAG 3.0:</span> Geplante Erweiterungen der Richtlinien</li>
</ul>
  `
};

export default function AccessibilityPage() {
  return (
    <div className="bg-[#0c1832] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0c1832] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-4">
            Accessibility
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
      <article className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-table:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-200 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-6 md:p-8 bg-gray-800 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 md:w-60 md:h-32 relative rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
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
              <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
              <p className="text-blue-400 font-medium mb-2 md:mb-3">{post.author.role}</p>
              <p className="text-gray-300 text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/muaaz-chihabi/" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Weitere Artikel zu UI/UX</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Responsive Webdesign Article */}
          <article className="group relative bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/responsive-design.svg"
                alt="Responsive Webdesign Techniken für alle Geräte"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full">Responsive</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full">UI/UX</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Responsive Webdesign: Best Practices 2024</h3>
              <p className="text-gray-300 mb-4">Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">7 min Lesezeit</span>
                <Link href="/blog/webdesign/responsives-webdesign" aria-label="Responsive Webdesign lesen">
                  <span className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Responsive Techniken
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Modern CSS Article */}
          <article className="group relative bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/css-trends.webp"
                alt="Moderne CSS-Techniken mit Grid und Container Queries"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full">CSS</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full">Frontend</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Moderne CSS-Techniken 2024</h3>
              <p className="text-gray-300 mb-4">CSS Grid, Container Queries und neue Features effektiv nutzen.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">6 min Lesezeit</span>
                <Link href="/blog/webdesign/modernes-css" aria-label="CSS Trends lesen">
                  <span className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    CSS-Trends
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Performance Optimization Article */}
          <article className="group relative bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/website-speed.webp"
                alt="Website Performance Optimierung - Ladezeiten reduzieren"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full">Performance</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs font-medium rounded-full">Optimierung</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Website-Performance maximieren</h3>
              <p className="text-gray-300 mb-4">Wie Sie Ladezeiten reduzieren und die User Experience verbessern.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">9 min Lesezeit</span>
                <Link href="/blog/webdesign/performance-optimierung" aria-label="Performance-Tipps lesen">
                  <span className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Performance-Tipps
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-10 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">UI/UX Updates erhalten</h2>
            <p className="text-blue-200 mb-6">Abonnieren Sie unseren Newsletter für exklusive Design-Tipps</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="E-Mail für UI/UX-Newsletter"
              />
              <button 
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Newsletter abonnieren"
              >
                Jetzt anmelden
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}