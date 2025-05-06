import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Responsive Webdesign Best Practices 2024 | CAITSocialMedia',
  description: 'Umfassender Leitfaden zu modernen Responsive Webdesign Techniken für optimale Nutzererfahrung auf allen Geräten',
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
    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Die Evolution des Responsive Webdesigns</h2>
<p class="text-gray-700 mb-6">Responsive Webdesign hat sich von einem einfachen Media-Query-Konzept zu einer umfassenden Designphilosophie entwickelt. 2024 erwarten Nutzer nahtlose Erlebnisse über Smartphones, Tablets, Desktop-Computer und sogar Smart-TVs hinweg.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-1">Studienergebnis:</p>
  <p class="text-blue-700">Laut Google haben responsive Websites eine um 67% höhere Conversion-Rate auf Mobilgeräten im Vergleich zu nicht-responsiven Alternativen.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Mobile-First: Vom Konzept zur Praxis</h3>
<p class="text-gray-700 mb-4">Der Mobile-First Ansatz ist 2024 nicht mehr optional. So setzen Sie ihn effektiv um:</p>

<h4 class="font-bold text-gray-800 mt-6 mb-3">Design-Prinzipien</h4>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Content-Priorisierung:</span> Wichtige Inhalte zuerst für mobile Nutzer</li>
  <li><span class="font-medium">Touch-Optimierung:</span> Mindestens 48×48px große interaktive Elemente</li>
  <li><span class="font-medium">Performance:</span> Kritische Ressourcen unter 150KB für 3G-Netzwerke</li>
</ul>

<h4 class="font-bold text-gray-800 mt-6 mb-3">Technische Umsetzung</h4>
<div class="grid md:grid-cols-2 gap-6 my-6">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h5 class="font-bold text-blue-600 mb-3">CSS-Technologien</h5>
    <ul class="space-y-2 text-gray-700">
      <li>• Fluid Grids mit Prozentwerten</li>
      <li>• Flexible Bilder (max-width: 100%)</li>
      <li>• Media Queries für Breakpoints</li>
      <li>• Container Queries (neu 2024)</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h5 class="font-bold text-blue-600 mb-3">Performance-Tools</h5>
    <ul class="space-y-2 text-gray-700">
      <li>• Chrome Lighthouse</li>
      <li>• WebPageTest.org</li>
      <li>• Google PageSpeed Insights</li>
      <li>• BrowserStack für Cross-Device-Tests</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Moderne Layout-Systeme</h3>
<p class="text-gray-700 mb-4">2024 setzen Profis auf diese Technologien:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Technologie</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Einsatzgebiet</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Vorteile</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">CSS Grid</td>
        <td class="py-3 px-4 text-gray-700">Komplexe 2D-Layouts</td>
        <td class="py-3 px-4 text-gray-700">Präzise Kontrolle ohne Media Queries</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Flexbox</td>
        <td class="py-3 px-4 text-gray-700">Ein-dimensionale Layouts</td>
        <td class="py-3 px-4 text-gray-700">Dynamische Ausrichtung</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Container Queries</td>
        <td class="py-3 px-4 text-gray-700">Komponenten-basiert</td>
        <td class="py-3 px-4 text-gray-700">Echte Komponenten-Unabhängigkeit</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Responsive Bilder und Medien</h3>
<p class="text-gray-700 mb-4">Bildoptimierung ist entscheidend für Performance:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-800 mb-1">Best Practice:</p>
  <p class="text-green-700">Verwenden Sie das &lt;picture&gt;-Element mit WebP-Format und Fallback zu JPEG/PNG für maximale Browserkompatibilität.</p>
</div>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Bildformate</h4>
    <ul class="space-y-3 text-gray-700">
      <li><span class="font-medium">WebP:</span> 30% kleiner als JPEG bei gleicher Qualität</li>
      <li><span class="font-medium">AVIF:</span> Neues Format für hohe Kompression</li>
      <li><span class="font-medium">SVG:</span> Für Vektorgrafiken und Icons</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Optimierungstechniken</h4>
    <ul class="space-y-3 text-gray-700">
      <li><span class="font-medium">srcset:</span> Gerätespezifische Bildvarianten</li>
      <li><span class="font-medium">Lazy Loading:</span> loading="lazy" Attribut</li>
      <li><span class="font-medium">Art Direction:</span> Unterschiedliche Bildausschnitte</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Responsive Typografie</h3>
<p class="text-gray-700 mb-4">Schriftgrößen müssen auf allen Geräten lesbar sein:</p>

<div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-purple-800 mb-1">Tipp:</p>
  <p class="text-purple-700">Verwenden Sie clamp() für fließende Schriftgrößen: font-size: clamp(1rem, 2vw, 1.5rem);</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Progressive Enhancement Strategie</h3>
<p class="text-gray-700 mb-4">So stellen Sie Kompatibilität sicher:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Feature Detection:</span> Modernizr oder @supports</li>
  <li><span class="font-medium">Fallbacks:</span> Für ältere Browser bereitstellen</li>
  <li><span class="font-medium">Polyfills:</span> Nur bei Bedarf laden</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">6. Testing und Debugging</h3>
<p class="text-gray-700 mb-4">Umfassende Tests sind unerlässlich:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Testmethoden</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Chrome DevTools Device Mode</li>
      <li>• Responsive Design Checker</li>
      <li>• Echte Gerätetests</li>
      <li>• User Testing mit verschiedenen Geräten</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Häufige Probleme</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Viewport-Meta-Tag fehlt</li>
      <li>• Feste Bildgrößen</li>
      <li>• Nicht-responsive Tabellen</li>
      <li>• Media Query Lücken</li>
    </ul>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Zukunft des Responsive Designs</h2>
<p class="text-gray-700 mb-6">Die Entwicklung geht hin zu noch flexibleren Ansätzen:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">CSS Container Queries:</span> Komponenten reagieren auf ihren Container</li>
  <li><span class="font-medium">Viewport Units:</span> dvh, lvh, svh für bessere Mobile-Experience</li>
  <li><span class="font-medium">Adaptive Designs:</span> KI-gestützte Layoutanpassungen</li>
</ul>
  `
};

export default function ResponsiveDesignPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Webdesign
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-blue-100">
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
            src={post.image}
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
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
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
              <p className="text-blue-600 font-medium mb-2 md:mb-3">{post.author.role}</p>
              <p className="text-gray-700 text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles & Newsletter */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Webdesign-Artikel</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <Link href="/blog/webdesign/performance-optimierung" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/website-speed.webp"
                  alt="Website Performance optimieren"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Performance</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Optimierung</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Website-Performance maximieren
                </h3>
                <p className="text-gray-600 mb-4">Wie Sie Ladezeiten reduzieren und die User Experience verbessern.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">9 min Lesezeit</span>
                  <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Mehr lesen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <Link href="/blog/webdesign/modernes-css" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/css-trends.webp"
                  alt="Moderne CSS-Techniken"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Frontend</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Moderne CSS-Techniken 2024
                </h3>
                <p className="text-gray-600 mb-4">CSS Grid, Container Queries und neue Features effektiv nutzen.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">6 min Lesezeit</span>
                  <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Mehr lesen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <Link href="/blog/webdesign/web-accessibility" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/accessibility.webp"
                  alt="Barrierefreies Webdesign"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Accessibility</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">UI/UX</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Barrierefreies Webdesign
                </h3>
                <p className="text-gray-600 mb-4">Inklusive Gestaltung für alle Nutzer gemäß WCAG-Richtlinien.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 min Lesezeit</span>
                  <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Mehr lesen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Webdesign Updates erhalten</h2>
            <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Tipps und Trends</p>
          </div>
        </div>
      </section>
    </div>
  );
}