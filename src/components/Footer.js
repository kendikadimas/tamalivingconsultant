import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-green-light/60 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-green-accent/10 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-green-light/40">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <a href="#home" className="flex items-center gap-3 w-fit mb-6">
              <div className="relative w-[26px] h-9 overflow-hidden shrink-0">
                <img
                  src="/logo-tamaliving.png"
                  alt="Logo Icon"
                  className="absolute left-0 top-0 h-full w-auto max-w-none object-left"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base md:text-lg font-bold tracking-wider text-brand-text-light">
                  TAMA LIVING
                </span>
                <span className="text-[9px] uppercase tracking-widest text-brand-gold font-medium -mt-1">
                  Consultant
                </span>
              </div>
            </a>
            
            <p className="text-brand-text-muted text-sm leading-relaxed font-body mb-6 max-w-sm">
              PT. Tama Living Construction adalah perusahaan konstruksi profesional yang melayani jasa perancangan desain hunian secara nasional dan jasa pembangunan fisik rumah di Sumatera Utara dan Solo Raya.
            </p>

            <div className="flex items-center gap-4">
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/tama.living_construction"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brand-green-light border border-brand-gold/15 flex items-center justify-center text-brand-text-muted hover:text-brand-gold hover:border-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Facebook link */}
              <a
                href="https://www.facebook.com/TAMA.LIVING.CONSTRUCTION"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brand-green-light border border-brand-gold/15 flex items-center justify-center text-brand-text-muted hover:text-brand-gold hover:border-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Email link */}
              <a
                href="mailto:pttamalivingconstruction@gmail.com"
                className="w-8 h-8 rounded-full bg-brand-green-light border border-brand-gold/15 flex items-center justify-center text-brand-text-muted hover:text-brand-gold hover:border-brand-gold transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col justify-start">
            <h4 className="font-serif text-sm font-bold text-brand-text-light uppercase tracking-wider mb-6">
              Menu Utama
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors font-body w-fit">
                Home
              </a>
              <a href="#mengapa-kami" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors font-body w-fit">
                Mengapa Kami
              </a>
              <a href="#layanan" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors font-body w-fit">
                Layanan
              </a>
              <a href="#paket-harga" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors font-body w-fit">
                Paket Harga
              </a>
              <a href="#proses-kerja" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors font-body w-fit">
                Proses Kerja
              </a>
            </div>
          </div>

          {/* Operational Area Column */}
          <div className="lg:col-span-3 lg:col-start-9 flex flex-col justify-start">
            <h4 className="font-serif text-sm font-bold text-brand-text-light uppercase tracking-wider mb-6">
              Area Operasional
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs text-brand-gold font-bold uppercase tracking-wider mb-1">
                  Jasa Desain Arsitektur
                </div>
                <div className="text-sm text-brand-text-muted font-body">
                  Seluruh Indonesia (Online & Konsultasi Jarak Jauh)
                </div>
              </div>
              
              <div>
                <div className="text-xs text-brand-gold font-bold uppercase tracking-wider mb-1">
                  Jasa Pembangunan Fisik
                </div>
                <div className="text-sm text-brand-text-muted font-body">
                  Sumatera Utara, Kota Solo, Kota Surakarta
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-xs text-brand-text-muted font-body">
          <div>
            &copy; {currentYear} PT. Tama Living Construction. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-brand-gold transition-colors">Syarat & Ketentuan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light" />
            <span className="hover:text-brand-gold transition-colors">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
