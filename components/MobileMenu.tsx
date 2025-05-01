'use client'
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="z-50 lg:hidden">
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>

      {/* Slide-in Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-blue-800/70 backdrop-blur-sm text-white p-6 overflow-y-auto">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.key} className="w-full">
                <button
                  onClick={() => toggleDropdown(link.key)}
                  className="w-full text-left font-medium py-2"
                >
                  {link.label} ▾
                </button>
                {openDropdown === link.key && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="block py-1 text-sm"
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
                className="block py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
};

export default MobileMenu;