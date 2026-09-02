import type { Skill } from "@/data/skills";
import { BorderTrail } from "./core/border-trail";

type SkillCardProps = React.ComponentProps<"div"> & {
  skill: Omit<Skill, "stack">;
};

export function SkillCard({ skill, ...props }: SkillCardProps) {
  return (
    <div
      {...props}
      className="relative flex items-center overflow-hidden p-2 md:p-3 border border-border w-42 md:w-54 gap-2 rounded-md bg-secondary"
    >
      <BorderTrail duration={4.5} />
      <img
        className="w-6 h-6 md:w-8 md:h-8 aspect-square"
        src={skill.img}
        alt={skill.name}
      />

      <p className="text-xs font-base md:text-base md:font-medium">
        {skill.name}
      </p>
    </div>
  );
}
