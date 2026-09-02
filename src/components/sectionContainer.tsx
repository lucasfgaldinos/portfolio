import { motion, useReducedMotion } from "motion/react";

type SectionContainerProps = React.ComponentProps<"section">;

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.12 }}
    >
      <section
        className={`
        max-w-5xl w-full pt-24 pb-12 px-4 md:px-10 mx-auto
        ${className}
      `}
      >
        {children}
      </section>
    </motion.div>
  );
}
