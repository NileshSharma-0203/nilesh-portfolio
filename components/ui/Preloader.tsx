"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> initializing portfolio runtime",
  "> loading systems interface",
  "> mounting projects",
  "> establishing secure channel",
  "> syncing motion layer",
  "> interface ready",
];

export function Preloader() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFinished(true);
    }, 4200);

    return () => window.clearTimeout(timer);
  }, []);

  if (finished) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] overflow-hidden bg-[#020403]"
    >
      {/* glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.12),transparent_40%)]" />

      {/* cyber grid */}

      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(74,222,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      {/* scan line */}

      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100vh" }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-transparent via-green-400/10 to-transparent"
      />

      {/* random glitch lines */}

      <motion.div
        animate={{
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 0.18,
          repeat: Infinity,
          repeatDelay: 2.4,
        }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(74,222,128,0.05)_50%)] bg-[length:100%_4px]"
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-2xl rounded-3xl border border-green-400/20 bg-black/60 p-8 shadow-[0_0_80px_rgba(74,222,128,0.08)] backdrop-blur-2xl"
        >
          {/* top */}

          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(74,222,128,0.2)",
                    "0 0 50px rgba(74,222,128,0.45)",
                    "0 0 20px rgba(74,222,128,0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-green-400/30 bg-green-400/10 text-3xl font-black text-green-400"
              >
                NS
              </motion.div>

              <div>
                <p className="font-mono text-sm uppercase tracking-[0.35em] text-green-400">
                  portfolio.runtime()
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  secure engineering interface
                </p>
              </div>
            </div>

            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="hidden font-mono text-xs text-green-400 md:block"
            >
              STATUS: ONLINE
            </motion.div>
          </div>

          {/* terminal logs */}

          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/50 p-6 font-mono text-sm">
            {lines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + index * 0.4,
                }}
                className="flex items-center gap-3 text-zinc-300"
              >
                <span className="text-green-400">$</span>

                <span>{line}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="flex items-center gap-2 text-green-400"
            >
              <span>&gt;</span>

              <span className="animate-pulse">_</span>
            </motion.div>
          </div>

          {/* cinematic loading bar */}

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              <span>System Breach Sequence</span>

              <motion.span
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                }}
                className="text-green-400"
              >
                encrypted uplink
              </motion.span>
            </div>

            <div className="relative h-7 overflow-hidden rounded-md border border-green-400/30 bg-black shadow-[0_0_35px_rgba(74,222,128,0.15)]">
              {/* grid */}

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,222,128,0.10)_1px,transparent_1px)] bg-[size:14px_14px] opacity-50" />

              {/* loading */}

              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 3.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative h-full overflow-hidden bg-gradient-to-r from-green-950 via-green-500 to-lime-300"
              >
                {/* moving shine */}

                <motion.div
                  animate={{
                    x: ["-100%", "500%"],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 w-16 skew-x-[-25deg] bg-white/40 blur-md"
                />

                {/* stripes */}

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.35)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.35)_50%,rgba(0,0,0,0.35)_75%,transparent_75%,transparent)] bg-[size:18px_18px]" />
              </motion.div>

              {/* moving glow */}

              <motion.div
                animate={{
                  x: ["-20%", "120%"],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-20 bg-green-300/20 blur-xl"
              />

              {/* text */}

              <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-black mix-blend-screen">
                ACCESSING SYSTEM
              </div>
            </div>

            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              <span>sector_07</span>

              <span>packet stream active</span>

              <span className="text-green-400">
                100%
              </span>
            </div>
          </div>

          {/* fake stats */}

          <div className="mt-5 grid grid-cols-3 gap-4 font-mono text-xs text-zinc-500">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-green-400">
                LATENCY
              </p>

              <p className="mt-1 text-white">
                12ms
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-green-400">
                THREADS
              </p>

              <p className="mt-1 text-white">
                32
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-green-400">
                STATUS
              </p>

              <p className="mt-1 text-white">
                READY
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}