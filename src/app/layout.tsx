import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata  = {
  title: "Importaciones Occidente - Conectamos tu negocio con el mundo",
  description: "Importaciones Occidente ofrece servicios confiables y rápidos para conectar tu negocio con mercados internacionales. ¡Importa con confianza!",
  openGraph: {
    title: "Importaciones Occidente - Conectamos tu negocio con el mundo",
    description:
      "En Importaciones Occidente, nos especializamos en brindar soluciones de importación rápidas, seguras y personalizadas. Conéctate con los mejores mercados internacionales.",
    url: "https://www.importacionesoccidente.com", // Cambia esta URL a la real
    type: "website",
    images: [
      {
        url: "/images/hero-image.jpg", // Imagen de Open Graph
        width: 1200,
        height: 630,
        alt: "Importaciones Occidente - Soluciones de importación confiables",
      },
    ],
  },
  icons: {
    icon: "/images/favicon.ico", // Ruta al favicon
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
