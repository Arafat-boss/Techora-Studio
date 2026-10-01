import type { Metadata } from "next";
import { Instrument_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techora — Next-Gen Hardware, Digital Products & Brand Systems",
  description: "A precision design studio crafted for breakthrough physical hardware, tactile computing, next-gen digital experiences, and visionary brand systems.",
  keywords: ["design studio", "hardware design", "digital products", "brand systems", "nextjs", "framer template", "techora"],
  openGraph: {
    title: "Techora — Design for Everyone",
    description: "Thoughtful design across brands, products, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="bg-black text-white selection:bg-[#a2e435] selection:text-black font-sans min-h-screen flex flex-col relative overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
