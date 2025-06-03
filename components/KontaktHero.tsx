// components/KontaktHero.tsx
export default function KontaktHero() {
  return (
    <section className="relative isolate bg-[#0c1832] py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-600/30 filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          Deine Agentur für SEO & Marketing
          <br />
          <span className="text-blue-400">Kontaktiere uns</span>
        </h1>
        
        <p className="text-xl text-blue-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Wir freuen uns auf deine Anfrage. Egal ob Erstberatung, Projektidee oder Zusammenarbeit - schreib uns einfach oder ruf uns an.
          <br />
          Die <strong className="text-white">CAIT Agentur Berlin</strong> ist gerne für dich da.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:info@caitsocialmedia.com"
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@caitsocialmedia.com
          </a>
          
          <a
            href="tel:+493022689840"
            className="inline-flex items-center justify-center border-2 border-blue-400 text-blue-300 hover:text-white hover:border-blue-500 font-semibold px-8 py-4 rounded-full transition-all hover:translate-y-[-2px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +49 30 22689840
          </a>
        </div>

        <div className="mt-16">
          <a 
            href="https://www.google.com/maps?cid=1767528556497609092"
            className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Unsere Büroadresse in Berlin Zehlendorf ansehen
          </a>
        </div>
      </div>
    </section>
  );
}