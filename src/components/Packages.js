"use client";

import Image from "next/image";
import { Check, RotateCcw, Clock, Layers, FileBarChart, Star, LayoutGrid, Package, PenLine, ClipboardList } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "BASIC",
      price: "Rp45.000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
      features: [
        { text: "Denah / Layout", active: true },
        { text: "3D Eksterior", subtext: "(tampak depan, samping & belakang)", active: true },
      ],
      highlight: false,
    },
    {
      name: "STANDARD",
      price: "Rp65.000",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",
      features: [
        { text: "Denah / Layout", active: true },
        { text: "3D Eksterior", subtext: "(tampak depan, samping & belakang)", active: true },
        { 
          text: "Gambar Kerja & Detail", 
          active: true, 
          bullets: ["Arsitektur", "Struktur", "MEP"] 
        },
      ],
      highlight: true,
      tag: "PALING POPULER",
    },
    {
      name: "LENGKAP",
      price: "Rp80.000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
      features: [
        { text: "Denah / Layout", active: true },
        { text: "3D Eksterior", subtext: "(tampak depan, samping & belakang)", active: true },
        { 
          text: "Gambar Kerja & Detail", 
          active: true, 
          bullets: ["Arsitektur", "Struktur", "MEP"] 
        },
        { 
          text: "Rencana Anggaran Biaya (RAB)", 
          active: true, 
          bullets: ["Arsitektur", "Struktur", "MEP"] 
        },
      ],
      highlight: false,
    },
  ];

  const pembayaran = [
    { step: "1", label: "Booking Fee / DP", value: "Rp500.000" },
    { step: "2", label: "Pembayaran Tahap 1, 30%", value: "(setelah denah disetujui)" },
    { step: "3", label: "Pembayaran Tahap 2, 30%", value: "(setelah 3D eksterior disetujui)" },
    { step: "4", label: "Pembayaran Tahap 3, 30%", value: "(setelah gambar kerja disetujui)" },
    { step: "5", label: "Pelunasan 10%", value: "(setelah RAB selesai)" },
  ];

  const estimasi = [
    { label: "Denah", value: "1 - 7 Hari Kerja" },
    { label: "3D Eksterior", value: "3 - 14 Hari Kerja" },
    { label: "Gambar Kerja & Detail", value: "7 - 28 Hari Kerja" },
    { label: "RAB Struktur, Arsitektur, dan MEP", value: "3 - 14 Hari Kerja" },
  ];

  return (
    <section id="paket-harga" className="py-20 bg-[#f8f9f7] text-[#122e1f] relative overflow-hidden">
      
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#122e1f] rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c5a880] rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Logo representation in Header - Inverted for light background */}
          <div className="flex justify-center items-center gap-2.5 mb-3.5">
            <div className="relative w-[26px] h-9 overflow-hidden shrink-0 invert opacity-85">
              <img
                src="/logo-tamaliving.png"
                alt="Logo Icon"
                className="absolute left-0 top-0 h-full w-auto max-w-none object-left"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans text-[15px] font-extrabold tracking-[0.08em] text-[#122e1f] leading-none">
                TAMA LIVING
              </span>
              <span className="text-[8px] uppercase tracking-[0.22em] text-[#c5a880] font-bold mt-0.5 leading-none">
                CONSTRUCTION
              </span>
            </div>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-bold mb-3 tracking-tight leading-tight">
            PAKET <span className="text-[#c5a880]">DESAIN RUMAH</span>
          </h2>
          <p className="text-[#475b50] text-xs sm:text-sm font-body max-w-2xl mx-auto mb-6">
            Wujudkan rumah impian dan pilih paket desain sesuai kebutuhan & budget Anda.
            Konsultasi gratis untuk menentukan paket terbaik Anda!
          </p>

          {/* Pricing warning notification banner */}
          <div className="inline-block max-w-2xl bg-[#122e1f] border border-[#c5a880] rounded-full px-4.5 py-2 text-white shadow-md">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider">
              <div className="w-4.5 h-4.5 rounded-full bg-[#c5a880] text-[#122e1f] flex items-center justify-center shrink-0 font-sans text-xs">
                i
              </div>
              <span>PERHITUNGAN HARGA BERLAKU UNTUK LUAS BANGUNAN &ge; 70 m²</span>
            </div>
          </div>
          <p className="text-[10px] text-[#475b50] font-bold tracking-wider mt-2 uppercase">
            Untuk luas di bawah 70 m² berlaku biaya minimum. Hubungi kami untuk konsultasi.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch mb-16 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.highlight
                  ? "border-[2px] border-[#c5a880] shadow-[0_12px_30px_rgba(197,168,128,0.2)] lg:-translate-y-1.5 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(197,168,128,0.28)] z-10"
                  : "border-gray-200 shadow-sm hover:shadow-[0_12px_25px_rgba(197,168,128,0.12)] hover:border-[#c5a880]/30 hover:-translate-y-1"
              }`}
            >
              {/* Highlight Tag - Floating outside the container */}
              {pkg.highlight && pkg.tag && (
                <div
                  aria-label={pkg.tag}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c5a880] text-white font-bold text-[11px] tracking-widest uppercase py-1 px-3.5 rounded-full flex items-center gap-1 shadow-md z-20"
                >
                  <Star aria-hidden="true" className="w-3 h-3 text-white fill-current" />
                  <span aria-hidden="true">{pkg.tag}</span>
                </div>
              )}

              {/* Card Header & Image */}
              <div>
                {/* Image Container with rounded top to prevent corner overlap - Compact Height */}
                <div className="relative w-full h-[135px] sm:h-[145px] bg-gray-100 rounded-t-[14.5px] overflow-hidden group">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} Visual Render`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Package Label Strip */}
                <div className="bg-[#122e1f] text-white py-2 text-center">
                  <h3 className="font-serif text-[15px] font-bold tracking-widest uppercase">
                    {pkg.name}
                  </h3>
                </div>

                {/* Price Display - Reduced padding */}
                <div className="text-center py-4.5 border-b border-gray-100 bg-[#fafbfa]">
                  <span className="text-[#c5a880] font-serif text-2xl font-extrabold tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-[#475b50] font-body text-[11px] font-semibold">/m²</span>
                </div>

                {/* Features List - Compact padding and space */}
                <ul className="px-5 py-4 space-y-2.5">
                  {pkg.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex flex-col group/item cursor-default">
                      <div className="flex items-start gap-2.5">
                        {/* Vibrant Green Check Circle - Scaling on hover */}
                         <span className="w-4.5 h-4.5 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm transition-transform duration-300 group-hover/item:scale-110">
                           <Check className="w-3 h-3" strokeWidth={3.5} />
                         </span>
                        
                        <div className="flex flex-col">
                          <span className="text-[12px] sm:text-[13px] font-bold text-[#1c2e24] font-body leading-tight transition-colors duration-200 group-hover/item:text-[#c5a880]">
                            {feat.text}
                          </span>
                          {feat.subtext && (
                            <span className="text-[9.5px] text-[#475b50] font-medium mt-0.5 leading-snug">
                              {feat.subtext}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Nested bullets if present - Tighter margins */}
                      {feat.bullets && (
                        <ul className="pl-7 mt-1.5 space-y-1">
                          {feat.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-2 text-[10.5px] font-semibold text-[#475b50] transition-colors duration-200 hover:text-[#c5a880]">
                              <span className="w-1.2 h-1.2 rounded-full bg-[#c5a880] shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Free Revision footer badge - Reduced padding */}
              <div className="px-5 pb-4.5 mt-auto">
                <div className="py-2 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center gap-1.5 transition-colors duration-300 hover:bg-[#122e1f]/5">
                  <RotateCcw className="w-4 h-4 text-[#122e1f] shrink-0" />
                  <span className="text-[9.5px] font-extrabold text-[#122e1f] tracking-wider uppercase">
                    BEBAS REVISI SAMPAI TAHAP BERIKUTNYA
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Details Panel (Payment & Timeline) */}
        <div className="bg-[#f0f3f0] rounded-2xl p-6 lg:p-8 border border-gray-200/50 max-w-5xl mx-auto mb-12 shadow-inner">
          <div className="grid grid-cols-1 gap-10 items-start">
            
            {/* Column 1 - Metode Pembayaran (DIARSIPKAN) */}
            {/* 
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0e291b] text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/30 shadow-sm">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-sm font-extrabold tracking-wide uppercase">
                  METODE PEMBAYARAN
                </h3>
              </div>

              <div className="space-y-3">
                {pembayaran.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center text-xs font-body border-b border-dashed border-transparent pb-1 transition-all duration-200 hover:bg-[#122e1f]/5 px-2 -mx-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="w-5.5 h-5.5 rounded-full bg-[#c5a880] text-white flex items-center justify-center font-sans text-[11px] font-bold shrink-0">
                        {item.step}
                      </span>
                      <span className="font-bold text-[#1c2e24] text-[12px]">{item.label}</span>
                    </div>
                    <div className="flex-grow border-b border-dotted border-[#122e1f]/20 mx-2.5" />
                    <span className="text-[10px] font-bold text-[#475b50] text-right shrink-0">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            */}

            {/* Estimasi Pengerjaan */}
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0e291b] text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/30 shadow-sm">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-sm font-extrabold tracking-wide uppercase">
                  ESTIMASI PENGERJAAN (HARI KERJA)
                </h3>
              </div>

              <div className="space-y-3">
                {estimasi.map((item, idx) => {
                  const estimasiIcons = [
                    // Denah (layout/grid)
                    <LayoutGrid className="w-3.5 h-3.5" key="denah" />,
                    // 3D Eksterior (3D cube)
                    <Package className="w-3.5 h-3.5" key="3d" />,
                    // Gambar Kerja & Detail (blueprint paper)
                    <PenLine className="w-3.5 h-3.5" key="gambar" />,
                    // RAB (calculator/invoice)
                    <ClipboardList className="w-3.5 h-3.5" key="rab" />
                  ];

                  return (
                    <div 
                      key={idx} 
                      className="flex justify-between items-center text-xs font-body border-b border-dashed border-transparent pb-2 transition-all duration-200 hover:bg-[#122e1f]/5 px-2 -mx-2 rounded-lg"
                    >
                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className="w-6.5 h-6.5 rounded border border-[#c5a880]/30 bg-[#0e291b] text-[#c5a880] flex items-center justify-center shrink-0 shadow-sm">
                          {estimasiIcons[idx]}
                        </span>
                        <span className="font-bold text-[#1c2e24] text-[12px]">{item.label}</span>
                      </div>
                      {/* Dotted line leader */}
                      <div className="flex-grow border-b border-dotted border-[#122e1f]/20 mx-2.5" />
                      {/* Value with preceding gold dot */}
                      <div className="flex items-center gap-1.5 shrink-0 text-right">
                        <span className="w-1.2 h-1.2 rounded-full bg-[#c5a880]" />
                        <span className="text-[10px] font-bold text-[#c5a880]">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
