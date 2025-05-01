'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <>
      {/* Burger Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="z-50 lg:hidden transition-transform duration-300"
        >
          <Image src="/menu.svg" alt="menu" width={32} height={32} />
        </button>
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-full bg-blue-900/70 backdrop-blur-xl text-white p-6 transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Menü</span>
          <button onClick={() => setIsOpen(false)}>
            <Image src="/close.svg" alt="close" width={28} height={28} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-4 text-lg">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.key}>
                <button
                  onClick={() => toggleDropdown(link.key)}
                  className="w-full text-left font-medium flex justify-between items-center"
                >
                  {link.label}
                  <span>{openDropdown === link.key ? '▴' : '▾'}</span>
                </button>
                {openDropdown === link.key && (
                  <ul className="mt-2 ml-2 space-y-2 text-base">
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="block hover:text-blue-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className="hover:text-blue-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;