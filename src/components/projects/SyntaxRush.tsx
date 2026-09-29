import React from "react";
import { tw } from "../../../twind/twind";
import * as m from "motion/react-m"
import ProjectReveal from "./ProjectReveal";

const SyntaxRush: React.FC = () => {
  return (
    <ProjectReveal>
    <div
      className={tw(
        "bg-background flex items-start gap-2 justify-end flex-col p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32",
      )}
      style={{
        width: "100%",
        backgroundImage: "linear-gradient(to top, rgba(4, 9, 30, .97), rgba(4, 9, 30, .16) 65%), url('/projects/syntax-rush.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div
        className={tw(
          "flex flex-col gap-4 lg:flex-row items-start lg:gap-4 justify-between w-full",
        )}
      >
        <div>
          <m.h1
            className={tw(
              "text-white w-fit text-3xl mb-1 md:!mb-2 flex items-center gap-6 md:text-4xl lg:text-5xl font-semibold",
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
          >
            Syntax Rush
            <m.a
              href="https://syntaxrush-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className={tw(
                "text-white flex w-fit items-center px-2 text-lg py-2 rounded-full bg-transparent border-2 border-white",
              )}
              whileHover={{
                scale: 0.95,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <m.svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={tw("md:text-lg lg:text-xl text-sm")}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                whileTap={{ x: 3, y: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </m.svg>
            </m.a>
            <m.a
              href="https://github.com/dhruv086/syntax-rush"
              target="_blank"
              rel="noopener noreferrer"
              className={tw(
                "text-white flex w-fit items-center px-3 gap-2 text-base py-2 rounded-full bg-transparent border-2 border-white",
              )}
              whileHover={{
                scale: 0.95,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              GitHub
            </m.a>
          </m.h1>
          <m.p
            className={tw(
              "text-white text-base sm:text-base md:text-lg lg:text-xl opacity-70",
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            Real-time multiplayer coding sessions with live battles and rankings.
          </m.p>
          <m.div
            className={tw("flex flex-wrap gap-2 mt-3")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
          >
            {["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "WebSockets", "Redis", "JWT"].map(tag => (
              <span key={tag} className={tw("text-xs px-3 py-1 rounded-full border border-white/40 text-white/70")}>
                {tag}
              </span>
            ))}
          </m.div>
        </div>
        <div
          className={tw(
            "flex gap-8 items-center border-t border-white/30 w-full pt-3 md:!w-fit lg:!border-t-0 lg:border-l lg:border-white/30 lg:!pt-0 lg:pl-6 justify-between",
          )}
        >
          <div className={tw("min-w-[100px]")}>
            <p className={tw("text-5xl font-semibold text-white")}>10+</p>
            <p className={tw("opacity-40 text-white text-sm -mt-1 max-w-[400px]")}>
              REST endpoints
            </p>
          </div>
          <div className={tw("min-w-[100px]")}>
            <p className={tw("text-5xl font-semibold text-white")}>1v1</p>
            <p className={tw("opacity-40 text-white text-sm -mt-1 max-w-[400px]")}>
              Coding battles
            </p>
          </div>
        </div>
      </div>
    </div>
    </ProjectReveal>
  );
};

export default SyntaxRush;
