import Image from "next/image";
import { Building2, BadgeCheck, FileText, ShieldCheck, Users } from "lucide-react";

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
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-text-light leading-[1.12] mb-6">
              Wujudkan <br />
              <span className="text-[#c5a880]">Rumah Impian</span> <br />
              Dengan Proses yang <br />
              Terarah & Transparan
            </h1>

            <p className="text-brand-text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-body">
              Tama Living Construction membantu Anda merancang dan membangun rumah tinggal mulai dari desain, gambar kerja, RAB, hingga pelaksanaan pembangunan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-fit">
              {/* WhatsApp Button */}
              <a
                href="#konsultasi"
                className="px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#040d08] hover:bg-[#d6ba93] transition-all duration-300 flex items-center gap-3.5 shadow-lg group cursor-pointer"
              >
                {/* WA Icon */}
                <div className="w-8 h-8 rounded-full bg-brand-bg/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-brand-bg" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.981-1.864-1.865-4.343-2.89-6.984-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.777.472 3.511 1.371 5.048L1.936 21.68l4.711-1.526zM17.5 14.86c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.02-.51-1.71-.83-2.39-2-1.02-1.76-1.02-2.85-.92-3.15.1-.3.3-.65.45-.8.15-.15.2-.25.3-.45.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.61-.51-.53-.69-.53-.18 0-.38-.03-.58-.03s-.53.08-.8.38c-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.12 4.52.72.31 1.72.5 1.72.64.73.23 1.39.2 1.92.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.14-.27-.24-.57-.39z" />
                  </svg>
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

              {/* Package Outline Button */}
              <a
                href="#paket-harga"
                className="px-6 py-3.5 rounded-xl border border-[#c5a880]/30 hover:border-[#c5a880] text-brand-text-light hover:bg-[#c5a880]/5 transition-all duration-300 flex items-center gap-3.5 cursor-pointer bg-[#040d08]/40"
              >
                {/* File Icon */}
                <div className="w-8 h-8 rounded-full bg-brand-text-light/5 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#c5a880]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-[12px] uppercase tracking-wider leading-none">
                    LIHAT PAKET LAYANAN
                  </span>
                  <span className="text-[10px] text-brand-text-muted mt-1 font-semibold leading-none">
                    Pilih yang sesuai kebutuhan Anda
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlays at the bottom of Hero - Desktop: Row, Mobile: Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-8 w-full">
          
          {/* Left Overlay Card (Translucent 4-column widget) */}
          <div className="bg-[#080f0b]/90 border border-[#c5a880]/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
            
            {/* USP 1 */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-brand-gold shrink-0">
                <Building2 className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-text-light mb-1 uppercase tracking-wide">
                  Desain Berkualitas
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">
                  Desain fungsional, estetis & sesuai kebutuhan
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
                  Kualitas Terjamin
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">
                  Standar mutu tinggi dan hasil memuaskan
                </p>
              </div>
            </div>

          </div>

          {/* Right Overlay Card (White client proof card) */}
          <div className="bg-white rounded-2xl p-6 flex items-center gap-4 lg:w-[350px] shadow-2xl shrink-0">
            {/* Overlapping Avatars */}
            <div className="flex items-center shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden z-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=85"
                  alt="Client Reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2.5 z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=85"
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
            <p className="text-[#1c2e24] text-[12px] font-semibold leading-snug font-body">
              Lebih dari 100+ klien percaya dengan layanan Tama Living Construction
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
