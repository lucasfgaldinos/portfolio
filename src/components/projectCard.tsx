import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  ImagesIcon,
} from "@phosphor-icons/react";
import type { Project } from "@/data/projects";
import { useImagesModalStore } from "@/store/useImagesModalStore";
import { BorderTrail } from "./core/border-trail";
import { Button } from "./ui/button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project: props }: ProjectCardProps) {
  const { openModal } = useImagesModalStore();

  return (
    <div className="relative w-full h-full border border-border rounded-xl overflow-hidden mt-3 flex flex-col">
      <BorderTrail duration={5.5} />
      <div className="w-full aspect-video overflow-hidden cursor-grab active:cursor-grabbing">
        <img
          className="w-full h-full object-cover"
          src={props.banner}
          alt={`Banner ${props.name}`}
        />
      </div>

      <div className="w-full p-4 cursor-grab active:cursor-grabbing flex flex-col flex-1">
        <div className="flex flex-col gap-3">
          <b className="text-lg">{props.name}</b>

          <p className="text-sm text-muted-foreground">{props.description}</p>

          <div className="flex items-center gap-2 flex-wrap mt-1">
            {props.stack.map((item) => (
              <span
                className="p-0.5 px-2.5 rounded-full bg-accent text-xs text-accent-foreground border border-border"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto pt-6">
          {props.links?.deploy && (
            <Button weight="full" asChild>
              <a
                href={props.links.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOutIcon size={18} />
                Deploy
              </a>
            </Button>
          )}

          {props.imgs?.length && (
            <Button
              weight="full"
              variant="outline"
              onClick={() => openModal(props.imgs as string[])}
            >
              <ImagesIcon size={18} />
              Ver imagens
            </Button>
          )}

          {props.links?.repo && (
            <Button weight="full" variant="secondary" asChild>
              <a
                href={props.links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogoIcon size={18} />
                Repositório
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
