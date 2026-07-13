"use client";

import Image from "next/image";
import { ClipboardCheck, Receipt, ShieldCheck, Clock, Users, MessageCircle, FileText, Home, Quote, BadgeCheck } from "lucide-react";

export default function Problems() {
  const points = [
    {
      title: "Perencanaan Matang",
      desc: "Setiap proyek diawali dengan perencanaan yang detail mulai dari desain, gambar kerja, hingga RAB yang akurat.",
      icon: <ClipboardCheck className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Transparan & Jujur",
      desc: "Estimasi biaya jelas sejak awal tanpa biaya tersembunyi. Perubahan hanya dilakukan atas persetujuan Anda.",
      icon: <Receipt className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Kualitas Terjamin",
      desc: "Kami menggunakan material berkualitas dan standar kerja yang rapi dengan pengawasan di setiap tahap.",
      icon: <ShieldCheck className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Tepat Waktu",
      desc: "Manajemen proyek yang terstruktur membuat pekerjaan lebih efisien dan sesuai jadwal yang disepakati.",
      icon: <Clock className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Tim Profesional",
      desc: "Arsitek, engineer, dan tim lapangan berpengalaman yang bekerja dengan komitmen tinggi dan komunikasi yang baik.",
      icon: <Users className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Komunikasi Terbuka",
      desc: "Anda akan selalu mendapatkan informasi progres secara berkala dan dapat berdiskusi kapan saja dengan tim kami.",
      icon: <MessageCircle className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Legalitas Lengkap",
      desc: "Perusahaan berbadan hukum resmi dengan dokumen legalitas yang lengkap untuk memberikan rasa aman.",
      icon: <FileText className="w-6 h-6 text-[#c5a880]" />
    },
    {
      title: "Garansi Pekerjaan",
      desc: "Kami memberikan garansi untuk pekerjaan tertentu sebagai bentuk tanggung jawab dan komitmen kepada setiap klien.",
      icon: <Home className="w-6 h-6 text-[#c5a880]" />
    }
  ];

  return (
    <section id="mengapa-kami" className="py-24 bg-[#f8f9f7] text-[#122e1f] relative overflow-hidden">
      
      {/* Decorative blurred shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#122e1f]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Header Texts */}
          <div className="lg:col-span-7">
            <span className="text-[#c5a880] text-xs font-extrabold tracking-[0.2em] uppercase block">
              MENGAPA MEMILIH
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#122e1f] mt-2 mb-4 leading-tight">
              TAMA LIVING CONSTRUCTION?
            </h2>
            <div className="w-12 h-1 bg-[#c5a880] mb-5" />
            <p className="text-sm sm:text-base text-[#475b50] leading-relaxed max-w-xl font-body">
              Kami tidak hanya membangun rumah, tetapi memberikan <span className="font-extrabold text-[#122e1f]">ketenangan dan kepastian</span> bagi Anda dalam setiap prosesnya.
            </p>
          </div>

          {/* Right Side Visual Cover Image */}
          <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[280px] lg:h-[310px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/hero_house_ref.png"
              alt="Tama Living Premium Twilight Render"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>

        </div>

        {/* 8 USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-5.5 flex gap-4 transition-all duration-300 hover:shadow-md hover:border-[#c5a880]/30 hover:-translate-y-0.5 group"
            >
              {/* Dark green square badge containing gold outlined icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0e291b] border border-[#c5a880]/30 text-[#c5a880] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                {point.icon}
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-[13px] font-extrabold text-[#122e1f] uppercase tracking-wide leading-tight transition-colors duration-200 group-hover:text-[#c5a880]">
                  {point.title}
                </h3>
                <p className="text-[11px] text-[#475b50] leading-relaxed mt-2 font-body">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with commitment and 4 stats metrics */}
        <div className="bg-[#faf6f0] border border-[#c5a880]/15 rounded-2xl p-5.5 shadow-sm mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          
          {/* Quote side */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#0e291b] border border-[#c5a880]/30 text-[#c5a880] flex items-center justify-center shrink-0 shadow-md">
              <Quote className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-[13px] text-[#1c2e24] leading-relaxed font-semibold font-body max-w-lg">
              <span className="font-extrabold">Komitmen kami sederhana:</span> Membangun rumah berkualitas dengan proses yang mudah, transparan, dan memuaskan.
            </p>
          </div>

          {/* Right Column - Stats Grid (Horizontal 2x2 or 4 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-[#f8f9f7] p-6 rounded-2xl border border-gray-100">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">100%</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Amanah & Legal</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <BadgeCheck className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">6 Bulan</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Garansi Pemeliharaan</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">1-30 Hari</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Durasi Desain</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <MessageCircle className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">Gratis</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Konsultasi Awal</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
