'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaNewspaper, FaBullhorn, FaHandshake, FaChartLine, FaUsers, FaMicrophone, FaShieldAlt, FaPenFancy } from 'react-icons/fa';
import Link from 'next/link';

const prServices = [
    {
        icon: <FaNewspaper />,
        title: 'Pressearbeit',
        description: 'Professionelle Pressemitteilungen, Medienverteiler-Aufbau und Journalistenkontakte für maximale Medienresonanz.'
    },
    {
        icon: <FaBullhorn />,
        title: 'Unternehmenskommunikation',
        description: 'Strategische Kommunikation für Ihre Marke – intern und extern. Wir entwickeln Ihre Kommunikationsstrategie.'
    },
    {
        icon: <FaShieldAlt />,
        title: 'Krisenkommunikation',
        description: 'Schnelle und professionelle Reaktion in Krisensituationen. Wir schützen Ihre Reputation.'
    },
    {
        icon: <FaMicrophone />,
        title: 'Media Relations',
        description: 'Aufbau und Pflege von Beziehungen zu Journalisten und Redaktionen in Berlin und bundesweit.'
    },
    {
        icon: <FaPenFancy />,
        title: 'Content & Storytelling',
        description: 'Überzeugende Stories, die Ihre Zielgruppe erreichen und Emotionen wecken.'
    },
    {
        icon: <FaUsers />,
        title: 'Event-PR',
        description: 'PR-Begleitung für Ihre Events, Produktlaunches und Pressekonferenzen in Berlin.'
    }
];

const benefits = [
    'Über 10 Jahre PR-Erfahrung in Berlin',
    'Etablierte Medienkontakte in allen Branchen',
    'Messbare PR-Erfolge durch KPI-Tracking',
    'Persönlicher Ansprechpartner vor Ort',
    'Schnelle Reaktionszeiten',
    'DSGVO-konforme Prozesse',
    'Transparente Reporting-Struktur',
    'Branchenübergreifende Expertise'
];

export default function PRClientPage() {
    return (
        <main className="bg-primary min-h-screen text-white">

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-mesh-dark" />
                <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gold-300/10 blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-primary-light/50 blur-[80px]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 rounded-full glass-panel text-gold-300 text-sm font-medium mb-6"
                    >
                        Public Relations & Kommunikation
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="text-gradient-gold">PR Agentur Berlin</span> – Ihre Stimme in den Medien
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                    >
                        Wir bringen Ihre Botschaft in die Öffentlichkeit. Als erfahrene PR Agentur in Berlin entwickeln wir Kommunikationsstrategien, die Ihre Marke stärken und Ihre Zielgruppe erreichen.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/kontakt"
                            className="btn-shine btn-glow inline-flex items-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg"
                        >
                            Kostenlose PR-Beratung <FaArrowRight />
                        </Link>
                        <Link
                            href="#leistungen"
                            className="inline-flex items-center gap-2 glass-panel border border-gold-300/30 text-gold-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300/10 transition-colors"
                        >
                            Leistungen entdecken
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {['Standort Berlin', '10+ Jahre Erfahrung', '200+ Medienkontakte', 'Full-Service PR'].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3 text-gray-400"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <span className="text-gold-300 text-lg">✓</span>
                                <span className="font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Was ist PR */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-2xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Was macht eine PR Agentur in Berlin?</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Als <strong className="text-gold-300">PR Agentur Berlin</strong> sind wir Ihr Partner für strategische Öffentlichkeitsarbeit. Wir helfen Unternehmen, Start-ups und Persönlichkeiten in Berlin und deutschlandweit, ihre Geschichte zu erzählen und in den richtigen Medien präsent zu sein.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Von der klassischen Pressearbeit über Krisenkommunikation bis hin zu Digital PR – wir entwickeln maßgeschneiderte Strategien, die Ihre Marke stärken und messbare Ergebnisse liefern.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="leistungen" className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-300/10 text-gold-300 text-sm font-medium mb-4">
                            Unsere Leistungen
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Service PR Agentur Berlin</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Von Pressearbeit bis Krisenkommunikation – wir bieten das komplette Spektrum der Öffentlichkeitsarbeit.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {prServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel card-hover p-6 rounded-xl"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gold-300/10 flex items-center justify-center text-gold-300 text-2xl mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum CAIT als PR Agentur Berlin?</h2>
                        <p className="text-gray-400">Das zeichnet uns als Ihre PR-Partner aus.</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-panel p-4 rounded-xl text-center"
                            >
                                <span className="text-gold-300 font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Unser PR-Prozess</h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            { title: 'Analyse & Strategie', desc: 'Wir analysieren Ihre aktuelle Positionierung und entwickeln eine maßgeschneiderte PR-Strategie.' },
                            { title: 'Storytelling', desc: 'Wir finden Ihre einzigartige Geschichte und formulieren Kernbotschaften.' },
                            { title: 'Medienarbeit', desc: 'Aktive Ansprache relevanter Journalisten und Platzierung in Zielmedien.' },
                            { title: 'Monitoring & Reporting', desc: 'Kontinuierliche Erfolgsmessung und transparente Berichterstattung.' }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel p-6 rounded-xl flex gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-gold-300/20 flex items-center justify-center text-gold-300 font-bold flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
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
                        <h3 className="text-3xl font-bold mb-4">Bereit für erfolgreiche PR?</h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Lassen Sie uns gemeinsam Ihre Kommunikationsstrategie entwickeln. Als PR Agentur Berlin stehen wir für messbare Ergebnisse und echte Medienpräsenz.
                        </p>
                        <Link
                            href="/kontakt"
                            className="btn-shine btn-glow inline-flex items-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg"
                        >
                            Jetzt PR-Beratung starten <FaArrowRight />
                        </Link>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}
