import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-[#020403] px-6 py-28">
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:border-green-400/20 md:p-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Contact
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Let’s build something technically meaningful.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I’m open to software engineering, backend, systems, AI
              infrastructure, security, and developer tools opportunities.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:nilesh.sharma05@icloud.com"
                className="rounded-xl bg-green-400 px-6 py-3 font-medium text-black transition hover:bg-green-300"
              >
                Email Me
              </a>

              <a
                href="https://github.com/NileshSharma-0203"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-black/30 px-6 py-3 font-medium text-white transition hover:bg-white/[0.06]"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/nilesh-sharma-b69351258/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-black/30 px-6 py-3 font-medium text-white transition hover:bg-white/[0.06]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
            <p>© 2026 Nilesh Sharma. Built with Next.js and TypeScript.</p>

            <p className="text-green-400">Systems • AI • Security • Backend</p>
          </footer>
        </div>
      </Reveal>
    </section>
  );
}