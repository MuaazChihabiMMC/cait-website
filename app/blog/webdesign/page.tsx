import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Webdesign & Entwicklung | CAITSocialMedia Blog',
  description: 'Aktuelle Trends und Best Practices für modernes Webdesign und Webentwicklung',
            alternates: {
    canonical: 'https://www.caitsocialmedia.com/blog/webdesign',
  },
};

const webDesignPosts = [
  {
    slug: 'responsives-webdesign',
    title: 'Responsive Webdesign: Best Practices 2024',
    excerpt: 'Moderne Techniken für Websites, die auf allen Geräten perfekt aussehen.',
    image: '/responsive-design.svg',
    tags: ['Responsive', 'UI/UX'],
    readTime: '7 min',
    date: '15. November 2024',
    ctaText: 'Responsive Design lernen'
  },
  {
    slug: 'performance-optimierung',
    title: 'Website-Performance maximieren',
    excerpt: 'Wie Sie Ladezeiten reduzieren und die User Experience verbessern.',
    image: '/website-speed.webp',
    tags: ['Performance', 'Optimierung'],
    readTime: '9 min',
    date: '5. November 2024',
    ctaText: 'Performance-Tipps sehen'
  },
  {
    slug: 'web-accessibility',
    title: 'Barrierefreies Webdesign',
    excerpt: 'Inklusive Gestaltung für alle Nutzer gemäß WCAG-Richtlinien.',
    image: '/accessibility.webp',
    tags: ['Accessibility', 'UI/UX'],
    readTime: '8 min',
    date: '28. Oktober 2024',
    ctaText: 'Zum Accessibility-Guide'
  },
  {
    slug: 'modernes-css',
    title: 'Moderne CSS-Techniken 2024',
    excerpt: 'CSS Grid, Container Queries und neue Features effektiv nutzen.',
    image: '/css-trends.webp',
    tags: ['CSS', 'Frontend'],
    readTime: '6 min',
    date: '20. Oktober 2024',
    ctaText: 'CSS-Techniken entdecken'
  },
  {
    slug: 'javascript-frameworks',
    title: 'JavaScript Frameworks im Vergleich',
    excerpt: 'React, Vue, Angular oder Svelte? Die beste Wahl für Ihr Projekt.',
    image: '/js-frameworks.webp',
    tags: ['JavaScript', 'Frameworks'],
    readTime: '10 min',
    date: '12. Oktober 2024',
    ctaText: 'Frameworks vergleichen'
  },
  {
    slug: 'wordpress-entwicklung',
    title: 'Moderne WordPress-Entwicklung',
    excerpt: 'Block-Themes, Headless CMS und Performance-Tuning für WordPress.',
    image: '/wordpress-dev.webp',
    tags: ['WordPress', 'CMS'],
    readTime: '8 min',
    date: '5. Oktober 2024',
    ctaText: 'WordPress-Tipps lesen'
  }
];

export default function WebDesignBlogPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Webdesign & Entwicklung
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Moderne Webtechnologien
            </span>{' '}
            für digitale Präsenz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aktuelle Trends und Technologien für moderne Websites und Anwendungen
          </p>
        </div>

                    {/* SEO-Text für Sichtbarkeit */}
          <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Webdesign & Webentwicklung im Wandel</h2>
            <p className="mb-4">
              In einer digitalen Welt, die sich rasant verändert, ist modernes Webdesign mehr als nur Ästhetik. Es geht um Performance, Barrierefreiheit, Usability und technologische Innovation. 
              Ob Sie eine Landingpage optimieren, ein komplettes CMS entwickeln oder Ihr Frontend mit React, Tailwind oder WordPress neu denken – hier finden Sie Impulse und bewährte Strategien.
            </p>
            <p className="mb-4">
              Als Agentur für <strong>Webdesign & Entwicklung</strong> begleiten wir Kunden vom Konzept über das Design bis zur technischen Umsetzung. Unser Blog behandelt Themen wie <strong>Responsive Design</strong>, <strong>Page Speed</strong>, <strong>Barrierefreiheit</strong>, <strong>JavaScript Frameworks</strong> und moderne <strong>WordPress-Entwicklung</strong>.
            </p>
            <p>
              Dieser Bereich ist Teil unseres <Link href="/blog" className="text-blue-600 underline">CAIT Blogs</Link> – Ihrer Quelle für hochwertiges Wissen rund um professionelle Webseiten.
            </p>
          </div>


        {/* Blog Posts Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {webDesignPosts.map((post) => (
    <article 
      key={post.slug}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={`Coverbild für ${post.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={post.slug === 'responsives-webdesign'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.readTime} Lesezeit • {post.date}</span>

          {/* Nur CTA verlinken */}
          <Link 
            href={`/blog/webdesign/${post.slug}`} 
            className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform"
            aria-label={`Mehr erfahren über ${post.title}`}
          >
            {post.ctaText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  ))}
</div>

{/* SEO Textblock – Sichtbarkeit für Webdesign Berlin erhöhen */}
<div className="mt-24 max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed space-y-6">
  <h2 className="text-3xl font-bold text-gray-900">Professionelles Webdesign & Entwicklung für Berlin</h2>

  <p>
    Als <strong>Webdesign Agentur in Berlin</strong> bieten wir maßgeschneiderte Lösungen für Unternehmen, Startups und Selbstständige, die Wert auf moderne Technologie, Design und Performance legen. Unser Fokus liegt auf Benutzerfreundlichkeit, Schnelligkeit und responsivem Design, das auf allen Geräten überzeugt – vom Smartphone bis zum Desktop.
  </p>

  <p>
    Die Anforderungen an Webseiten verändern sich ständig. Neben einem ansprechenden Design kommt es auch auf die technische Basis an. Unsere Experten nutzen moderne Frameworks wie <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong> und <strong>WordPress</strong>, um performante und SEO-optimierte Websites zu erstellen, die Ihre Zielgruppe direkt ansprechen.
  </p>

  <h3 className="text-2xl font-bold text-gray-900">Warum CAIT als Webdesign Agentur?</h3>

  <ul className="list-disc pl-5 space-y-2">
    <li>Individuelles Webdesign nach Markenidentität</li>
    <li>Optimierung für PageSpeed und Core Web Vitals</li>
    <li>Mobile First & Responsive Webdesign</li>
    <li>SEO-Strategien integriert von Anfang an</li>
    <li>Barrierefreies Design nach WCAG</li>
    <li>Performance-orientierte Entwicklung mit React/Next.js</li>
    <li>Integration von CMS-Systemen wie WordPress & Headless CMS</li>
  </ul>

  <p>
    Wir entwickeln nicht nur optisch ansprechende Seiten – sondern leistungsstarke digitale Erlebnisse. Besonders für Berliner Unternehmen ist eine <strong>moderne Website</strong> heute ein Muss, um Kunden zu gewinnen und online sichtbar zu bleiben. Dabei analysieren wir Nutzerverhalten, Wettbewerber und setzen technische Best Practices konsequent um.
  </p>

  <h3 className="text-2xl font-bold text-gray-900">Webentwicklung trifft Strategie</h3>

  <p>
    Als erfahrene <strong>Webentwickler Berlin</strong> arbeiten wir eng mit unseren Kunden zusammen, um Websites zu bauen, die messbare Ergebnisse erzielen. Von der Konzeption bis zum Livegang – bei uns ist alles auf Conversion, Nutzerfreundlichkeit und Google-Ranking ausgelegt. Mit gezielten SEO-Maßnahmen und strukturiertem Code schaffen wir die Grundlage für langfristigen Erfolg.
  </p>

  <p>
    Unsere Entwickler berücksichtigen dabei sämtliche Aspekte der modernen Webentwicklung: von <strong>technischem SEO</strong> über Performance-Optimierung bis hin zur Einbindung von Tracking-Systemen wie Google Analytics oder dem Google Tag Manager.
  </p>

  <h3 className="text-2xl font-bold text-gray-900">Unsere Leistungen im Bereich Webdesign Berlin:</h3>

  <ul className="list-disc pl-5 space-y-2">
    <li>Corporate Websites, Blogs und Landingpages</li>
    <li>E-Commerce Lösungen mit Shopify, WooCommerce oder Headless</li>
    <li>UX/UI Design mit Fokus auf Nutzerverhalten</li>
    <li>Barrierefreiheit & Accessibility</li>
    <li>Content-Strategie & SEO von Anfang an</li>
    <li>Wartung, Updates und technische Weiterentwicklung</li>
  </ul>

  <p>
    Besonders stolz sind wir auf unsere Partnerschaften mit Berliner Unternehmen aus den unterschiedlichsten Branchen – vom Einzelhandel über medizinische Einrichtungen bis hin zu kreativen Startups. Unsere Mission: <strong>Digitale Präsenz, die wirkt</strong>.
  </p>

  <h3 className="text-2xl font-bold text-gray-900">Mehr als nur Webdesign: Digitale Strategien, die funktionieren</h3>

  <p>
    Unsere Agentur ist nicht nur auf <strong>Webdesign</strong> spezialisiert, sondern integriert auch <strong>Google Ads</strong>, <strong>SEO</strong> und <strong>Social Media</strong> in Ihre Online-Strategie. So entsteht ein ganzheitlicher Auftritt, der nicht nur schön aussieht, sondern auch konvertiert.
  </p>

  <p>
    Jetzt kostenlose Beratung anfragen und gemeinsam ein Webprojekt starten, das Nutzer begeistert und Google überzeugt.
  </p>

  <Link href="/kontakt" className="inline-block bg-blue-600 text-white px-6 py-3 mt-4 rounded-full hover:bg-blue-700 transition font-semibold">
    Jetzt Website-Projekt starten
  </Link>
</div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 md:p-10 text-white shadow-lg animate-float">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Webdesign Updates erhalten</h2>
            <p className="text-blue-100 mb-6">Abonnieren Sie unseren Newsletter für exklusive Tipps und Trends</p>
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
                Abonnieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}