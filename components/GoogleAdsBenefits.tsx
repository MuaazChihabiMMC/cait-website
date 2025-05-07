// components/GoogleAdsBenefits.tsx
const benefits = [
  'Individuelle Kampagnenstrategie Ihrer SEA Agentur',
  'Transparente Monats-Reports mit echten KPIs',
  'Zertifizierte Google Ads Spezialisten in Berlin',
  'Ihre Ads Agentur mit direktem Ansprechpartner',
  'Berliner Agentur für schnelle Umsetzung',
  'Verknüpfung mit Google Analytics & Tag Manager',
  'Flexibles Budgetmanagement mit maximalem ROI',
  'Erfahrung als Google Ads Agentur in 200+ Projekten',
];

export default function GoogleAdsBenefits() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Warum CAIT als Google Ads Agentur Berlin?
        </h2>
        <p className="text-lg text-black mb-10">
          Als erfahrene SEA Agentur liefern wir nicht nur Anzeigen, sondern echte Performance. 
          Unsere Ads Agentur in Berlin optimiert strategisch für mehr Leads & Umsatz.
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