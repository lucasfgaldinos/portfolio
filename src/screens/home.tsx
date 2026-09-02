import { AnimatePresence } from "motion/react";
import { Background } from "@/components/background";
import { Header } from "@/components/header";
import { ModalImageViewer } from "@/components/modalImageViewer";
import { About } from "@/sections/about";
import { Certificates } from "@/sections/certificates";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { useImagesModalStore } from "@/store/useImagesModalStore";

export function Home() {
  const { modalIsOpen } = useImagesModalStore();

  return (
    <div>
      <Background />

      <Header />
      <Hero />
      <Projects />
      <Certificates />
      <About />
      <Skills />
      <Footer />

      <AnimatePresence>{modalIsOpen && <ModalImageViewer />}</AnimatePresence>
    </div>
  );
}
