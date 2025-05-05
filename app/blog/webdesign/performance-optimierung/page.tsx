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
      <strong class="block font-semibold text-blue-800">Wichtige Kennzahlen:</strong>
      <ul class="text-blue-700 mt-1 space-y-1">
        <li>• <strong>Largest Contentful Paint (LCP):</strong> Sollte unter 2.5 Sekunden liegen</li>
        <li>• <strong>First Input Delay (FID):</strong> Sollte unter 100ms liegen</li>
        <li>• <strong>Cumulative Layout Shift (CLS):</strong> Sollte unter 0.1 liegen</li>
      </ul>
    </div>

    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Asset-Optimierung</h3>
    <p class="text-gray-700 mb-4">Die größten Performance-Gewinne erzielen Sie durch Optimierung Ihrer Assets:</p>
    
    <h4 class="font-bold text-gray-800 mt-6 mb-3">Bildoptimierung</h4>
    <div class="grid md:grid-cols-2 gap-6 my-6">
      <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h5 class="font-bold text-blue-600 mb-3">Moderne Formate</h5>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>WebP:</strong> 30% kleiner als JPEG bei gleicher Qualität</li>
          <li>• <strong>AVIF:</strong> Noch bessere Kompression für unterstützte Browser</li>
          <li>• <strong>SVG:</strong> Für Vektorgrafiken und Icons</li>
        </ul>
      </div>
      <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h5 class="font-bold text-blue-600 mb-3">Optimierungstechniken</h5>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>Responsive Bilder:</strong> srcset und sizes Attribute</li>
          <li>• <strong>Lazy Loading:</strong> loading="lazy" für unterhalb des Folds</li>
          <li>• <strong>Komprimierung:</strong> Tools wie Squoosh oder ImageOptim</li>
        </ul>
      </div>
    </div>

    <h4 class="font-bold text-gray-800 mt-6 mb-3">JavaScript & CSS</h4>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
      <li><strong>Code-Splitting:</strong> Nur notwendigen Code laden</li>
      <li><strong>Minifizierung:</strong> Tools wie Terser oder CSSNano</li>
      <li><strong>Tree Shaking:</strong> Unbenutzten Code entfernen</li>
      <li><strong>Critical CSS:</strong> Above-the-fold CSS inline einbinden</li>
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
      <strong class="block font-semibold text-green-800">Best Practice:</strong>
      <p class="text-green-700 mt-1">Setzen Sie Cache-Control Header mit max-age von mindestens 1 Jahr für statische Assets (CSS, JS, Bilder) und implementieren Sie Versionierung im Dateinamen.</p>
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
      <strong class="block font-semibold text-purple-800">Tipp:</strong>
      <p class="text-purple-700 mt-1">Richten Sie Performance-Budgets ein und integrieren Sie Performance-Checks in Ihren CI/CD-Prozess.</p>
    </div>

    <h4 class="font-bold text-gray-800 mt-6 mb-3">Wichtige Tools</h4>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
      <li><strong>Lighthouse:</strong> Umfassende Audits direkt in Chrome DevTools</li>
      <li><strong>WebPageTest:</strong> Detaillierte Tests von verschiedenen Standorten</li>
      <li><strong>Chrome User Experience Report:</strong> Reale Nutzerdaten</li>
      <li><strong>New Relic/Datadog:</strong> Echtzeit-Monitoring</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Zukunft der Web-Performance</h2>
    <p class="text-gray-700 mb-6">Neue Technologien versprechen weitere Verbesserungen:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
      <li><strong>HTTP/3:</strong> Schnellere Verbindungsaufnahme mit QUIC</li>
      <li><strong>ES Modules:</strong> Native Browser-Module für bessere Caching</li>
      <li><strong>Partytown:</strong> Auslagern von Third-Party-Skripts in Web Worker</li>
      <li><strong>Islands Architecture:</strong> Teil-Hydration für bessere Interaktivität</li>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Performance-Artikel</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <Link href="/blog/webdesign/responsives-webdesign" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/responsive-design.svg"
                  alt="Responsive Webdesign"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Responsive Webdesign: Best Practices 2024
                </h3>
                <p className="text-gray-600 mb-4">Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">7 min Lesezeit</span>
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
            <Link href="/blog/webdesign/javascript-frameworks" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/js-frameworks.webp"
                  alt="JavaScript Frameworks"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  JavaScript Frameworks im Vergleich
                </h3>
                <p className="text-gray-600 mb-4">React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">10 min Lesezeit</span>
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
            <Link href="/blog/webdesign/wordpress-entwicklung" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/wordpress-dev.webp"
                  alt="WordPress Entwicklung"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Moderne WordPress-Entwicklung
                </h3>
                <p className="text-gray-600 mb-4">Block-Themes, Headless CMS und Performance-Tuning für WordPress.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Performance Updates erhalten</h2>
            <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Optimierungstipps</p>
          </div>
        </div>
      </section>
    </div>
  );
}