"use client";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingBag,
  BarChart3,
  Target,
  FileText,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <TrendingUp className="w-10 h-10 text-[#f3cbff]" />,
      title: "Performance Marketing",
      desc: "Expert in Google & Meta Ads campaigns",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-[#f3cbff]" />,
      title: "Shopify / WordPress Development",
      desc: "Building and optimizing ecommerce stores",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#f3cbff]" />,
      title: "SEO & Analytics",
      desc: "Driving traffic and insights through data",
    },
    {
      icon: <Target className="w-10 h-10 text-[#f3cbff]" />,
      title: "Conversion Optimization",
      desc: "Turning visitors into paying customers",
    },
    {
      icon: <FileText className="w-10 h-10 text-[#f3cbff]" />,
      title: "Content Strategy",
      desc: "Crafting engaging and impactful campaigns",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
    >

      {/* Content */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
          What I Do Best
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Core skills and expertise I bring to every project
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_10px_20px_#5721557e] hover:shadow-[0_15px_30px_#572155aa] hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-300 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}