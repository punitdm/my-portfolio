"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ✅ Keep metrics outside to avoid re-creation on each render
const metrics = [
  { number: 60, label: "Projects Completed", suffix: "+", ring: 85 },
  { number: 35, label: "Average ROI Boost", suffix: "%+", ring: 70 },
  { number: 5, label: "Countries Served", suffix: "+", ring: 50 },
  { number: 4, label: "Years in Performance Marketing", suffix: "+", ring: 60 },
  { number: 10, label: "Monthly Ad Spend Managed ($K)", suffix: "+", ring: 75 },
  { number: 25, label: "Conversion Rate Lift", suffix: "%+", ring: 65 },
];

const RING_RADIUS = 26;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function MetricRing({ percent, inView }) {
  return (
    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r={RING_RADIUS}
        fill="none"
        stroke="var(--card-border)"
        strokeWidth="4"
      />
      <motion.circle
        cx="32"
        cy="32"
        r={RING_RADIUS}
        fill="none"
        stroke="url(#metric-ring-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={RING_CIRCUMFERENCE}
        initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
        animate={
          inView
            ? { strokeDashoffset: RING_CIRCUMFERENCE * (1 - percent / 100) }
            : {}
        }
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Metrics() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    let frame;

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts(metrics.map((metric) => Math.floor(metric.number * progress)));

      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="relative flex flex-col items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 max-w-6xl mx-auto"
    >
      {/* Shared gradient for the rings */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="metric-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="text-center mb-12">
        <p className="text-xl text-accent font-medium mb-2">- Achievements</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Proven Results</h2>
        <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Driving measurable business growth across ecommerce brands worldwide.
          From ad campaigns to web optimization, these numbers tell the story.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            className="card-glass glow-accent-hover rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.5 }}
          >
            <div className="relative mb-3">
              <MetricRing percent={metric.ring} inView={inView} />
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-accent-bright">
                {counts[idx]}
                {metric.suffix}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-accent-bright">
              {counts[idx]}
              {metric.suffix}
            </h3>
            <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Growth sparkline strip */}
      <motion.div
        className="card-glass rounded-2xl mt-10 p-6 w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <p className="font-semibold text-accent-bright">Revenue growth across managed brands</p>
          <span className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-medium">
            Last 12 months
          </span>
        </div>
        <svg viewBox="0 0 600 120" className="w-full h-24" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 100 C 50 95 80 80 120 78 S 200 85 250 65 S 340 40 400 45 S 520 20 600 10"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <path
            d="M0 100 C 50 95 80 80 120 78 S 200 85 250 65 S 340 40 400 45 S 520 20 600 10 L 600 120 L 0 120 Z"
            fill="url(#spark-fill)"
          />
        </svg>
      </motion.div>
    </section>
  );
}
