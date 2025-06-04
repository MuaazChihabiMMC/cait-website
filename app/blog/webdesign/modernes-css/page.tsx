import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Moderne CSS-Techniken 2024 | CAITSocialMedia',
  description: 'Aktuelle CSS-Features wie Grid, Container Queries und neue Layout-Methoden für moderne Webentwicklung',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/webdesign/modernes-css',
  },
};

const post = {
  slug: 'modernes-css',
  title: 'Moderne CSS-Techniken 2024',
  excerpt: 'CSS Grid, Container Queries und neue Features effektiv nutzen.',
  image: '/css-trends.webp',
  tags: ['CSS', 'Frontend', 'Layout', 'Design'],
  readTime: '8 min',
  date: '20. Oktober 2024',
  author: {
    name: 'Muaaz Chihabi',
    role: 'CSS-Experte',
    image: '/author-muaaz.webp',
    bio: 'Muaaz Chihabi ist ein passionierter CSS-Spezialist mit über 7 Jahren Erfahrung in modernen Web-Layouts. Er hat sich auf die Entwicklung responsiver, barrierefreier und performanter Benutzeroberflächen spezialisiert, die sowohl ästhetisch als auch funktional überzeugen.'
  },
  content: `
   <h2 class="text-2xl font-bold text-white mt-8 mb-4">Die Evolution von CSS</h2>
<p class="text-gray-300 mb-6">CSS hat sich in den letzten Jahren rasant weiterentwickelt. Während wir früher mit Float-basierten Layouts kämpften, stehen uns heute mächtige Tools wie Grid, Flexbox und Container Queries zur Verfügung, die das Webdesign revolutioniert haben.</p>

<div class="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-300 mb-1">Statistik:</p>
  <p class="text-blue-200">Laut State of CSS 2023 verwenden bereits 87% der Entwickler CSS Grid und 92% Flexbox in ihren Projekten.</p>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">1. CSS Grid: Das ultimative Layout-Tool</h3>
<p class="text-gray-300 mb-4">CSS Grid ermöglicht komplexe zweidimensionale Layouts mit minimalem Code:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-gray-800/50 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Grid-Grundlagen</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• <code class="bg-gray-700 px-1 rounded">display: grid</code> aktiviert Grid</li>
      <li>• <code class="bg-gray-700 px-1 rounded">grid-template-columns</code> definiert Spalten</li>
      <li>• <code class="bg-gray-700 px-1 rounded">grid-template-rows</code> definiert Zeilen</li>
      <li>• <code class="bg-gray-700 px-1 rounded">gap</code> für Abstände zwischen Elementen</li>
    </ul>
  </div>
  <div class="bg-gray-800/50 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Fortgeschrittene Techniken</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• <code class="bg-gray-700 px-1 rounded">grid-template-areas</code> für semantische Layouts</li>
      <li>• <code class="bg-gray-700 px-1 rounded">minmax()</code> für flexible Größen</li>
      <li>• <code class="bg-gray-700 px-1 rounded">auto-fit</code> und <code class="bg-gray-700 px-1 rounded">auto-fill</code></li>
      <li>• <code class="bg-gray-700 px-1 rounded">Subgrid</code> für verschachtelte Grids</li>
    </ul>
  </div>
</div>

<div class="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-300 mb-1">Beispiel:</p>
  <pre class="text-blue-200 bg-gray-800 p-4 rounded overflow-x-auto">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}</pre>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">2. Container Queries: Der Game-Changer</h3>
<p class="text-gray-300 mb-4">Container Queries ermöglichen es Komponenten, ihr Layout basierend auf der verfügbaren Containergröße anzupassen:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-700">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-300">Feature</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-300">Beschreibung</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-300">Browser-Support</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-700">
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">@container</td>
        <td class="py-3 px-4 text-gray-300">Definiert den Container-Kontext</td>
        <td class="py-3 px-4 text-gray-300">Chrome, Edge, Firefox, Safari</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">container-type</td>
        <td class="py-3 px-4 text-gray-300">Legt die Art des Containers fest</td>
        <td class="py-3 px-4 text-gray-300">Chrome, Edge, Firefox, Safari</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">container-name</td>
        <td class="py-3 px-4 text-gray-300">Benennt Container für spezifische Queries</td>
        <td class="py-3 px-4 text-gray-300">Chrome, Edge, Firefox, Safari</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">3. Neue CSS-Features 2024</h3>
<p class="text-gray-300 mb-4">Diese modernen CSS-Features sollten Sie kennen:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-gray-800/50 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Layout & Design</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• <span class="font-medium">CSS Nesting:</span> Verschachtelung von Selektoren</li>
      <li>• <span class="font-medium">:has():</span> Elternselektor für komplexe Bedingungen</li>
      <li>• <span class="font-medium">Viewport Units:</span> dvh, lvh, svh für mobile Geräte</li>
      <li>• <span class="font-medium">Scroll Snap:</span> Präzise Scroll-Positionierung</li>
    </ul>
  </div>
  <div class="bg-gray-800/50 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Animation & Interaktion</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• <span class="font-medium">View Transitions API:</span> Native Seitenübergänge</li>
      <li>• <span class="font-medium">@scroll-timeline:</span> Animationen basierend auf Scroll</li>
      <li>• <span class="font-medium">color-mix():</span> Dynamische Farbmischung</li>
      <li>• <span class="font-medium">accent-color:</span> Styling von Formularelementen</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">4. CSS vs. CSS-in-JS: Aktuelle Trends</h3>
<p class="text-gray-300 mb-4">Die Debatte um die beste Styling-Methode:</p>

<div class="bg-green-900/30 border-l-4 border-green-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-300 mb-1">Erkenntnis:</p>
  <p class="text-green-200">Native CSS-Features wie Cascade Layers und Scoping reduzieren den Bedarf an CSS-in-JS für viele Anwendungsfälle, während Tools wie Panda CSS eine Brücke zwischen beiden Welten schlagen.</p>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">5. Performance-Optimierung mit modernem CSS</h3>
<p class="text-gray-300 mb-4">So machen Sie Ihr CSS performant:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">Reduzierte Reflows:</span> CSS Triggers vermeiden</li>
  <li><span class="font-medium">Effiziente Selektoren:</span> Spezifität und Komplexität minimieren</li>
  <li><span class="font-medium">Critical CSS:</span> Above-the-fold Styling priorisieren</li>
  <li><span class="font-medium">Modernes Laden:</span> @import vermeiden, lieber link-Tags</li>
</ul>

<h2 class="text-2xl font-bold text-white mt-12 mb-6">Zukunft von CSS</h2>
<p class="text-gray-300 mb-6">Was uns in naher Zukunft erwartet:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">CSS Scope:</span> Besserer Styling-Scope ohne Spezifitätsprobleme</li>
  <li><span class="font-medium">CSS Toggles:</span> Zustandsmanagement direkt in CSS</li>
  <li><span class="font-medium">Container Units:</span> Relative Einheiten basierend auf Container</li>
  <li><span class="font-medium">CSS-Module:</span> Native Unterstützung für komponentenbasierte Stile</li>
</ul>
  `
};

export default function ModernCSSPage() {
  return (
    <div className="bg-[#0c1832] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Frontend
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
      <article className="max-w-4xl mx-auto bg-gray-900/80 shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8 backdrop-blur-sm border border-gray-700">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-gray-700">
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
          className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-code:bg-gray-800 prose-code:text-blue-300 prose-pre:bg-gray-800 prose-pre:text-blue-200 prose-li:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-table:text-gray-300 prose-th:text-gray-300 prose-td:text-gray-300"
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
        <div className="mt-16 p-6 md:p-8 bg-gray-800/50 rounded-xl border border-gray-700">
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

      {/* Related Articles & Newsletter */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Weitere Frontend-Artikel</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Artikel 1 */}
          <article className="group relative bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500">
            <div className="relative h-48 overflow-hidden">
              <Image src="/responsive-design.svg" alt="Responsive Design Techniken für alle Bildschirmgrößen" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Responsive</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800">UI/UX</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Responsive Webdesign: Best Practices 2024
              </h3>
              <p className="text-gray-300 mb-4">Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">7 min Lesezeit</span>
                <Link href="/blog/webdesign/responsives-webdesign" aria-label="Responsive Webdesign Artikel öffnen">
                  <span className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Best Practices ansehen
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Artikel 2 */}
          <article className="group relative bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500">
            <div className="relative h-48 overflow-hidden">
              <Image src="/js-frameworks.webp" alt="Vergleich von JavaScript Frameworks: React, Vue, Angular, Svelte" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800">JavaScript</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Frameworks</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                JavaScript Frameworks im Vergleich
              </h3>
              <p className="text-gray-300 mb-4">React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">10 min Lesezeit</span>
                <Link href="/blog/webdesign/javascript-frameworks" aria-label="JS Framework Artikel öffnen">
                  <span className="text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Frameworks vergleichen
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Artikel 3 */}
          <article className="group relative bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500">
            <div className="relative h-48 overflow-hidden">
              <Image src="/website-speed.webp" alt="Website Performance Optimierung - Ladezeiten verbessern" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Performance</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800">Optimierung</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Website-Performance maximieren
              </h3>
              <p className="text-gray-300 mb-4">Wie Sie Ladezeiten reduzieren und die User Experience verbessern.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">9 min Lesezeit</span>
                <Link href="/blog/webdesign/performance-optimierung" aria-label="Performance-Optimierung Artikel öffnen">
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
      </section>
    </div>
  );
}