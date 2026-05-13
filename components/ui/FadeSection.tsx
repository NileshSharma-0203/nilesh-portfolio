"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.15, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}