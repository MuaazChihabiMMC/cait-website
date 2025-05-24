// components/SeoCta.tsx

export default function SeoCta() {
  return (
    <section className="bg-blue-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Starte jetzt deine SEO-Erfolgsgeschichte
        </h2>
        <p className="text-lg mb-8">
          Egal ob lokales Unternehmen, Online-Shop oder internationale Marke, mit CAIT Agentur wirst du online sichtbar. Vereinbare dein kostenloses Erstgespräch und erfahre, wie wir dein Google-Ranking gezielt verbessern.
        </p>
        <a
          href="/kontakt"
          className="inline-block rounded-full bg-white text-blue-900 px-8 py-4 font-semibold shadow hover:bg-blue-100 transition"
        >
          Kostenloses Erstgespräch vereinbaren
        </a>
      </div>
    </section>
  );
}