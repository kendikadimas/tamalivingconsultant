import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      <main className="flex-1">
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
