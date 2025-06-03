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
    <section className="bg-[#0c1832] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Warum CAIT für Social Media?
        </h2>
        <p className="text-lg text-blue-300 mb-12 max-w-3xl mx-auto">
          Weil wir Social Media nicht nur posten, sondern verstehen. Wir bauen digitale Beziehungen auf, die deiner Marke Sichtbarkeit, Vertrauen und Umsatz bringen.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex gap-4 items-start bg-blue-500/10 border border-blue-400/30 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-4px] transition-all duration-300"
            >
              <span className="text-blue-400 text-xl mt-1">✓</span>
              <p className="text-white leading-relaxed text-lg">{benefit}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <a 
            href="/kontakt" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Kostenlose Social Media Analyse
          </a>
        </div>
      </div>
    </section>
  );
}