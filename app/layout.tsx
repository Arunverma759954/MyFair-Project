import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ContactButton } from "./components/ContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayfair Hill Resort | Luxury Hotel in Darjeeling",
  description:
    "Experience colonial charm, Himalayan views, and refined hospitality at Mayfair Hill Resort in Darjeeling. Luxury rooms, curated experiences, and elegant event spaces.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-slate-900`}
      >
        <div className="flex min-h-screen min-w-0 max-w-full flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1 pt-16 sm:pt-20">{children}</main>
          <Footer />
          <ContactButton />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
