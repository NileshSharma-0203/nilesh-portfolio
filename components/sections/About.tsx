"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TypingHeading } from "@/components/ui/TypingHeading";

export function About() {
  return (
    <section className="border-b border-white/10 bg-[#020403] px-6 py-28">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              About Me
            </p>

            <TypingHeading
              text="Engineering systems with depth, discipline, and curiosity."
              className="text-4xl font-semibold tracking-tight text-white md:text-6xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8 text-lg leading-9 text-zinc-400"
          >
            <p>
              I’m a Computer Science student at Arizona State University focused
              on systems engineering, backend infrastructure, networking, AI
              tooling, and scalable software architecture.
            </p>

            <p>
              I enjoy building projects that force me to understand how software
              works beneath abstractions — from database storage engines and
              TCP/IP networking internals to autonomous AI runtimes and developer
              tooling systems.
            </p>

            <p>
              My approach to engineering is heavily influenced by systems
              thinking, probabilistic reasoning, and performance-oriented design.
            </p>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}