import React, { useLayoutEffect, useRef, useState } from "react";
import { tw } from "../../../twind/twind";
import { useScroll, useTransform } from "framer-motion";
import * as m from "motion/react-m"

const Taptik: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [divTop, setDivTop] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const numRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setDivTop(divRef.current.offsetTop);
      setDivHeight(divRef.current.offsetHeight);
    }
  }, [divRef]);

  const divCenter = React.useMemo(() => divTop + divHeight * 0.5, [divTop, divHeight]);

  const width = useTransform(scrollY, [
    divCenter - 500,
    divCenter + 100,
  ], [
    "70vw",
    "100vw",
  ], { clamp: true });
  const height = useTransform(scrollY, [
    divCenter - 500,
    divCenter + 100,
  ], [
    "70vh",
    "100vh",
  ], { clamp: true });
  const borderRadius = useTransform(scrollY, [
    divCenter - 500,
    divCenter + 100,
  ], ["38px", "0px"], { clamp: true });

  return (
    <m.div
      ref={divRef}
      className={tw(
        "bg-background mx-auto flex items-start gap-2 justify-end flex-col rounded-3xl aspect-[16/10] mt-12 p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32",
      )}
      style={{
        width: width.get(),
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: height.get(),
        borderRadius: borderRadius.get(),
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
            Taptik
            <m.a
              href="https://taptik.onrender.com/"
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
              href="https://github.com/dhruv086/taptik"
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
            Real-time chat, low-latency, end-to-end encrypted.
          </m.p>
          <m.div
            className={tw("flex flex-wrap gap-2 mt-3")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
          >
            {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"].map(tag => (
              <span key={tag} className={tw("text-xs px-3 py-1 rounded-full border border-white/40 text-white/70")}>
                {tag}
              </span>
            ))}
          </m.div>
        </div>
        <div
          ref={numRef}
          className={tw(
            "flex gap-8 items-center border-t border-white/30 w-full pt-3 md:!w-fit lg:!border-t-0 lg:border-l lg:border-white/30 lg:!pt-0 lg:pl-6 justify-between",
          )}
        >
          <div className={tw("min-w-[100px]")}>
            <p className={tw("text-5xl font-semibold text-white")}>Jul</p>
            <p className={tw("opacity-40 text-white text-sm -mt-1 max-w-[400px]")}>
              2025
            </p>
          </div>
          <div className={tw("min-w-[100px]")}>
            <p className={tw("text-5xl font-semibold text-white")}>FS</p>
            <p className={tw("opacity-40 text-white text-sm -mt-1 max-w-[400px]")}>
              Full Stack
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Taptik;
