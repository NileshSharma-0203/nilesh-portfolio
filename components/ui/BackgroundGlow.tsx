"use client";

import { motion } from "framer-motion";

export function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[-120px] top-[10%] z-0 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed bottom-[5%] right-[-120px] z-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px]"
      />
    </>
  );
}