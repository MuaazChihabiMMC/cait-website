// components/SocialMediaContentExpanded.tsx
'use client';

import Link from 'next/link';

export default function SocialMediaContentExpanded() {
    return (
        <section className="bg-[#0c1832] py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-12 text-gray-100 text-lg leading-relaxed">

                {/* Main Introduction */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#fcd066]">
                        Social Media Agentur Berlin: Ihre Marke im digitalen Rampenlicht
                    </h2>

                    <p>
                        Als <strong className="text-white">Social Media Agentur in Berlin</strong> verstehen wir die Dynamik sozialer Netzwerke wie keine andere. In einer Stadt, die für ihre Kreativität, Diversität und digitale Innovationskraft bekannt ist, helfen wir Unternehmen, authentische Verbindungen zu ihrer Zielgruppe aufzubauen. Social Media ist heute weit mehr als ein Marketingkanal – es ist der Ort, an dem Marken entstehen, Communitys wachsen und Kundenbeziehungen gepflegt werden.
                    </p>

                    <p>
                        Berlin ist ein Hotspot für Trends, Kultur und digitale Innovation. Die Menschen hier sind anspruchsvoll, medienkompetent und erwarten von Marken mehr als nur Werbebotschaften. Sie wollen Authentizität, Mehrwert und Dialog. Als <strong className="text-white">Social Media Agentur aus Berlin</strong> entwickeln wir Strategien, die genau diese Erwartungen erfüllen und Ihre Marke nachhaltig positionieren.
                    </p>
                </div>

                {/* Why Social Media */}
                <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a] space-y-4">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Warum Social Media Marketing unverzichtbar ist
                    </h3>

                    <p>
                        Die Zahlen sprechen für sich: Über 85% der Deutschen nutzen regelmäßig Social Media, durchschnittlich mehr als 90 Minuten täglich. In dieser Zeit scrollen sie durch Instagram Stories, entdecken neue Produkte auf TikTok, vernetzen sich auf LinkedIn oder informieren sich auf Facebook. Wer als Unternehmen dort nicht präsent ist, verpasst täglich Tausende potenzielle Kundenkontakte.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">85%</div>
                            <div className="text-xs text-gray-300 mt-1">der Deutschen nutzen Social Media</div>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">90 min</div>
                            <div className="text-xs text-gray-300 mt-1">tägliche Nutzungszeit</div>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">71%</div>
                            <div className="text-xs text-gray-300 mt-1">kaufen nach Social Media Empfehlung</div>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[#fcd066]">54%</div>
                            <div className="text-xs text-gray-300 mt-1">nutzen Social zur Produktsuche</div>
                        </div>
                    </div>
                </div>

                {/* Our Services */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Unsere Social Media Leistungen
                    </h3>

                    <p>
                        Als Full-Service <strong className="text-white">Social Media Agentur Berlin</strong> übernehmen wir die komplette Betreuung Ihrer Social Media Präsenz – von der Strategieentwicklung über die Content-Produktion bis zum Community Management und Reporting.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">📋 Strategieentwicklung</h4>
                            <p className="text-gray-300">
                                Wir analysieren Ihre Zielgruppe, Ihren Wettbewerb und Ihre Markenpersönlichkeit. Daraus entwickeln wir eine maßgeschneiderte Social Media Strategie mit klaren Zielen, relevanten Plattformen und messbaren KPIs. Jede Strategie ist einzigartig, denn jede Marke ist es auch.
                            </p>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">🎨 Content Creation</h4>
                            <p className="text-gray-300">
                                Von aufmerksamkeitsstarken Reels über informative Carousel-Posts bis hin zu authentischen Stories – unser Kreativteam produziert Content, der Ihre Zielgruppe begeistert. Wir arbeiten mit professioneller Foto- und Videoproduktion, Motion Design und Copywriting.
                            </p>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">💬 Community Management</h4>
                            <p className="text-gray-300">
                                Social Media ist keine Einbahnstraße. Wir beantworten Kommentare, reagieren auf Nachrichten, moderieren Diskussionen und pflegen den Dialog mit Ihrer Community. So bauen wir Vertrauen auf und machen aus Followern loyale Kunden.
                            </p>
                        </div>

                        <div className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                            <h4 className="text-xl font-semibold text-white mb-3">📊 Performance Marketing</h4>
                            <p className="text-gray-300">
                                Organische Reichweite allein reicht oft nicht aus. Mit zielgerichteten Social Ads auf Instagram, Facebook, TikTok und LinkedIn steigern wir Ihre Sichtbarkeit und generieren messbare Ergebnisse – von Markenbekanntheit bis zu Lead-Generierung.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Platforms */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Die richtigen Plattformen für Ihre Marke
                    </h3>

                    <p>
                        Nicht jede Plattform passt zu jedem Unternehmen. Als erfahrene <strong className="text-white">Social Media Agentur in Berlin</strong> helfen wir Ihnen, die Kanäle zu identifizieren, auf denen Ihre Zielgruppe aktiv ist und auf denen Ihre Botschaften am besten ankommen.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-700/50">
                            <h4 className="text-xl font-bold text-white mb-3">📸 Instagram</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Die visuelle Plattform für Lifestyle, Mode, Food, Reisen und mehr. Perfekt für B2C-Marken, die auf Ästhetik und Emotionen setzen.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• Reels & Stories</li>
                                <li>• Shopping Integration</li>
                                <li>• Influencer Kooperationen</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-xl border border-blue-700/50">
                            <h4 className="text-xl font-bold text-white mb-3">🔗 LinkedIn</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Das B2B-Netzwerk für Thought Leadership, Recruiting und Geschäftsbeziehungen. Unverzichtbar für Dienstleister und Unternehmen.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• Company Pages & Newsletter</li>
                                <li>• LinkedIn Ads & InMail</li>
                                <li>• Employer Branding</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-gray-700">
                            <h4 className="text-xl font-bold text-white mb-3">🎵 TikTok</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Die am schnellsten wachsende Plattform mit enormer organischer Reichweite. Ideal für Marken, die junge Zielgruppen erreichen wollen.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• Virale Video-Trends</li>
                                <li>• Creator Partnerschaften</li>
                                <li>• TikTok Shop</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/30 p-6 rounded-xl border border-blue-600/50">
                            <h4 className="text-xl font-bold text-white mb-3">👍 Facebook</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Nach wie vor die reichweitenstärkste Plattform, besonders bei Zielgruppen 30+. Stark für lokale Unternehmen und Community-Aufbau.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• Facebook Gruppen</li>
                                <li>• Lokale Werbung</li>
                                <li>• Marketplace Integration</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 p-6 rounded-xl border border-red-700/50">
                            <h4 className="text-xl font-bold text-white mb-3">▶️ YouTube</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Die zweitgrößte Suchmaschine der Welt. Perfekt für erklärungsbedürftige Produkte, Tutorials und langfristigen Content.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• YouTube Shorts</li>
                                <li>• SEO-optimierte Videos</li>
                                <li>• Pre-Roll Werbung</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-orange-700/50">
                            <h4 className="text-xl font-bold text-white mb-3">📌 Pinterest</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Die visuelle Suchmaschine für Inspiration. Besonders stark in Interior, Mode, DIY, Rezepte und Hochzeitsbranche.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• Rich Pins</li>
                                <li>• Shop the Look</li>
                                <li>• Idea Pins</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Berlin Local Focus */}
                <div className="bg-gradient-to-r from-[#1a2a4a] to-[#0c1832] p-8 rounded-xl border border-[#2d3a5a] space-y-4">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Social Media Marketing für Berliner Unternehmen
                    </h3>

                    <p>
                        Berlin hat eine einzigartige Social Media Landschaft. Die Stadt ist Heimat von Influencern, Content Creators und einer digital-affinen Bevölkerung. Als <strong className="text-white">Social Media Agentur mit Sitz in Berlin</strong> kennen wir die lokalen Trends, die relevanten Berliner Hashtags und die Community-Dynamiken in der Hauptstadt.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Lokale Vorteile</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Kenntnis der Berliner Zielgruppen und Subkulturen
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Netzwerk zu lokalen Influencern und Creators
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Geo-Targeting für Berliner Bezirke
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#fcd066]">✓</span>
                                    Lokale Event- und Trend-Integration
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Beliebte Berliner Hashtags</h4>
                            <div className="flex flex-wrap gap-2">
                                {['#berlin', '#berlinstagram', '#berlinlife', '#visitberlin', '#berlinfood', '#berlinart', '#berlinnights', '#weilwirdichlieben'].map((tag) => (
                                    <span key={tag} className="bg-[#0c1832] px-3 py-1 rounded-full text-sm text-[#fcd066]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Process */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Unser Content-Prozess
                    </h3>

                    <p>
                        Konsistenter, hochwertiger Content ist der Schlüssel zum Social Media Erfolg. Als professionelle <strong className="text-white">Social Media Agentur Berlin</strong> haben wir einen bewährten Prozess entwickelt, der Qualität und Effizienz vereint.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] text-center">
                            <div className="text-3xl font-bold text-[#fcd066] mb-2">1</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Planung</h4>
                            <p className="text-sm text-gray-400">Monatlicher Redaktionsplan mit Themen, Formaten und Timing.</p>
                        </div>
                        <div className="bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] text-center">
                            <div className="text-3xl font-bold text-[#fcd066] mb-2">2</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Produktion</h4>
                            <p className="text-sm text-gray-400">Professionelle Fotos, Videos, Grafiken und Copywriting.</p>
                        </div>
                        <div className="bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] text-center">
                            <div className="text-3xl font-bold text-[#fcd066] mb-2">3</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Publishing</h4>
                            <p className="text-sm text-gray-400">Optimales Timing, Hashtags und Plattform-spezifische Anpassung.</p>
                        </div>
                        <div className="bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] text-center">
                            <div className="text-3xl font-bold text-[#fcd066] mb-2">4</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Analyse</h4>
                            <p className="text-sm text-gray-400">Performance-Auswertung und kontinuierliche Optimierung.</p>
                        </div>
                    </div>
                </div>

                {/* Influencer Marketing */}
                <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a] space-y-4">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Influencer Marketing in Berlin
                    </h3>

                    <p>
                        Berlin ist Deutschlands Influencer-Hauptstadt. Hier leben und arbeiten Tausende von Content Creators mit Reichweiten von Nano bis Mega. Als <strong className="text-white">Social Media Agentur in Berlin</strong> haben wir ein starkes Netzwerk zu lokalen Influencern und helfen Ihnen, die richtigen Partner für Ihre Marke zu finden.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-[#0c1832] p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-white mb-2">Nano & Micro</h4>
                            <p className="text-xs text-gray-400">1K - 50K Follower</p>
                            <p className="text-sm text-gray-300 mt-2">Hohe Authentizität und Engagement. Perfekt für lokale Reichweite und Nischen-Zielgruppen.</p>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-white mb-2">Mid-Tier</h4>
                            <p className="text-xs text-gray-400">50K - 500K Follower</p>
                            <p className="text-sm text-gray-300 mt-2">Gute Balance aus Reichweite und Authentizität. Professionelle Zusammenarbeit.</p>
                        </div>
                        <div className="bg-[#0c1832] p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-white mb-2">Macro & Mega</h4>
                            <p className="text-xs text-gray-400">500K+ Follower</p>
                            <p className="text-sm text-gray-300 mt-2">Massive Reichweite für Markenbekanntheit. Ideal für Produkt-Launches.</p>
                        </div>
                    </div>
                </div>

                {/* Integration with other services */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#fcd066]">
                        Social Media als Teil Ihrer Marketing-Strategie
                    </h3>

                    <p>
                        Social Media entfaltet seine volle Wirkung in Kombination mit anderen Marketingkanälen. Als Full-Service <strong className="text-white">Marketing Agentur in Berlin</strong> bieten wir integrierte Lösungen:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/seo-agentur-berlin" className="block bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] hover:border-[#fcd066] transition-all group">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd066] mb-2">SEO + Social</h4>
                            <p className="text-sm text-gray-400">Social Signals stärken Ihre SEO. Content wird für beide Kanäle optimiert.</p>
                        </Link>

                        <Link href="/google-ads-agentur-berlin" className="block bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] hover:border-[#fcd066] transition-all group">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd066] mb-2">Ads + Social</h4>
                            <p className="text-sm text-gray-400">Retargeting-Kampagnen, die Website-Besucher auf Social Media erneut ansprechen.</p>
                        </Link>

                        <Link href="/webentwicklung" className="block bg-[#1a2a4a] p-5 rounded-xl border border-[#2d3a5a] hover:border-[#fcd066] transition-all group">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd066] mb-2">Web + Social</h4>
                            <p className="text-sm text-gray-400">Social Media Integration auf Ihrer Website für nahtlose User Journeys.</p>
                        </Link>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-6 pt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-10 rounded-xl border border-purple-700/50">
                    <h3 className="text-2xl font-bold text-white">
                        Bereit für Social Media Erfolg?
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Lassen Sie uns gemeinsam Ihre Social Media Präsenz auf das nächste Level heben. In einem kostenlosen Erstgespräch analysieren wir Ihre aktuelle Situation und entwickeln erste Ideen für Ihre Strategie.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-block bg-[#fcd066] text-[#0c1832] hover:bg-[#e5bc55] px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-[#fcd066]/30 transition-all hover:translate-y-[-2px]"
                    >
                        Kostenlose Social Media Beratung
                    </Link>
                </div>

            </div>
        </section>
    );
}
