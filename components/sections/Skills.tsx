"use client";

import { skillCategories } from "@/data/skills";

import { Reveal } from "@/components/ui/Reveal";
import { TypingHeading } from "@/components/ui/TypingHeading";

import {
  FaServer,
  FaShieldAlt,
  FaBrain,
  FaCode,
} from "react-icons/fa";

import {
  HiOutlineCpuChip,
} from "react-icons/hi2";

function getCategoryIcon(title: string) {
  if (title.includes("Systems")) {
    return <HiOutlineCpuChip size={24} />;
  }

  if (title.includes("Backend")) {
    return <FaServer size={22} />;
  }

  if (title.includes("AI")) {
    return <FaBrain size={22} />;
  }

  if (title.includes("Security")) {
    return <FaShieldAlt size={22} />;
  }

  return <FaCode size={22} />;
}

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-white/10 bg-[#020403] px-6 py-28"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Technical Depth
            </p>

            <TypingHeading
              text="Engineering across multiple layers of the stack."
              className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
            />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Focused on systems programming, scalable backend
              architecture, AI tooling, networking, and infrastructure
              engineering.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.10),transparent_45%)]" />
                </div>

                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400">
                      {getCategoryIcon(category.title)}
                    </div>

                    <h3 className="text-3xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}