// components/SocialMediaBenefits.tsx

const benefits = [
    'Strategische Social Media Betreuung mit Redaktionsplan',
    'Professionelle Content-Produktion (Text, Bild, Video)',
    'Starker Fokus auf Relevanz, Reichweite und Community',
    'Direkte Ansprechpartner und schnelle Umsetzung',
    'Erfahrung mit B2C, B2B, Events und Markenaufbau',
    'Trendorientierte Konzepte mit echtem Mehrwert',
    'Verknüpfung mit Ads, SEO & Website-Strategie',
    'Full-Service von der Planung bis zur Analyse',
  ];
  
  export default function SocialMediaBenefits() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Warum CAITSocialMedia für Social Media?
          </h2>
          <p className="text-lg text-black mb-10">
            Weil wir Social Media nicht nur posten, sondern verstehen. Wir bauen digitale Beziehungen auf, die deiner Marke Sichtbarkeit, Vertrauen und Umsatz bringen.
          </p>
  
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex gap-3 items-start bg-blue-300 border border-blue-900 p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <span className="text-blue-900 text-xl">✓</span>
                <p className="text-black leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }