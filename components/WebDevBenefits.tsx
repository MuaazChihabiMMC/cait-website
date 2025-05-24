// components/WebDevBenefits.tsx

const benefits = [
    'Strategisch durchdachte Architektur & Struktur',
    'Design & Technik aus einer Hand',
    'Performance-Optimierung inklusive SEO-Fundament',
    'Individuelles Webdesign mit klarer Nutzerführung',
    'Beratung, Entwicklung & Support, alles intern',
    'Transparente Prozesse & direkte Ansprechpartner',
    'Erfahrung mit kleinen, mittleren & großen Projekten',
    'Verwendung moderner Frameworks wie Next.js, Tailwind & Headless CMS',
  ];
  
  export default function WebDevBenefits() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Warum CAITSocialMedia für dein Webprojekt?
          </h2>
          <p className="text-lg text-black mb-10">
            Weil wir ganzheitlich denken, individuell entwickeln und modern umsetzen. Wir liefern keine Seiten von der Stange, sondern digitale Erlebnisse mit echtem Mehrwert.
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
  