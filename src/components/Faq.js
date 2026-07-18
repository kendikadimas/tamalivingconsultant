"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Quote, MessageCircle, ShieldCheck, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Faq() {
  const [openIndices, setOpenIndices] = useState([0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const faqs = [
    {
      num: "01",
      question: "Apa yang dimaksud paket desain rumah?",
      answer: "Paket desain rumah adalah layanan perencanaan lengkap mulai dari denah, 3D eksterior, gambar kerja, hingga RAB (tergantung paket yang dipilih) untuk membantu Anda mewujudkan rumah impian secara terencana dan terukur."
    },
    {
      num: "02",
      question: "Apa perbedaan paket Basic, Standard, dan Lengkap?",
      answer: "Perbedaan utama terletak pada kelengkapan dokumen yang Anda dapatkan. Detail lengkapnya dapat dilihat pada halaman Paket Layanan."
    },
    {
      num: "03",
      question: "Berapa lama proses pengerjaan desain?",
      answer: "Estimasi pengerjaan dapat dilihat pada halaman Paket Layanan di bagian Estimasi Pengerjaan. Durasi detail menyesuaikan dengan kompleksitas dan luas bangunan."
    },
    {
      num: "04",
      question: "Apakah harga sudah termasuk biaya pembangunan?",
      answer: "Harga paket desain belum termasuk biaya pembangunan di lapangan. Namun pada Paket Lengkap sudah termasuk RAB sebagai acuan biaya pembangunan."
    },
    {
      num: "05",
      question: "Apakah bisa konsultasi sebelum memesan?",
      answer: "Tentu bisa! Kami menyediakan konsultasi gratis untuk memahami kebutuhan, luas lahan/bangunan, dan rekomendasi paket yang paling sesuai untuk Anda."
    },
    {
      num: "06",
      question: "Bagaimana jika saya sudah memiliki denah sendiri?",
      answer: "Tidak masalah. Kami tetap dapat membantu membuat 3D visualisasi, gambar kerja, dan RAB berdasarkan denah yang Anda miliki."
    }
  ];

  const toggleFaq = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#f8f9f7] text-[#122e1f] relative overflow-hidden">
      
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#122e1f]/5 rounded-full filter blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c5a880]/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#c5a880] text-xs font-extrabold tracking-[0.2em] uppercase block mb-2.5">
            FAQ
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#122e1f] tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-12 h-1 bg-[#c5a880] mx-auto mt-4 mb-5" />
          <p className="text-[#475b50] text-sm sm:text-base font-body max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang paling sering diajukan sebelum memulai proyek rumah impian Anda bersama kami.
          </p>
        </motion.div>

        {/* Main Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column - FAQ Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 items-start">
              {faqs.map((faq, index) => {
                const isOpen = openIndices.includes(index);
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    custom={index + 1}
                    className="bg-white rounded-2xl p-5.5 transition-all duration-300 border border-transparent shadow-[0_6px_25px_rgba(18,46,31,0.03)] hover:shadow-[0_12px_30px_rgba(197,168,128,0.12)] hover:border-[#c5a880]/20 hover:-translate-y-0.5 group"
                  >
                    <div>
                      {/* Header row — native button for full keyboard + SR support */}
                      <button
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="flex items-center justify-between gap-4 cursor-pointer w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:ring-offset-2 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <span aria-hidden="true" className="w-8 h-8 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[#c5a880] flex items-center justify-center font-sans text-[11px] font-bold shrink-0 transition-all duration-300 group-hover:bg-[#c5a880] group-hover:text-white">
                            {faq.num}
                          </span>
                          <h3 className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#122e1f] leading-snug group-hover:text-[#c5a880] transition-colors duration-200">
                            {faq.question}
                          </h3>
                        </div>
                        
                        <motion.span
                          aria-hidden="true"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="w-6.5 h-6.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[#c5a880] flex items-center justify-center shrink-0 group-hover:bg-[#c5a880]/20"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      </button>

                      {/* Animated content panel */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${index}`}
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-[11.5px] text-[#475b50] leading-relaxed font-body border-t border-gray-100 pt-3.5 mt-4">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Tall CTA Vertical Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={4}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg h-full flex flex-col bg-[#0e291b] transition-all duration-300 hover:shadow-xl group/card">
              
              {/* Top Cover Image */}
              <div className="relative w-full h-[180px] sm:h-[220px] bg-gray-100 shrink-0 overflow-hidden">
                <Image
                  src="/lengkap_house.png"
                  alt="FAQ CTA Visual Cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
              </div>

              {/* Bottom Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-center">
                
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0e291b] border border-[#c5a880]/30 text-[#c5a880] flex items-center justify-center shrink-0 mx-auto shadow-md mb-4">
                    <Quote className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    Masih ada pertanyaan lain?
                  </h3>
                  <p className="text-[#a3b8ad] text-xs font-body leading-relaxed max-w-xs mx-auto">
                    Tim kami siap membantu menjawab semua pertanyaan Anda dan memberikan solusi terbaik untuk proyek rumah Anda.
                  </p>
                </div>

                <div className="mb-8 flex flex-col gap-3">
                  <a
                    href="https://wa.me/6282230745446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#c5a880] hover:bg-[#d6ba93] text-[#122e1f] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    <FaWhatsapp className="w-4.5 h-4.5" />
                    WHATSAPP DEVINA
                  </a>
                  <a
                    href="https://wa.me/6281276200200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-transparent border border-[#c5a880] hover:bg-[#c5a880]/10 text-[#c5a880] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    <FaWhatsapp className="w-4.5 h-4.5" />
                    WHATSAPP CAHAYA
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/10 pt-5 text-left">
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">100% Amanah</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Berbadan Hukum PT Resmi</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">6 Bulan Garansi</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Garansi Pemeliharaan Fisik</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">1-30 Hari Desain</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Proses Pengerjaan Efisien</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">Konsultasi Gratis</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Tanya-Jawab Bebas Biaya</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
