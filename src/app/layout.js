import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "PT Tama Living Construction | Your Personal Homebuild Companion",
  description: "Jasa Desain Rumah Profesional, Gambar Kerja, RAB, dan Pembangunan Terbaik di Sumatera Utara, Solo, dan Surakarta. Dapatkan garansi pemeliharaan 6 bulan dan desain terintegrasi.",
  keywords: "desain rumah, bangun rumah, gambar kerja, RAB, bangun rumah Solo, bangun rumah Medan, kontraktor Sumatera Utara, Tama Living Construction, PT Tama Living",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-[#05110b] text-[#f2f6f3] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
