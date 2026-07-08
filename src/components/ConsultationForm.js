"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    nama: "",
    lokasi: "",
    luasTanah: "",
    kebutuhan: "Desain Rumah",
    anggaran: "",
    detail: "",
  });

  const [loading, setLoading] = useState(false);

  const kebutuhanOptions = [
    "Desain Rumah",
    "Pembangunan Rumah",
    "Renovasi Rumah",
    "Jasa RAB & Gambar Kerja",
    "Konsultasi Lainnya",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const waNumber = "6281276200200"; // Deviana WhatsApp number (0812 7620 0200)
    
    // Formatting the WhatsApp Message
    const formattedMessage = `Halo Kak Deviana, saya ingin berkonsultasi mengenai pembangunan/desain rumah dengan rincian berikut:

*Nama:* ${formData.nama}
*Lokasi Proyek:* ${formData.lokasi}
*Luas Tanah:* ${formData.luasTanah} m²
*Kebutuhan:* ${formData.kebutuhan}
*Target Anggaran:* ${formData.anggaran || "-"}
*Cerita Kebutuhan:* ${formData.detail}

Saya mengirimkan formulir ini dari Landing Page PT Tama Living Construction. Terima kasih.`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setLoading(false);
    }, 800);
  };

  return (
    <section id="konsultasi" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,77,53,0.1),transparent_40%)]" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-green-accent/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy details */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase block mb-3">
              KONSULTASI GRATIS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text-light mb-6">
              Mari Mulai Rancang Rumah Anda
            </h2>
            <p className="text-brand-text-muted text-base font-body mb-8 leading-relaxed">
              Isi data rancangan Anda di form samping. Sistem kami akan menyusun rincian kebutuhan Anda secara otomatis dan menghubungkan Anda langsung dengan representative konsultan kami, **Kak Deviana**, di WhatsApp.
            </p>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card/50 border border-brand-green-light/40">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-brand-text-muted">Hubungi Representative (Deviana)</div>
                  <div className="text-sm font-semibold text-brand-text-light">+62 812-7620-0200</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card/50 border border-brand-green-light/40">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-brand-text-muted">Email Resmi PT.</div>
                  <div className="text-sm font-semibold text-brand-text-light">pttamalivingconstruction@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - The Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-brand-gold/20 shadow-2xl relative">
              <h3 className="font-serif text-2xl font-bold text-brand-text-light mb-6">
                Formulir Konsultasi Proyek
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="nama" className="block text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.nama}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-green-light rounded-xl px-4 py-3.5 text-sm text-brand-text-light placeholder-brand-text-muted/40 focus:outline-none focus:border-brand-gold transition-colors font-body"
                    />
                  </div>

                  {/* Location field */}
                  <div>
                    <label htmlFor="lokasi" className="block text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-2">
                      Lokasi Rencana Proyek *
                    </label>
                    <input
                      type="text"
                      id="lokasi"
                      name="lokasi"
                      required
                      placeholder="Contoh: Solo Baru, Medan"
                      value={formData.lokasi}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-green-light rounded-xl px-4 py-3.5 text-sm text-brand-text-light placeholder-brand-text-muted/40 focus:outline-none focus:border-brand-gold transition-colors font-body"
                    />
                  </div>

                  {/* Land Area field */}
                  <div>
                    <label htmlFor="luasTanah" className="block text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-2">
                      Luas Tanah (m²) *
                    </label>
                    <input
                      type="number"
                      id="luasTanah"
                      name="luasTanah"
                      required
                      placeholder="Contoh: 120"
                      value={formData.luasTanah}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-green-light rounded-xl px-4 py-3.5 text-sm text-brand-text-light placeholder-brand-text-muted/40 focus:outline-none focus:border-brand-gold transition-colors font-body"
                    />
                  </div>

                  {/* Need Dropdown */}
                  <div>
                    <label htmlFor="kebutuhan" className="block text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-2">
                      Kebutuhan Layanan *
                    </label>
                    <select
                      id="kebutuhan"
                      name="kebutuhan"
                      value={formData.kebutuhan}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-green-light rounded-xl px-4 py-3.5 text-sm text-brand-text-light focus:outline-none focus:border-brand-gold transition-colors font-body appearance-none cursor-pointer"
                    >
                      {kebutuhanOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-brand-card">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Budget */}
                <div>
                  <label htmlFor="anggaran" className="block text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-2">
                    Perkiraan Target Anggaran (Opsional)
                  </label>
                  <input
                    type="text"
                    id="anggaran"
                    name="anggaran"
                    placeholder="Contoh: Rp 500 Juta - Rp 700 Juta"
                    value={formData.anggaran}
                    onChange={handleChange}
                    className="w-full bg-brand-bg border border-brand-green-light rounded-xl px-4 py-3.5 text-sm text-brand-text-light placeholder-brand-text-muted/40 focus:outline-none focus:border-brand-gold transition-colors font-body"
                  />
                </div>

                {/* Story Needs (Textarea) */}
                <div>
                  <label htmlFor="detail" className="block text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-2">
                    Ceritakan Kebutuhan Hunian Anda *
                  </label>
                  <textarea
                    id="detail"
                    name="detail"
                    required
                    rows="4"
                    placeholder="Jelaskan kebutuhan ruangan Anda (contoh: 3 kamar tidur, 2 kamar mandi, 2 lantai, model scandinavian)..."
                    value={formData.detail}
                    onChange={handleChange}
                    className="w-full bg-brand-bg border border-brand-green-light rounded-xl px-4 py-3.5 text-sm text-brand-text-light placeholder-brand-text-muted/40 focus:outline-none focus:border-brand-gold transition-colors font-body resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-bg font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:from-brand-gold-light hover:to-brand-gold shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.45)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Menghubungkan...</span>
                  ) : (
                    <>
                      Kirim Ke WhatsApp Deviana
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
