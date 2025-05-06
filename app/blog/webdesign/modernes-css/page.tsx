import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Moderne CSS-Techniken 2024 | CAITSocialMedia',
  description: 'Aktuelle CSS-Features wie Grid, Container Queries und neue Layout-Methoden für moderne Webentwicklung',
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
    bio: 'Muaaz Chihabi ist ein passionierter CSS-Spezialist mit über 7 Jahren Erfahrung in modernen Web-Layouts. Er hat sich auf die Entwicklung responsiver, barrierefreier und performanter Benutzeroberflächen spezialisiert, die sowohl ästhetisch als auch funktional überzeugen. '
  },
  content: `
   <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Die Evolution von CSS</h2>
<p class="text-gray-700 mb-6">CSS hat sich in den letzten Jahren rasant weiterentwickelt. Während wir früher mit Float-basierten Layouts kämpften, stehen uns heute mächtige Tools wie Grid, Flexbox und Container Queries zur Verfügung, die das Webdesign revolutioniert haben.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-1">Statistik:</p>
  <p class="text-blue-700">Laut State of CSS 2023 verwenden bereits 87% der Entwickler CSS Grid und 92% Flexbox in ihren Projekten.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. CSS Grid: Das ultimative Layout-Tool</h3>
<p class="text-gray-700 mb-4">CSS Grid ermöglicht komplexe zweidimensionale Layouts mit minimalem Code:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Grid-Grundlagen</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• <code>display: grid</code> aktiviert Grid</li>
      <li>• <code>grid-template-columns</code> definiert Spalten</li>
      <li>• <code>grid-template-rows</code> definiert Zeilen</li>
      <li>• <code>gap</code> für Abstände zwischen Elementen</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Fortgeschrittene Techniken</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• <code>grid-template-areas</code> für semantische Layouts</li>
      <li>• <code>minmax()</code> für flexible Größen</li>
      <li>• <code>auto-fit</code> und <code>auto-fill</code></li>
      <li>• Subgrid für verschachtelte Grids</li>
    </ul>
  </div>
</div>

<div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-orange-800 mb-1">Beispiel:</p>
  <pre class="text-orange-700 bg-gray-800 p-4 rounded overflow-x-auto">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}</pre>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Container Queries: Der Game-Changer</h3>
<p class="text-gray-700 mb-4">Container Queries ermöglichen es Komponenten, ihr Layout basierend auf der verfügbaren Containergröße anzupassen:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Feature</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Beschreibung</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Browser-Support</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">@container</td>
        <td class="py-3 px-4 text-gray-700">Definiert den Container-Kontext</td>
        <td class="py-3 px-4 text-gray-700">Chrome, Edge, Firefox, Safari</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">container-type</td>
        <td class="py-3 px-4 text-gray-700">Legt die Art des Containers fest</td>
        <td class="py-3 px-4 text-gray-700">Chrome, Edge, Firefox, Safari</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">container-name</td>
        <td class="py-3 px-4 text-gray-700">Benennt Container für spezifische Queries</td>
        <td class="py-3 px-4 text-gray-700">Chrome, Edge, Firefox, Safari</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Neue CSS-Features 2024</h3>
<p class="text-gray-700 mb-4">Diese modernen CSS-Features sollten Sie kennen:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Layout & Design</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• <span class="font-medium">CSS Nesting:</span> Verschachtelung von Selektoren</li>
      <li>• <span class="font-medium">:has():</span> Elternselektor für komplexe Bedingungen</li>
      <li>• <span class="font-medium">Viewport Units:</span> dvh, lvh, svh für mobile Geräte</li>
      <li>• <span class="font-medium">Scroll Snap:</span> Präzise Scroll-Positionierung</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Animation & Interaktion</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• <span class="font-medium">View Transitions API:</span> Native Seitenübergänge</li>
      <li>• <span class="font-medium">@scroll-timeline:</span> Animationen basierend auf Scroll</li>
      <li>• <span class="font-medium">color-mix():</span> Dynamische Farbmischung</li>
      <li>• <span class="font-medium">accent-color:</span> Styling von Formularelementen</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. CSS vs. CSS-in-JS: Aktuelle Trends</h3>
<p class="text-gray-700 mb-4">Die Debatte um die beste Styling-Methode:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-800 mb-1">Erkenntnis:</p>
  <p class="text-green-700">Native CSS-Features wie Cascade Layers und Scoping reduzieren den Bedarf an CSS-in-JS für viele Anwendungsfälle, während Tools wie Panda CSS eine Brücke zwischen beiden Welten schlagen.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Performance-Optimierung mit modernem CSS</h3>
<p class="text-gray-700 mb-4">So machen Sie Ihr CSS performant:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Reduzierte Reflows:</span> CSS Triggers vermeiden</li>
  <li><span class="font-medium">Effiziente Selektoren:</span> Spezifität und Komplexität minimieren</li>
  <li><span class="font-medium">Critical CSS:</span> Above-the-fold Styling priorisieren</li>
  <li><span class="font-medium">Modernes Laden:</span> @import vermeiden, lieber link-Tags</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Zukunft von CSS</h2>
<p class="text-gray-700 mb-6">Was uns in naher Zukunft erwartet:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">CSS Scope:</span> Besserer Styling-Scope ohne Spezifitätsprobleme</li>
  <li><span class="font-medium">CSS Toggles:</span> Zustandsmanagement direkt in CSS</li>
  <li><span class="font-medium">Container Units:</span> Relative Einheiten basierend auf Container</li>
  <li><span class="font-medium">CSS-Module:</span> Native Unterstützung für komponentenbasierte Stile</li>
</ul>
  `
};

export default function ModernCSSPage() {
  return (
    <div className="bg-gray-50">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Frontend-Artikel</h2>
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
            <Link href="/blog/webdesign/performance-optimierung" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/website-speed.webp"
                  alt="Website Performance"
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
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frontend Updates erhalten</h2>
            <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Technologie-Tipps</p>
          </div>
        </div>
      </section>
    </div>
  );
}