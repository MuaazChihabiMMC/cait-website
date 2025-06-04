import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Responsive Webdesign Best Practices 2024 | CAITSocialMedia',
  description: 'Umfassender Leitfaden zu modernen Responsive Webdesign Techniken für optimale Nutzererfahrung auf allen Geräten',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/webdesign/responsives-webdesign',
  },
};

const post = {
  slug: 'responsives-webdesign',
  title: 'Responsive Webdesign: Best Practices 2024',
  excerpt: 'Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.',
  image: '/responsive-design.svg',
  tags: ['Responsive', 'UI/UX', 'Frontend', 'Mobile'],
  readTime: '15 min',
  date: '15. November 2024',
  author: {
    name: 'Muaaz Chihabi',
    role: 'Frontend-Architekt',
    image: '/author-muaaz.webp',
    bio: 'Muaaz Chihabi ist ein erfahrener Frontend-Architekt mit Spezialisierung auf responsive Webdesign und Performance-Optimierung. Mit über 8 Jahren Erfahrung hilft er Unternehmen, nutzerfreundliche Websites zu entwickeln, die auf allen Geräten perfekt funktionieren.'
  },
  content: `
    <h2 class="text-2xl font-bold text-blue-100 mt-8 mb-4">Die Evolution des Responsive Webdesigns</h2>
    <p class="text-blue-200 mb-6">Responsive Webdesign hat sich von einem einfachen Media-Query-Konzept zu einer umfassenden Designphilosophie entwickelt. 2024 erwarten Nutzer nahtlose Erlebnisse über Smartphones, Tablets, Desktop-Computer und sogar Smart-TVs hinweg.</p>

    <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
      <p class="font-semibold text-blue-300 mb-1">Studienergebnis:</p>
      <p class="text-blue-200">Laut Google haben responsive Websites eine um 67% höhere Conversion-Rate auf Mobilgeräten im Vergleich zu nicht-responsiven Alternativen.</p>
    </div>

    <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">1. Mobile-First: Vom Konzept zur Praxis</h3>
    <p class="text-blue-200 mb-4">Der Mobile-First Ansatz ist 2024 nicht mehr optional. So setzen Sie ihn effektiv um:</p>

    <h4 class="font-bold text-blue-300 mt-6 mb-3">Design-Prinzipien</h4>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
      <li><span class="font-medium text-blue-300">Content-Priorisierung:</span> Wichtige Inhalte zuerst für mobile Nutzer</li>
      <li><span class="font-medium text-blue-300">Touch-Optimierung:</span> Mindestens 48×48px große interaktive Elemente</li>
      <li><span class="font-medium text-blue-300">Performance:</span> Kritische Ressourcen unter 150KB für 3G-Netzwerke</li>
    </ul>

    <h4 class="font-bold text-blue-300 mt-6 mb-3">Technische Umsetzung</h4>
    <div class="grid md:grid-cols-2 gap-6 my-6">
      <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
        <h5 class="font-bold text-blue-300 mb-3">CSS-Technologien</h5>
        <ul class="space-y-2 text-blue-200">
          <li>• Fluid Grids mit Prozentwerten</li>
          <li>• Flexible Bilder (max-width: 100%)</li>
          <li>• Media Queries für Breakpoints</li>
          <li>• Container Queries (neu 2024)</li>
        </ul>
      </div>
      <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
        <h5 class="font-bold text-blue-300 mb-3">Performance-Tools</h5>
        <ul class="space-y-2 text-blue-200">
          <li>• Chrome Lighthouse</li>
          <li>• WebPageTest.org</li>
          <li>• Google PageSpeed Insights</li>
          <li>• BrowserStack für Cross-Device-Tests</li>
        </ul>
      </div>
    </div>

    <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">2. Moderne Layout-Systeme</h3>
    <p class="text-blue-200 mb-4">2024 setzen Profis auf diese Technologien:</p>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-blue-900/30 rounded-lg overflow-hidden mb-6 border border-blue-800">
        <thead class="bg-blue-900/50">
          <tr>
            <th class="py-3 px-4 text-left font-semibold text-blue-300">Technologie</th>
            <th class="py-3 px-4 text-left font-semibold text-blue-300">Einsatzgebiet</th>
            <th class="py-3 px-4 text-left font-semibold text-blue-300">Vorteile</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-blue-800">
          <tr>
            <td class="py-3 px-4 text-blue-200 font-medium">CSS Grid</td>
            <td class="py-3 px-4 text-blue-200">Komplexe 2D-Layouts</td>
            <td class="py-3 px-4 text-blue-200">Präzise Kontrolle ohne Media Queries</td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-blue-200 font-medium">Flexbox</td>
            <td class="py-3 px-4 text-blue-200">Ein-dimensionale Layouts</td>
            <td class="py-3 px-4 text-blue-200">Dynamische Ausrichtung</td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-blue-200 font-medium">Container Queries</td>
            <td class="py-3 px-4 text-blue-200">Komponenten-basiert</td>
            <td class="py-3 px-4 text-blue-200">Echte Komponenten-Unabhängigkeit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">3. Responsive Bilder und Medien</h3>
    <p class="text-blue-200 mb-4">Bildoptimierung ist entscheidend für Performance:</p>

    <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
      <p class="font-semibold text-blue-300 mb-1">Best Practice:</p>
      <p class="text-blue-200">Verwenden Sie das &lt;picture&gt;-Element mit WebP-Format und Fallback zu JPEG/PNG für maximale Browserkompatibilität.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 my-8">
      <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
        <h4 class="font-bold text-blue-300 mb-3">Bildformate</h4>
        <ul class="space-y-3 text-blue-200">
          <li><span class="font-medium text-blue-300">WebP:</span> 30% kleiner als JPEG bei gleicher Qualität</li>
          <li><span class="font-medium text-blue-300">AVIF:</span> Neues Format für hohe Kompression</li>
          <li><span class="font-medium text-blue-300">SVG:</span> Für Vektorgrafiken und Icons</li>
        </ul>
      </div>
      <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
        <h4 class="font-bold text-blue-300 mb-3">Optimierungstechniken</h4>
        <ul class="space-y-3 text-blue-200">
          <li><span class="font-medium text-blue-300">srcset:</span> Gerätespezifische Bildvarianten</li>
          <li><span class="font-medium text-blue-300">Lazy Loading:</span> loading="lazy" Attribut</li>
          <li><span class="font-medium text-blue-300">Art Direction:</span> Unterschiedliche Bildausschnitte</li>
        </ul>
      </div>
    </div>

    <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">4. Responsive Typografie</h3>
    <p class="text-blue-200 mb-4">Schriftgrößen müssen auf allen Geräten lesbar sein:</p>

    <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
      <p class="font-semibold text-blue-300 mb-1">Tipp:</p>
      <p class="text-blue-200">Verwenden Sie clamp() für fließende Schriftgrößen: font-size: clamp(1rem, 2vw, 1.5rem);</p>
    </div>

    <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">5. Progressive Enhancement Strategie</h3>
    <p class="text-blue-200 mb-4">So stellen Sie Kompatibilität sicher:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
      <li><span class="font-medium text-blue-300">Feature Detection:</span> Modernizr oder @supports</li>
      <li><span class="font-medium text-blue-300">Fallbacks:</span> Für ältere Browser bereitstellen</li>
      <li><span class="font-medium text-blue-300">Polyfills:</span> Nur bei Bedarf laden</li>
    </ul>

    <h3 class="text-xl font-bold text-blue-100 mt-8 mb-4">6. Testing und Debugging</h3>
    <p class="text-blue-200 mb-4">Umfassende Tests sind unerlässlich:</p>

    <div class="grid md:grid-cols-2 gap-6 my-8">
      <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
        <h4 class="font-bold text-blue-300 mb-3">Testmethoden</h4>
        <ul class="space-y-2 text-blue-200">
          <li>• Chrome DevTools Device Mode</li>
          <li>• Responsive Design Checker</li>
          <li>• Echte Gerätetests</li>
          <li>• User Testing mit verschiedenen Geräten</li>
        </ul>
      </div>
      <div class="bg-blue-900/30 p-6 rounded-lg shadow border border-blue-800">
        <h4 class="font-bold text-blue-300 mb-3">Häufige Probleme</h4>
        <ul class="space-y-2 text-blue-200">
          <li>• Viewport-Meta-Tag fehlt</li>
          <li>• Feste Bildgrößen</li>
          <li>• Nicht-responsive Tabellen</li>
          <li>• Media Query Lücken</li>
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-blue-100 mt-12 mb-6">Zukunft des Responsive Designs</h2>
    <p class="text-blue-200 mb-6">Die Entwicklung geht hin zu noch flexibleren Ansätzen:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
      <li><span class="font-medium text-blue-300">CSS Container Queries:</span> Komponenten reagieren auf ihren Container</li>
      <li><span class="font-medium text-blue-300">Viewport Units:</span> dvh, lvh, svh für bessere Mobile-Experience</li>
      <li><span class="font-medium text-blue-300">Adaptive Designs:</span> KI-gestützte Layoutanpassungen</li>
    </ul>
  `
};

export default function ResponsiveDesignPage() {
  return (
    <div className="bg-[#0c1832] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Webdesign
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
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-blue-100 prose-p:text-blue-200 prose-ul:text-blue-200 prose-li:text-blue-200 prose-strong:text-blue-300 prose-table:text-blue-200 prose-th:text-blue-300 prose-td:text-blue-200"
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

        {/* Author Bio */}
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
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-blue-100 mb-8">Weitere Webdesign-Artikel</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Performance Optimization Article */}
          <article className="group relative bg-blue-900/30 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-800/50">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/website-speed.webp"
                alt="Website Performance Optimierung - Ladezeiten reduzieren"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Performance</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Optimierung</span>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Website-Performance maximieren</h3>
              <p className="text-blue-200 mb-4">Wie Sie Ladezeiten reduzieren und die User Experience verbessern.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">9 min Lesezeit</span>
                <Link href="/blog/webdesign/performance-optimierung" aria-label="Performance-Tipps lesen">
                  <span className="text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Performance-Tipps
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Modern CSS Article */}
          <article className="group relative bg-blue-900/30 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-800/50">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/css-trends.webp"
                alt="Moderne CSS-Techniken - Grid, Container Queries"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-800">CSS</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Frontend</span>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Moderne CSS-Techniken 2024</h3>
              <p className="text-blue-200 mb-4">CSS Grid, Container Queries und neue Features effektiv nutzen.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">6 min Lesezeit</span>
                <Link href="/blog/webdesign/modernes-css" aria-label="CSS-Trends lesen">
                  <span className="text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    CSS-Trends
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Accessibility Article */}
          <article className="group relative bg-blue-900/30 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-800/50">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/accessibility.webp"
                alt="Barrierefreies Webdesign - WCAG Richtlinien"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Accessibility</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-800">UI/UX</span>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Barrierefreies Webdesign</h3>
              <p className="text-blue-200 mb-4">Inklusive Gestaltung für alle Nutzer gemäß WCAG-Richtlinien.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">8 min Lesezeit</span>
                <Link href="/blog/webdesign/web-accessibility" aria-label="Accessibility Guide öffnen">
                  <span className="text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Accessibility Guide
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
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg border border-blue-800/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Webdesign Updates erhalten</h2>
            <p className="text-blue-200 mb-6">Abonnieren Sie unseren Newsletter für exklusive Tipps und Trends</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="E-Mail für Webdesign-Newsletter"
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