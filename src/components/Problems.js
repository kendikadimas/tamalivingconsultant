"use client";

import Image from "next/image";

export default function Problems() {
  const points = [
    {
      title: "Perencanaan Matang",
      desc: "Setiap proyek diawali dengan perencanaan yang detail mulai dari desain, gambar kerja, hingga RAB yang akurat.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 14l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Transparan & Jujur",
      desc: "Estimasi biaya jelas sejak awal tanpa biaya tersembunyi. Perubahan hanya dilakukan atas persetujuan Anda.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 7h.01M9 10h.01M15 10h.01M15 7h.01M12 14h.01M15 17h.01M18 21H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Kualitas Terjamin",
      desc: "Kami menggunakan material berkualitas dan standar kerja yang rapi dengan pengawasan di setiap tahap.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Tepat Waktu",
      desc: "Manajemen proyek yang terstruktur membuat pekerjaan lebih efisien dan sesuai jadwal yang disepakati.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Tim Profesional",
      desc: "Arsitek, engineer, dan tim lapangan berpengalaman yang bekerja dengan komitmen tinggi dan komunikasi yang baik.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20vh-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
        </svg>
      )
    },
    {
      title: "Komunikasi Terbuka",
      desc: "Anda akan selalu mendapatkan informasi progres secara berkala dan dapat berdiskusi kapan saja dengan tim kami.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Legalitas Lengkap",
      desc: "Perusahaan berbadan hukum resmi dengan dokumen legalitas yang lengkap untuk memberikan rasa aman.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Garansi Pekerjaan",
      desc: "Kami memberikan garansi untuk pekerjaan tertentu sebagai bentuk tanggung jawab dan komitmen kepada setiap klien.",
      icon: (
        <svg className="w-6 h-6 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.914-3.996 3.635-3.996 5.846h4v10h-10z" />
              </svg>
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
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">100%</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Amanah & Legal</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">6 Bulan</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Garansi Pemeliharaan</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold text-[#122e1f] leading-none">1-30 Hari</span>
                <span className="text-[9px] font-extrabold text-[#475b50] uppercase mt-0.5 tracking-wider leading-none">Durasi Desain</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0e291b]/5 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/15">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
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
