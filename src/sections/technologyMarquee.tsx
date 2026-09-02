import type { CSSProperties } from "react";
import { Reveal } from "@/components/reveal";
import { skills } from "@/data/skills";

const featuredTechnologies = [
  { name: "HTML", glow: "#e34f26" },
  { name: "CSS", glow: "#1572b6" },
  { name: "JavaScript", glow: "#f7df1e" },
  { name: "TypeScript", glow: "#3178c6" },
  { name: "React", glow: "#61dafb" },
  { name: "Tailwind CSS", glow: "#38bdf8" },
  { name: "Node.js", glow: "#5fa04e" },
  { name: "Express", glow: "#8a8a8a" },
  { name: "PostgreSQL", glow: "#4169e1" },
  { name: "MongoDB", glow: "#47a248" },
  { name: "Docker", glow: "#2496ed" },
  { name: "Git", glow: "#f05032" },
].flatMap((technology) => {
  const skill = skills.find((item) => item.name === technology.name);
  return skill ? [{ ...technology, img: skill.img }] : [];
});

function TechnologyList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center justify-around gap-6 pr-6 md:gap-9 md:pr-9"
      aria-hidden={hidden || undefined}
    >
      {featuredTechnologies.map((technology) => (
        <li
          key={technology.name}
          className="group/technology flex size-13 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/80 p-2 transition-colors hover:bg-secondary md:size-15"
          style={
            {
              "--technology-glow": technology.glow,
            } as CSSProperties
          }
        >
          <img
            src={technology.img}
            alt={hidden ? "" : technology.name}
            className={`size-7 object-contain transition-all duration-300 ease-out group-hover/technology:scale-125 group-hover/technology:drop-shadow-[0_0_8px_var(--technology-glow)] md:size-8 ${technology.name === "Express" ? "dark:invert" : ""}`}
          />
        </li>
      ))}
    </ul>
  );
}

export function TechnologyMarquee() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 md:px-10 md:py-14">
      <Reveal>
        <div className="group/marquee overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:py-4">
          <div className="technology-marquee flex w-max group-hover/marquee:[animation-play-state:paused]">
            <TechnologyList />
            <TechnologyList hidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
