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

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Paket", href: "#paket-harga" },
    { name: "Proses", href: "#proses-kerja" },
    { name: "Tentang Kami", href: "#mengapa-kami" },
    { name: "Kontak", href: "#konsultasi" },
  ];

  return (
    <>
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
                src="/logo-tamaliving.webp"
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

          {/* Desktop CTA Buttons with WhatsApp Icon */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6282230745446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold tracking-wide uppercase bg-[#c5a880] text-brand-bg hover:bg-[#d6ba93] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="w-4 h-4" />
              WA Devina
            </a>
            <a
              href="https://wa.me/6281276200200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold tracking-wide uppercase bg-transparent border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880]/10 transition-all duration-300"
            >
              <FaWhatsapp className="w-4 h-4" />
              WA Cahaya
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              className="p-2 rounded-lg text-brand-text-muted hover:text-brand-gold hover:bg-brand-green-light/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
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
            className="fixed inset-y-0 right-0 z-40 w-72 max-w-sm bg-[#040d08]/80 backdrop-blur-xl p-6 shadow-2xl lg:hidden border-l border-brand-gold/10 overflow-y-auto"
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
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://wa.me/6282230745446"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-[#c5a880] text-brand-bg hover:bg-[#d6ba93] transition-all duration-300 gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WA Devina
                </motion.a>
                <motion.a
                  href="https://wa.me/6281276200200"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-transparent border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880]/10 transition-all duration-300 gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WA Cahaya
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
