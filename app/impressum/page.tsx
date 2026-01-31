export const metadata = {
  title: 'Impressum & Rechtliches - CAIT Agentur Berlin',
  description: 'Gesetzlich vorgeschriebene Anbieterkennzeichnung gemäß § 5 TMG für CAIT.',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/impressum',
  },
};

export default function ImpressumPage() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto text-blue-100">
      <div className="bg-[#0c1832] p-8 rounded-xl border border-blue-400/30">
        <h1 className="text-3xl font-bold mb-6 text-white">Impressum der CAIT Agentur</h1>
        <p className="text-blue-300 text-base mb-8 leading-relaxed">
          Auf dieser Seite findest du die gesetzlich vorgeschriebenen Angaben gemäß § 5 TMG zur CAIT Agentur.
          Als verantwortungsbewusstes Unternehmen informieren wir transparent über Inhaber, Kontaktwege sowie rechtliche Hinweise.
        </p>

        <div className="space-y-8">
          <div className="border-b border-blue-400/30 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-300">Angaben gemäß § 5 TMG</h2>
            <p className="text-blue-100">
              Muaaz Chihabi<br />
              CAIT Agentur<br />
              Berliner Straße 17<br />
              14169 Berlin
            </p>
          </div>

          <div className="border-b border-blue-400/30 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-300">Kontakt</h2>
            <p className="text-blue-100">
              Telefon: <a href="tel:+493022689840" className="text-blue-300 hover:text-white transition">030 22689840</a><br />
              E-Mail: <a href="mailto:info@caitsocialmedia.com" className="text-blue-300 hover:text-white transition">info@caitsocialmedia.com</a>
            </p>
          </div>

          <div className="border-b border-blue-400/30 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-300">EU-Streitschlichtung</h2>
            <p className="text-blue-100">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="text-blue-300 underline hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-300">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-blue-100">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-blue-400">
          Quelle:{' '}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300 transition"
          >
            www.e-recht24.de
          </a>
        </p>
      </div>
    </section>
  );
}