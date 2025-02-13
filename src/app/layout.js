import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from "next/font/google";
import Lenis from "@/components/Lenis";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const safiro = localFont({
  src: "./fonts/safiro-medium.otf",
  variable: "--font-safiro-sans",
  weight: "500",
});

export const metadata = {
  title: "🌍 Arena Travels | Best Dubai Tours & Travel Packages",
  description:
    "✈️ Explore Dubai with Arena Travels! Discover top-rated tours, vacation packages, and travel experiences in the UAE. Book now for the best deals on luxury trips, desert safaris, city tours, and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`${safiro.variable}  antialiased`}>
        <Lenis>{children}</Lenis>
        <Toaster />
      </body>
    </html>
  );
}
