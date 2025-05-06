import Image from 'next/image';
import { notFound } from 'next/navigation';

const googleAdsPosts = {
  'google-ads-einsteiger-guide': {
    title: 'Google Ads Einstieg |SEA Agentur Berlin',
    metaDescription: 'Konto erstellen, Kampagne starten, Ergebnisse sehen dein schneller Einstieg in Google Ads.',
    content: `
     <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warum Google Ads für Ihr Business unverzichtbar ist</h2>
<p class="text-gray-700 mb-6">Google Ads ist das leistungsstärkste Tool für gezielte Werbung im Suchmaschinenmarkt. Mit einem Marktanteil von über 90% bei Suchanfragen bietet Google Ihnen Zugang zu potenziellen Kunden genau dann, wenn sie nach Ihren Produkten oder Dienstleistungen suchen.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-800 mb-1">Statistik:</p>
  <p class="text-blue-700">Unternehmen, die Google Ads nutzen, verzeichnen durchschnittlich 2x mehr Conversions als mit organischem Traffic allein.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Kontoerstellung und erste Schritte</h3>
<p class="text-gray-700 mb-4">So richten Sie Ihr Google Ads Konto richtig ein:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Google-Konto:</span> Nutzen Sie ein geschäftliches Google-Konto</li>
  <li><span class="font-medium">Zahlungsmethode:</span> Kreditkarte oder Lastschrift hinterlegen</li>
  <li><span class="font-medium">Zielsetzung:</span> Klare Kampagnenziele definieren (Leads, Verkäufe, Branding)</li>
  <li><span class="font-medium">Conversion-Tracking:</span> Unbedingt von Anfang an einrichten</li>
</ul>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Konto-Typen</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Standard-Konto</li>
      <li>• Manager-Konto (für Agenturen)</li>
      <li>• Smart-Kampagnen (automatisiert)</li>
    </ul>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Wichtige Einstellungen</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Zielgruppe definieren</li>
      <li>• Tagesbudget festlegen</li>
      <li>• Standort-Targeting</li>
      <li>• Geräte-Anpassung</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Kampagnentypen im Überblick</h3>
<p class="text-gray-700 mb-4">Wählen Sie den passenden Kampagnentyp für Ihre Ziele:</p>

<div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-orange-800 mb-1">Tipp:</p>
  <p class="text-orange-700">Für Einsteiger empfehlen wir Suchnetzwerk-Kampagnen mit manuellen Geboten für maximale Kontrolle.</p>
</div>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Kampagnentyp</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">Beschreibung</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-700">CPC*</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Suchnetzwerk</td>
        <td class="py-3 px-4 text-gray-700">Textanzeigen in Suchergebnissen</td>
        <td class="py-3 px-4 text-gray-700">€0.50-€5</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Displaynetzwerk</td>
        <td class="py-3 px-4 text-gray-700">Bannerwerbung auf Websites</td>
        <td class="py-3 px-4 text-gray-700">€0.20-€2</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Shopping</td>
        <td class="py-3 px-4 text-gray-700">Produktanzeigen mit Bildern</td>
        <td class="py-3 px-4 text-gray-700">€0.30-€3</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-700 font-medium">Video</td>
        <td class="py-3 px-4 text-gray-700">YouTube-Werbung</td>
        <td class="py-3 px-4 text-gray-700">€0.10-€1</td>
      </tr>
    </tbody>
  </table>
  <p class="text-sm text-gray-500 mb-6">*Durchschnittliche Kosten pro Klick (CPC) variieren je nach Branche</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Keyword-Recherche für Anfänger</h3>
<p class="text-gray-700 mb-4">Finden Sie die richtigen Keywords für Ihre Anzeigen:</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-800 mb-1">Wichtig:</p>
  <p class="text-green-700">Nutzen Sie den Google Keyword Planner für erste Ideen, aber verlassen Sie sich nicht ausschließlich auf diese Daten.</p>
</div>

<ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
  <li>Brainstorming: Notieren Sie 10-20 relevante Begriffe zu Ihrem Angebot</li>
  <li>Nutzen Sie den Google Keyword Planner für Volumen-Daten</li>
  <li>Analysieren Sie die Keywords Ihrer Konkurrenten mit Tools wie SEMrush</li>
  <li>Gruppieren Sie Keywords nach Themen für spätere Anzeigengruppen</li>
</ol>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Anzeigentext-Optimierung</h3>
<p class="text-gray-700 mb-4">So schreiben Sie überzeugende Google Ads:</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Aufbau einer Textanzeige</h4>
    <div class="border-l-2 border-blue-400 pl-4">
      <p class="font-medium text-gray-800">Überschrift 1 (max 30 Zeichen)</p>
      <p class="font-medium text-gray-800">Überschrift 2 (max 30 Zeichen)</p>
      <p class="font-medium text-gray-800">Überschrift 3 (max 30 Zeichen)</p>
      <p class="text-gray-700 mt-2">Beschreibungstext (max 90 Zeichen) mit klarem Call-to-Action</p>
      <p class="text-gray-500 text-sm mt-2">Anzeigenerweiterungen nicht vergessen!</p>
    </div>
  </div>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
    <h4 class="font-bold text-blue-600 mb-3">Best Practices</h4>
    <ul class="space-y-2 text-gray-700">
      <li>• Keywords in Überschriften verwenden</li>
      <li>• Einzigartige Verkaufsargumente (USPs)</li>
      <li>• Zahlen und Prozentzahlen</li>
      <li>• Klare Handlungsaufforderung</li>
      <li>• A/B-Tests durchführen</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Budgetierung und Gebotsstrategien</h3>
<p class="text-gray-700 mb-4">So setzen Sie Ihr Budget optimal ein:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><span class="font-medium">Tagesbudget:</span> Beginnen Sie mit €10-€20 pro Tag</li>
  <li><span class="font-medium">Gebotsstrategien:</span> Für Einsteiger "Manuelles CPC" empfehlenswert</li>
  <li><span class="font-medium">Bid Adjustments:</span> Anpassungen für Geräte, Standorte, Zeiten</li>
  <li><span class="font-medium">Conversion-Optimierung:</span> Erst nach 15-30 Conversions aktivieren</li>
</ul>

<div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6 rounded-r">
  <p class="font-semibold text-purple-800 mb-1">Budget-Tipp:</p>
  <p class="text-purple-700">Starten Sie mit einem Testbudget von €300-€500 für die ersten 2 Wochen, um Daten zu sammeln bevor Sie skalieren.</p>
</div>
    `,
    author: {
        name: 'Muaaz Chihabi',
        role: 'Google Ads Spezialist',
        image: '/author-muaaz.webp',
        bio: 'Muaaz Chihabi betreut seit über 7 Jahren erfolgreiche Google Ads Kampagnen für Unternehmen verschiedener Größen. Als zertifizierte Google Ads Expertin hilft er Einsteigern, die Komplexität des Systems zu verstehen und von Anfang an profitabel zu werben. Bei CAIT Social Media leitet er das SEA-Team und entwickelt maßgeschneiderte Werbestrategien.'
      },
      date: '12. August 2024',
      readTime: '10 min',
      tags: ['Google Ads', 'SEA Basics', 'Online Marketing', 'PPC']
    },
};

export default function GoogleAdsPage() {
  const post = googleAdsPosts['google-ads-einsteiger-guide'];
  if (!post) return notFound();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            SEA Basics
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
            src="/google-ads-guide.webp"
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere SEA-Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hier würden verwandte Artikel eingefügt werden */}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = googleAdsPosts['google-ads-einsteiger-guide'];
  return {
    title: `${post.title} | CAITSocialMedia`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: '/google-ads-guide.webp',
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
      images: ['/google-ads-guide.webp'],
    },
  };
}