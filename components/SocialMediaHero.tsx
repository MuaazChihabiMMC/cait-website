// components/SocialMediaHero.tsx

export default function SocialMediaHero() {
    return (
      <section className="relative isolate bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Social Media, die verbindet.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Ob Instagram, TikTok, LinkedIn oder YouTube, wir entwickeln individuelle Strategien, um deine Marke sichtbar, relevant und erfolgreich zu machen.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-100 transition"
          >
            Jetzt Social Media Beratung starten
          </a>
        </div>
  
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-cover opacity-10 z-0" />
      </section>
    );
  }