// components/WebdesignContentExpanded.tsx
'use client';

import Link from 'next/link';

export default function WebdesignContentExpanded() {
    return (
        <section className="bg-[#0c1832] py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-12 text-gray-100 text-lg leading-relaxed">

                {/* Main Introduction */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#fcd066]">
                        Webdesign Agentur Berlin: Digitale Erlebnisse, die begeistern
                    </h2>

                    <p>
                        Als <strong className="text-white">Webdesign Agentur in Berlin</strong> entwickeln wir Websites, die nicht nur gut aussehen, sondern Ergebnisse liefern. In einer Zeit, in der Ihre Website oft der erste Kontaktpunkt mit potenziellen Kunden ist, kann gutes Webdesign den Unterschied zwischen einem verlorenen Besucher und einem gewonnenen Kunden ausmachen. Wir verbinden ästhetisches Design mit technischer Exzellenz und strategischem Denken.
                    </p>

                    <p>
                        Berlin ist eine Stadt der Innovation, des Designs und der digitalen Pioniere. Als <strong className="text-white">Webdesign Agentur aus Berlin</strong> sind wir Teil dieser Kultur und bringen diese Energie in jedes Projekt ein. Ob Sie ein Startup sind, das seine erste Website benötigt, oder ein etabliertes Unternehmen, das einen modernen Relaunch plant – wir haben die Erfahrung und das Know-how, um Ihre Vision digital zum Leben zu erwecken.
                    </p>
                </div>

                {/* Why Professional Webdesign */}
                <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a] space-y-4">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Warum professionelles Webdesign entscheidend ist
                    </h3>

                    <p>
                        Der erste Eindruck zählt, und online haben Sie dafür nur wenige Sekunden. Studien zeigen, dass Besucher innerhalb von 0,05 Sekunden einen ersten Eindruck von Ihrer Website bilden. Ein unprofessionelles Design führt zu hohen Absprungraten und verlorenen Geschäftsmöglichkeiten. Umgekehrt schafft ein hochwertiges Design Vertrauen und animiert Besucher zum Bleiben.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">94%</div>
                            <div className="text-xs text-gray-300 mt-1">der ersten Eindrücke sind designbezogen</div>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">75%</div>
                            <div className="text-xs text-gray-300 mt-1">beurteilen Glaubwürdigkeit nach Design</div>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">88%</div>
                            <div className="text-xs text-gray-300 mt-1">kehren nach schlechter UX nicht zurück</div>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">3s</div>
                            <div className="text-xs text-gray-300 mt-1">maximale erwartete Ladezeit</div>
                        </div>
                    </div>
                </div>

                {/* Our Services */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Unsere Webdesign & Webentwicklung Leistungen
                    </h3>

                    <p>
                        Als Full-Service <strong className="text-white">Webdesign Agentur Berlin</strong> decken wir das gesamte Spektrum ab – von der ersten Konzeption bis zum laufenden Betrieb. Jedes Projekt wird individuell auf Ihre Anforderungen zugeschnitten.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">🎨 UI/UX Design</h4>
                            <p className="text-gray-300">
                                Wir gestalten Benutzeroberflächen, die intuitiv zu bedienen sind und Ihre Marke perfekt repräsentieren. Unser Design-Prozess beginnt mit User Research und mündet in pixel-perfekten Mockups und interaktiven Prototypen.
                            </p>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">💻 Frontend Entwicklung</h4>
                            <p className="text-gray-300">
                                Wir setzen Designs mit modernsten Technologien um: React, Next.js, Vue.js, TypeScript. Das Ergebnis sind blitzschnelle, responsive Websites, die auf allen Geräten perfekt funktionieren.
                            </p>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">⚙️ Backend Entwicklung</h4>
                            <p className="text-gray-300">
                                Von einfachen Content Management Systemen bis zu komplexen Web-Applikationen – unser Backend-Team entwickelt robuste, skalierbare Lösungen mit Node.js, PHP, Python oder Headless CMS.
                            </p>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">🛒 E-Commerce</h4>
                            <p className="text-gray-300">
                                Wir bauen Online-Shops, die verkaufen. Ob Shopify, WooCommerce oder Custom-Lösung – wir optimieren jeden Schritt der Customer Journey für maximale Conversion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Moderne Technologien für zeitgemäße Websites
                    </h3>

                    <p>
                        Als technisch versierte <strong className="text-white">Webdesign Agentur in Berlin</strong> setzen wir auf bewährte, zukunftssichere Technologien. Unsere Entwickler sind Experten in den führenden Frameworks und Tools der Branche.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-[#1a2a4a] to-[#0c1832] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-lg font-bold text-white mb-3">Frontend</h4>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                                    <span key={tech} className="bg-[#0c1832] px-3 py-1 rounded-full text-xs text-[#fcd066]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a2a4a] to-[#0c1832] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-lg font-bold text-white mb-3">Backend & CMS</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'WordPress', 'Strapi', 'Sanity', 'Prisma', 'PostgreSQL'].map((tech) => (
                                    <span key={tech} className="bg-[#0c1832] px-3 py-1 rounded-full text-xs text-[#fcd066]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a2a4a] to-[#0c1832] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-lg font-bold text-white mb-3">E-Commerce</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Klaviyo', 'Recharge'].map((tech) => (
                                    <span key={tech} className="bg-[#0c1832] px-3 py-1 rounded-full text-xs text-[#fcd066]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Process */}
                <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a] space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Unser Webdesign-Prozess
                    </h3>

                    <p>
                        Ein erfolgreiches Webprojekt folgt einem strukturierten Prozess. Als erfahrene <strong className="text-white">Webdesign Agentur Berlin</strong> haben wir einen bewährten Workflow entwickelt, der Qualität, Effizienz und Ihre Einbindung gewährleistet.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#0c1832] rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-[#fcd066]">1</span>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Discovery</h4>
                            <p className="text-sm text-gray-400">
                                Zieldefinition, Zielgruppenanalyse, Wettbewerbsrecherche und technische Anforderungen.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#0c1832] rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-[#fcd066]">2</span>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
                            <p className="text-sm text-gray-400">
                                Wireframes, Moodboards, UI-Design und interaktive Prototypen zur Abstimmung.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#0c1832] rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-[#fcd066]">3</span>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Entwicklung</h4>
                            <p className="text-sm text-gray-400">
                                Technische Umsetzung, CMS-Integration, Testing und Performance-Optimierung.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#0c1832] rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-[#fcd066]">4</span>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Launch & Support</h4>
                            <p className="text-sm text-gray-400">
                                Go-Live, Einweisung, laufende Wartung und kontinuierliche Weiterentwicklung.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Performance & SEO */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Performance & SEO: Websites, die ranken
                    </h3>

                    <p>
                        Eine schöne Website ist nur der Anfang. Wenn niemand sie findet, bringt sie keinen Geschäftswert. Deshalb entwickeln wir jede Website mit <Link href="/seo-agentur-berlin" className="text-[#fcd066] hover:underline">SEO</Link> und Performance im Fokus. Als <strong className="text-white">Webdesign Agentur in Berlin</strong> verstehen wir, dass Design und Sichtbarkeit Hand in Hand gehen müssen.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">⚡ Core Web Vitals</h4>
                            <p className="text-gray-300 mb-4">
                                Google bewertet Websites nach Ladezeit, Interaktivität und visueller Stabilität. Wir optimieren jede Website für:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    LCP unter 2,5 Sekunden
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    FID unter 100 Millisekunden
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    CLS unter 0,1
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">🔍 SEO-Grundlagen</h4>
                            <p className="text-gray-300 mb-4">
                                Jede Website ist von Grund auf für Suchmaschinen optimiert:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    Semantische HTML-Struktur
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    Optimierte Meta-Tags
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    Schema.org Markup
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">●</span>
                                    Saubere URL-Struktur
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Berlin Local Focus */}
                <div className="bg-gradient-to-r from-[#1a2a4a] to-[#0c1832] p-8 rounded-xl border border-[#2d3a5a] space-y-4">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Webdesign für Berliner Unternehmen
                    </h3>

                    <p>
                        Als <strong className="text-white">Webdesign Agentur mit Sitz in Berlin</strong> kennen wir die lokale Wirtschaft, die Branchen und die Zielgruppen. Wir haben Websites für Berliner Startups, Handwerksbetriebe, Gastronomen, Ärzte, Anwälte und viele andere Branchen entwickelt.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Vorteile lokaler Zusammenarbeit</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Persönliche Meetings in Berlin möglich
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Kenntnis lokaler Branchen und Zielgruppen
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Netzwerk zu Berliner Fotografen und Content Creators
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Integration mit lokalen Diensten und Systemen
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Branchen, die wir betreuen</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Gastronomie', 'E-Commerce', 'Handwerk', 'Gesundheit', 'Recht', 'Startups', 'Immobilien', 'Bildung'].map((branche) => (
                                    <span key={branche} className="bg-[#0c1832] px-3 py-1 rounded-full text-sm text-gray-300">
                                        {branche}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Maintenance & Support */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Wartung & Support
                    </h3>

                    <p>
                        Eine Website ist kein fertiges Produkt, sondern ein lebendes System, das gepflegt werden muss. Als <strong className="text-white">Webdesign Agentur Berlin</strong> bieten wir umfassende Wartungspakete, die Ihre Website sicher, aktuell und performant halten.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-lg font-semibold text-[#fcd066] mb-3">🛡️ Sicherheit</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>• Regelmäßige Updates</li>
                                <li>• Sicherheits-Monitoring</li>
                                <li>• SSL-Zertifikate</li>
                                <li>• Malware-Scans</li>
                            </ul>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-lg font-semibold text-[#fcd066] mb-3">💾 Backups</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>• Tägliche Backups</li>
                                <li>• Off-Site Speicherung</li>
                                <li>• Schnelle Wiederherstellung</li>
                                <li>• Versionskontrolle</li>
                            </ul>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-lg font-semibold text-[#fcd066] mb-3">📞 Support</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>• Persönlicher Ansprechpartner</li>
                                <li>• Schnelle Reaktionszeiten</li>
                                <li>• Content-Änderungen</li>
                                <li>• Technischer Support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Integration with other services */}
                <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a] space-y-4">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Webdesign + Marketing = Erfolg
                    </h3>

                    <p>
                        Eine Website allein bringt keine Kunden. Erst in Kombination mit gezieltem Marketing wird sie zum Business-Asset. Als Full-Service <strong className="text-white">Marketing Agentur in Berlin</strong> bieten wir integrierte Lösungen:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <Link href="/seo-agentur-berlin" className="block bg-[#0c1832] p-4 rounded-lg hover:bg-blue-900/30 transition-all group">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd066] mb-1">SEO</h4>
                            <p className="text-sm text-gray-400">Damit Ihre Website bei Google gefunden wird.</p>
                        </Link>

                        <Link href="/google-ads-agentur-berlin" className="block bg-[#0c1832] p-4 rounded-lg hover:bg-blue-900/30 transition-all group">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd066] mb-1">Google Ads</h4>
                            <p className="text-sm text-gray-400">Für sofortige Sichtbarkeit und schnelle Leads.</p>
                        </Link>

                        <Link href="/social-media" className="block bg-[#0c1832] p-4 rounded-lg hover:bg-blue-900/30 transition-all group">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd066] mb-1">Social Media</h4>
                            <p className="text-sm text-gray-400">Für Markenaufbau und Community-Engagement.</p>
                        </Link>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-6 pt-8 bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-10 rounded-xl border border-blue-700">
                    <h3 className="text-2xl font-bold text-white">
                        Bereit für Ihre neue Website?
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Ob Relaunch, Redesign oder Neuentwicklung – wir freuen uns darauf, Ihr Projekt kennenzulernen. In einem kostenlosen Erstgespräch besprechen wir Ihre Ziele und zeigen Ihnen, wie wir Ihre Vision umsetzen können.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-block bg-[#fcd066] text-[#0c1832] hover:bg-[#e5bc55] px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-[#fcd066]/30 transition-all hover:translate-y-[-2px]"
                    >
                        Kostenloses Beratungsgespräch vereinbaren
                    </Link>
                </div>

            </div>
        </section>
    );
}
