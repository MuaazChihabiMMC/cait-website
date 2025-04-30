// components/SocialMediaFeatures.tsx

const socialFeatures = [
    {
      title: '📱 Plattformübergreifende Strategie',
      description:
        'Wir entwickeln individuelle Konzepte für Instagram, TikTok, LinkedIn, Facebook, Pinterest & YouTube – zugeschnitten auf deine Zielgruppe.',
    },
    {
      title: '🎯 Content-Konzeption & Postingpläne',
      description:
        'Redaktionspläne, Hashtag-Strategien, Timing – alles aus einer Hand. Deine Kanäle werden strategisch bespielt und kontinuierlich weiterentwickelt.',
    },
    {
      title: '🎥 Reels, Shorts & Video-Formate',
      description:
        'Social Video ist King: Wir produzieren performante Kurzformate für TikTok, Instagram & Co., die Reichweite schaffen und begeistern.',
    },
    {
      title: '✍️ Copywriting & Community Management',
      description:
        'Wir schreiben Texte, die klicken – und beantworten Kommentare, DMs und Bewertungen im Stil deiner Marke.',
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
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            Unsere Social Media Leistungen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialFeatures.map((feature, index) => (
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