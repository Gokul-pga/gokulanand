import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CustomCursor from "../components/common/CustomCursor";
import ScrollToTop from "../components/common/ScrollToTop";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${spaceGrotesk.variable} md:cursor-none`}
      >
        {/* Cursor & Global Core Elements */}
        <CustomCursor />
        <ScrollToTop />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
