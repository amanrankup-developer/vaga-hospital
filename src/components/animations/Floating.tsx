"use client";

import { motion } from "framer-motion";

interface FloatingProps {
  children: React.ReactNode;
  speed?: "slow" | "normal" | "fast";
    amplitude?: number;
}

export default function Floating({
  children,
  speed = "normal",
}: FloatingProps) {
  const duration =
    speed === "slow"
      ? 8
      : speed === "fast"
      ? 4
      : 6;

  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}