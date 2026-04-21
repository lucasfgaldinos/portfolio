import {
  CaretDownIcon,
  GithubLogoIcon,
  type IconProps,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";
import clsx from "clsx";
import { type ComponentType, useEffect, useRef, useState } from "react";
import { HeaderLink } from "./headerLink";

type UsefulLink = {
  label: string;
  url: string;
  icon: ComponentType<IconProps>;
};

const usefulLinks: UsefulLink[] = [
  {
    label: "LinkedIn",
    icon: LinkedinLogoIcon,
    url: "https://www.linkedin.com/in/lucas-fernando-galdino-da-silva",
  },
  {
    label: "GitHub",
    icon: GithubLogoIcon,
    url: "https://github.com/lucasfgaldinos",
  },
  {
    label: "Ver currículo",
    icon: ReadCvLogoIcon,
    url: "./Desenvolvedor_FullStack-Lucas_Galdino.pdf",
  },
];

export function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDropdown() {
    setOpen((prev) => !prev);
  }

  function closeDropdown() {
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Trigger */}
      <HeaderLink
        onClick={toggleDropdown}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Links
        <CaretDownIcon
          size={16}
          className={clsx("ml-1 transition-transform", open && "rotate-180")}
        />
      </HeaderLink>

      {/* Dropdown */}
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 z-50 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl bg-background border border-border"
        >
          <ul className="p-1.5">
            {usefulLinks.map(({ label, url, icon: Icon }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeDropdown}
                  className="rounded-lg flex items-center gap-2 p-2 text-sm transition hover:bg-foreground/5"
                >
                  <Icon size={20} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
