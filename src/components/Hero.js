"use client";

import Image from "next/image";
import { Building2, BadgeCheck, FileText, ShieldCheck, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-[#040d08]"
    >
      {/* Background Image - Reference twilight house */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_house_ref.png"
          alt="Tama Living Construction Premium House"
          fill
          priority
          className="object-cover object-right-bottom lg:object-right"
        />
        {/* Gradients to fade image on left & bottom for high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d08] via-[#040d08]/90 via-[#040d08]/40 to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-[#040d08]/75 z-10 lg:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040d08] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 lg:py-12">
          
          {/* Main Hero Copy - Left Column */}
          <div className="lg:col-span-8 flex flex-col text-left">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-text-light leading-[1.12] mb-6"
            >
              Wujudkan <br />
              <span className="text-[#c5a880]">Rumah Impian</span> <br />
              Dengan Proses yang <br />
              Terarah & Transparan
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-brand-text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-body"
            >
              Tama Living Construction membantu Anda merancang dan membangun rumah tinggal mulai dari desain, gambar kerja, RAB, hingga pelaksanaan pembangunan.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="flex flex-col sm:flex-row gap-4 mb-10 w-fit"
            >
              {/* WhatsApp Button */}
              <a
                href="#konsultasi"
                className="px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#040d08] hover:bg-[#d6ba93] transition-all duration-300 flex items-center gap-3.5 shadow-lg group cursor-pointer"
              >
                {/* WA Icon */}
                <div className="w-8 h-8 rounded-full bg-brand-bg/10 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-brand-bg" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-[12px] uppercase tracking-wider leading-none">
                    KONSULTASI GRATIS
                  </span>
                  <span className="text-[10px] text-brand-bg/75 mt-1 font-semibold leading-none">
                    Chat via WhatsApp
                  </span>
                </div>
              </a>

              {/* View Packages Button */}
              <a
                href="#paket-harga"
                className="px-6 py-3.5 rounded-xl border border-brand-gold/30 text-brand-text-light hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#c5a880]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-[12px] uppercase tracking-wider leading-none">
                    LIHAT PAKET
                  </span>
                  <span className="text-[10px] text-brand-text-muted mt-1 font-semibold leading-none">
                    Mulai dari Rp45.000/m²
                  </span>
                </div>
              </a>
            </motion.div>

            {/* USP List */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="grid grid-cols-2 gap-3 max-w-lg"
            >
              {/* USP 1 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Building2 className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text-light mb-1 uppercase tracking-wide">
                    Desain Profesional
                  </h4>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    Hasil desain presisi sesuai kebutuhan & anggaran Anda
                  </p>
                </div>
              </div>

              {/* USP 2 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-brand-gold shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text-light mb-1 uppercase tracking-wide">
                    Proses Transparan
                  </h4>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    Perencanaan jelas, biaya transparan, tanpa hidden cost
                  </p>
                </div>
              </div>

              {/* USP 3 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Users className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text-light mb-1 uppercase tracking-wide">
                    Pengerjaan Terarah
                  </h4>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    Tim profesional dan berpengalaman di bidangnya
                  </p>
                </div>
              </div>

              {/* USP 4 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-brand-gold shrink-0">
                  <BadgeCheck className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-text-light mb-1 uppercase tracking-wide">
                    Legalitas Terjamin
                  </h4>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    PT resmi berbadan hukum, amanah dan dapat dipercaya
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom social proof strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full"
      >
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3.5 w-fit">
          {/* Avatar Group */}
          <div className="flex items-center -space-x-2.5">
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=85"
                alt="Client Reviewer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden z-20">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=85"
                alt="Client Reviewer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2.5 z-20">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=60&auto=format&fit=crop&q=85"
                alt="Client Reviewer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#c5a880] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white -ml-2.5 z-30">
              100+
            </div>
          </div>
          {/* Reviews Proof text */}
          <p className="text-[#f2f6f3] text-[12px] font-semibold leading-snug font-body">
            Lebih dari 100+ klien percaya dengan layanan Tama Living Construction
          </p>
        </div>
      </motion.div>

    </section>
  );
}
