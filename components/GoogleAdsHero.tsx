// components/GoogleAdsHero.tsx
export default function GoogleAdsHero() {
  return (
    <section className="relative isolate bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Ihre Google Ads Agentur Berlin für mehr Leads & Umsatz
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Als führende SEA Agentur in Berlin erstellen wir hochperformante Google Ads Kampagnen, die nicht nur Klicks bringen, sondern echte Kunden. Zielgerichtet. Messbar. Skalierbar.
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-100 transition"
        >
          Jetzt Strategiegespräch buchen
        </a>
      </div>
      <div className="mt-12 text-blue-100 text-sm md:text-base">
  <p>
    Als zertifizierte <strong>Google Ads Agentur Berlin</strong> kombinieren wir technisches Know-how mit kreativer Performance-Strategie. 
    Unsere <strong>SEA Agentur</strong> optimiert jeden Aspekt Ihrer Kampagnen, vom ersten Klick bis zum Kaufabschluss.
  </p>
</div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-cover opacity-10 z-0" />
    </section>
  );
}