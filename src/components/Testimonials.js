"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Punit’s marketing strategies helped us scale our ecommerce store by 40% in 6 months.",
      name: "Rohan Mehta",
      designation: "Founder",
      company: "Zenith Distributors",
    },
    {
      quote: "His Shopify development skills and conversion optimizations drove a 25% increase in checkout conversions.",
      name: "Sneha Kapoor",
      designation: "Marketing Lead",
      company: "Bloom Cart",
    },
    {
      quote: "Punit delivered measurable ROI with Google & Meta Ads, improving our ad efficiency and revenue.",
      name: "Aditya Singh",
      designation: "Digital Manager",
      company: "The Natural Wash",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative px-4 sm:px-6 md:px-8 py-16 max-w-6xl mx-auto flex flex-col items-center"
    >

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Testimonials</p>
        <h2 className="text-4xl sm:text-5xl font-bold">What People Say</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Feedback from clients and colleagues highlighting results and collaboration.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-[#4241427d] backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <p className="text-gray-200 italic mb-4">&quot;{t.quote}&quot;</p>
            <p className="text-[#f3cbff] font-semibold">{t.name}</p>
            <p className="text-gray-400 text-sm">{t.designation}, {t.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
