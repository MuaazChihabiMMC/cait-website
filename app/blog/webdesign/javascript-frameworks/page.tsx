import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'JavaScript Frameworks im Vergleich | CAITSocialMedia',
  description: 'React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.',
};

const post = {
  slug: 'javascript-frameworks',
  title: 'JavaScript Frameworks im Vergleich',
  excerpt: 'React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.',
  image: '/js-frameworks.webp',
  tags: ['JavaScript', 'Frameworks'],
  readTime: '10 min',
  date: '12. Oktober 2024',
  author: {
    name: 'Muaaz Chihabi',
    role: 'Frontend-Architekt',
    image: '/author-muaaz.webp',
    bio: 'Muaaz Chihabi ist ein erfahrener Frontend-Entwickler mit über 8 Jahren Erfahrung in JavaScript-Frameworks. Er hat zahlreiche Projekte mit React, Vue und Angular umgesetzt und berät Unternehmen bei der Auswahl der passenden Technologiestacks.'
  },
  content: `
    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Die JavaScript-Framework-Landschaft 2024</h2>
<p class="text-gray-700 mb-6">Die Wahl des richtigen JavaScript-Frameworks kann über den Erfolg Ihres Projekts entscheiden. Während React nach wie vor Marktführer ist, haben sich Vue, Angular und Svelte zu ernstzunehmenden Alternativen entwickelt, die jeweils ihre eigenen Stärken haben.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-1">Statistik:</p>
  <p class="text-blue-700">Laut State of JS 2023 verwenden 82% der Entwickler React, 46% Vue, 23% Angular und 18% Svelte in ihren Projekten.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. React: Der unangefochtene Marktführer</h3>
<p class="text-gray-700 mb-4">React ist nach wie vor das beliebteste Frontend-Framework mit einer riesigen Community:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Vorteile</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Große Community und Ökosystem</li>
      <li>• Flexibles, komponentenbasiertes Design</li>
      <li>• Virtual DOM für gute Performance</li>
      <li>• Wiederverwendbare Komponenten</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Nachteile</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• JSX hat steile Lernkurve</li>
      <li>• Häufige Breaking Changes</li>
      <li>• Zustandsmanagement erfordert externe Bibliotheken</li>
      <li>• Große Bundle-Größe</li>
    </ul>
  </div>
</div>

<div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-orange-800 mb-1">Beispiel:</p>
  <pre class="text-orange-700 bg-gray-800 p-4 rounded overflow-x-auto">
function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      Klicks: {count}
    &lt;/button&gt;
  );
}</pre>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Vue: Der aufstrebende Herausforderer</h3>
<p class="text-gray-700 mb-4">Vue kombiniert die besten Aspekte von React und Angular:</p>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Feature</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Vue 3</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">React 18</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Performance</td>
        <td class="py-3 px-4 text-gray-700">Sehr gut (Composition API)</td>
        <td class="py-3 px-4 text-gray-700">Gut (Virtual DOM)</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Lernkurve</td>
        <td class="py-3 px-4 text-gray-700">Einfach</td>
        <td class="py-3 px-4 text-gray-700">Mittel</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Bundle-Größe</td>
        <td class="py-3 px-4 text-gray-700">~22KB</td>
        <td class="py-3 px-4 text-gray-700">~43KB</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Angular: Das Enterprise-Framework</h3>
<p class="text-gray-700 mb-4">Angular bietet ein vollständiges Framework für große Anwendungen:</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Stärken</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• All-in-One-Lösung (Routing, Forms etc.)</li>
      <li>• TypeScript-first</li>
      <li>• Geeignet für große Teams</li>
      <li>• Strikte Architekturvorgaben</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Schwächen</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Steile Lernkurve</li>
      <li>• Komplexe Konzepte (Zones, Change Detection)</li>
      <li>• Größere Bundle-Größe</li>
      <li>• Weniger flexibel als React/Vue</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Svelte: Der innovative Ansatz</h3>
<p class="text-gray-700 mb-4">Svelte verfolgt einen radikal anderen Ansatz ohne Virtual DOM:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-800 mb-1">Innovation:</p>
  <p class="text-green-700">Svelte kompiliert Ihren Code zu hochoptimiertem JavaScript zur Build-Zeit, anstatt eine Laufzeitbibliothek einzubinden. Dies führt zu kleineren Bundle-Größen und besserer Performance.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Framework-Vergleich: Wann welches Framework?</h3>
<p class="text-gray-700 mb-4">Die beste Wahl hängt von Ihren Anforderungen ab:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">React:</span> Flexible Projekte, große Teams, viele Third-Party-Integrationen</li>
  <li><span class="font-medium">Vue:</span> Progressive Adoption, einfache Lernkurve, mittelgroße Projekte</li>
  <li><span class="font-medium">Angular:</span> Enterprise-Anwendungen, strikte Architektur, TypeScript</li>
  <li><span class="font-medium">Svelte:</span> Performance-kritische Anwendungen, kleine Bundle-Größe</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Zukunft der JavaScript-Frameworks</h2>
<p class="text-gray-700 mb-6">Trends und zukünftige Entwicklungen:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Islands Architecture:</span> Teilhydrierung von Seiten</li>
  <li><span class="font-medium">Compiler-first:</span> Mehr Frameworks wie Svelte</li>
  <li><span class="font-medium">Web Components:</span> Bessere Integration mit Frameworks</li>
  <li><span class="font-medium">Server Components:</span> React führt den Weg</li>
</ul>
  `
};

export default function JavaScriptFrameworksPage() {
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
{/* Related Articles & Newsletter */}
<section className="max-w-6xl mx-auto px-6 mb-20">
  <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Frontend-Artikel</h2>
  <div className="grid md:grid-cols-3 gap-6 mb-16">
    {/* Responsive Webdesign Article */}
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link 
        href="/blog/webdesign/responsives-webdesign" 
        className="block h-full"
        aria-label="Zu Responsive Webdesign Best Practices"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/responsive-design.svg"
            alt="Responsive Webdesign Techniken für verschiedene Geräte"
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
              Best Practices entdecken
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>

    {/* Modern CSS Article */}
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link 
        href="/blog/webdesign/modernes-css" 
        className="block h-full"
        aria-label="Zu modernen CSS-Techniken"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/css-trends.webp"
            alt="Moderne CSS-Techniken mit Grid und Container Queries"
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
              CSS-Trends ansehen
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>

    {/* Performance Optimization Article */}
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link 
        href="/blog/webdesign/performance-optimierung" 
        className="block h-full"
        aria-label="Zu Website Performance Optimierung"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/website-speed.webp"
            alt="Website Performance Optimierung - Ladezeiten verbessern"
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
              Optimierungstipps
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
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Ihre E-Mail-Adresse" 
          className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="E-Mail-Adresse für Newsletter"
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