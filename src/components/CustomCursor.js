"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const computed = window.getComputedStyle(e.target).cursor;
      setIsPointer(computed === "pointer");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: pos.x - (isPointer ? 20 : 16),
          y: pos.y - (isPointer ? 20 : 16),
          width: isPointer ? 40 : 32,
          height: isPointer ? 40 : 32,
          borderColor: isPointer ? "rgba(235,178,255,1)" : "rgba(235,178,255,0.5)",
          backgroundColor: isPointer ? "rgba(235,178,255,0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#f3cbff] pointer-events-none z-[9998] hidden md:block"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: "spring", stiffness: 800, damping: 30 }}
      />
    </>
  );
}
