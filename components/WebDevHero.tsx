// components/WebDevHero.tsx
export default function WebDevHero() {
  return (
    <section className="relative isolate bg-[#0c1832] py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-600/30 filter blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#162747_1px,transparent_1px),linear-gradient(to_bottom,#162747_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          Webentwicklung, die wirkt.
        </h1>
        <p className="text-lg md:text-xl text-blue-300 mb-12 max-w-3xl mx-auto">
          Wir entwickeln performante, mobiloptimierte Websites mit klarem Design, schneller Ladezeit und messbarem Mehrwert, abgestimmt auf deine Ziele und Zielgruppen.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/kontakt"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Jetzt Website Projekt starten
          </a>
          <a
            href="/services"
            className="inline-block border-2 border-blue-400 text-blue-300 hover:text-white hover:border-blue-500 font-semibold px-8 py-4 rounded-full transition-all hover:translate-y-[-2px]"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>

      {/* Floating elements (optional) */}
      <div className="absolute top-1/4 right-20 w-16 h-16 rounded-full bg-blue-400/50 filter blur-xl animate-float1 hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-24 w-12 h-12 rounded-full bg-blue-500/40 filter blur-xl animate-float2 hidden lg:block"></div>
    </section>
  );
}