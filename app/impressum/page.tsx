export const metadata = {
    title: 'Impressum | CAITSocialMedia',
    description: 'Gesetzlich vorgeschriebene Anbieterkennzeichnung gemäß § 5 TMG für CAITSocialMedia.',
  };
  
  export default function ImpressumPage() {
    return (
      <section className="px-6 py-20 max-w-4xl mx-auto text-black">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Angaben gemäß § 5 TMG</h2>
        <p>
          Muaaz Chihabi<br />
          CAIT Social Media Agentur<br />
          Berliner Straße 17<br />
          14169 Berlin
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Kontakt</h2>
        <p>
          Telefon: 030 22689840<br />
          E-Mail: info@caitsocialmedia.com
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
  
        <p className="mt-6 text-sm text-gray-500">
          Quelle:{' '}
          <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="underline">
            www.e-recht24.de
          </a>
        </p>
      </section>
    );
  }