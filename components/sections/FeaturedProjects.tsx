import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { TypingHeading } from "@/components/ui/TypingHeading";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-b border-white/10 bg-[#020403] px-6 py-28"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Featured Work
            </p>

            <TypingHeading
              text="Engineering projects built from first principles."
              className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
            />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Systems programming, networking, AI infrastructure,
              cybersecurity, and backend engineering projects focused on deep
              computer science fundamentals.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                status={project.status}
                visual={project.visual}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}