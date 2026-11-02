// Rendert strukturierte Daten als JSON-LD. Zeichen, die das Script-Tag
// vorzeitig beenden könnten, werden maskiert.
export default function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
