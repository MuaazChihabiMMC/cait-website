// components/SeoWhy.tsx

export default function SeoWhy() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Warum SEO heute unverzichtbar ist
          </h2>
          <p className="text-black text-lg mb-6">
            Sichtbarkeit im Netz entscheidet über den Erfolg deines Unternehmens. Ohne SEO verlierst du potenzielle Kunden an Wettbewerber, die digital präsenter sind. Gute Platzierungen bei Google schaffen Vertrauen, bringen qualifizierten Traffic und sorgen für messbaren Umsatz.
          </p>
          <p className="text-black text-lg">
            Ob lokale Dienstleistung oder internationaler E-Commerce: Mit der richtigen Strategie wirst du gefunden, und zwar genau von denen, die nach deinem Angebot suchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-blue-300 border border-blue-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Sichtbarkeit = Vertrauen</h3>
            <p className="text-black">
              Top-Rankings bei Google erzeugen Autorität, Glaubwürdigkeit und Vertrauen, essenziell für jede Marke.
            </p>
          </div>

          <div className="bg-blue-300 border border-blue-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Nachhaltig statt kurzfristig</h3>
            <p className="text-black">
              Anders als Ads wirkt SEO langfristig. Einmal optimiert, liefert deine Seite dauerhaft Traffic.
            </p>
          </div>

          <div className="bg-blue-300 border border-blue-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Gezielte Kundengewinnung</h3>
            <p className="text-black">
              Du erreichst genau die Menschen, die nach dir suchen, ohne Streuverluste oder hohe Klickkosten.
            </p>
          </div>

          <div className="bg-blue-300 border border-blue-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Mehr Umsatz durch Sichtbarkeit</h3>
            <p className="text-black">
              Qualifizierte Besucher bedeuten mehr Anfragen, mehr Kunden, mehr Umsatz. SEO macht dich sichtbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}