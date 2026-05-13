import { writing } from "@/data/writing";
import { Reveal } from "@/components/ui/Reveal";
import { TypingHeading } from "@/components/ui/TypingHeading";

export function Writing() {
  return (
    <section
      id="writing"
      className="border-b border-white/10 bg-[#020403] px-6 py-28"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Technical Writing
            </p>

            <TypingHeading
              text="Explaining the systems behind the software."
              className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
            />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Technical essays and engineering notes focused on systems
              programming, databases, networking, AI infrastructure,
              operating systems, and scalable backend architecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {writing.map((post) => (
              <article
                key={post.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.10),transparent_40%)]" />
                </div>

                <div className="relative z-10">
                  <p className="mb-5 text-sm font-medium text-green-400">
                    {post.topic}
                  </p>

                  <h3 className="text-2xl font-semibold text-white transition group-hover:text-green-300">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {post.description}
                  </p>

                  <div className="mt-8">
                    <p className="text-sm text-zinc-500">
                      {post.readTime}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}