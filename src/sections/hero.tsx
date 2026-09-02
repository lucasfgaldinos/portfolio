import {
  ArrowDownIcon,
  GithubLogoIcon,
  type IconProps,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import { Link } from "react-scroll";
import profilePicture from "@/assets/profilePicture.jpg";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/sectionContainer";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

type Links = {
  url: string;
  icon: ComponentType<IconProps>;
};

const links: Links[] = [
  {
    url: "https://www.linkedin.com/in/lucas-fernando-galdino-da-silva",
    icon: LinkedinLogoIcon,
  },
  {
    url: "https://github.com/lucasfgaldinos",
    icon: GithubLogoIcon,
  },
];

export function Hero() {
  return (
    <SectionContainer className="mt-16 md:mt-26">
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6 md:gap-16">
        <Reveal className="max-w-2xl w-full" direction="left">
          <p className="font-medium text-muted-foreground">Olá, eu sou</p>
          <h1 className="text-primary font-extrabold text-4xl md:text-5xl lg:text-7xl max-w-2xs">
            Lucas Galdino
          </h1>
          <h2 className="mt-2 max-w-2xl font-bold text-xl md:text-3xl">
            Desenvolvedor Full Stack que transforma problemas em soluções web
            completas.
          </h2>
          <p className="font-medium text-muted-foreground mb-7 mt-4">
            Desde 2024, desenvolvo aplicações de ponta a ponta, criando
            interfaces responsivas, APIs, regras de negócio e integrações com
            bancos de dados. Meu foco é entender a necessidade, encontrar uma
            solução prática e entregar um produto organizado e funcional.
          </p>

          <div className="mb-7 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-secondary/70 p-3">
              <strong className="block text-sm text-primary">2+ anos</strong>
              <span className="text-xs text-muted-foreground">
                Desenvolvendo soluções
              </span>
            </div>
            <div className="rounded-lg border border-border bg-secondary/70 p-3">
              <strong className="block text-sm text-primary">Full Stack</strong>
              <span className="text-xs text-muted-foreground">
                Front-end, APIs e dados
              </span>
            </div>
            <div className="rounded-lg border border-border bg-secondary/70 p-3">
              <strong className="block text-sm text-primary">
                Experiência real
              </strong>
              <span className="text-xs text-muted-foreground">
                Projetos e freelances
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full flex gap-4 flex-wrap justify-center md:justify-start">
              <RainbowButton asChild size="lg">
                <Link to="projects" smooth duration={400}>
                  Ver projetos
                  <ArrowDownIcon />
                </Link>
              </RainbowButton>

              <Button asChild variant="outline" size="lg">
                <a
                  href="./Desenvolvedor_FullStack-Lucas_Galdino.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReadCvLogoIcon />
                  Ver currículo
                </a>
              </Button>
            </div>

            <div className="flex gap-4 py-6 w-fit mx-auto md:mx-0">
              {links.map(({ url, icon: Icon }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:transform transition-transform hover:scale-120"
                >
                  <Icon size={36} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          className="shrink-0 w-30 h-30 md:w-50 md:h-50 rounded-full overflow-hidden"
          direction="right"
          delay={0.12}
        >
          <img
            src={profilePicture}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
