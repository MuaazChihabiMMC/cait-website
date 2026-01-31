// components/SocialMediaCta.tsx
export default function SocialMediaCta() {
  return (
    <section className="bg-[#0c1832] py-24 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#fcd066] text-[#0c1832] filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-[#fcd066] text-[#0c1832] filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Jetzt auf Social Media sichtbar werden
        </h2>
        <p className="text-xl text-[#fcd066] mb-10 max-w-2xl mx-auto leading-relaxed">
          Lass uns gemeinsam deine Marke wachsen lassen. Wir entwickeln eine Social-Media-Strategie, die passt - zu dir, deinem Angebot und deiner Zielgruppe.
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
            Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}