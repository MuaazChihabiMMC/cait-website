// components/WebDevCta.tsx

export default function WebDevCta() {
    return (
      <section className="bg-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Deine Website, professionell, schnell & modern
          </h2>
          <p className="text-lg mb-8">
            Jetzt Beratung anfordern und dein Webprojekt mit CAITSocialMedia starten. Wir entwickeln digitale Auftritte, die wirken, technisch, visuell und strategisch.
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
  