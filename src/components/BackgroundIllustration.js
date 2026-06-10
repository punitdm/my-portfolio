"use client";
import { motion } from "framer-motion";

export default function BackgroundIllustration() {
  const blobs = [
    {
      color: "bg-emerald-500",
      size: "w-[400px] h-[400px]",
      position: "top-[-100px] left-[-100px]",
      delay: 0,
    },
    {
      color: "bg-cyan-500",
      size: "w-[350px] h-[350px]",
      position: "bottom-[-120px] right-[-80px]",
      delay: 2,
    },
    {
      color: "bg-blue-700",
      size: "w-[300px] h-[300px]",
      position: "top-[200px] right-[150px]",
      delay: 4,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Glowing blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`${blob.color} ${blob.size} ${blob.position} rounded-full filter blur-3xl opacity-20 absolute`}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="bg-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.6"
            />
          </pattern>
          <radialGradient id="bg-grid-fade" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="bg-grid-mask">
            <rect width="100%" height="100%" fill="url(#bg-grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-grid)" mask="url(#bg-grid-mask)" />
      </svg>

      {/* Drifting signal line */}
      <svg
        className="absolute bottom-[12%] left-0 w-full h-32 opacity-25"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0 90 C 180 90 220 30 380 40 S 640 100 820 70 S 1150 20 1440 50"
          stroke="url(#bg-line-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="bg-line-grad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="0.5" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent-2)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
