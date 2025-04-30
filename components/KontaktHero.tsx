// components/KontaktHero.tsx

export default function KontaktHero() {
    return (
      <section className="relative isolate bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Sag Hallo 👋
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Wir freuen uns auf deine Anfrage. Egal ob Erstberatung, Projektidee oder Zusammenarbeit – schreib uns einfach.
          </p>
          <a
            href="mailto:kontakt@caitsocialmedia.com"
            className="inline-block bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-100 transition"
          >
            info@caitsocialmedia.com
          </a>
        </div>
  
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-cover opacity-10 z-0" />
      </section>
    );
  }