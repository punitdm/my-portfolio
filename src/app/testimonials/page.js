"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Punit's marketing strategies helped us scale our ecommerce store by 40% in just 6 months. His approach to Meta Ads and Shopify CRO is unlike any agency we've worked with — truly result-driven.",
    name: "Rohan Mehta",
    designation: "Founder",
    company: "Zenith Distributors",
    result: "+40% Revenue in 6 months",
  },
  {
    quote:
      "His Shopify development skills and conversion optimizations drove a 25% increase in checkout completions. The store he built was fast, clean, and incredibly easy to manage.",
    name: "Sneha Kapoor",
    designation: "Marketing Lead",
    company: "Bloom Cart",
    result: "+25% Checkout Conversions",
  },
  {
    quote:
      "Punit delivered measurable ROI with Google & Meta Ads, improving our ad efficiency and overall revenue. He doesn't just run ads — he builds a real growth system around your brand.",
    name: "Aditya Singh",
    designation: "Digital Manager",
    company: "The Natural Wash",
    result: "3.5x ROAS Achieved",
  },
  {
    quote:
      "We saw a 180% jump in organic traffic after Punit handled our SEO. He understood our niche, restructured the content, and built backlinks that actually moved the needle on Google.",
    name: "Priya Nair",
    designation: "CEO",
    company: "GreenLeaf Organics",
    result: "+180% Organic Traffic",
  },
  {
    quote:
      "Working with Punit felt like having a senior marketing strategist in-house. He's data-driven, communicative, and always focused on results, not just activity reports.",
    name: "Rahul Sharma",
    designation: "Co-Founder",
    company: "Craft & Co.",
    result: "Reduced CAC by 35%",
  },
  {
    quote:
      "Punit completely transformed our WhatsApp & email retention flows. Our repeat purchase rate doubled within 3 months. Highly recommended for any D2C brand looking for real growth.",
    name: "Kavya Menon",
    designation: "Growth Lead",
    company: "Pure Roots D2C",
    result: "2x Repeat Purchase Rate",
  },
];

const stats = [
  { value: "60+", label: "Projects Completed" },
  { value: "35%+", label: "Average ROI Boost" },
  { value: "5+", label: "Countries Served" },
  { value: "3+", label: "Years Experience" },
];

export default function TestimonialsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Client Stories</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">What People Say</h1>
        <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Real results, real feedback — from founders, marketers, and growth teams across ecommerce brands.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <div key={i} className="card-glass rounded-2xl p-5 text-center">
            <p className="text-3xl font-extrabold text-[#f3cbff]">{s.value}</p>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="card-glass rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            {/* Quote icon */}
            <Quote className="w-7 h-7 text-[#ebb2ff] opacity-60 shrink-0" />

            {/* Quote text */}
            <p className="text-sm leading-relaxed italic flex-1" style={{ color: "var(--text-secondary)" }}>
              &quot;{t.quote}&quot;
            </p>

            {/* Result badge */}
            <span className="self-start text-xs px-3 py-1 rounded-full bg-[#ebb2ff]/10 border border-[#ebb2ff]/30 text-[#ebb2ff] font-medium">
              {t.result}
            </span>

            {/* Author */}
            <div className="border-t pt-4" style={{ borderColor: "var(--card-border)" }}>
              <p className="font-semibold text-[#f3cbff]">{t.name}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {t.designation}, {t.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center card-glass rounded-2xl p-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Be the Next Success Story?</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          Let&apos;s build a performance marketing strategy that delivers real, measurable growth for your brand.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/#contact" className="btn-gradient rounded-full px-10 py-3.5 font-semibold text-lg">
            Work With Me
          </a>
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-full font-semibold text-sm border transition hover:bg-[#ebb2ff]/10"
            style={{ borderColor: "var(--card-border)", color: "var(--text-secondary)" }}
          >
            View Case Studies →
          </Link>
        </div>
      </div>
    </main>
  );
}
