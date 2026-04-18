"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone} from "lucide-react";
import { FaInstagram, FaLinkedin , FaWhatsapp} from "react-icons/fa";

// Move constants outside (prevents unnecessary re-creation)
const roles = [
  "Performance Marketing Expert",
    "Meta & Google Ads Expert",
  "Shopify CRO Expert",
];

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/punit-chauhan-seo/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/punit.lostonpurpose/",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:punidm1@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+919871228046",
    label: "Call",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919871228046",
    label: "WhatsApp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 max-w-6xl mx-auto">
      
      {/* Content */}
      <div className="text-center md:text-left md:w-1/2">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Hi, I am{" "}
          <span className="font-extrabold text-[#f3cbff]">
            Punit Chauhan
          </span>
          ,{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inline-block font-semibold"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-base sm:text-lg mb-6 max-w-lg mx-auto md:mx-0" style={{ color: "var(--text-secondary)" }}>
          Scaled eCommerce brands to 3–5x ROAS managing $10K+ monthly ad spend
          across Meta & Google. I build high-converting Shopify stores and
          implement retention systems using WhatsApp, email, and SMS automation
          to increase repeat purchases and LTV.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          <a
            href="/Punit-Chauhan-Performance-Marketing-CV.pdf"
            className="btn-gradient rounded-lg px-4 py-2 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <span className="py-2 text-sm opacity-70">Or</span>

          <a
            href="#contact"
            className="btn-gradient rounded-lg px-4 py-2 text-sm sm:text-base"
          >
            Hire Me
          </a>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            Open to Work · Available for freelance
          </span>
        </div>

      </div>

      {/* Hero Image + Socials */}
      <div className="md:w-1/2 flex flex-col items-center gap-5 mb-8 md:mb-0">

        {/* Photo */}
        <div className="rounded-3xl p-1 bg-gradient-to-r from-[#ebb2ff] to-[#ce85e9] shadow-[0_10px_20px_#5721557e] hover:scale-105 transition-transform">
          <Image
            src="/profile2.png"
            alt="Punit Chauhan"
            width={350}
            height={350}
            className="rounded-3xl object-cover w-40 sm:w-56 md:w-[350px] h-auto"
            priority
          />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#ebb2ff]/20 hover:border-[#ebb2ff]/60 hover:text-[#f3cbff] transition-colors duration-200"
              style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)", color: "var(--foreground)" }}
            >
              <Icon size={18} strokeWidth={1.8} />
            </motion.a>
          ))}
        </div>

      </div>

    </section>
  );
}