"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Keep metrics outside to avoid re-creation on each render
const metrics = [
  { number: 60, label: "Projects Completed", suffix: "+" },
  { number: 35, label: "Average ROI Boost", suffix: "%+" },
  { number: 5, label: "Countries Served", suffix: "+" },
  { number: 3, label: "Years in Performance Marketing", suffix: "+" },
];

export default function Metrics() {
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts(metrics.map((metric) => Math.floor(metric.number * progress)));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []); // ✅ empty deps, runs once

  return (
    <section
      id="metrics"
      className="relative flex flex-col items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 max-w-6xl mx-auto"
    >

      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Achievements</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Proven Results</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Driving measurable business growth across ecommerce brands worldwide.
          From ad campaigns to web optimization, these numbers tell the story.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full text-center">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            className="bg-[#4241427d] backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-[#f3cbff]">
              {counts[idx]}
              {metric.suffix}
            </h3>
            <p className="text-gray-300 mt-2">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}