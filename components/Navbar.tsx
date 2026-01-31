'use client'
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 z-50 ${scrolled
        ? "bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        : "bg-transparent py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-60 p-2 text-[#d4af37]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Image
              src={mobileMenuOpen ? "/close.svg" : "/menu.svg"}
              alt="Menu"
              width={28}
              height={28}
              className="filter invert sepia saturate-[5] hue-rotate-[5deg]"
            />
          </button>

          {/* Logo - centered on mobile */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none z-50"
            aria-label="Home"
          >
            <Image
              src="/cait logo tran black.svg"
              alt="CAIT Logo"
              width={scrolled ? 90 : 100}
              height={scrolled ? 26 : 30}
              priority
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li
                  key={link.key}
                  className="relative px-2 pb-2"
                  onMouseEnter={() => setActiveDropdown(link.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className={`text-lg flex items-center cursor-pointer pb-1.5 transition-all duration-300 font-medium ${activeDropdown === link.key
                    ? 'text-[#d4af37] drop-shadow-[0_0_8px_rgba(252,208,102,0.5)]'
                    : 'text-gray-100 hover:text-[#d4af37]'
                    }`}>
                    {link.label}
                    <span className={`ml-1 transition-transform duration-300 ${activeDropdown === link.key ? 'rotate-180 text-[#d4af37]' : 'text-[#d4af37]/70'
                      }`}>▾</span>
                  </span>

                  <ul
                    className={`absolute top-full left-0 flex flex-col glass-panel rounded-xl py-2 w-56 z-50 transition-all duration-300 origin-top transform pt-4 -mt-2 ${activeDropdown === link.key
                      ? 'scale-y-100 opacity-100'
                      : 'scale-y-95 opacity-0 pointer-events-none'
                      }`}
                  >
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-[#d4af37]/10 transition-colors duration-200 border-l-2 border-transparent hover:border-[#d4af37]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-lg text-gray-100 flex items-center cursor-pointer pb-1.5 transition-all hover:text-[#d4af37] duration-300"
                  >
                    <span className="relative group font-medium">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#b8973a] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(252,208,102,0.8)]"></span>
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu - Outside of nav to prevent z-index issues */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileMenuOpen
        ? 'opacity-100 visible'
        : 'opacity-0 invisible delay-300'
        }`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileDropdown(null);
          }}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-[#0a0f1a] border-r border-[#151b2e] p-6 overflow-y-auto transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold text-gray-100">Menü</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <Image
                src="/close.svg"
                alt="Close"
                width={24}
                height={24}
                className="filter invert"
              />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <div key={link.key} className="border-b border-[#151b2e] pb-4">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.key ? null : link.key)}
                      className={`w-full text-left flex justify-between items-center text-lg ${mobileDropdown === link.key ? 'text-[#d4af37]' : 'text-gray-100'
                        }`}
                    >
                      {link.label}
                      <span className="text-[#d4af37]">
                        {mobileDropdown === link.key ? '▴' : '▾'}
                      </span>
                    </button>
                    {mobileDropdown === link.key && (
                      <ul className="mt-3 ml-3 space-y-3">
                        {link.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              href={child.href}
                              className="block text-gray-100 hover:text-[#d4af37] pl-2 py-1.5 border-l-2 border-[#2d3a5a] hover:border-[#d4af37] transition-all"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-lg text-gray-100 hover:text-[#d4af37] py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
