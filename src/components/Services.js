"use client";
import { Monitor, ShoppingCart, BarChart4 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Performance Marketing",
      description:
        "ROI-driven ad campaigns on Google & Meta that scale ecommerce brands profitably. Focused on sales, not vanity metrics.",
      icon: BarChart4,
    },
    {
      title: "Ecommerce Development",
      description:
        "Conversion-optimized Shopify & WordPress stores built to turn visitors into loyal customers.",
      icon: ShoppingCart,
    },
    {
      title: "SEO & Content Strategy",
      description:
        "Search-first strategies that bring consistent, high-intent traffic and measurable growth.",
      icon: Monitor,
    },
  ];

  return (
    <section
      id="services"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-20"
    >
      {/* Heading */}
      <p className="text-left text-lg sm:text-xl text-[#ebb2ff] font-medium mb-2">
        - Services
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-0 leading-snug">
          <span className="font-serif">Services</span> I Provide
        </h2>
        <Link
          href="/services"
          className="btn-gradient rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium"
        >
          View All Services
        </Link>
      </div>

      <p className="text-base sm:text-lg text-white max-w-2xl mb-12 sm:mb-16">
        Helping ecommerce brands grow with performance marketing, optimized
        stores, and long-term traffic strategies.
      </p>

      {/* Services Grid */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-[#4241427d] backdrop-blur-md border border-white/10 
                       p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-5 sm:mb-6 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#ebb2ff1a] group-hover:bg-[#ebb2ff2a] transition">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#ebb2ff]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16 sm:mt-20">
        <Link
          href="#contact"
          className="btn-gradient rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold"
        >
          Let’s Work Together
        </Link>
      </div>
    </section>
  );
}
