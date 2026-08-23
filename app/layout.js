import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Giovanni Mendola — Portfolio",
  description: "Portfolio of Giovanni Mendola — IMS student at Kantonsschule Hottingen building full-stack web apps with Next.js, TypeScript and PostgreSQL",
  icons: {
    icon: [{ url: "/gm.png", type: "image/png" }],
    apple: "/gm.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white pt-16`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
