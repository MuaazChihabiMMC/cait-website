// components/GoogleAdsCta.tsx
export default function GoogleAdsCta() {
  return (
    <section className="bg-[#0c1832] py-24 px-6 relative overflow-hidden">
      {/* Optional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Mehr Kunden, weniger Streuverlust, mit Google Ads
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Wir holen das Maximum aus deinem Werbebudget heraus. Jetzt kostenlose Beratung sichern und deine neue Kampagne starten.
        </p>
        <div className="mt-10">
          <a
            href="/kontakt"
            className="inline-block rounded-full bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Jetzt unverbindlich beraten lassen
          </a>
        </div>
      </div>
    </section>
  );
}