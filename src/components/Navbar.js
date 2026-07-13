"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Paket", href: "#paket-harga" },
    { name: "Proses", href: "#proses-kerja" },
    { name: "Proyek", href: "#layanan" },
    { name: "Tentang Kami", href: "#mengapa-kami" },
    { name: "Kontak", href: "#konsultasi" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md py-3 shadow-lg border-b border-brand-gold/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Matching Reference */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-[26px] h-9 overflow-hidden shrink-0">
              <img
                src="/logo-tamaliving.png"
                alt="Logo Icon"
                className="absolute left-0 top-0 h-full w-auto max-w-none object-left"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans text-[15px] font-extrabold tracking-[0.08em] text-brand-text-light leading-none">
                TAMA LIVING
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-brand-gold font-bold mt-1 leading-none">
                CONSULTANT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text-muted hover:text-brand-gold hover:border-b hover:border-brand-gold/50 transition-all duration-200 font-medium text-[13px] tracking-wider py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button with WhatsApp Icon */}
          <div className="hidden lg:block">
            <a
              href="#konsultasi"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold bg-[#c5a880] text-brand-bg hover:bg-[#d6ba93] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Custom WhatsApp Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.981-1.864-1.865-4.343-2.89-6.984-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.777.472 3.511 1.371 5.048L1.936 21.68l4.711-1.526zM17.5 14.86c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.02-.51-1.71-.83-2.39-2-1.02-1.76-1.02-2.85-.92-3.15.1-.3.3-.65.45-.8.15-.15.2-.25.3-.45.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.61-.51-.53-.69-.53-.18 0-.38-.03-.58-.03s-.53.08-.8.38c-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.73.23 1.39.2 1.92.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.14-.27-.24-.57-.39z" />
              </svg>
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-text-muted hover:text-brand-gold hover:bg-brand-green-light/50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 max-w-sm bg-[#0e1f17] p-6 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden border-l border-brand-gold/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold tracking-wider text-brand-text-light">
              TAMA LIVING
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-brand-text-muted hover:text-brand-gold focus:outline-none"
            aria-label="Close Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-brand-text-muted hover:text-brand-gold transition-colors font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-brand-gold/10 my-4" />
          <a
            href="#konsultasi"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-[#c5a880] text-brand-bg hover:bg-[#d6ba93] transition-all duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
