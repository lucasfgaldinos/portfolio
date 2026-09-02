import { CertificateIcon, CodeIcon, StackIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Element } from "react-scroll";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CertificateCard } from "@/components/certificateCard";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import { certificates } from "@/data/certificates";

const indicators = [
  {
    icon: CertificateIcon,
    value: "7 certificações",
    label: "Formação contínua",
  },
  {
    icon: StackIcon,
    value: "Full Stack",
    label: "Front-end e back-end",
  },
  {
    icon: CodeIcon,
    value: "Projetos reais",
    label: "Conhecimento aplicado",
  },
];

export function Certificates() {
  return (
    <Element name="certificates">
      <div className="relative my-12 overflow-hidden border-y border-primary/15 bg-secondary/75">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <SectionContainer>
          <SectionTitle title="Certificações" />

          <div className="relative mb-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <CertificateIcon size={16} weight="fill" />
                Conhecimento validado
              </span>
              <h3 className="max-w-2xl text-2xl font-bold md:text-3xl">
                Base técnica para transformar problemas em soluções completas.
              </h3>
              <p className="mt-3 max-w-2xl font-medium text-muted-foreground">
                Minha formação acompanha o que aplico na prática: interfaces
                responsivas, aplicações React, APIs com Node.js, TypeScript e
                integração entre front-end e back-end.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {indicators.map(({ icon: Icon, value, label }) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/80 p-3 backdrop-blur-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-128 w-full md:h-120">
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
              className="mySwiper select-none pb-4!"
            >
              {certificates.map((certificate) => (
                <SwiperSlide className="h-auto! flex!" key={certificate.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full w-full"
                  >
                    <CertificateCard certificate={certificate} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </SectionContainer>
      </div>
    </Element>
  );
}
