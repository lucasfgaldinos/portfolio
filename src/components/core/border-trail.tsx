import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

type BorderTrailProps = {
  duration?: number;
  className?: string;
};

export function BorderTrail({
  duration = 5,
  className = "",
}: BorderTrailProps) {
  const gradientId = useId().replaceAll(":", "");
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-10 size-full overflow-visible ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#71717a" stopOpacity="0" />
          <stop offset="35%" stopColor="#d4d4d8" />
          <stop offset="62%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.rect
        x="0.6"
        y="0.6"
        width="98.8"
        height="98.8"
        rx="3"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.85"
        vectorEffect="non-scaling-stroke"
        pathLength="1"
        strokeDasharray="0.1 0.9"
        initial={{ strokeDashoffset: 0 }}
        animate={shouldReduceMotion ? undefined : { strokeDashoffset: -1 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{
          filter: "drop-shadow(0 0 3px rgb(212 212 216 / 45%))",
        }}
      />
    </svg>
  );
}
