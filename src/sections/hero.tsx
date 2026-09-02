import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  type IconProps,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import profilePicture from "@/assets/profilePicture.jpg";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/sectionContainer";
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
        <Reveal className="max-w-lg w-full" direction="left">
          <p className="font-medium">
            Olá, seja bem-vindo(a) ao meu portfólio! Eu sou
          </p>
          <h1 className="text-primary font-extrabold text-4xl md:text-5xl lg:text-7xl max-w-2xs">
            Lucas Galdino
          </h1>
          <h2 className="font-bold text-xl md:text-3xl">
            Desenvolvedor Full Stack
          </h2>
          <p className="font-medium text-muted-foreground mb-7 mt-4">
            Tenho mais de dois anos de experiência com desenvolvimento web,
            sempre estudando continuamente e aplicando esse conhecimento em
            projetos reais. Aqui você encontrará alguns dos meus principais
            projetos e um pouco sobre mim.
          </p>

          <div className="flex flex-col gap-3">
            <div className="w-full flex gap-4 flex-wrap justify-center md:justify-start">
              <RainbowButton asChild variant="outline" size={"lg"}>
                <a
                  href="./Desenvolvedor_FullStack-Lucas_Galdino.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition"
                >
                  <ReadCvLogoIcon />
                  Ver currículo
                  <ArrowSquareOutIcon />
                </a>
              </RainbowButton>
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
