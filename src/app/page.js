import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://tamalivingconstruction.com/#business",
      "name": "PT Tama Living Construction",
      "alternateName": "Tama Living Construction",
      "url": "https://tamalivingconstruction.com",
      "logo": "https://tamalivingconstruction.com/logo-tamaliving.png",
      "image": "https://tamalivingconstruction.com/og-image.png",
      "description": "Jasa Desain Rumah Profesional, Gambar Kerja, RAB, dan Pembangunan Terbaik di Sumatera Utara, Solo, dan Surakarta.",
      "telephone": "+62",
      "areaServed": [
        { "@type": "State", "name": "Sumatera Utara" },
        { "@type": "City", "name": "Solo" },
        { "@type": "City", "name": "Surakarta" }
      ],
      "serviceType": ["Desain Rumah", "Gambar Kerja", "RAB", "Bangun Rumah"],
      "priceRange": "Rp45.000 - Rp80.000 /m²",
      "sameAs": []
    },
    {
      "@type": "Service",
      "@id": "https://tamalivingconstruction.com/#service-desain",
      "name": "Desain Rumah",
      "provider": { "@id": "https://tamalivingconstruction.com/#business" },
      "areaServed": "Seluruh Indonesia",
      "description": "Perancangan konsep tata ruang fungsional dan visualisasi 3D eksterior berkualitas tinggi."
    },
    {
      "@type": "Service",
      "@id": "https://tamalivingconstruction.com/#service-gambar",
      "name": "Gambar Kerja",
      "provider": { "@id": "https://tamalivingconstruction.com/#business" },
      "areaServed": "Seluruh Indonesia",
      "description": "Penyusunan gambar teknis mendalam mencakup Arsitektur, Struktur Sipil, dan instalasi MEP."
    },
    {
      "@type": "Service",
      "@id": "https://tamalivingconstruction.com/#service-rab",
      "name": "RAB & Estimasi Biaya",
      "provider": { "@id": "https://tamalivingconstruction.com/#business" },
      "areaServed": "Seluruh Indonesia",
      "description": "Pembuatan Rencana Anggaran Biaya terstruktur untuk mengontrol alokasi dana pembangunan."
    },
    {
      "@type": "Service",
      "@id": "https://tamalivingconstruction.com/#service-bangun",
      "name": "Bangun Rumah",
      "provider": { "@id": "https://tamalivingconstruction.com/#business" },
      "areaServed": ["Sumatera Utara", "Solo", "Surakarta"],
      "description": "Pembangunan fisik rumah oleh tukang terlatih dengan pengawasan site manager profesional dan garansi pemeliharaan 6 bulan."
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Problems & Solutions (Mengapa Kami) */}
        <Problems />

        {/* Services Showcase */}
        <Services />

        {/* Package Tiers */}
        <Packages />

        {/* Project Lifecycle Process */}
        <Process />

        {/* FAQ Section */}
        <Faq />

        {/* Interactive Consultation Form */}
        <ConsultationForm />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}
