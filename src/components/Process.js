"use client";

import Image from "next/image";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi & Kebutuhan",
      desc: "Kami mendengarkan kebutuhan, preferensi, dan budget Anda untuk memahami visi rumah impian Anda.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80",
      icon: (
        <svg className="w-7 h-7 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Desain Konsep",
      desc: "Tim arsitek kami membuat konsep desain terbaik yang sesuai dengan kebutuhan, fungsi, dan gaya hidup Anda.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80",
      icon: (
        <svg className="w-7 h-7 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Gambar Kerja & RAB",
      desc: "Kami menyusun gambar kerja detail dan RAB yang akurat sebagai acuan pelaksanaan dan kontrol biaya.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80",
      icon: (
        <svg className="w-7 h-7 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Persetujuan & Penandatanganan",
      desc: "Setelah desain, gambar kerja, dan RAB disetujui, kami membuat kesepakatan kerja yang jelas dan transparan.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80",
      icon: (
        <svg className="w-7 h-7 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Pelaksanaan Pembangunan",
      desc: "Proyek dikerjakan oleh tim berpengalaman dengan pengawasan ketat dan laporan progres berkala.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
      icon: (
        <svg className="w-7 h-7 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1M9 17h6" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Serah Terima & Garansi",
      desc: "Setelah selesai, kami lakukan serah terima pekerjaan dan memberikan garansi untuk ketenangan Anda.",
      image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=600&auto=format&fit=crop&q=80",
      icon: (
        <svg className="w-7 h-7 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const usps = [
    {
      title: "Terencana",
      desc: "Semuanya direncanakan dengan matang sejak awal.",
      icon: (
        <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparan",
      desc: "Informasi dan biaya jelas sejak tahap perencanaan.",
      icon: (
        <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Terkontrol",
      desc: "Setiap tahap dikontrol untuk hasil yang optimal.",
      icon: (
        <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Profesional",
      desc: "Ditangani oleh tim ahli dan berpengalaman.",
      icon: (
        <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Berkualitas",
      desc: "Material berkualitas dan pengerjaan terbaik.",
      icon: (
        <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Bergaransi",
      desc: "Kami berikan garansi untuk setiap pekerjaan.",
      icon: (
        <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="proses-kerja" className="py-24 bg-white text-[#122e1f] relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-brand-green-light/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c5a880] text-xs font-extrabold tracking-[0.2em] uppercase block mb-3">
            PROSES KERJA KAMI
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#122e1f] tracking-tight leading-tight">
            6 Langkah Mudah Bangun Rumah Impian Anda
          </h2>
          <div className="w-12 h-1 bg-[#c5a880] mx-auto mt-4.5 mb-5" />
          <p className="text-[#475b50] text-sm sm:text-base font-body">
            Sistem kerja yang terstruktur dan transparan untuk memastikan setiap proyek berjalan lancar, tepat waktu, dan sesuai harapan.
          </p>
        </div>

        {/* Timeline Path & Cards */}
        <div className="relative">
          
          {/* Horizontal Connection Dotted Line for Desktop */}
          <div className="hidden lg:block absolute top-[18px] left-[7%] right-[7%] h-0.5 border-t-2 border-dotted border-[#122e1f]/20 z-0" />
          
          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group"
              >
                
                {/* Number Badge */}
                <div className="w-9 h-9 rounded-full bg-[#122e1f] text-white flex items-center justify-center font-sans text-sm font-extrabold shadow-md border-2 border-white z-10 transition-transform duration-300 group-hover:scale-110">
                  {step.num}
                </div>

                {/* Step Card */}
                <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow duration-300 mt-4.5 p-4.5 w-full">
                  <div>
                    {/* Golden outlined icon */}
                    <div className="w-12 h-12 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                      {step.icon}
                    </div>

                    <h3 className="font-sans text-[14px] sm:text-[15px] font-extrabold text-center text-[#122e1f] leading-snug mb-2.5">
                      {step.title}
                    </h3>
                    
                    <p className="text-[11px] text-[#475b50] text-center leading-relaxed font-body min-h-[66px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Photo Illustration */}
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mt-4 bg-gray-50 border border-gray-100 shrink-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 17vw"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* USPs Horizontal/Grid Bottom Panel */}
        <div className="bg-[#fcfdfc] rounded-2xl border border-gray-200/80 p-5.5 shadow-sm mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {usps.map((usp, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 hover:bg-[#122e1f]/5 p-2 -mx-2 rounded-lg transition-all duration-200"
              >
                {/* Circular dark badge with gold icon */}
                <div className="w-9 h-9 rounded-full bg-[#0e291b] border border-[#c5a880]/30 text-[#c5a880] flex items-center justify-center shrink-0 shadow-sm">
                  {usp.icon}
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-[#122e1f] uppercase tracking-wide">
                    {usp.title}
                  </h4>
                  <p className="text-[9px] text-[#475b50] font-semibold leading-tight mt-0.5 font-body">
                    {usp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
