"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Download,
} from "lucide-react";

const terminalLines = [
  ["boot", "portfolio runtime initialized"],
  ["load", "systems • ai • backend • security"],
  ["status", "available for software engineering roles"],
  ["focus", "building reliable systems from first principles"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#020403]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,222,128,0.18),transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,4,3,0.96))]" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-32 hidden h-40 w-40 rounded-full border border-green-400/20 lg:block"
      />

      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-16 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/[0.02] lg:block"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 pt-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>

            Available for opportunities
          </motion.div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            I build systems that solve{" "}
            <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              real problems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Computer Science student at Arizona State University focused on
            systems programming, backend engineering, AI infrastructure,
            cybersecurity, and developer tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-green-400 px-6 py-3 font-medium text-black transition hover:bg-green-300"
            >
              View My Work

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download="Nilesh_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-white transition hover:bg-white/[0.08]"
            >
              Download Resume

              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Systems",
              "Security",
              "AI Infrastructure",
              "Backend",
              "Problem Solving",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35 + index * 0.08,
                }}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative rounded-2xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-400/20 via-transparent to-transparent opacity-70" />

          <div className="relative rounded-2xl bg-black/70">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />

              <span className="h-3 w-3 rounded-full bg-yellow-400" />

              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-auto text-xs text-green-400">
                nilesh@portfolio:~
              </span>
            </div>

            <div className="space-y-6 p-6 font-mono text-sm">
              <div>
                <p className="text-green-400">
                  &gt; runtime.scan()
                </p>

                <div className="mt-4 space-y-3">
                  {terminalLines.map(([cmd, value], index) => (
                    <motion.div
                      key={cmd}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.18,
                      }}
                      className="grid grid-cols-[90px_1fr] gap-4 text-zinc-300"
                    >
                      <span className="text-green-400">
                        {cmd}
                      </span>

                      <span>{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-green-400">
                  &gt; active_projects
                </p>

                <div className="mt-4 grid gap-3 text-zinc-300">
                  {[
                    "NucleusDB",
                    "MiniNetStack",
                    "Atlas Agent",
                    "OSINT Pipeline",
                  ].map((project) => (
                    <div
                      key={project}
                      className="flex items-center justify-between"
                    >
                      <span>{project}</span>

                      <span className="text-xs text-green-400">
                        online
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-green-400">
                &gt;{" "}
                <span className="animate-pulse">
                  _
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}