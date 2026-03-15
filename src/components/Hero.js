"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const roles = [
    "Performance Marketing Specialist",
    "Shopify CRO Expert",
    "Meta & Google Ads Strategist",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 max-w-6xl mx-auto">

      {/* Content */}
      <div className="text-center md:text-left md:w-1/2">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Hi, I’m{" "}
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
              transition={{ duration: 0.6 }}
              className="inline-block font-semibold text-white"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-base sm:text-lg mb-6 max-w-lg mx-auto md:mx-0">
          Performance Marketing Specialist with 3+ years of experience scaling
          ecommerce brands using ROI-focused ad strategies on Meta and Google.
          I manage $10K+ monthly ad spend, build high-converting Shopify stores,
          and implement retention systems using WhatsApp, email, and SMS
          automation to increase repeat purchases and customer lifetime value.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          <a
            href="/Punit-Chauhan-Performance-Marketing-CV.pdf"
            className="btn-gradient rounded-lg px-4 py-2 text-sm sm:text-base"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="btn-gradient rounded-lg px-4 py-2 text-sm sm:text-base"
          >
            Hire Me
          </a>
        </div>

       <div className="mt-5">
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
            🟢 Available for freelance projects
          </span>
        </div>

      </div>

      {/* Hero Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">

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

      </div>

    </section>
  )
}