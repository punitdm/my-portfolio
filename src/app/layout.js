import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import BackgroundIllustration from "@/components/BackgroundIllustration";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
});

export const metadata = {
  title: "Punit Chauhan's Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
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
