// components/SocialMediaCta.tsx

export default function SocialMediaCta() {
    return (
      <section className="bg-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt auf Social Media sichtbar werden
          </h2>
          <p className="text-lg mb-8">
            Lass uns gemeinsam deine Marke wachsen lassen. Wir entwickeln eine Social-Media-Strategie, die passt, zu dir, deinem Angebot und deiner Zielgruppe.
          </p>
          <a
            href="/kontakt"
            className="inline-block rounded-full bg-white text-blue-900 px-8 py-4 font-semibold shadow hover:bg-blue-100 transition"
          >
            Jetzt Social Media Beratung starten
          </a>
        </div>
      </section>
    );
  }