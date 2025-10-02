import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundIllustration from "@/components/BackgroundIllustration";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Punit Chauhan's Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-darkPurple text-white font-sans">
        <SmoothScroll />
                {/* Background lives here globally */}
        <BackgroundIllustration />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
