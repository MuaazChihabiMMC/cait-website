// components/MainCta.tsx

export default function MainCta() {
    return (
      <section className="bg-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lass uns gemeinsam starten
          </h2>
          <p className="text-lg mb-8">
            Du brauchst mehr Sichtbarkeit, Leads oder eine moderne Website? Wir beraten dich unverbindlich und finden die passende Strategie für dein Projekt.
          </p>
          <a
            href="/kontakt"
            className="inline-block rounded-full bg-white text-blue-900 px-8 py-4 font-semibold shadow hover:bg-blue-100 transition"
          >
            Jetzt kostenloses Erstgespräch sichern
          </a>
        </div>
      </section>
    );
  }