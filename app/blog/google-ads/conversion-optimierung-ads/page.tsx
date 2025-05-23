import Image from 'next/image';
import { notFound } from 'next/navigation';

const googleAdsPosts = {
  'conversion-optimierung-ads': {
    title: 'Conversion-Optimierung in Google Ads',
    metaDescription: 'Erfahren Sie, wie Sie mit Landingpages, A/B-Tests und Anzeigenerweiterungen mehr aus Ihrem Budget holen.',
    content: `
      <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Warum Conversion-Optimierung entscheidend ist</h2>
<p class="text-gray-700 mb-6">Die besten Google Ads bringen nichts, wenn Ihre Landingpage Besucher nicht in Kunden verwandelt. Conversion-Optimierung ist der Schlüssel, um Ihr Werbebudget effizient einzusetzen und Ihre Kampagnenrentabilität zu steigern.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-medium text-blue-800">Statistik:</p>
  <p class="text-blue-700">Eine Verbesserung der Conversion Rate von 2% auf 4% halbiert effektiv Ihre Kosten pro Conversion - bei gleichem Budget!</p>
</div>

<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Landingpage-Optimierung für höhere Conversions</h3>
<p class="text-gray-700 mb-4">Ihre Landingpage ist das wichtigste Element für Conversion-Optimierung:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Relevanz:</span> Muss perfekt zur Anzeige und Suchintention passen</li>
  <li><span class="font-medium">Ladegeschwindigkeit:</span> Jede Sekunde Ladezeit kostet Conversions</li>
  <li><span class="font-medium">Klarer Call-to-Action:</span> Sichtbar, ansprechend und wiederholt</li>
  <li><span class="font-medium">Vertrauenssignale:</span> Bewertungen, Zertifikate, Trustbadges</li>
  <li><span class="font-medium">Mobile Optimierung:</span> Über 60% der Klicks kommen von Mobilgeräten</li>
</ul>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-semibold text-blue-600 mb-3">Must-haves für Conversion-Landingpages</h4>
    <ul class="space-y-2 text-gray-700">
      <li>Überschrift die zum Suchbegriff passt</li>
      <li>Benefit-orientierter Haupttext</li>
      <li>Hochwertige Bilder/Video</li>
      <li>Kontaktformular mit minimalen Feldern</li>
      <li>Social Proof (Testimonials, Logos)</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-semibold text-blue-600 mb-3">Conversion-Killer vermeiden</h4>
    <ul class="space-y-2 text-gray-700">
      <li>Ablenkende Navigation</li>
      <li>Zu viele Optionen/Abzweigungen</li>
      <li>Unklare Preise/Kosten</li>
      <li>Lange, komplizierte Formulare</li>
      <li>Fehlende Mobile-Optimierung</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. A/B-Testing für systematische Verbesserungen</h3>
<p class="text-gray-700 mb-4">Testen Sie systematisch verschiedene Elemente:</p>

<div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r">
  <p class="font-medium text-orange-800">Tipp:</p>
  <p class="text-orange-700">Testen Sie immer nur ein Element gleichzeitig, um klare Ergebnisse zu erhalten. Nutzen Sie Google Optimize oder andere A/B-Testing-Tools.</p>
</div>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-medium text-gray-700">Element</th>
        <th class="py-3 px-4 text-left font-medium text-gray-700">Was testen?</th>
        <th class="py-3 px-4 text-left font-medium text-gray-700">Potenzielle Wirkung</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700">Überschrift</td>
        <td class="py-3 px-4 text-gray-700">Formulierungen, Länge, Keywords</td>
        <td class="py-3 px-4 text-gray-700">+20-50% mehr Conversions</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700">Call-to-Action</td>
        <td class="py-3 px-4 text-gray-700">Text, Farbe, Position, Größe</td>
        <td class="py-3 px-4 text-gray-700">+10-30% mehr Klicks</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700">Bilder</td>
        <td class="py-3 px-4 text-gray-700">Menschen vs. Produkte, Emotionen</td>
        <td class="py-3 px-4 text-gray-700">+15-40% mehr Engagement</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700">Formulare</td>
        <td class="py-3 px-4 text-gray-700">Anzahl der Felder, Platzierung</td>
        <td class="py-3 px-4 text-gray-700">+25-75% mehr Abschlüsse</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Anzeigenerweiterungen für mehr Klicks</h3>
<p class="text-gray-700 mb-4">Nutzen Sie alle relevanten Erweiterungen für bessere Ergebnisse:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-medium text-green-800">Wichtig:</p>
  <p class="text-green-700">Anzeigenerweiterungen können Ihre CTR um bis zu 30% steigern und gleichzeitig Ihre Kosten pro Klick senken.</p>
</div>

<ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Sitelink-Erweiterungen:</span> Zusätzliche Links zu wichtigen Unterseiten</li>
  <li><span class="font-medium">Callout-Erweiterungen:</span> USPs und Angebote hervorheben</li>
  <li><span class="font-medium">Strukturierte Snippets:</span> Produktdetails und Kategorien</li>
  <li><span class="font-medium">Preis-Erweiterungen:</span> Für E-Commerce besonders effektiv</li>
  <li><span class="font-medium">Call-Erweiterungen:</span> Direkte Telefonanrufe ermöglichen</li>
</ol>

<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Conversion-Tracking richtig einrichten</h3>
<p class="text-gray-700 mb-4">Ohne korrektes Tracking keine Optimierung:</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-semibold text-blue-600 mb-3">Wichtige Conversion-Typen</h4>
    <ul class="space-y-2 text-gray-700">
      <li>Website-Konversionen (Formulare, Käufe)</li>
      <li>Telefonanrufe (Call Tracking)</li>
      <li>App-Downloads</li>
      <li>Offline-Konversionen (Import)</li>
      <li>Cross-Device-Konversionen</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-semibold text-blue-600 mb-3">Best Practices</h4>
    <ul class="space-y-2 text-gray-700">
      <li>Google Tag Manager verwenden</li>
      <li>Conversion-Werte zuweisen</li>
      <li>Attributionsmodelle verstehen</li>
      <li>Regelmäßige Datenprüfung</li>
      <li>Offline-Konversionen importieren</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Gebotsstrategien für Conversion-Optimierung</h3>
<p class="text-gray-700 mb-4">Wählen Sie die richtige Strategie für Ihre Ziele:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Maximize Conversions:</span> Für schnelle Ergebnisse bei ausreichend Budget</li>
  <li><span class="font-medium">Target CPA (tCPA):</span> Wenn Sie bestimmte Kosten pro Conversion anstreben</li>
  <li><span class="font-medium">Target ROAS (tROAS):</span> Für E-Commerce mit klaren Umsatzzielen</li>
  <li><span class="font-medium">Manuelle Gebote:</span> Für Experten mit Zeit für Feinjustierung</li>
  <li><span class="font-medium">Enhanced CPC (eCPC):</span> Guter Kompromiss zwischen Automatisierung und Kontrolle</li>
</ul>

<div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6 rounded-r">
  <p class="font-medium text-purple-800">Experten-Tipp:</p>
  <p class="text-purple-700">Kombinieren Sie Smart Bidding mit Audience Targeting für beste Ergebnisse. Nutzen Sie Zielgruppen-Signale wie "Remarketing-Listen" oder "Ähnliche Zielgruppen" zusammen mit tCPA oder tROAS.</p>
</div>
<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Die Psychologie hinter dem Klick: Nutzer verstehen lernen</h2>
<p class="text-gray-700 mb-4">Erfolgreiche Conversion-Optimierung beginnt mit dem Verständnis der Nutzerpsychologie. Warum klickt ein Mensch auf eine Anzeige? Was erwartet er auf der Zielseite? Psychologische Trigger wie Knappheit ("nur heute verfügbar"), Vertrauen (z. B. durch Gütesiegel), oder Reziprozität (kostenloser Mehrwert) spielen eine zentrale Rolle bei der Entscheidung, ob ein Nutzer konvertiert.</p>
<p class="text-gray-700 mb-6">Unternehmen, die ihre Zielgruppe wirklich kennen, können Botschaften besser formulieren, Barrieren abbauen und Vertrauen aufbauen. Dazu gehören Buyer Personas, Heatmaps, Scroll-Tracking und systematisches Feedback.</p>

<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">UX-Design als Conversion-Booster</h2>
<p class="text-gray-700 mb-4">Eine überzeugende User Experience ist mehr als nur hübsches Design. Sie ist ein psychologischer Wegweiser, der Nutzer intuitiv zu Conversion-Zielen führt. White Space, klare Typografie und intuitive Navigation sind essenziell – insbesondere mobil.</p>
<p class="text-gray-700 mb-6">Nutze F-Patterns und visuelle Hierarchien, um Blickverläufe gezielt zu lenken. Achte auf kognitive Leichtigkeit – je weniger ein Nutzer denken muss, desto eher schließt er eine Aktion ab.</p>

<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Retargeting &amp; Conversion: Wie verlorene Klicks zurückkommen</h2>
<p class="text-gray-700 mb-4">Nicht jeder Klick führt sofort zu einer Conversion – das ist normal. Mit gezieltem Retargeting kannst du verlorene Nutzer erneut ansprechen und zurückholen. Dazu zählen Remarketing-Listen in Google Ads, dynamisches Retargeting im E-Commerce und personalisierte Banner-Kampagnen auf Drittseiten.</p>
<p class="text-gray-700 mb-6">Die besten Ergebnisse erzielst du mit segmentierten Zielgruppen und individuellen Botschaften. Zum Beispiel: Zeige Warenkorbabbrechern gezielt Produktvorteile oder Rabatte. Retargeting ist kein Spam – es ist Erinnerungsmarketing.</p>

    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Google Ads Spezialist',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi betreut seit über 7 Jahren erfolgreiche Google Ads Kampagnen für Unternehmen verschiedener Größen. Als zertifizierte Google Ads Expertin hilft er Einsteigern, die Komplexität des Systems zu verstehen und von Anfang an profitabel zu werben. Bei CAIT Social Media leitet er das SEA-Team und entwickelt maßgeschneiderte Werbestrategien.'
    },
    date: '15. September 2024',
    readTime: '9 min',
    tags: ['Conversions', 'Landingpages', 'Google Ads', 'Optimierung']
  },
};

export default function GoogleAdsPage() {
  const post = googleAdsPosts['conversion-optimierung-ads'];
  if (!post) return notFound();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            SEA Optimierung
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
            src="/google-ads-optimization.webp"
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

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Optimierungs-Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hier würden verwandte Artikel eingefügt werden */}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = googleAdsPosts['conversion-optimierung-ads'];
  return {
    title: `${post.title} | CAITSocialMedia`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: '/google-ads-optimization.webp',
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
      images: ['/google-ads-optimization.webp'],
    },
  };
}