import Image from 'next/image';
import { notFound } from 'next/navigation';

const googleAdsPosts = {
  'google-ads-budget-strategien': {
    title: 'Effektives Budgetmanagement in Google Ads',
    metaDescription: 'Lernen Sie, wie Sie Ihr Werbebudget gezielt einsetzen und Streuverluste vermeiden.',
    alternates: {
      canonical: 'https://www.caitsocialmedia.com/blog/google-ads/google-ads-budget-strategien',
    },
    content: `
     <h2 class="text-2xl font-bold text-white mt-8 mb-4">Warum Budgetmanagement über Erfolg oder Misserfolg entscheidet</h2>
<p class="text-gray-300 mb-6">Die richtige Budgetverteilung in Google Ads ist entscheidend für den ROI Ihrer Werbekampagnen. Ohne strategische Planung verbrennen Sie schnell Budget ohne messbare Ergebnisse.</p>

<div class="bg-blue-900/50 border-l-4 border-blue-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-blue-200 mb-1">Statistik:</p>
  <p class="text-blue-100">Über 60% der Google Ads-Nutzer verschwenden Budget durch falsche Kampagnenstruktur und ineffiziente Gebote.</p>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">1. Budgetplanung: So legen Sie Ihr Budget richtig fest</h3>
<p class="text-gray-300 mb-4">Grundlagen für eine sinnvolle Budgetplanung:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">Branchenbenchmarks:</span> Durchschnittliche CPCs Ihrer Branche kennen</li>
  <li><span class="font-medium">Umsatzziele:</span> Budget anhand gewünschter Umsätze kalkulieren</li>
  <li><span class="font-medium">Testphase:</span> 20-30% des Budgets für Tests reservieren</li>
  <li><span class="font-medium">Saisonalität:</span> Budgetschwankungen im Jahresverlauf berücksichtigen</li>
</ul>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Budget-Kalkulationsformel</h4>
    <div class="text-gray-300">
      <p>Tagesbudget = (Gewünschte Conversions × Durchschnittlicher CPA) / 30</p>
      <p class="mt-2 text-sm text-gray-400">CPA = Kosten pro Acquisition</p>
    </div>
  </div>
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Budget-Fallen</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• Zu kleine Budgets für aussagekräftige Daten</li>
      <li>• Gleichmäßige Verteilung ohne Priorisierung</li>
      <li>• Keine Budgetpuffer für Skalierung</li>
      <li>• Ignorieren von Wochentag-Effekten</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">2. Kampagnenbudgets strategisch verteilen</h3>
<p class="text-gray-300 mb-4">Priorisieren Sie nach Performance und Potenzial:</p>

<div class="bg-blue-900/50 border-l-4 border-orange-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-orange-200 mb-1">Tipp:</p>
  <p class="text-orange-100">Verwenden Sie die 70-20-10 Regel: 70% des Budgets für bewährte Kampagnen, 20% für Optimierungen, 10% für Tests.</p>
</div>

<div class="overflow-x-auto">
  <table class="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-6">
    <thead class="bg-gray-700">
      <tr>
        <th class="py-3 px-4 text-left font-semibold text-gray-300">Kampagnentyp</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-300">Budgetanteil</th>
        <th class="py-3 px-4 text-left font-semibold text-gray-300">Begründung</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-700">
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Bewährte Performancer</td>
        <td class="py-3 px-4 text-gray-300">50-70%</td>
        <td class="py-3 px-4 text-gray-300">Sichere Rendite, stabile Ergebnisse</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Wachstumspotenziale</td>
        <td class="py-3 px-4 text-gray-300">20-30%</td>
        <td class="py-3 px-4 text-gray-300">Skalierung erfolgreicher Ansätze</td>
      </tr>
      <tr>
        <td class="py-3 px-4 text-gray-300 font-medium">Experimente</td>
        <td class="py-3 px-4 text-gray-300">10-20%</td>
        <td class="py-3 px-4 text-gray-300">Neue Zielgruppen/Formate testen</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">3. Automatisierte Bidding-Strategien für optimales Budgetmanagement</h3>
<p class="text-gray-300 mb-4">Google's KI-gestützte Gebotsstrategien:</p>

<div class="bg-green-900/50 border-l-4 border-green-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-green-200 mb-1">Wichtig:</p>
  <p class="text-green-100">Automatisierte Strategien benötigen mindestens 15-30 Conversion pro Woche für zuverlässige Ergebnisse.</p>
</div>

<ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">Target CPA (tCPA):</span> Festgelegte Kosten pro Conversion</li>
  <li><span class="font-medium">Target ROAS (tROAS):</span> Ziel-Umsatzrendite für E-Commerce</li>
  <li><span class="font-medium">Maximize Conversions:</span> Möglichst viele Conversions innerhalb des Budgets</li>
  <li><span class="font-medium">Maximize Conversion Value:</span> Umsatzmaximierung bei festem Budget</li>
  <li><span class="font-medium">Enhanced CPC (eCPC):</span> Manuelle Gebote mit automatischen Anpassungen</li>
</ol>

<h3 class="text-xl font-bold text-white mt-8 mb-4">4. Budget-Kontrollmechanismen</h3>
<p class="text-gray-300 mb-4">Tools zur Budgetüberwachung und -steuerung:</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Proaktive Kontrollen</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• Tägliche Budgetüberprüfungen</li>
      <li>• Alarme bei ungewöhnlichen Ausgaben</li>
      <li>• Kampagnen-Ausgabenlimits</li>
      <li>• Shared Budgets für Kampagnengruppen</li>
    </ul>
  </div>
  <div class="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
    <h4 class="font-bold text-blue-400 mb-3">Google Ads-Tools</h4>
    <ul class="space-y-2 text-gray-300">
      <li>• Budgetgruppen</li>
      <li>• Automatische Regeln</li>
      <li>• Scripts für erweiterte Steuerung</li>
      <li>• Drittanbieter-Tools für Budgetmanagement</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">5. Budget-Optimierung im Zeitverlauf</h3>
<p class="text-gray-300 mb-4">So passen Sie Budgets dynamisch an:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-300">
  <li><span class="font-medium">Tageszeit-Optimierung:</span> Budgetfokus auf konversionsstarke Stunden</li>
  <li><span class="font-medium">Wochentag-Anpassungen:</span> Mehr Budget an starken Tagen</li>
  <li><span class="font-medium">Saisonale Schwankungen:</span> Vorwegnahme von Nachfragespitzen</li>
  <li><span class="font-medium">Konkurrenzmonitoring:</span> Budgetanpassungen bei verändertem Wettbewerb</li>
  <li><span class="font-medium">Performance-Review:</span> Monatliche Budgetneuverteilung basierend auf KPIs</li>
</ul>

<div class="bg-purple-900/50 border-l-4 border-purple-400 p-4 my-6 rounded-r">
  <p class="font-semibold text-purple-200 mb-1">Experten-Tipp:</p>
  <p class="text-purple-100">Nutzen Sie Google Ads Scripts für automatische Budgetanpassungen basierend auf Performance-Kennzahlen. So können Sie z.B. Budget von unterperformenden Kampagnen automatisch zu Top-Performern umverteilen.</p>
</div>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Google Ads Spezialist',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi betreut seit über 7 Jahren erfolgreiche Google Ads Kampagnen für Unternehmen verschiedener Größen. Als zertifizierte Google Ads Expertin hilft er Einsteigern, die Komplexität des Systems zu verstehen und von Anfang an profitabel zu werben. Bei CAIT Social Media leitet er das SEA-Team und entwickelt maßgeschneiderte Werbestrategien.'
    },
    date: '22. Oktober 2024',
    readTime: '8 min',
    tags: ['Budgetierung', 'Kampagnen', 'Google Ads', 'Optimierung']
  },
};

export default function GoogleAdsPage() {
  const post = googleAdsPosts['google-ads-budget-strategien'];
  if (!post) return notFound();

  return (
    <div className="bg-[#0c1832]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0c1832] to-[#1a2b5a] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            SEA Budgetierung
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
      <article className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8">
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
            <span key={tag} className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-6 md:p-8 bg-gray-800 rounded-xl">
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

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Weitere Artikel zu Google Ads</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hier würden verwandte Artikel eingefügt werden */}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = googleAdsPosts['google-ads-budget-strategien'];
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