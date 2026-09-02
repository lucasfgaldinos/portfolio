import { Element } from "react-scroll";
import { DifferentialCard } from "@/components/differentialCard";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import { SubTitle } from "@/components/subTitle";
import { WorkExperienceCard } from "@/components/workExperienceCard";
import { strengths } from "@/data/strengths";
import { workExperience } from "@/data/workExperience";

export function About() {
  return (
    <Element name="about">
      <SectionContainer>
        <SectionTitle title="Sobre mim" />

        <div className="flex flex-col gap-5">
          <Reveal>
            <SubTitle subTitle="Minha jornada" />

            <p className="text-muted-foreground font-medium mt-1">
              Minha trajetória profissional começou na área elétrica, onde
              trabalhei com manutenção e instalações por alguns anos. Nesse
              período, aprendi a lidar com problemas reais, imprevistos,
              organização e trabalho em equipe. Com o tempo, a programação
              entrou na minha vida como uma possibilidade de mudança de área e
              de fazer algo que sempre me interessou. Nesse processo, acabei me
              apaixonando por programar. Desde então, venho estudando
              desenvolvimento web de forma consistente e colocando isso em
              prática em projetos pessoais e trabalhos como freelancer.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <SubTitle subTitle="Paixão por desafios" />

            <p className="text-muted-foreground font-medium mt-1">
              Gosto de aprender fazendo. Resolver problemas, testar soluções e
              melhorar o que já existe é o que mais me motiva na programação.
              Busco evoluir a cada projeto, trocar experiências, receber
              feedbacks e contribuir de forma prática para o que está sendo
              construído, sempre com vontade de aprender mais.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <SubTitle subTitle="Meu diferencial" />

            <div className="mt-3 flex flex-col gap-2">
              {strengths.length > 0 &&
                strengths.map((item) => (
                  <Reveal key={item.id} delay={item.id * 0.04}>
                    <DifferentialCard
                      icon={item.icon}
                      title={item.title}
                      subTitle={item.subTitle}
                    />
                  </Reveal>
                ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <SubTitle subTitle="Meus últimos trabalhos" />

            <div className="flex flex-col gap-0.5 mt-5">
              {workExperience.length > 0 &&
                workExperience.map((item) => (
                  <Reveal key={item.id} delay={item.id * 0.06}>
                    <WorkExperienceCard workExperience={item} />
                  </Reveal>
                ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </Element>
  );
}
