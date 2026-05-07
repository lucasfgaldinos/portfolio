import img from "@/assets/projects/solarfacil.webp";
import type { Project } from ".";

export const solarFacil: Project = {
  name: "Solar Fácil",
  description:
    "Landing page desenvolvida para a Solar Fácil (empresa de instalação de energia fotovoltaica) com foco em performance, SEO e escalabilidade.",
  stack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  type: "frontend",
  isFreelancer: true,
  isHighlight: true,
  banner: img,
  links: {
    deploy: "https://solarfacil.vercel.app",
    repo: "https://github.com/lucasfgaldinos/solar-facil",
  },
};
