export default function Services() {
  const services = [
    {
      title: "Desain Rumah",
      area: "Seluruh Indonesia",
      desc: "Perancangan konsep tata ruang fungsional dan visualisasi 3D eksterior berkualitas tinggi. Hasil desain dapat disesuaikan dengan selera modern, minimalis, kontemporer, atau klasik.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Gambar Kerja",
      area: "Seluruh Indonesia",
      desc: "Penyusunan gambar teknis secara mendalam (Shop Drawings) mencakup gambar Arsitektur, detail Pondasi/Struktur Sipil, serta peta instalasi MEP (Mekanikal, Elektrikal, Plambing).",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "RAB & Estimasi Biaya",
      area: "Seluruh Indonesia",
      desc: "Pembuatan Rencana Anggaran Biaya terstruktur untuk mengontrol alokasi dana pembelian material dan upah tukang. Menghindarkan Anda dari risiko overbudget yang merugikan.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Bangun Rumah",
      area: "Sumatera Utara, Solo, Surakarta",
      desc: "Pembangunan fisik rumah secara langsung di lapangan yang ditangani oleh tukang terlatih dan diawasi oleh site manager profesional. Pengerjaan presisi dengan garansi pemeliharaan 6 bulan.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      highlight: true,
    },
  ];

  return (
    <section id="layanan" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,77,53,0.1),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
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
                className={`text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 group/btn w-fit mt-auto ${
                  service.highlight ? "text-brand-gold-light" : "text-brand-text-muted hover:text-brand-gold"
                }`}
              >
                Konsultasikan
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
