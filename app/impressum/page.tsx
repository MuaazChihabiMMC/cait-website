export const metadata = {
  title: 'Impressum & Rechtliches - CAIT Agentur Berlin',
  description: 'Gesetzlich vorgeschriebene Anbieterkennzeichnung gemäß § 5 TMG für CAIT.',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/impressum',
  },
};

export default function ImpressumPage() {
  return (
    <section className="bg-[#0c1832] min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#fcd066]/10 text-[#fcd066] rounded-full text-sm font-semibold mb-6 border border-[#fcd066]/20">
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Impressum</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        <div className="bg-[#1a2b5a] p-8 md:p-12 rounded-2xl border border-blue-900/50 shadow-xl space-y-10">

          {/* Company Info */}
          <div className="border-b border-blue-900 pb-8">
            <h2 className="text-2xl font-bold text-[#fcd066] mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-300 leading-relaxed">
              <p className="font-semibold text-white mb-1">CAIT Agentur</p>
              <p>Muaaz Chihabi</p>
              <p>Berliner Straße 17</p>
              <p>14169 Berlin</p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-b border-blue-900 pb-8">
            <h2 className="text-2xl font-bold text-[#fcd066] mb-4">Kontakt</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-20 text-gray-400">Telefon:</span>
                <a href="tel:+493022689840" className="text-white hover:text-[#fcd066] transition-colors">030 2268 9840</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-20 text-gray-400">E-Mail:</span>
                <a href="mailto:info@caitsocialmedia.com" className="text-white hover:text-[#fcd066] transition-colors">info@caitsocialmedia.com</a>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="border-b border-blue-900 pb-8">
            <h2 className="text-2xl font-bold text-[#fcd066] mb-4">EU-Streitschlichtung</h2>
            <p className="text-gray-300 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#fcd066] hover:text-[#fcd066]/80 transition-colors border-b border-[#fcd066]/30 pb-0.5"
            >
              Plattform der EU-Kommission zur Online-Streitbeilegung
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          {/* Consumer Arbitration */}
          <div>
            <h2 className="text-2xl font-bold text-[#fcd066] mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-gray-300">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>

        <p className="text-center text-sm text-gray-500">
          Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">e-recht24.de</a>
        </p>

      </div>
    </section>
  );
}