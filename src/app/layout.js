import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundIllustration from "@/components/BackgroundIllustration";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

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
      <body className="font-sans" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <ThemeProvider>
          <Preloader />
          <SmoothScroll>
            <BackgroundIllustration />
            <Navbar />
            <main>{children}</main>
          </SmoothScroll>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
