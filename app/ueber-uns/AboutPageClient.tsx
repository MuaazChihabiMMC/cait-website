'use client';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaHandshake, FaUserTie, FaGraduationCap, FaChartLine, FaMedal } from 'react-icons/fa';

export const metadata = {
  title: 'Über uns | CAIT Agentur',
  description: 'Muaaz Chihabi - Ihr kompetenter Ansprechpartner für digitale Marketinglösungen. Master-Absolvent der TU Berlin und Inhaber von CAIT Agentur.',
};

export default function AboutPage() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-[#0c1832] text-white space-y-12 md:space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 md:py-20 bg-gradient-to-b from-primary-light0/10 to-[#0c1832] rounded-3xl px-6 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Muaaz Chihabi - <span className="text-blue-400">Ihr Experte</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-300"
          >
            Muaaz Chihabi ist Ihr Experte für digitales Marketing. Master-Absolvent der TU Berlin & Inhaber von CAIT Agentur.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <div className="bg-primary-light0/10 rounded-2xl p-4 aspect-square flex items-center justify-center border border-blue-400/30">
              <div className="text-8xl">👔</div> {/* Platzhalter für Ihr Foto */}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Mein Werdegang</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-light0/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <FaGraduationCap className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Akademische Ausbildung</h3>
                  <p className="text-blue-200">
                    Mein akademischer Hintergrund bildet das Fundament meiner Arbeit. Den Master-Abschluss in Computer Science habe ich an der renommierten Technischen Universität Berlin mit Auszeichnung absolviert. Dieser technische Background ermöglicht es mir, Marketing nicht nur als kreativen Prozess, sondern als präzise Wissenschaft zu verstehen. Ich analysiere Algorithmen, verstehe Datenstrukturen und nutze dieses Wissen, um Strategien zu entwickeln, die technisch fundiert und zukunftssicher sind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-light0/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <FaUserTie className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Beruflicher Werdegang</h3>
                  <p className="text-blue-200">
                    Meine Leidenschaft für digitales Marketing entdeckte ich bereits während meines Studiums. Über 5 Jahre sammelte ich intensive Erfahrung in verschiedenen Bereichen der Digitalbranche, von SEO-Strategien bis hin zu komplexen Webentwicklungen.
                    <br /><br />
                    2022 gründete ich die CAIT Agentur mit einer klaren Vision: Unternehmen in Berlin und deutschlandweit nicht nur Dienstleistungen, sondern echte, messbare Wachstumsimpulse zu bieten. In einer Branche, die oft von Undurchsichtigkeit geprägt ist, wollte ich einen Unterschied machen – durch Radikale Transparenz, datengetriebene Entscheidungen und eine persönliche Partnerschaft auf Augenhöhe.
                    <br /><br />
                    Heute bin ich stolz darauf, mit einem wachsenden Team von Spezialisten dutzende Unternehmen dabei zu unterstützen, ihre digitale Identität zu finden und ihre Marktposition nachhaltig zu festigen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-light0/20 p-2 rounded-full mt-1 border border-blue-400/30">
                  <FaMedal className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Auszeichnungen</h3>
                  <p className="text-blue-200">
                    Mehrfach ausgezeichnet für innovative Marketingkonzepte und herausragende Kundenbetreuung in der Berliner Startup-Szene.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Qualities Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary-light0/10 rounded-3xl p-8 md:p-12 border border-blue-400/30"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Was einen exzellenten Agenturinhaber ausmacht</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChartLine className="text-blue-400 text-2xl" />,
              title: "Strategisches Denken",
              description: "Langfristige Planung mit klaren Meilensteinen und messbaren KPIs"
            },
            {
              icon: <FaLightbulb className="text-blue-400 text-2xl" />,
              title: "Innovationsgeist",
              description: "Ständige Weiterbildung und Anpassung an Marktentwicklungen"
            },
            {
              icon: <FaHandshake className="text-blue-400 text-2xl" />,
              title: "Kundenfokus",
              description: "Ehrliche Beratung und transparente Kommunikation"
            },
            {
              icon: <FaRocket className="text-blue-400 text-2xl" />,
              title: "Ergebnisorientierung",
              description: "Fokus auf messbare Erfolge statt leere Versprechungen"
            },
            {
              icon: <FaUserTie className="text-blue-400 text-2xl" />,
              title: "Fachliche Expertise",
              description: "Tiefgreifendes Know-how in allen relevanten Marketingbereichen"
            },
            {
              icon: <FaMedal className="text-blue-400 text-2xl" />,
              title: "Integrität",
              description: "Ethisches Handeln und langfristige Partnerschaften"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-primary-light0/10 p-6 rounded-xl border border-blue-400/30 hover:bg-primary-light0/20 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-light0/20 p-3 rounded-full mr-4 border border-blue-400/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-blue-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-primary-light0/10 rounded-3xl border border-blue-400/30 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Meine Philosophie</h2>

          <div className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary-light0/20 p-2 rounded-full mt-1 border border-blue-400/30">
                <FaLightbulb className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Transparenz schafft Vertrauen</h3>
                <p className="text-blue-200">
                  In der Agenturwelt wird oft viel versprochen und wenig gehalten. Mein Ansatz ist anders: Radikale Ehrlichkeit. Ich arbeite mit klaren, dokumentierten Prozessen und regelmäßigen, verständlichen Reportings. Sie wissen zu jedem Zeitpunkt genau, wo Ihr Budget investiert wird, welche Maßnahmen wir ergreifen und – noch wichtiger – welche Ergebnisse damit erzielt werden. Es gibt keine versteckten Kosten und kein "Fachchinesisch", das Verschleierung dient.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary-light0/20 p-2 rounded-full mt-1 border border-blue-400/30">
                <FaChartLine className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Daten statt Bauchgefühl</h3>
                <p className="text-blue-200">
                  Bauchgefühl ist gut, Daten sind besser. In einer Zeit, in der Big Data und KI den Markt bestimmen, darf Marketing kein Zufallsprodukt sein. Jede Strategie, die wir bei CAIT entwickeln, basiert auf fundierten Analysen. Wir nutzen modernste Tracking-Tools und Marktanalysen, um Zielgruppen exakt zu verstehen und Streuverluste zu minimieren. Mein akademischer Hintergrund in der Informatik garantiert dabei eine wissenschaftlich fundierte Herangehensweisen, die über bloßes "Ausprobieren" weit hinausgeht.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary-light0/20 p-2 rounded-full mt-1 border border-blue-400/30">
                <FaHandshake className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Partnerschaftlicher Ansatz</h3>
                <p className="text-blue-200">
                  Bei CAIT sind Sie keine Nummer. Als inhabergeführte Agentur garantiere ich Ihnen den direkten Zugang zu mir als Ihrem strategischen Partner. Wir pflegen flache Hierarchien und kurze Kommunikationswege. Das bedeutet für Sie: Schnelle Reaktionszeiten, flexible Anpassungen der Strategie und ein Ansprechpartner, der Ihr Geschäft wirklich versteht. Wir sehen uns nicht als externen Dienstleister, sondern als integrierten Teil Ihres Teams, der gemeinsam mit Ihnen für Ihren Erfolg kämpft.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary-light0 text-white rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Persönliche Beratung durch den Inhaber</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Sie erhalten bei CAIT Marketing nicht nur Expertise, sondern auch die persönliche Betreuung durch mich als Geschäftsführer.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/kontakt"
          className="inline-block bg-primary text-gold-300 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-500/30 transition-all"
        >
          Termin vereinbaren
        </motion.a>
      </motion.section>
    </main>
  );
}
