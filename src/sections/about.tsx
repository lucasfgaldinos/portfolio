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
              Minha trajetória profissional começou na área elétrica, ambiente
              em que aprendi a diagnosticar problemas, trabalhar com segurança e
              atenção aos detalhes e encontrar soluções sob responsabilidade
              real. Em 2024, transformei meu interesse por tecnologia em uma
              nova atuação profissional e passei a desenvolver aplicações web
              completas como freelancer.
            </p>

            <p className="text-muted-foreground font-medium mt-3">
              Atualmente, concilio o desenvolvimento com meu trabalho como
              porteiro. Essa transição de carreira exige constância, organização
              e disciplina — características que levo para cada projeto. Mesmo
              com uma rotina profissional ativa, continuo construindo soluções,
              aprofundando minha experiência full stack e evoluindo por meio de
              desafios reais.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <SubTitle subTitle="Como transformo desafios em soluções" />

            <p className="text-muted-foreground font-medium mt-1">
              Antes de escrever código, procuro entender o problema, as pessoas
              envolvidas e o resultado esperado. A partir disso, organizo a
              solução, avalio alternativas e construo de forma incremental. Meu
              objetivo não é apenas fazer uma funcionalidade funcionar, mas
              entregar algo claro, sustentável e adequado à necessidade real.
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
