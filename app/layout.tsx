import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fidinda Travel Solutions | Travel Made Simpler. Journeys Made Personal.",
    template: "%s | Fidinda Travel Solutions",
  },
  description:
    "Fidinda Travel Solutions, Phnom Penh — air ticketing, visa application assistance, personalised travel planning, attraction bookings and inbound & outbound Cambodia tours.",
  keywords: [
    "Fidinda",
    "travel agency Phnom Penh",
    "Cambodia tours",
    "air ticketing Cambodia",
    "visa assistance Cambodia",
    "inbound Cambodia travel",
  ],
  openGraph: {
    title: "Fidinda Travel Solutions",
    description: "Travel Made Simpler. Journeys Made Personal.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <Reveal />
      </body>
    </html>
  );
}
