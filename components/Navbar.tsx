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
      <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        scrolled 
          ? "bg-[#0c1832] shadow-lg py-2 border-b border-[#1a2a4a]" 
          : "bg-[#0c1832]/95 backdrop-blur-sm py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-60 p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Image 
              src={mobileMenuOpen ? "/close.svg" : "/menu.svg"} 
              alt="Menu" 
              width={28} 
              height={28}
              className="filter invert"
            />
          </button>

          {/* Logo - centered on mobile */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none transition-all hover:scale-105 z-50"
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
                  <span className={`text-lg flex items-center cursor-pointer pb-1.5 transition-all ${
                    activeDropdown === link.key 
                      ? 'font-semibold text-blue-400' 
                      : 'text-blue-100 hover:text-blue-300'
                  }`}>
                    {link.label}
                    <span className={`ml-1 transition-transform duration-200 ${
                      activeDropdown === link.key ? 'rotate-180' : ''
                    }`}>▾</span>
                  </span>
                  
                  <ul 
                    className={`absolute top-full left-0 flex flex-col bg-[#1a2a4a] text-blue-100 shadow-xl rounded-md py-2 w-56 z-50 border border-[#2d3a5a] transition-all duration-300 origin-top ${
                      activeDropdown === link.key 
                        ? 'scale-y-100 opacity-100' 
                        : 'scale-y-95 opacity-0 pointer-events-none'
                    }`}
                  >
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 hover:bg-[#2d3a5a] hover:text-blue-300 transition-colors duration-200"
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
                    className="text-lg text-blue-100 flex items-center cursor-pointer pb-1.5 transition-all hover:font-semibold hover:text-blue-300"
                  >
                    <span className="relative group">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu - Outside of nav to prevent z-index issues */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        mobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible delay-300'
      }`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileDropdown(null);
          }}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-[#0c1832] border-r border-[#1a2a4a] p-6 overflow-y-auto transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold text-blue-100">Menü</span>
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
              <div key={link.key} className="border-b border-[#1a2a4a] pb-4">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.key ? null : link.key)}
                      className={`w-full text-left flex justify-between items-center text-lg ${
                        mobileDropdown === link.key ? 'text-blue-300' : 'text-blue-100'
                      }`}
                    >
                      {link.label}
                      <span className="text-blue-400">
                        {mobileDropdown === link.key ? '▴' : '▾'}
                      </span>
                    </button>
                    {mobileDropdown === link.key && (
                      <ul className="mt-3 ml-3 space-y-3">
                        {link.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              href={child.href}
                              className="block text-blue-100 hover:text-blue-300 pl-2 py-1.5 border-l-2 border-[#2d3a5a] hover:border-blue-400 transition-all"
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
                    className="block text-lg text-blue-100 hover:text-blue-300 py-2"
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