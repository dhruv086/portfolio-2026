import React from "react";
import { tw } from "../../../twind/twind";
import * as m from "motion/react-m"
import ProjectReveal from "./ProjectReveal";

const VidConference: React.FC = () => {
  return (
    <ProjectReveal>
    <div
      className={tw(
        "bg-background flex items-start gap-2 justify-end flex-col p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32",
      )}
      style={{
        width: "100%",
        backgroundImage: "linear-gradient(to top, rgba(9, 24, 49, .96), rgba(9, 24, 49, .18) 65%), url('/projects/vidconference.png')",
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
            VidConference
            <m.a
              href="https://zoom-frontend-znn0.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className={tw(
                "text-white flex w-fit items-center px-3 gap-2 text-base py-2 rounded-full bg-transparent border-2 border-white",
              )}
              whileHover={{ scale: 0.95, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95, backgroundColor: "rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Live
            </m.a>
            <m.a
              href="https://github.com/dhruv086/zoom-clone"
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
            Video meetings with scheduling, live chat, screen sharing, and host moderation.
          </m.p>
          <m.div
            className={tw("flex flex-wrap gap-2 mt-3")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
          >
            {["Django REST Framework", "Next.js", "React", "LiveKit", "PostgreSQL", "Docker"].map(tag => (
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
            <p className={tw("text-5xl font-semibold text-white")}>AV</p>
            <p className={tw("opacity-40 text-white text-sm -mt-1 max-w-[400px]")}>
              Meetings
            </p>
          </div>
          <div className={tw("min-w-[100px]")}>
            <p className={tw("text-5xl font-semibold text-white")}>5</p>
            <p className={tw("opacity-40 text-white text-sm -mt-1 max-w-[400px]")}>
              API tests
            </p>
          </div>
        </div>
      </div>
    </div>
    </ProjectReveal>
  );
};

export default VidConference;
