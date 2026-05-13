import { Reveal } from "@/components/ui/Reveal";

export function CurrentlyBuilding() {
  return (
    <section className="border-b border-white/10 bg-[#020403] px-6 py-28">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.05]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Currently Building
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Atlas Agent
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              A local AI runtime and autonomous developer agent designed around
              tool calling, terminal execution, codebase navigation, memory, and
              local LLM orchestration.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Local inference runtime",
                "Tool-calling architecture",
                "Terminal command execution",
                "Persistent memory system",
                "Codebase navigation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.04]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Poker Mindset
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Probabilistic thinking under uncertainty.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Poker sharpened how I think about engineering decisions: weighing
              tradeoffs, managing risk, staying patient, and making strong
              decisions with incomplete information.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Risk Management",
                "Pattern Recognition",
                "Expected Value",
                "Discipline",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-zinc-300 transition hover:border-green-400/20 hover:text-green-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}