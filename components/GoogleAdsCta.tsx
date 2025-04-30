// components/GoogleAdsCta.tsx

export default function GoogleAdsCta() {
  return (
    <section className="bg-blue-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Mehr Kunden, weniger Streuverlust – mit Google Ads
        </h2>
        <p className="text-lg mb-8">
          Wir holen das Maximum aus deinem Werbebudget heraus. Jetzt kostenlose Beratung sichern und deine neue Kampagne starten.
        </p>
        <a
          href="/kontakt"
          className="inline-block rounded-full bg-white text-blue-900 px-8 py-4 font-semibold shadow hover:bg-blue-100 transition"
        >
          Jetzt unverbindlich beraten lassen
        </a>
      </div>
    </section>
  );
}
