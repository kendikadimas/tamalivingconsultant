"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
                CONSTRUCTION
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
              <FaWhatsapp className="w-4 h-4" />
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
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 w-72 max-w-sm bg-[#0e1f17] p-6 shadow-2xl lg:hidden border-l border-brand-gold/10"
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
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-brand-text-muted hover:text-brand-gold transition-colors font-medium text-lg"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="h-px bg-brand-gold/10 my-4" />
              <motion.a
                href="#konsultasi"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-[#c5a880] text-brand-bg hover:bg-[#d6ba93] transition-all duration-300"
              >
                Konsultasi Gratis
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
