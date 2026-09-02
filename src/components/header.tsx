import { CodeIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-scroll";
import { ContactDropdown } from "./contactDropdown";
import { HeaderLink } from "./headerLink";
import { ThemeToggleButton } from "./themeToggleButton";

export function Header() {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <header className="flex flex-col fixed w-full px-4 top-4 left-0 z-50">
        <div className="flex items-center justify-between py-2 px-4 md:py-3 md:px-5 max-w-5xl w-full mx-auto border border-border rounded-2xl bg-background/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <CodeIcon weight="bold" size={20} />
            <strong className="text-base md:text-xl">Lucas Galdino</strong>
          </div>

          {/* Nav desktop */}
          <nav className="items-center gap-4 hidden md:flex lg:gap-10">
            <Link to="projects" smooth duration={400}>
              <HeaderLink>Projetos</HeaderLink>
            </Link>
            <Link to="certificates" smooth duration={400}>
              <HeaderLink>Certificados</HeaderLink>
            </Link>
            <Link to="about" smooth duration={400}>
              <HeaderLink>Sobre</HeaderLink>
            </Link>
            <Link to="skills" smooth duration={400}>
              <HeaderLink>Habilidades</HeaderLink>
            </Link>

            <ContactDropdown />

            <ThemeToggleButton />
          </nav>

          {/* Botão de menu -> aparece apenas em telas pequenas */}
          <button
            onClick={() => setMobileNavIsActive((value) => !value)}
            type="button"
            className="cursor-pointer p-1 md:hidden"
          >
            {!mobileNavIsActive ? (
              <ListIcon size={30} weight="light" />
            ) : (
              <XIcon size={30} weight="light" />
            )}
          </button>
        </div>

        {/* Nav mobile */}
        <AnimatePresence>
          {mobileNavIsActive && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-2 flex w-full flex-col items-center gap-6 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur-md md:hidden"
            >
              <Link to="projects" smooth duration={400}>
                <HeaderLink>Projetos</HeaderLink>
              </Link>
              <Link to="certificates" smooth duration={400}>
                <HeaderLink>Certificados</HeaderLink>
              </Link>
              <Link to="about" smooth duration={400}>
                <HeaderLink>Sobre</HeaderLink>
              </Link>
              <Link to="skills" smooth duration={400}>
                <HeaderLink>Habilidades</HeaderLink>
              </Link>

              <ContactDropdown />

              <ThemeToggleButton />
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
}
