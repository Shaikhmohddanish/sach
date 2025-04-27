"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">S.A.C.H</Link>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="#structure" className="hover:text-blue-600" scroll={true}>Structure</Link>
          <Link href="#ideology" className="hover:text-blue-600" scroll={true}>Ideology</Link>
          <Link href="#principles" className="hover:text-blue-600" scroll={true}>Principles</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-2 p-4 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#structure" className="hover:text-blue-600" onClick={() => setMenuOpen(false)} scroll={true}>Structure</Link>
            <Link href="#ideology" className="hover:text-blue-600" onClick={() => setMenuOpen(false)} scroll={true}>Ideology</Link>
            <Link href="#principles" className="hover:text-blue-600" onClick={() => setMenuOpen(false)} scroll={true}>Principles</Link>
            <Link href="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} S.A.C.H - Social Alliance for Change & Harmony
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>S.A.C.H - Social Alliance for Change & Harmony</title>
        <meta name="description" content="S.A.C.H (Social Alliance for Change & Harmony) is a non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society." />
        <meta name="keywords" content="S.A.C.H, Social Alliance for Change & Harmony, non-political, non-religious, social welfare, justice, empowerment, youth, anti-drugs, financial support, community, NGO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="S.A.C.H - Social Alliance for Change & Harmony" />
        <meta property="og:description" content="A non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sach.org" />
        <meta property="og:image" content="/public/next.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="S.A.C.H - Social Alliance for Change & Harmony" />
        <meta name="twitter:description" content="A non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society." />
        <meta name="twitter:image" content="/public/next.svg" />
        <link rel="canonical" href="https://sach.org" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[80vh] w-screen flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
