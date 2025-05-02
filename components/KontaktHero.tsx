// components/KontaktHero.tsx
export default function KontaktHero() {
  return (
    <section className="relative isolate bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Sag Hallo 👋
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10">
          Wir freuen uns auf deine Anfrage. Egal ob Erstberatung, Projektidee oder Zusammenarbeit - schreib uns einfach oder ruf uns an.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:info@caitsocialmedia.com"
            className="inline-flex items-center justify-center bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@caitsocialmedia.com
          </a>
          
          <a
            href="tel:+493022689840"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-white hover:text-blue-800 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +49 3022689840
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-cover opacity-10 z-0" />
    </section>
  );
}