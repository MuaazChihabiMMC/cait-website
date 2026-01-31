// components/SocialMediaHero.tsx
export default function SocialMediaHero() {
  return (
    <section className="relative isolate bg-[#0c1832] py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#fcd066] text-[#0c1832]/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-[#fcd066] text-[#0c1832]/30 filter blur-3xl"></div>
      </div>

      {/* Social media icons floating */}
      <div className="absolute top-1/3 left-1/4 opacity-10">
        <div className="text-6xl">📱</div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-10">
        <div className="text-6xl">📸</div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          Social Media, die verbindet.
        </h1>
        <p className="text-lg md:text-xl text-[#fcd066] mb-12 max-w-3xl mx-auto leading-relaxed">
          Social Media, die verbindet: Ob Instagram, TikTok, LinkedIn oder YouTube, wir entwickeln individuelle Strategien, um deine Marke sichtbar, relevant und mit deiner Zielgruppe zu verbinden.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/kontakt"
            className="inline-block bg-[#fcd066] text-[#0c1832] hover:bg-[#fcd066] text-[#0c1832] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Jetzt Social Media Beratung starten
          </a>
          <a
            href="/services"
            className="inline-block border-2 border-[#fcd066] text-[#fcd066] hover:text-white hover:border-blue-500 font-semibold px-8 py-4 rounded-full transition-all hover:translate-y-[-2px]"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}