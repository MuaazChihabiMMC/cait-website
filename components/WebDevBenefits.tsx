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
    <section className="bg-[#0c1832] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Warum CAIT für dein Webprojekt?
        </h2>
        <p className="text-lg text-[#fcd066] mb-12 max-w-3xl mx-auto">
          Weil wir ganzheitlich denken, individuell entwickeln und modern umsetzen. Wir liefern keine Seiten von der Stange, sondern digitale Erlebnisse mit echtem Mehrwert.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex gap-4 items-start bg-[#fcd066] text-[#0c1832]/10 border border-[#fcd066]/30 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-4px] transition-all duration-300"
            >
              <span className="text-[#fcd066] text-xl mt-1">✓</span>
              <p className="text-white leading-relaxed text-lg">{benefit}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <a 
            href="/kontakt" 
            className="inline-block bg-[#fcd066] text-[#0c1832] hover:bg-[#fcd066] text-[#0c1832] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Kostenlose Beratung anfordern
          </a>
        </div>
      </div>
    </section>
  );
}