// components/SeoHero.tsx
export default function SeoHero() {
  return (
    <section className="relative isolate bg-[#0c1832] text-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Background pattern with opacity */}
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-cover opacity-5 z-0" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1832]/90 via-[#0c1832]/70 to-[#0c1832]/90 z-0" />
      
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
            Höher Ranken.
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">
            Schneller Wachsen.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          CAIT Social Media ist Ihre SEO-Agentur in Berlin für langfristige Sichtbarkeit, nachhaltiges Wachstum und messbare Ergebnisse. Gemeinsam bringen wir Sie nach vorn - lokal, national oder international.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/kontakt"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Kostenlose SEO-Beratung
          </a>
          <a
            href="tel:+493022689840"
            className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0c1832] font-semibold px-8 py-3.5 rounded-full transition-all"
          >
            030 2268 9840
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0c1832] to-transparent z-10" />
    </section>
  );
}