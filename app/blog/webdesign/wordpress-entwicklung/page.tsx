import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Moderne WordPress-Entwicklung | CAITSocialMedia',
  description: 'Block-Themes, Headless CMS und Performance-Tuning für WordPress.',
};

const post = {
  slug: 'wordpress-entwicklung',
  title: 'Moderne WordPress-Entwicklung',
  excerpt: 'Block-Themes, Headless CMS und Performance-Tuning für WordPress.',
  image: '/wordpress-dev.webp',
  tags: ['WordPress', 'CMS'],
  readTime: '8 min',
  date: '5. Oktober 2024',
  author: {
    name: 'Muaaz Chihabi',
    role: 'WordPress-Experte',
    image: '/author-muaaz.webp',
    bio: 'Muaaz Chihabi ist ein zertifizierter WordPress-Entwickler mit über 10 Jahren Erfahrung. Er hat sich auf moderne WordPress-Architekturen, Performance-Optimierung und innovative Lösungen wie Headless WordPress spezialisiert.'
  },
  content: `
    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Die Evolution von WordPress</h2>
<p class="text-gray-700 mb-6">WordPress hat sich vom einfachen Blogging-System zum vollwertigen Content-Management-System entwickelt. Mit dem Block-Editor, Full Site Editing und modernen API-Möglichkeiten bietet WordPress heute Technologien für anspruchsvolle Webprojekte.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-1">Statistik:</p>
  <p class="text-blue-700">Laut W3Techs nutzen 43% aller Websites WordPress - das sind über 810 Millionen Websites weltweit (Stand 2024).</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Block-Themes und Full Site Editing</h3>
<p class="text-gray-700 mb-4">Mit WordPress 5.9 wurde das Full Site Editing eingeführt, das das Design der gesamten Website mit Blöcken ermöglicht:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Vorteile von Block-Themes</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Kein Theme-Code mehr notwendig</li>
      <li>• Visuelles Bearbeiten aller Website-Bereiche</li>
      <li>• Einheitlicher Workflow für Inhalte und Design</li>
      <li>• Wiederverwendbare Block-Muster</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Wichtige Block-Typen</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Template Parts (Header, Footer etc.)</li>
      <li>• Query Loop für dynamische Inhalte</li>
      <li>• Global Styles für Design-Systeme</li>
      <li>• Theme Blocks für Navigationen</li>
    </ul>
  </div>
</div>

<div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-orange-800 mb-1">Beispiel:</p>
  <pre class="text-orange-700 bg-gray-800 p-4 rounded overflow-x-auto">
/*
 * Theme.json für globale Design-Einstellungen
 */
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "#2563eb", "name": "Primary" }
      ]
    }
  }
}</pre>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Headless WordPress als CMS</h3>
<p class="text-gray-700 mb-4">Die REST API macht WordPress zu einem leistungsfähigen Backend für moderne Frontends:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Ansatz</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Vorteile</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Technologien</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Frontend-Framework</td>
        <td class="py-3 px-4 text-gray-700">Beste Performance, moderne UX</td>
        <td class="py-3 px-4 text-gray-700">React, Vue, Next.js</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Static Site Gen.</td>
        <td class="py-3 px-4 text-gray-700">Höchste Sicherheit & Geschwindigkeit</td>
        <td class="py-3 px-4 text-gray-700">Next.js, Gatsby</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Hybrid</td>
        <td class="py-3 px-4 text-gray-700">Kombiniert Vorteile beider Welten</td>
        <td class="py-3 px-4 text-gray-700">Frontity, Faust.js</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Performance-Optimierung</h3>
<p class="text-gray-700 mb-4">Moderne Techniken für schnelle WordPress-Sites:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Server & Caching</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Object Caching (Redis, Memcached)</li>
      <li>• Page Caching (FastCGI, Nginx)</li>
      <li>• CDN-Integration (Cloudflare, BunnyCDN)</li>
      <li>• PHP 8.3 mit OPcache</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Frontend</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Critical CSS und Lazy Loading</li>
      <li>• WebP-Bilder und AVIF-Unterstützung</li>
      <li>• JavaScript-Optimierung (Defer, Async)</li>
      <li>• Ressourcen-Hinting (Preload, Preconnect)</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Sicherheit für WordPress</h3>
<p class="text-gray-700 mb-4">Best Practices für sichere WordPress-Installationen:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-800 mb-1">Wichtig:</p>
  <p class="text-green-700">90% aller WordPress-Hacks wären durch einfache Maßnahmen wie regelmäßige Updates, starke Passwörter und Zwei-Faktor-Authentifizierung vermeidbar.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Moderne Entwicklungspraktiken</h3>
<p class="text-gray-700 mb-4">So entwickeln Sie professionell mit WordPress:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Composer:</span> Dependency Management für Plugins</li>
  <li><span class="font-medium">Bedrock:</span> WordPress als Composer-Paket</li>
  <li><span class="font-medium">Docker:</span> Konsistente Entwicklungsumgebungen</li>
  <li><span class="font-medium">CI/CD:</span> Automatisierte Tests und Deployments</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Die Zukunft von WordPress</h2>
<p class="text-gray-700 mb-6">Entwicklungen, die WordPress prägen werden:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Phase 3:</span> Mehrsprachigkeit und Workflows</li>
  <li><span class="font-medium">Block-Directory:</span> Plugins direkt im Editor</li>
  <li><span class="font-medium">Web3:</span> Integration von Blockchain-Technologien</li>
  <li><span class="font-medium">AI:</span> KI-gestützte Inhaltserstellung</li>
</ul>
  `
};

export default function WordPressPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            CMS
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere CMS-Artikel</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
            <Link href="/blog/webdesign/performance-optimierung" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/website-speed.webp"
                  alt="website speed"
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
                Website Performance Optimierung
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
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Webentwicklung Updates erhalten</h2>
            <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Technologie-Tipps</p>
          </div>
        </div>
      </section>
    </div>
  );
}