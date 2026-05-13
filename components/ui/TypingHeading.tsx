"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingHeadingProps {
  text: string;
  className?: string;
}

export function TypingHeading({
  text,
  className = "",
}: TypingHeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.6,
  });

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isInView) {
      setDisplayText("");
      return;
    }

    let index = 0;

    const interval = window.setInterval(() => {
      setDisplayText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 110);

    return () => window.clearInterval(interval);
  }, [isInView, text]);

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {displayText}

      <span className="ml-1 animate-pulse text-green-400">
        |
      </span>
    </motion.h2>
  );
}