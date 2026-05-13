"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020403]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="text-2xl font-black text-green-400">
            NS
          </div>

          <span className="hidden text-sm font-semibold tracking-[0.25em] text-white sm:block">
            NILESH SHARMA
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-green-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/NileshSharma-0203"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 p-3 text-zinc-300 transition hover:border-green-400/30 hover:text-green-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/nilesh-sharma-b69351258/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 p-3 text-zinc-300 transition hover:border-green-400/30 hover:text-green-400"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:nilesh.sharma05@icloud.com"
            className="rounded-xl bg-green-400 p-3 text-black transition hover:bg-green-300"
          >
            <FaEnvelope size={16} />
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-white/10 p-3 text-zinc-300 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#020403]/95 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
              >
                {item.label}
              </a>
            ))}

            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href="https://github.com/NileshSharma-0203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-white/10 bg-black/30 p-4 text-zinc-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/nilesh-sharma-b69351258/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-white/10 bg-black/30 p-4 text-zinc-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:nilesh.sharma05@icloud.com"
                className="flex items-center justify-center rounded-xl bg-green-400 p-4 text-black"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}