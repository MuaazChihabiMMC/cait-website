import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { SITE } from '@/lib/site';

// Schnellkontakt nur auf kleinen Bildschirmen, wo Anrufen und WhatsApp am häufigsten genutzt werden.
export default function StickyButtons() {
  return (
    <div
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-col gap-2 lg:hidden"
      aria-label="Schnellkontakt"
      role="group"
    >
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nachricht per WhatsApp senden"
        className="flex h-12 w-12 items-center justify-center bg-[#1f9d55] text-white shadow-lg transition-transform active:scale-95"
      >
        <FaWhatsapp className="text-xl" aria-hidden="true" />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label={`Anrufen: ${SITE.phoneDisplay}`}
        className="flex h-12 w-12 items-center justify-center bg-gold-300 text-night shadow-lg transition-transform active:scale-95"
      >
        <FaPhoneAlt className="text-lg" aria-hidden="true" />
      </a>
    </div>
  );
}
