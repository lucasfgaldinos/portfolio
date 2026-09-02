import { motion } from "motion/react";
import { useState } from "react";
import { Element } from "react-scroll";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import { SkillCard } from "@/components/skillCard";
import { SkillsNav } from "@/components/skillsNav";
import { type Stack, skills } from "@/data/skills";

export function Skills() {
  const [skillActive, setSkillActive] = useState<Stack>("languages");
  const filteredSkills = skills.filter((item) => item.stack === skillActive);

  return (
    <Element name="skills">
      <SectionContainer>
        <SectionTitle title="Habilidades" />

        <div className="h-90 sm:h-72">
          <SkillsNav
            setSkillActive={setSkillActive}
            skillActive={skillActive}
          />

          <div className="flex gap-4 mt-8 flex-wrap">
            {filteredSkills.length > 0 &&
              filteredSkills.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.05, 0.2),
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <SkillCard skill={item} />
                </motion.div>
              ))}
          </div>
        </div>
      </SectionContainer>
    </Element>
  );
}
