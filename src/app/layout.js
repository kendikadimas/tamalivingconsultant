import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://tamalivingconstruction.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PT Tama Living Construction | Jasa Desain & Bangun Rumah",
    template: "%s | Tama Living Construction",
  },
  description:
    "Jasa Desain Rumah Profesional, Gambar Kerja, RAB, dan Pembangunan Terbaik di Sumatera Utara dan Solo (Surakarta). Garansi pemeliharaan 6 bulan. Konsultasi gratis.",
  keywords: [
    "jasa desain rumah",
    "arsitek online",
    "gambar kerja rumah",
    "jasa RAB bangunan",
    "bangun rumah Solo (Surakarta)",
    "bangun rumah Medan",
    "kontraktor Sumatera Utara",
    "Tama Living Construction",
    "PT Tama Living",
    "jasa konstruksi",
    "arsitek rumah",
  ],
  authors: [{ name: "PT Tama Living Construction" }],
  creator: "PT Tama Living Construction",
  publisher: "PT Tama Living Construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Tama Living Construction",
    title: "PT Tama Living Construction | Jasa Desain & Bangun Rumah",
    description:
      "Jasa Desain Rumah Profesional, Gambar Kerja, RAB, dan Pembangunan Terbaik di Sumatera Utara dan Solo (Surakarta). Garansi pemeliharaan 6 bulan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tama Living Construction — Jasa Desain & Bangun Rumah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Tama Living Construction | Jasa Desain & Bangun Rumah",
    description:
      "Jasa Desain Rumah Profesional, Gambar Kerja, RAB, dan Pembangunan. Garansi 6 bulan. Konsultasi gratis.",
    images: ["/og-image.png"],
  },
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
        {/* Skip navigation link for keyboard users */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#c5a880] focus:text-[#040d08] focus:font-bold focus:text-sm focus:shadow-lg"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
