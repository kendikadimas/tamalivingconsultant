"use client";

import { PenLine, Ruler, Calculator, Hammer, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    {
      title: "Desain Rumah",
      area: "Seluruh Indonesia",
      desc: "Perancangan konsep tata ruang fungsional dan visualisasi 3D eksterior berkualitas tinggi. Hasil desain dapat disesuaikan dengan selera modern, minimalis, kontemporer, atau klasik.",
      icon: <PenLine className="w-8 h-8" />,
    },
    {
      title: "Gambar Kerja",
      area: "Seluruh Indonesia",
      desc: "Penyusunan gambar teknis secara mendalam (Shop Drawings) mencakup gambar Arsitektur, detail Pondasi/Struktur Sipil, serta peta instalasi MEP (Mekanikal, Elektrikal, Plambing).",
      icon: <Ruler className="w-8 h-8" />,
    },
    {
      title: "RAB & Estimasi Biaya",
      area: "Seluruh Indonesia",
      desc: "Pembuatan Rencana Anggaran Biaya terstruktur untuk mengontrol alokasi dana pembelian material dan upah tukang. Menghindarkan Anda dari risiko overbudget yang merugikan.",
      icon: <Calculator className="w-8 h-8" />,
    },
    {
      title: "Bangun Rumah",
      area: "Sumatera Utara, Solo, Surakarta",
      desc: "Pembangunan fisik rumah secara langsung di lapangan yang ditangani oleh tukang terlatih dan diawasi oleh site manager profesional. Pengerjaan presisi dengan garansi pemeliharaan 6 bulan.",
      icon: <Hammer className="w-8 h-8" />,
      highlight: true,
    },
  ];

  return (
    <section id="layanan" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,77,53,0.1),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={0}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase block mb-3">
              LAYANAN KAMI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text-light">
              Solusi Konstruksi Terintegrasi
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-brand-text-muted text-sm sm:text-base font-body">
              Kami melayani perencanaan desain untuk klien di seluruh Indonesia, 
              serta layanan pembangunan fisik secara khusus di daerah Sumatera Utara dan Solo Raya.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={index + 1}
              className={`p-8 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${
                service.highlight 
                  ? "bg-gradient-to-b from-brand-green-light to-brand-bg border-brand-gold/30 shadow-[0_4px_25px_rgba(212,175,55,0.05)]" 
                  : "bg-brand-card/60 border-brand-green-light/50 hover:border-brand-gold/25"
              }`}
            >
              <div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  service.highlight 
                    ? "bg-brand-gold text-brand-bg" 
                    : "bg-brand-green-light text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg"
                }`}>
                  {service.icon}
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-xl font-bold text-brand-text-light group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Location Badge */}
                <span className={`inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded mb-4 ${
                  service.highlight
                    ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/30"
                    : "bg-brand-green-light text-brand-text-muted border border-brand-green-light"
                }`}>
                  {service.area}
                </span>

                <p className="text-sm text-brand-text-muted leading-relaxed font-body mb-8">
                  {service.desc}
                </p>
              </div>

              <a 
                href="#konsultasi"
                aria-label={`Konsultasikan layanan ${service.title}`}
                className={`text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 group/btn w-fit mt-auto min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded ${
                  service.highlight ? "text-brand-gold-light" : "text-brand-text-muted hover:text-brand-gold"
                }`}
              >
                Konsultasikan
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
