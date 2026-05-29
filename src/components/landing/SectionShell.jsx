import { useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

function ScrollSection({ id, eyebrow, title, subtitle, children }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="relative px-6 md:px-10 py-12 md:py-20">
      <Motion.div
        className="section-surface"
        style={{
          transformPerspective: 1600,
          willChange: "transform, opacity",
        }}
        initial={
          reduceMotion
            ? { opacity: 1, y: 0, rotateX: 0 }
            : { opacity: 0, y: 86, rotateX: 11 }
        }
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ amount: 0.25, once: false }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="mt-7 md:mt-9">{children}</div>
      </Motion.div>
    </section>
  );
}

function InteractiveCard({ className = "", children }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  const handleMouseLeave = () => {
    setPointer({ x: 50, y: 50 });
  };

  return (
    <Motion.article
      className={`interactive-card rounded-3xl border border-white/14 bg-neutral-900/72 p-5 md:p-6 backdrop-blur ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mx": `${pointer.x}%`,
        "--my": `${pointer.y}%`,
        transformPerspective: 1100,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.015,
              rotateX: 4,
              rotateY: -4,
              transition: {
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
    >
      {children}
    </Motion.article>
  );
}

export { ScrollSection, InteractiveCard };
