import { Navbar } from "@/components/layout/Navbar";

import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Writing } from "@/components/sections/Writing";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Contact } from "@/components/sections/Contact";

import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FadeSection } from "@/components/ui/FadeSection";
import { Preloader } from "@/components/ui/Preloader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020403] text-white">
      <Preloader />

      <ScrollProgress />
      <BackgroundGlow />
      <MouseGlow />

      <div className="relative z-10">
        <Navbar />

        <FadeSection>
          <Hero />
        </FadeSection>

        <SectionDivider />

        <FadeSection>
          <FeaturedProjects />
        </FadeSection>

        <SectionDivider />

        <FadeSection>
          <Skills />
        </FadeSection>

        <SectionDivider />

        <FadeSection>
          <About />
        </FadeSection>

        <SectionDivider />

        <FadeSection>
          <Writing />
        </FadeSection>

        <SectionDivider />

        <FadeSection>
          <CurrentlyBuilding />
        </FadeSection>

        <SectionDivider />

        <FadeSection>
          <Contact />
        </FadeSection>
      </div>
    </main>
  );
}