"use client";

import Image from "next/image";
import {
  MessageCircle, PenTool, FileText, FileCheck, HardHat, KeyRound,
  ShieldCheck, Eye, ClipboardList, UserCheck, BadgeCheck, Heart
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi & Kebutuhan",
      desc: "Kami mendengarkan kebutuhan, preferensi, dan budget Anda untuk memahami visi rumah impian Anda.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80",
      icon: <MessageCircle className="w-7 h-7 text-[#c5a880]" />
    },
    {
      num: "02",
      title: "Desain Konsep",
      desc: "Tim arsitek kami membuat konsep desain terbaik yang sesuai dengan kebutuhan, fungsi, dan gaya hidup Anda.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80",
      icon: <PenTool className="w-7 h-7 text-[#c5a880]" />
    },
    {
      num: "03",
      title: "Gambar Kerja & RAB",
      desc: "Kami menyusun gambar kerja detail dan RAB yang akurat sebagai acuan pelaksanaan dan kontrol biaya.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80",
      icon: <FileText className="w-7 h-7 text-[#c5a880]" />
    },
    {
      num: "04",
      title: "Persetujuan & Penandatanganan",
      desc: "Setelah desain, gambar kerja, dan RAB disetujui, kami membuat kesepakatan kerja yang jelas dan transparan.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80",
      icon: <FileCheck className="w-7 h-7 text-[#c5a880]" />
    },
    {
      num: "05",
      title: "Pelaksanaan Pembangunan",
      desc: "Proyek dikerjakan oleh tim berpengalaman dengan pengawasan ketat dan laporan progres berkala.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
      icon: <HardHat className="w-7 h-7 text-[#c5a880]" />
    },
    {
      num: "06",
      title: "Serah Terima & Garansi",
      desc: "Setelah selesai, kami lakukan serah terima pekerjaan dan memberikan garansi untuk ketenangan Anda.",
      image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=600&auto=format&fit=crop&q=80",
      icon: <KeyRound className="w-7 h-7 text-[#c5a880]" />
    }
  ];

  const usps = [
    {
      title: "Terencana",
      desc: "Semuanya direncanakan dengan matang sejak awal.",
      icon: <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
    },
    {
      title: "Transparan",
      desc: "Informasi dan biaya jelas sejak tahap perencanaan.",
      icon: <Eye className="w-5 h-5 text-[#c5a880]" />
    },
    {
      title: "Terkontrol",
      desc: "Setiap tahap dikontrol untuk hasil yang optimal.",
      icon: <ClipboardList className="w-5 h-5 text-[#c5a880]" />
    },
    {
      title: "Profesional",
      desc: "Ditangani oleh tim ahli dan berpengalaman.",
      icon: <UserCheck className="w-5 h-5 text-[#c5a880]" />
    },
    {
      title: "Berkualitas",
      desc: "Material berkualitas dan pengerjaan terbaik.",
      icon: <BadgeCheck className="w-5 h-5 text-[#c5a880]" />
    },
    {
      title: "Bergaransi",
      desc: "Kami berikan garansi untuk setiap pekerjaan.",
      icon: <Heart className="w-5 h-5 text-[#c5a880]" />
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
                  <h3 className="text-[11px] font-extrabold text-[#122e1f] uppercase tracking-wide">
                    {usp.title}
                  </h3>
                  <p className="text-[11px] text-[#475b50] font-semibold leading-tight mt-0.5 font-body">
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
