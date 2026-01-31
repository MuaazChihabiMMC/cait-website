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
            CAIT SEO Agentur Berlin für Top Rankings.
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">
            Nachhaltiges Wachstum.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
          CAIT Social Media ist Ihre <strong>SEO Agentur in Berlin</strong> für #1 Platzierungen bei Google. Wir kombinieren lokale Expertise mit datenbasierten Strategien für mehr Sichtbarkeit, qualifizierte Leads und messbare Umsatzsteigerungen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/kontakt"
            className="inline-block bg-[#fcd066] text-[#0c1832] hover:bg-[#fcd066] text-[#0c1832] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Kostenlose SEO-Beratung für Berliner Unternehmen"
          >
            Kostenlose SEO-Analyse
          </a>
          <a
            href="tel:+493022689840"
            className="inline-block border-2 border-[#fcd066] text-[#fcd066] hover:bg-[#d4a84a] hover:text-[#0c1832] font-semibold px-8 py-3.5 rounded-full transition-all"
            aria-label="SEO Agentur Berlin telefonisch kontaktieren"
          >
            <span className="hidden sm:inline">Berlin </span>030 2268 9840
          </a>
        </div>

        {/* Local trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 items-center text-gray-200 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
            <span>SEO Experten aus Berlin</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>
            <span>15+ Jahre Erfahrung</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/></svg>
            <span>Lokale & nationale SEO</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0c1832] to-transparent z-10" />
    </section>
  );
}