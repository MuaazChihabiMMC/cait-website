import Image from 'next/image';
import { notFound } from 'next/navigation';

const seoPosts = {
  'technische-seo': {
    title: 'Technische SEO | CAIT Agentur Berlin',
    metaDescription: 'Ladezeiten, Core Web Vitals & Indexierung die technischen SEO Grundlagen für Top Rankings im Überblick.',
    alternates: {
      canonical: 'https://www.caitsocialmedia.com/blog/seo/technische-seo',
    },
    content: `
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Warum technische SEO der Grundstein ist</h2>
      <p class="text-blue-200 mb-6">Bevor Sie mit Content-Marketing oder Linkbuilding beginnen, muss Ihre Website technisch einwandfrei sein. Google belohnt Seiten, die schnell laden, mobil optimiert sind und korrekt indexiert werden. Technische SEO ist das Fundament jeder erfolgreichen SEO-Strategie.</p>

      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Wussten Sie schon?</p>
        <p class="text-blue-200">Websites, die unter 2 Sekunden laden, haben durchschnittlich 30% höhere Conversion-Raten.</p>
      </div>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">1. Ladegeschwindigkeit optimieren</h3>
      <p class="text-blue-200 mb-4">Google bevorzugt Websites, die schnell laden. So verbessern Sie Ihre Performance:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li>Bildoptimierung: Komprimieren Sie Bilder mit modernen Formaten wie WebP oder AVIF</li>
        <li>Lazy Loading: Implementieren Sie verzögertes Laden für nicht sichtbare Inhalte</li>
        <li>Code-Optimierung: Nutzen Sie Code-Splitting und serverseitiges Rendering</li>
        <li>JavaScript: Eliminieren Sie unnötiges JavaScript und CSS</li>
        <li>CDN: Verwenden Sie ein Content Delivery Network für globale Reichweite</li>
      </ul>

      <div class="bg-blue-800/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-1">Profi-Tipp:</p>
        <p class="text-blue-200">Nutzen Sie <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">Google PageSpeed Insights</a> und <a href="https://gtmetrix.com" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">GTmetrix</a> für detaillierte Performance-Analysen.</p>
      </div>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">2. Mobile Usability & Core Web Vitals</h3>
      <p class="text-blue-200 mb-4">Mit Mobile-First-Indexing bewertet Google zuerst die mobile Version Ihrer Website. Die wichtigsten Kennzahlen:</p>
      
      <div class="grid md:grid-cols-3 gap-4 my-6">
        <div class="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
          <h4 class="font-semibold text-blue-400 mb-2">LCP</h4>
          <p class="text-blue-200 text-sm">Largest Contentful Paint sollte unter 2.5 Sekunden liegen</p>
        </div>
        <div class="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
          <h4 class="font-semibold text-blue-400 mb-2">FID</h4>
          <p class="text-blue-200 text-sm">First Input Delay sollte unter 100ms bleiben</p>
        </div>
        <div class="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
          <h4 class="font-semibold text-blue-400 mb-2">CLS</h4>
          <p class="text-blue-200 text-sm">Cumulative Layout Shift unter 0.1 halten</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">3. Crawling & Indexierung</h3>
      <p class="text-blue-200 mb-4">Technische Fehler können dazu führen, dass Ihre Seiten nicht indexiert werden:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li>robots.txt: Korrekt konfigurieren ohne versehentliches Blockieren</li>
        <li>XML-Sitemaps: Regelmäßig aktualisiert in Search Console einreichen</li>
        <li>Canonical Tags: Vermeiden Sie Duplicate Content Probleme</li>
        <li>Statuscodes: 404, 301 und 302 richtig einsetzen</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">4. Strukturierte Daten & Schema.org</h3>
      <p class="text-blue-200 mb-4">Rich Snippets können Ihre Klickrate in den Suchergebnissen deutlich erhöhen:</p>
      <div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
        <p class="font-semibold text-blue-300 mb-2">Beispiel:</p>
     <pre class="bg-blue-900/30 p-3 rounded mt-2 overflow-x-auto text-sm text-blue-200">
  &lt;script type="application/ld+json"&gt;
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Technische SEO Leitfaden",
    "author": {
      "@type": "Person",
      "name": "Muaaz Chihabi"
    }
  }
  &lt;/script&gt;
</pre>
      </div>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">5. Sicherheit & HTTPS</h3>
      <p class="text-blue-200 mb-4">Eine sichere Website ist ein Ranking-Faktor:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
        <li>HTTPS mit korrektem Zertifikat implementieren</li>
        <li>HSTS Header für zusätzliche Sicherheit</li>
        <li>Sicherheitslücken regelmäßig scannen</li>
      </ul>
      <h3 class="text-xl font-bold text-white mt-8 mb-4">6. Hosting & Serverstruktur</h3>
<p class="text-blue-200 mb-4">Die technische Basis Ihrer Website beginnt beim Hosting. Ein schneller, stabiler Server mit aktuellem PHP, HTTP/2 oder HTTP/3 und aktiviertem Caching sorgt für bessere Ladezeiten und weniger Ausfälle.</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
  <li>Wähle ein Rechenzentrum möglichst nah an deiner Zielgruppe</li>
  <li>Aktiviere Caching (z.B. Varnish oder NGINX Page Cache)</li>
  <li>Stelle sicher, dass der Server regelmäßige Backups erstellt</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">7. Klare Seitenstruktur & semantisches HTML</h3>
<p class="text-blue-200 mb-4">Eine logische Seitenarchitektur erleichtert nicht nur Google das Crawling, sondern verbessert auch die Usability für Besucher:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
  <li>Navigationsstruktur flach halten (max. 3 Ebenen)</li>
  <li>Breadcrumbs einbauen, idealerweise mit <code class="bg-blue-900/30 px-1 rounded">schema.org/BreadcrumbList</code></li>
  <li>Jede Seite sollte ein eindeutiges <code class="bg-blue-900/30 px-1 rounded">&lt;h1&gt;</code> enthalten</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">8. Google Search Console zur Fehleranalyse</h3>
<p class="text-blue-200 mb-4">Nutze die Google Search Console aktiv, um technische SEO-Fehler zu identifizieren. Wichtige Bereiche:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
  <li><strong class="text-white">Indexabdeckung:</strong> Welche Seiten wurden nicht indexiert, und warum?</li>
  <li><strong class="text-white">Core Web Vitals:</strong> Messwerte zu Ladeverhalten und Interaktivität</li>
  <li><strong class="text-white">Strukturierte Daten:</strong> Wurden Rich Snippets korrekt erkannt?</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">9. Technisches SEO-Audit mit Tools</h3>
<p class="text-blue-200 mb-4">Ein umfassendes Audit deckt technische Schwächen auf. Bewährte Tools:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-blue-200">
  <li><strong class="text-white">Screaming Frog SEO Spider:</strong> Vollständiger Website-Crawl</li>
  <li><strong class="text-white">Ahrefs / Semrush Site Audit:</strong> SEO-relevante Probleme aufdecken</li>
  <li><strong class="text-white">Ryte & Seobility:</strong> Benutzerfreundliche Oberflächen für KMUs</li>
</ul>
<p class="text-blue-200 mb-4">Achte besonders auf Weiterleitungsketten, doppelte Inhalte, Statuscodes, hreflang-Fehler und Mobilfreundlichkeit.</p>

<h3 class="text-xl font-bold text-white mt-8 mb-4">10. Fazit: Technische SEO als langfristiger Ranking-Booster</h3>
<p class="text-blue-200 mb-6">Technische SEO ist kein „One-and-Done“-Projekt. Die Algorithmen von Google entwickeln sich ständig weiter, und damit auch die Anforderungen an deine Website. Mit einem fundierten technischen Setup legst du die Grundlage für nachhaltigen SEO-Erfolg und profitierst langfristig von besserer Sichtbarkeit, mehr Vertrauen und höheren Conversions.</p>

<div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-300 mb-1">Unser Angebot:</p>
  <p class="text-blue-200">Als spezialisierte <strong class="text-white">SEO Agentur Berlin</strong> prüfen wir deine Website technisch bis ins Detail. Vereinbare jetzt ein kostenloses Erstgespräch mit den Expert:innen von CAIT.</p>
</div>

<p class="text-center mt-8">
  <a href="/kontakt" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-500 transition">
    SEO-Analyse anfordern
  </a>
</p>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Senior SEO Consultant',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi ist Inhaber der Agentur CAIT Social Media seit über 3 Jahren. Er hat seinen Masterabschluss in Informatik an der TU Berlin absolviert und verfügt über umfassende Erfahrung in Webentwicklung, Suchmaschinenoptimierung (SEO), Google Ads und Social Media Marketing. Als technikaffiner Berater vereint er datengetriebene Strategie mit kreativem Design für messbaren digitalen Erfolg.',
    },
    date: '28. Mai 2024',
    readTime: '10 min',
    tags: ['Technical SEO', 'Performance', 'Core Web Vitals']
  },
};

export default function SeoPostPage() {
  const post = seoPosts['technische-seo'];

  if (!post) return notFound();

  return (
    <div className="bg-[#0c1832]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            SEO Wissen
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
      <article className="max-w-4xl mx-auto bg-blue-900/30 shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8 border border-blue-800/50">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-blue-800/50">
          <Image
            src="/seo-technical.webp"
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
            <span key={tag} className="px-3 py-1 bg-blue-800/50 text-blue-300 text-sm rounded-full backdrop-blur-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-6 md:p-8 bg-blue-900/30 rounded-xl border border-blue-800/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 md:w-60 md:h-32 relative rounded-full overflow-hidden border-4 border-blue-900/50 shadow-lg">
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
              <p className="text-blue-200 text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/muaaz-chihabi/" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="LinkedIn Profil">
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
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Weitere SEO-Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Related articles would be placed here */}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = seoPosts['technische-seo'];
  return {
    title: `${post.title} | CAITSocialMedia`,
    description: post.metaDescription,
    alternates: post.alternates,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: post.alternates.canonical,
      images: [
        {
          url: '/seo-technical.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: ['/seo-technical.webp'],
    },
  };
}