import { useEffect, useRef, type ReactNode } from "react";

interface ProjectRevealProps {
  children: ReactNode;
  first?: boolean;
}

export default function ProjectReveal({ children, first = false }: ProjectRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const paint = () => {
      frame = 0;
      const section = sectionRef.current;
      const card = cardRef.current;
      if (!section || !card) return;

      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.9;
      const end = viewportHeight * 0.1;
      const progress = Math.min(Math.max((start - section.getBoundingClientRect().top) / (start - end), 0), 1);
      const eased = progress * progress * (3 - 2 * progress);

      card.style.transform = `translateZ(0) scale(${0.7 + eased * 0.3})`;
      card.style.borderRadius = `${38 * (1 - eased)}px`;
    };

    const schedulePaint = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint);
    return () => {
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ width: "100vw", height: "100vh", marginTop: first ? "3rem" : undefined }}
    >
      <div
        ref={cardRef}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          transformOrigin: "center center",
          willChange: "transform, border-radius",
        }}
      >
        {children}
      </div>
    </div>
  );
}
