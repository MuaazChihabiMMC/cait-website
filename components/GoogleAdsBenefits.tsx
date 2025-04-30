// components/GoogleAdsBenefits.tsx

const benefits = [
    'Individuelle Kampagnenstrategie statt Standard-Setups',
    'Transparente Monats-Reports mit echten KPIs',
    'Zertifizierte Google Ads Spezialisten im Team',
    'Direkter Ansprechpartner ohne Warteschleifen',
    'Schnelle Umsetzung & laufende Optimierung',
    'Verknüpfung mit Google Analytics, Tag Manager & Co.',
    'Flexibles Budgetmanagement mit maximalem ROI',
    'Erfahrung aus über 200 Projekten in verschiedensten Branchen',
  ];
  
  export default function GoogleAdsBenefits() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Warum CAITSocialMedia als Google Ads Agentur?
          </h2>
          <p className="text-lg text-black mb-10">
            Weil wir nicht einfach Anzeigen schalten, sondern Performance liefern. Unser Team denkt strategisch, handelt datenbasiert und optimiert kontinuierlich – für echte Ergebnisse.
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