import { motion } from "motion/react";
import { useState } from "react";
import { Element } from "react-scroll";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "@/components/projectCard";
import { ProjectsNav } from "@/components/projectsNav";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import type { ProjectButtonOptions } from "@/data/projectButtonOptions";
import { projects } from "@/data/projects";

export function Projects() {
  const [isActive, setIsActive] = useState<ProjectButtonOptions>("highlights");

  const filteredProjects = projects.filter((project) => {
    switch (isActive) {
      case "highlights":
        return project.isHighlight;
      case "freelancer":
        return project.isFreelancer;
      default:
        return project.type === isActive;
    }
  });

  return (
    <Element name="projects">
      <SectionContainer>
        <SectionTitle title="Projetos" />
        <ProjectsNav isActive={isActive} setIsActive={setIsActive} />
        <div className="w-full mt-10 h-130 md:h-120">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              550: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={16}
            modules={[Pagination]}
            pagination={{
              type: "progressbar",
            }}
            className="mySwiper pb-4! select-none"
          >
            {filteredProjects.map((item, index) => (
              <SwiperSlide
                className="h-auto! flex!"
                key={`${isActive}-${item.name}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.06, 0.18),
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <ProjectCard project={item} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionContainer>
    </Element>
  );
}
