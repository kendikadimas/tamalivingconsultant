"use client";

import { motion } from "framer-motion";
import { Maximize, Layers, Bed, Bath, Car, ArrowRight } from "lucide-react";

export default function HomeDesignCollection() {
  const designs = [
    {
      id: "TL-001-Sierra",
      image: "/homedesign/TL-001-Sierra.webp",
      style: "Modern Tropical Residence",
      ukuranBangunan: "15 m x 20 m",
      luasBangunan: "295 m2",
      jumlahLantai: "2",
      kamarTidur: "5",
      kamarMandi: "3",
      mobil: "2"
    },
    {
      id: "TL-002-Aruna",
      image: "/homedesign/TL-002-Aruna.webp",
      style: "Scandinavian Tropical residence",
      ukuranBangunan: "16 m x 13 m",
      luasBangunan: "260 m2",
      jumlahLantai: "2",
      kamarTidur: "5",
      kamarMandi: "4",
      mobil: "2"
    },
    {
      id: "TL-003-Altura",
      image: "/homedesign/TL-003-Altura.webp",
      style: "Modern Luxury Residence",
      ukuranBangunan: "8 m x 12 m",
      luasBangunan: "200 m2",
      jumlahLantai: "3",
      kamarTidur: "5",
      kamarMandi: "2",
      mobil: "1"
    },
    {
      id: "TL-004-Aurora",
      image: "/homedesign/TL-004 Aurora.webp",
      style: "Modern Scandinavian Luxury Residence",
      ukuranBangunan: "10 m x 14 m",
      luasBangunan: "254 m2",
      jumlahLantai: "2",
      kamarTidur: "4",
      kamarMandi: "4",
      mobil: "1"
    },
    {
      id: "TL-005-Vesper",
      image: "/homedesign/TL-005 Vesper.webp",
      style: "Modern Minimalis Luxury Residence",
      ukuranBangunan: "7,5 m x 20 m",
      luasBangunan: "214 m2",
      jumlahLantai: "2",
      kamarTidur: "5",
      kamarMandi: "4",
      mobil: "1"
    },
    {
      id: "TL-006-Kensington",
      image: "/homedesign/TL-006-Kensington.webp",
      style: "Modern Classic Residence",
      ukuranBangunan: "10 m x 13 m",
      luasBangunan: "130 m2",
      jumlahLantai: "1",
      kamarTidur: "3",
      kamarMandi: "2",
      mobil: "2"
    },
    {
      id: "TL-007-Valencia",
      image: "/homedesign/TL-007-Valencia.webp",
      style: "Luxury Contemporary Residence",
      ukuranBangunan: "10 m x 14 m",
      luasBangunan: "260 m2",
      jumlahLantai: "2",
      kamarTidur: "4",
      kamarMandi: "3",
      mobil: "2"
    },
    {
      id: "TL-008-Windsor",
      image: "/homedesign/TL-008-Windsor.webp",
      style: "American Classic Residence",
      ukuranBangunan: "13 m x 14 m",
      luasBangunan: "340 m2",
      jumlahLantai: "2",
      kamarTidur: "4",
      kamarMandi: "4",
      mobil: "2"
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="koleksi-desain" className="py-24 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold text-xs font-bold tracking-widest uppercase block mb-3">
            Inspirasi Desain
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text-light mb-6">
            Tama Living <span className="text-brand-gold">Home Design</span> Collection
          </h2>
          <p className="text-brand-text-muted text-base font-body">
            Temukan inspirasi rumah impian Anda dari koleksi desain eksklusif kami yang disesuaikan dengan berbagai gaya hidup dan kebutuhan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              className="group rounded-2xl overflow-hidden glass-panel border border-brand-green-light/40 hover:border-brand-gold/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={design.image}
                  alt={design.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-brand-text-light font-bold text-lg leading-tight mb-1">
                    {design.id}
                  </h3>
                  <p className="text-brand-gold text-xs font-semibold tracking-wide">
                    {design.style}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <div className="flex items-center gap-2 text-brand-text-muted">
                    <Maximize className="w-4 h-4 shrink-0 text-brand-gold/70" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-70">U. Bangunan</span>
                      <span className="text-xs font-semibold text-brand-text-light">{design.ukuranBangunan}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-brand-text-muted">
                    <Maximize className="w-4 h-4 shrink-0 text-brand-gold/70" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-70">L. Bangunan</span>
                      <span className="text-xs font-semibold text-brand-text-light">{design.luasBangunan}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-brand-text-muted">
                    <Layers className="w-4 h-4 shrink-0 text-brand-gold/70" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-70">Jml Lantai</span>
                      <span className="text-xs font-semibold text-brand-text-light">{design.jumlahLantai}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-brand-text-muted">
                    <Bed className="w-4 h-4 shrink-0 text-brand-gold/70" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-70">K. Tidur</span>
                      <span className="text-xs font-semibold text-brand-text-light">{design.kamarTidur}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-brand-text-muted">
                    <Bath className="w-4 h-4 shrink-0 text-brand-gold/70" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-70">K. Mandi</span>
                      <span className="text-xs font-semibold text-brand-text-light">{design.kamarMandi}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-brand-text-muted">
                    <Car className="w-4 h-4 shrink-0 text-brand-gold/70" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-70">Mobil</span>
                      <span className="text-xs font-semibold text-brand-text-light">{design.mobil}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
