// components/SocialMediaFeatures.tsx
const socialFeatures = [
  {
    title: '📱 Plattformübergreifende Strategie',
    description:
      'Wir entwickeln individuelle Konzepte für Instagram, TikTok, LinkedIn, Facebook, Pinterest & YouTube, zugeschnitten auf deine Zielgruppe.',
  },
  {
    title: '🎯 Content-Konzeption & Postingpläne',
    description:
      'Redaktionspläne, Hashtag-Strategien, Timing, alles aus einer Hand. Deine Kanäle werden strategisch bespielt und kontinuierlich weiterentwickelt.',
  },
  {
    title: '🎥 Reels, Shorts & Video-Formate',
    description:
      'Social Video ist King: Wir produzieren performante Kurzformate für TikTok, Instagram & Co., die Reichweite schaffen und begeistern.',
  },
  {
    title: '✍️ Copywriting & Community Management',
    description:
      'Wir schreiben Texte, die klicken, und beantworten Kommentare, DMs und Bewertungen im Stil deiner Marke.',
  },
  {
    title: '📈 Analyse & Reporting',
    description:
      'Was wirkt wirklich? Wir messen Performance mit Insights & KPIs und optimieren datenbasiert deine Kanäle.',
  },
  {
    title: '🤝 Influencer & UGC-Kampagnen',
    description:
      'Wir finden passende Creators, planen Kooperationen und sorgen für echte Sichtbarkeit durch authentische Inhalte.',
  },
];

export default function SocialMediaFeatures() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Unsere Social Media Leistungen
          </h2>
          <p className="text-lg text-gold-300 max-w-3xl mx-auto">
            Komplette Social Media Betreuung von Strategie bis Umsetzung
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-panel border border-gold-300/20 p-6 rounded-xl text-left hover:border-gold-300/50 hover:translate-y-[-4px] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gold-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/kontakt"
            className="inline-block bg-gold-300 text-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-gold-300/30 transition-all hover:translate-y-[-2px]"
          >
            Jetzt Strategiegespräch vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
