// components/Footer.tsx

import Link from 'next/link';

const footerLinks = [
  {
    title: 'Leistungen',
    links: [
      { label: 'SEO', href: '/seo' },
      { label: 'Webentwicklung', href: '/webentwicklung' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'Social Media', href: '/social-media' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:text-blue-100 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2 text-center text-sm text-blue-100 pt-10">
          &copy; {new Date().getFullYear()} CAIT Social Media. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}