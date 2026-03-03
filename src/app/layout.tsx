import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laur Fischer | Trail Running Coach — Seattle, WA",
  description:
    "Laur Fischer is a trans trail running coach in Seattle committed to building an inclusive running community. Coaching packages with a sliding scale for LGBTQIA+ and BIPOC runners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-[family-name:var(--font-sans-var)] antialiased bg-[#f5efe6] text-[#3d2b1f]`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
