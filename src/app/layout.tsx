import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Merriweather, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ImageGalleryProvider } from "@/contexts/ImageGalleryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foggy3D - Premium 3D Printing Services in San Francisco",
  description: "Professional 3D printing and custom design services in San Francisco. High-quality prototypes, custom parts, and creative solutions with expert engineering support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${merriweather.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ImageGalleryProvider>
          {children}
        </ImageGalleryProvider>
      </body>
    </html>
  );
}
