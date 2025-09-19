"use client";
import { motion } from "framer-motion";

export default function BackgroundIllustration() {
  const blobs = [
    {
      color: "bg-purple-500",
      size: "w-[400px] h-[400px]",
      position: "top-[-100px] left-[-100px]",
      delay: 0,
    },
    {
      color: "bg-pink-500",
      size: "w-[350px] h-[350px]",
      position: "bottom-[-120px] right-[-80px]",
      delay: 2,
    },
    {
      color: "bg-blue-500",
      size: "w-[300px] h-[300px]",
      position: "top-[200px] right-[150px]",
      delay: 4,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`${blob.color} ${blob.size} ${blob.position} rounded-full mix-blend-multiply filter blur-3xl opacity-40 absolute`}
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
    </div>
  );
}
