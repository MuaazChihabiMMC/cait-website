'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaSearch, FaAd, FaLaptopCode, FaHashtag } from 'react-icons/fa';
import Link from 'next/link';

const referenzen = [
    {
        title: 'E-Commerce Fashion Shop',
        kategorie: 'SEO & Google Ads',
        branche: 'Mode & Fashion',
        ergebnisse: [
            '+320% organischer Traffic',
            '+75% Online-Umsatz',
            'Top 3 Rankings für 38 Keywords'
        ],
        icon: <FaSearch className="text-2xl" />
    },
    {
        title: 'Zahnarztpraxis Berlin',
        kategorie: 'Lokale SEO',
        branche: 'Gesundheit & Medizin',
        ergebnisse: [
            '+210% lokale Sichtbarkeit',
            '+150% Terminanfragen',
            '#1 für "Zahnarzt Zehlendorf"'
        ],
        icon: <FaSearch className="text-2xl" />
    },
    {
        title: 'SaaS Startup',
        kategorie: 'Google Ads & Performance',
        branche: 'Software & Tech',
        ergebnisse: [
            '-45% Cost per Lead',
            '+180% Conversion Rate',
            '3x ROAS in 6 Monaten'
        ],
        icon: <FaAd className="text-2xl" />
    },
    {
        title: 'Berliner Restaurant',
        kategorie: 'Social Media',
        branche: 'Gastronomie',
        ergebnisse: [
            '+850% Instagram Reichweite',
            '+120% Reservierungen',
            '5.000 neue Follower'
        ],
        icon: <FaHashtag className="text-2xl" />
    },
    {
        title: 'Immobilienmakler Berlin',
        kategorie: 'Webdesign & SEO',
        branche: 'Immobilien',
        ergebnisse: [
            'Neue responsive Website',
            '+190% Anfragen',
            'Page Speed Score 98/100'
        ],
        icon: <FaLaptopCode className="text-2xl" />
    },
    {
        title: 'Anwaltskanzlei',
        kategorie: 'Content & SEO',
        branche: 'Recht & Beratung',
        ergebnisse: [
            '+400% Blog-Besucher',
            '+95% qualifizierte Leads',
            'Featured Snippets für 12 Keywords'
        ],
        icon: <FaChartLine className="text-2xl" />
    }
];

export default function ReferenzenClientPage() {
    return (
        <main className="bg-primary min-h-screen text-white">

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-mesh-dark" />
                <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gold-300/10 blur-[100px]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 rounded-full glass-panel text-gold-300 text-sm font-medium mb-6"
                    >
                        Unsere Erfolgsgeschichten
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="text-gradient-gold">Referenzen</span> & Kundenprojekte
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                    >
                        Entdecken Sie unsere erfolgreichen Projekte. Von SEO über Google Ads bis hin zu Social Media – hier sehen Sie, was wir für Berliner Unternehmen erreicht haben.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed space-y-4 text-base"
                    >
                        <p>
                            Bei CAIT Social Media glauben wir daran, dass jedes Unternehmen eine einzigartige Geschichte zu erzählen hat. Unsere Aufgabe ist es, diese Geschichte sichtbar zu machen – sei es durch technisch perfekte Websites, kreative Social Media Kampagnen oder messerscharfe Google Ads Strategien.
                            Wir arbeiten nicht nach "Schema F", sondern entwickeln für jeden Kunden maßgeschneiderte Konzepte, die genau auf die jeweilige Zielgruppe und Branche zugeschnitten sind.
                        </p>
                        <p>
                            Unsere Referenzen zeigen einen Querschnitt unserer Expertise: Vom lokalen Handwerksbetrieb in Berlin-Spandau bis zum international agierenden E-Commerce Start-up.
                            Wir helfen unseren Partnern dabei, digital zu wachsen, messbare Umsätze zu generieren und sich langfristig gegen den Wettbewerb durchzusetzen.
                            Transparenz, messbare KPIs und eine Kommunikation auf Augenhöhe sind dabei unser Schlüssel zum gemeinsamen Erfolg.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '200+', label: 'Erfolgreiche Projekte' },
                            { value: '150%', label: 'Ø Traffic-Steigerung' },
                            { value: '98%', label: 'Kundenzufriedenheit' },
                            { value: '10+', label: 'Jahre Erfahrung' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-gold-300">{stat.value}</div>
                                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Referenzen Grid */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {referenzen.map((ref, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel card-hover p-6 rounded-xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-300/10 flex items-center justify-center text-gold-300">
                                        {ref.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs text-gold-300 font-medium">{ref.kategorie}</span>
                                        <h3 className="text-lg font-semibold">{ref.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{ref.branche}</p>
                                <ul className="space-y-2">
                                    {ref.ergebnisse.map((ergebnis, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm">
                                            <span className="text-gold-300">✓</span>
                                            <span className="text-gray-300">{ergebnis}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass-panel rounded-2xl p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-transparent" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Werden Sie unsere nächste Erfolgsgeschichte</h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Lassen Sie uns gemeinsam besprechen, wie wir auch Ihr Unternehmen voranbringen können.
                        </p>
                        <Link
                            href="/kontakt"
                            className="btn-shine btn-glow inline-flex items-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg"
                        >
                            Kostenlose Beratung starten <FaArrowRight />
                        </Link>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}
