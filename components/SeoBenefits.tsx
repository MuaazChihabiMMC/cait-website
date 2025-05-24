// components/SeoBenefits.tsx

export default function SeoBenefits() {
  const benefits = [
    'Individuelle Strategien statt 08/15-SEO',
    'Transparente Kommunikation & Reporting',
    'Technisches Know-how trifft auf kreativen Content',
    'Langfristige Partnerschaft auf Augenhöhe',
    'Erfahrung mit lokalen & internationalen Projekten',
    'White-Hat-SEO für nachhaltige Sichtbarkeit',
    'Alle Leistungen aus einer Hand: Technik, Text & Strategie',
    'Zugang zu Top-Tools wie Sistrix, Ahrefs & Semrush',
    'Fokus auf messbare Ergebnisse & echten ROI',
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Warum CAITSocialMedia die richtige Wahl ist
        </h2>
        <p className="text-lg text-black mb-10">
          Unsere Agentur verbindet Strategie, Technik und Content zu einem ganzheitlichen SEO-Ansatz, der funktioniert. Statt leeren Versprechen liefern wir echte Resultate, datenbasiert, transparent und nachhaltig.
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