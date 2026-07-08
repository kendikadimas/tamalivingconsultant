"use client";

import { useState } from "react";
import Image from "next/image";

export default function Faq() {
  // Initialize with only the first item open to demonstrate interactivity,
  // allowing other cards to remain collapsed and compact on page load.
  const [openIndices, setOpenIndices] = useState([0]);

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
      
      {/* Decorative blurred background shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#122e1f]/5 rounded-full filter blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c5a880]/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Main Columns layout (2/3 FAQ cards, 1/3 CTA Vertical Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column - FAQ Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 items-start">
              {faqs.map((faq, index) => {
                const isOpen = openIndices.includes(index);
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-5.5 transition-all duration-300 border border-transparent shadow-[0_6px_25px_rgba(18,46,31,0.03)] hover:shadow-[0_12px_30px_rgba(197,168,128,0.12)] hover:border-[#c5a880]/20 hover:-translate-y-0.5 group`}
                  >
                    <div>
                      {/* Header row (Clickable to toggle) */}
                      <div
                        onClick={() => toggleFaq(index)}
                        className="flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          {/* Premium Gold-bordered Number Badge */}
                          <span className="w-8 h-8 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[#c5a880] flex items-center justify-center font-sans text-[11px] font-bold shrink-0 transition-all duration-300 group-hover:bg-[#c5a880] group-hover:text-white">
                            {faq.num}
                          </span>
                          <h3 className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#122e1f] leading-snug group-hover:text-[#c5a880] transition-colors duration-200">
                            {faq.question}
                          </h3>
                        </div>
                        
                        {/* Premium Gold Ringed Chevron Toggle Icon */}
                        <span className={`w-6.5 h-6.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[#c5a880] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#c5a880]/20 ${isOpen ? "rotate-180" : ""}`}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </div>

                      {/* Content panel - Modern grid-rows dynamic smooth transition */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[11.5px] text-[#475b50] leading-relaxed font-body border-t border-gray-100 pt-3.5">
                            {faq.answer}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Tall CTA Vertical Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg h-full flex flex-col bg-[#0e291b] transition-all duration-300 hover:shadow-xl group/card">
              
              {/* Top Cover Image with zoom effect */}
              <div className="relative w-full h-[180px] sm:h-[220px] bg-gray-100 shrink-0 overflow-hidden">
                <Image
                  src="/lengkap_house.png"
                  alt="FAQ CTA Visual Cover"
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
              </div>

              {/* Bottom Body Content (Dark green background) */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-center">
                
                {/* Quotation & Heading */}
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0e291b] border border-[#c5a880]/30 text-[#c5a880] flex items-center justify-center shrink-0 mx-auto shadow-md mb-4">
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.914-3.996 3.635-3.996 5.846h4v10h-10z" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    Masih ada pertanyaan lain?
                  </h3>
                  <p className="text-[#a3b8ad] text-xs font-body leading-relaxed max-w-xs mx-auto">
                    Tim kami siap membantu menjawab semua pertanyaan Anda dan memberikan solusi terbaik untuk proyek rumah Anda.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mb-8">
                  <a
                    href="https://wa.me/6281276200200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#c5a880] hover:bg-[#d6ba93] text-[#122e1f] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    {/* WhatsApp Icon */}
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.981-1.864-1.865-4.343-2.89-6.984-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.777.472 3.511 1.371 5.048L1.936 21.68l4.711-1.526zM17.5 14.86c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.02-.51-1.71-.83-2.39-2-1.02-1.76-1.02-2.85-.92-3.15.1-.3.3-.65.45-.8.15-.15.2-.25.3-.45.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.61-.51-.53-.69-.53-.18 0-.38-.03-.58-.03s-.53.08-.8.38c-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.73.23 1.39.2 1.92.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.14-.27-.24-.57-.39z" />
                    </svg>
                    KONSULTASI GRATIS VIA WHATSAPP
                  </a>
                </div>

                {/* Substats grid (2x2) */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/10 pt-5 text-left">
                  
                  {/* Stat 1 */}
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">100% Amanah</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Berbadan Hukum PT Resmi</span>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">6 Bulan Garansi</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Garansi Pemeliharaan Fisik</span>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">1-30 Hari Desain</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Proses Pengerjaan Efisien</span>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-white leading-none">Konsultasi Gratis</span>
                      <span className="text-[8px] text-[#a3b8ad] leading-tight mt-1">Tanya-Jawab Bebas Biaya</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
