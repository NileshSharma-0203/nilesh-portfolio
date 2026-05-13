"use client";

import { motion } from "framer-motion";
import {
  FaDatabase,
  FaNetworkWired,
  FaUserSecret,
  FaRobot,
} from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: string;
  visual: string;
}

function getIcon(type: string) {
  if (type === "database") return FaDatabase;
  if (type === "network") return FaNetworkWired;
  if (type === "security") return FaUserSecret;
  return FaRobot;
}

function ProjectVisual({ type }: { type: string }) {
  const Icon = getIcon(type);

  return (
    <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.22),transparent_55%)]" />

      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(rgba(74,222,128,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.18)_1px,transparent_1px)] bg-[size:22px_22px]" />
      </div>

      {type === "network" && (
        <>
          <span className="absolute left-8 top-8 h-3 w-3 rounded-full bg-green-400" />
          <span className="absolute right-10 top-12 h-3 w-3 rounded-full bg-green-400" />
          <span className="absolute bottom-10 left-16 h-3 w-3 rounded-full bg-green-400" />
          <span className="absolute bottom-8 right-16 h-3 w-3 rounded-full bg-green-400" />
          <div className="absolute h-px w-40 rotate-12 bg-green-400/40" />
          <div className="absolute h-px w-32 -rotate-45 bg-green-400/40" />
        </>
      )}

      {type === "database" && (
        <div className="relative grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.08,
              }}
              className="h-8 w-8 rounded-md border border-green-400/40 bg-green-400/15"
            />
          ))}
        </div>
      )}

      {type === "security" && (
        <div className="relative h-28 w-28 rounded-full border border-green-400/30">
          <div className="absolute inset-3 rounded-full border border-green-400/20" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-green-400/30" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-green-400/30" />
        </div>
      )}

      {type === "agent" && (
        <div className="relative h-24 w-24 rounded-2xl border border-green-400/30 bg-green-400/10">
          <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-green-400" />
          <div className="absolute right-5 top-5 h-3 w-3 rounded-full bg-green-400" />
          <div className="absolute bottom-6 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-green-400/70" />
        </div>
      )}

      <Icon className="absolute bottom-4 right-4 text-green-400/70" size={26} />
    </div>
  );
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  status,
  visual,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.14),transparent_42%)]" />
      </div>

      <div className="relative z-10 grid gap-6 md:grid-cols-[170px_1fr]">
        <ProjectVisual type={visual} />

        <div>
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm font-medium text-green-400">
                {subtitle}
              </p>
            </div>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
              {status}
            </span>
          </div>

          <p className="leading-7 text-zinc-400">{description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}