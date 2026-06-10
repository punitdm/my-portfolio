"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, BarChart3, Megaphone } from "lucide-react";

const highlights = [
  { icon: Megaphone, label: "Meta & Google Ads" },
  { icon: ShoppingBag, label: "Shopify & CRO" },
  { icon: TrendingUp, label: "Performance Marketing" },
  { icon: BarChart3, label: "SEO & Analytics" },
];

export default function About() {
  return (
    <section className="px-6 sm:px-8 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

      {/* Image */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl p-1 bg-gradient-to-br from-[#00ff9c] to-[#00b8ff] shadow-[0_10px_30px_rgba(0,255,156,0.2)]">
          <Image
            src="/about.jpg"
            alt="About Me"
            width={256}
            height={256}
            className="w-64 h-64 rounded-2xl object-cover"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="w-full md:w-2/3 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          About <span className="text-gradient-neon">Me</span>
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          I&apos;m a <span className="text-accent font-semibold">performance marketer</span> passionate
          about scaling D2C and ecommerce brands profitably. With hands-on experience in{" "}
          <span className="text-accent font-semibold">Meta & Google Ads, Shopify CRO, and analytics</span>,
          I bridge strategy and execution to deliver measurable growth — not vanity metrics.
        </p>

        {/* Highlights Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          {highlights.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="card-glass glow-accent-hover flex items-center gap-3 px-4 py-3 rounded-lg"
            >
              <Icon className="w-5 h-5 text-accent shrink-0" />
              {label}
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="/Punit-Chauhan-Performance-Marketing-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient rounded-lg px-6 py-3 text-center"
          >
            Download Resume
          </a>
          <a
            href="/#contact"
            className="rounded-lg px-6 py-3 text-center font-semibold border border-accent/40 text-accent hover:bg-accent/10 transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
