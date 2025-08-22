import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Urban Real estate Agent",
  description: "Your Trusted Real Estate Agent is in Your DoorStep",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${bricolage.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
