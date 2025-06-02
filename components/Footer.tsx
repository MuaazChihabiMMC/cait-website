import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Leistungen',
    links: [
      { label: 'SEO Agentur Berlin', href: '/seo' },
      { label: 'Webdesign Berlin', href: '/webentwicklung' },
      { label: 'Google Ads Berlin', href: '/google-ads' },
      { label: 'Social Media Berlin', href: '/social-media' },
    ],
  },

  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
];

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-blue-300" />,
    text: 'Berliner Straße 17, 14169 Berlin-Zehlendorf',
  },
  {
    icon: <FaPhone className="text-blue-300" />,
    text: '030 2268 9840',
    href: 'tel:+493022689840',
  },
  {
    icon: <FaEnvelope className="text-blue-300" />,
    text: 'info@caitsocialmedia.com',
    href: 'mailto:info@caitsocialmedia.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1832] text-blue-100 border-t border-[#1a2a4a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link href="/" className="block mb-6">
              <img 
                src="/cait logo tran black.svg" 
                alt="CAIT Social Media" 
                className="h-10"
              />
            </Link>
            <p className="text-blue-200 mb-6">
              Ihre digitale Marketingagentur in Berlin. Wir helfen Unternehmen, online sichtbar zu werden und mehr Kunden zu gewinnen.
            </p>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <Link href={item.href} className="hover:text-blue-300 transition">
                      {item.text}
                    </Link>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-blue-300 transition hover:pl-1 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a2a4a] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-blue-300">
            &copy; {new Date().getFullYear()} CAIT Social Media. Alle Rechte vorbehalten.
          </div>
          
          <div className="flex gap-6">
            <Link href="/datenschutz" className="text-sm hover:underline hover:text-blue-300">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-sm hover:underline hover:text-blue-300">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}