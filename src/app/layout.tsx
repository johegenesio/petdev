import type { Metadata } from "next";
import { Geist, Geist_Mono, Oi } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oi = Oi({
  variable: "--font-oi",
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PetShop Dev",
  description: "PetShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${oi.variable} ${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit/>
      </body>
    </html>
  );
}
