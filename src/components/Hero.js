"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const roles = [
    "Performance Marketer",
    "E-Commerce Expert",
    "Website Developer",
  ];
  const [index, setIndex] = useState(0);

  // cycle roles every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]); // added dependency


  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 max-w-6xl mx-auto">


  {/* Content */}
  <div className="text-center md:text-left md:w-1/2">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Hi, I’m{" "}
      <span className="font-extrabold text-[#f3cbff]">Punit Chauhan</span>,{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block font-semibold text-white"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </h1>

    <p className="text-base sm:text-lg mb-6 max-w-lg mx-auto md:mx-0">
      with 3+ years experience driving revenue growth for ecommerce brands
      across 5+ countries. Specialized in running ROI-driven ad campaigns
      (Meta + Google), SEO strategies, and conversion-optimized
      Shopify/WordPress builds. Proven track record of managing 60+ projects
      that delivered measurable business results — not just traffic, but
      real sales and scale.
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
      <a href="/resume.pdf" className="btn-gradient rounded-lg px-4 py-2 text-sm sm:text-base">
        Download Resume
      </a>
      <a href="#contact" className="btn-gradient rounded-lg px-4 py-2 text-sm sm:text-base">
        Hire Me
      </a>
    </div>
  </div>

  {/* Hero Image with gradient/glow effect */}
  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
    <div className="rounded-3xl p-1 bg-gradient-to-r from-[#ebb2ff] to-[#ce85e9] shadow-[0_10px_20px_#5721557e] hover:scale-105 transition-transform">
      <Image
        src="/profile.png"
        alt="Punit Chauhan"
        width={280}
        height={280}
        className="rounded-3xl object-cover w-40 sm:w-56 md:w-[350px] h-auto"
        priority
      />
    </div>
  </div>
</section>

  );
}
