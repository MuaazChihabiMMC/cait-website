import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Website Performance Optimierung 2024 | CAITSocialMedia',
  description: 'Umfassender Leitfaden zur Performance-Optimierung für schnellere Ladezeiten und bessere User Experience',
};

const post = {
  slug: 'performance-optimierung',
  title: 'Website-Performance maximieren',
  excerpt: 'Wie Sie Ladezeiten reduzieren und die User Experience verbessern.',
  image: '/website-speed.webp',
  tags: ['Performance', 'Optimierung', 'Frontend', 'SEO'],
  readTime: '12 min',
  date: '5. November 2024',
  author: {
    name: 'Muaaz Chihabi',
    role: 'Performance-Spezialist',
    image: '/author-muaaz.webp',
    bio: 'Muaaz Chihabi ist ein erfahrener Performance-Spezialist mit Fokus auf Web-Optimierung. Mit seinem technischen Know-how hilft er Unternehmen, ihre Websites signifikant zu beschleunigen und die Nutzererfahrung zu verbessern.'
  },
  content: `
    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warum Website-Performance entscheidend ist</h2>
<p class="text-gray-700 mb-6">Die Ladezeit einer Website ist direkt mit Conversion-Raten, Nutzerzufriedenheit und SEO-Rankings verbunden. Studien zeigen, dass schon eine Verzögerung von einer Sekunde die Conversion-Rate um 7% reduzieren kann.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-2">Wichtige Kennzahlen:</p>
  <ul class="text-blue-700 space-y-1">
    <li>• <span class="font-medium">Largest Contentful Paint (LCP):</span> Sollte unter 2.5 Sekunden liegen</li>
    <li>• <span class="font-medium">First Input Delay (FID):</span> Sollte unter 100ms liegen</li>
    <li>• <span class="font-medium">Cumulative Layout Shift (CLS):</span> Sollte unter 0.1 liegen</li>
  </ul>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Asset-Optimierung</h3>
<p class="text-gray-700 mb-4">Die größten Performance-Gewinne erzielen Sie durch Optimierung Ihrer Assets:</p>

<h4 class="font-bold text-gray-800 mt-6 mb-3">Bildoptimierung</h4>
<div class="grid md:grid-cols-2 gap-6 my-6">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h5 class="font-bold text-blue-600 mb-3">Moderne Formate</h5>
    <ul class="space-y-2 text-gray-700">
      <li>• <span class="font-medium">WebP:</span> 30% kleiner als JPEG bei gleicher Qualität</li>
      <li>• <span class="font-medium">AVIF:</span> Noch bessere Kompression für unterstützte Browser</li>
      <li>• <span class="font-medium">SVG:</span> Für Vektorgrafiken und Icons</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h5 class="font-bold text-blue-600 mb-3">Optimierungstechniken</h5>
    <ul class="space-y-2 text-gray-700">
      <li>• <span class="font-medium">Responsive Bilder:</span> srcset und sizes Attribute</li>
      <li>• <span class="font-medium">Lazy Loading:</span> loading="lazy" für unterhalb des Folds</li>
      <li>• <span class="font-medium">Komprimierung:</span> Tools wie Squoosh oder ImageOptim</li>
    </ul>
  </div>
</div>

<h4 class="font-bold text-gray-800 mt-6 mb-3">JavaScript & CSS</h4>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Code-Splitting:</span> Nur notwendigen Code laden</li>
  <li><span class="font-medium">Minifizierung:</span> Tools wie Terser oder CSSNano</li>
  <li><span class="font-medium">Tree Shaking:</span> Unbenutzten Code entfernen</li>
  <li><span class="font-medium">Critical CSS:</span> Above-the-fold CSS inline einbinden</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Server-Optimierung</h3>
<p class="text-gray-700 mb-4">Die Server-Konfiguration hat großen Einfluss auf die Performance:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Technologie</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Wirkung</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Implementierung</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">HTTP/2</td>
        <td class="py-3 px-4 text-gray-700">Multiplexing von Requests</td>
        <td class="py-3 px-4 text-gray-700">Server-Konfiguration</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Brotli-Kompression</td>
        <td class="py-3 px-4 text-gray-700">Bessere Kompression als Gzip</td>
        <td class="py-3 px-4 text-gray-700">.htaccess oder Server Config</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Edge Caching</td>
        <td class="py-3 px-4 text-gray-700">Reduziert Server-Last</td>
        <td class="py-3 px-4 text-gray-700">CDN wie Cloudflare</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Caching-Strategien</h3>
<p class="text-gray-700 mb-4">Durch effektives Caching können Sie wiederkehrende Besucher deutlich schneller bedienen:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-800 mb-1">Best Practice:</p>
  <p class="text-green-700">Setzen Sie Cache-Control Header mit max-age von mindestens 1 Jahr für statische Assets (CSS, JS, Bilder) und implementieren Sie Versionierung im Dateinamen.</p>
</div>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Client-seitiges Caching</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Browser-Caching via HTTP-Header</li>
      <li>• Service Worker für Offline-Funktionalität</li>
      <li>• localStorage für kleine Datenmengen</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Server-seitiges Caching</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• CDN-Caching für statische Inhalte</li>
      <li>• Redis/Memcached für dynamische Inhalte</li>
      <li>• Full-Page-Caching wo möglich</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Monitoring und Tools</h3>
<p class="text-gray-700 mb-4">Regelmäßige Überwachung ist essenziell für dauerhaft gute Performance:</p>

<div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-purple-800 mb-1">Tipp:</p>
  <p class="text-purple-700">Richten Sie Performance-Budgets ein und integrieren Sie Performance-Checks in Ihren CI/CD-Prozess.</p>
</div>

<h4 class="font-bold text-gray-800 mt-6 mb-3">Wichtige Tools</h4>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Lighthouse:</span> Umfassende Audits direkt in Chrome DevTools</li>
  <li><span class="font-medium">WebPageTest:</span> Detaillierte Tests von verschiedenen Standorten</li>
  <li><span class="font-medium">Chrome User Experience Report:</span> Reale Nutzerdaten</li>
  <li><span class="font-medium">New Relic/Datadog:</span> Echtzeit-Monitoring</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Zukunft der Web-Performance</h2>
<p class="text-gray-700 mb-6">Neue Technologien versprechen weitere Verbesserungen:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">HTTP/3:</span> Schnellere Verbindungsaufnahme mit QUIC</li>
  <li><span class="font-medium">ES Modules:</span> Native Browser-Module für bessere Caching</li>
  <li><span class="font-medium">Partytown:</span> Auslagern von Third-Party-Skripts in Web Worker</li>
  <li><span class="font-medium">Islands Architecture:</span> Teil-Hydration für bessere Interaktivität</li>
</ul>
  `
};

export default function PerformanceOptimizationPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Performance
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
                
                <a href="https://www.linkedin.com/in/muaaz-chihabi/" className="text-blue-500 hover:text-blue-700 transition-colors">
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
  <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Performance-Artikel</h2>
  <div className="grid md:grid-cols-3 gap-6 mb-16">

    {/* Artikel 1 */}
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/responsive-design.svg"
          alt="Responsive Webdesign Techniken für alle Geräte"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Responsive</span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">UI/UX</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Responsive Webdesign: Best Practices 2024</h3>
        <p className="text-gray-600 mb-4">Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">7 min Lesezeit</span>
          <Link href="/blog/webdesign/responsives-webdesign" aria-label="Responsive Techniken Artikel öffnen">
            <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
              Responsive Techniken
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>

    {/* Artikel 2 */}
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/js-frameworks.webp"
          alt="Vergleich von JavaScript Frameworks: React, Vue, Angular, Svelte"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">JavaScript</span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Frameworks</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">JavaScript Frameworks im Vergleich</h3>
        <p className="text-gray-600 mb-4">React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">10 min Lesezeit</span>
          <Link href="/blog/webdesign/javascript-frameworks" aria-label="Framework-Vergleich Artikel öffnen">
            <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
              Framework-Vergleich
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>

    {/* Artikel 3 */}
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/wordpress-dev.webp"
          alt="Moderne WordPress Entwicklung mit Block-Themes und Headless CMS"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">WordPress</span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">CMS</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Moderne WordPress-Entwicklung</h3>
        <p className="text-gray-600 mb-4">Block-Themes, Headless CMS und Performance-Tuning für WordPress.</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">8 min Lesezeit</span>
          <Link href="/blog/webdesign/wordpress-entwicklung" aria-label="WordPress-Tipps Artikel öffnen">
            <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
              WordPress-Tipps
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>

  </div>

  {/* Newsletter CTA */}
  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Performance Updates erhalten</h2>
      <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Optimierungstipps</p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Ihre E-Mail-Adresse" 
          className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="E-Mail für Performance-Newsletter"
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