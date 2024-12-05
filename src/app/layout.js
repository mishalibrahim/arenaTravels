import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from "next/font/google";
import Lenis from "@/components/Lenis";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`${safiro.variable}  antialiased`}>
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
