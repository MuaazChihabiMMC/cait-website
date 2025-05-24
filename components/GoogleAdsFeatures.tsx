// components/GoogleAdsFeatures.tsx
const adsFeatures = [
  {
    title: '🔍 Keyword-Recherche & Zielgruppenanalyse',
    description:
      'Als Ads Agentur identifizieren wir Suchbegriffe mit hoher Conversion-Wahrscheinlichkeit und richten Kampagnen exakt auf Ihre Berliner Zielgruppe aus.',
  },
  {
    title: '📱 Responsive Anzeigen & Erweiterungen',
    description:
      'Ihre Google Ads Agentur gestaltet hochperformante Anzeigentexte mit Sitelinks, Anruferweiterungen & mehr, angepasst an alle Geräte.',
  },
  {
    title: '📈 Conversion-Tracking & Optimierung',
    description:
      'Wir messen als SEA Agentur, was zählt: Conversions. Damit optimieren wir Ihre Kampagnen auf echte Ergebnisse, nicht nur Klicks.',
  },
  {
    title: '💰 Budget-Effizienz & A/B-Testing',
    description:
      'Ihre Google Ads Agentur Berlin holt mit strukturierter Kampagnenarchitektur das Maximum aus Ihrem Werbebudget.',
  },
  {
    title: '🛠️ Komplett-Service: Setup & Betreuung',
    description:
      'Von der ersten Anzeige bis zur Optimierung, Ihre Ads Agentur übernimmt alles für nachhaltigen Erfolg.',
  },
  {
    title: '🌍 Lokale & internationale Ads',
    description:
      'Ob Berliner Dienstleister oder globaler Shop: Ihre SEA Agentur skaliert Kampagnen für jede Zielregion.',
  },
];

export default function GoogleAdsFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Leistungen Ihrer Google Ads Agentur Berlin
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {adsFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-300 border border-blue-900 p-6 rounded-xl text-left shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
              <p className="text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
     
     





     
    </section>
  );
}