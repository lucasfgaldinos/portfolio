import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GhostFibers from "./ghostFibers";

export function Background() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-svh -z-10 pointer-events-none bg-background"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      {mounted && (
        <GhostFibers
          lineColor="#3250FF"
          glowColor={resolvedTheme === "dark" ? "#6D7CFF" : "#3250FF"}
          lightMode={resolvedTheme === "light"}
          dpr={isMobile ? 0.75 : 1}
          fps={isMobile ? 24 : 30}
          layers={isMobile ? 2 : 3}
          grain={isMobile ? 0 : 0.015}
          className="absolute inset-0"
        />
      )}
    </div>
  );
}
