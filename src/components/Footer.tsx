import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { lazy } from "react";

const FaArrowUp = lazy(() =>
    import("react-icons/fa6").then((module) => ({ default: module.FaArrowUp }))
);
const FaGithub = lazy(() =>
    import("react-icons/fa6").then((module) => ({ default: module.FaGithub }))
);
const FaEnvelope = lazy(() =>
    import("react-icons/fa6").then((module) => ({
        default: module.FaEnvelope,
    }))
);
const FaLinkedinIn = lazy(() =>
    import("react-icons/fa6").then((module) => ({
        default: module.FaLinkedinIn,
    }))
);

export default function Footer() {
    return (
        <footer
            className={tw(
                "h-screen bg-red w-screen z-20 relative text-background p-8 pt-24 md:p-24 flex flex-col items-end justify-start gap-6",
            )}
        >
            <m.img
                src="/dhruv-camera-cutout.png"
                alt="Dhruv Agarwal holding a camera"
                initial={{ opacity: 0, y: 60, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                style={{
                    position: "absolute",
                    left: "clamp(1.5rem, 8vw, 10rem)",
                    bottom: "max(6rem, 11vh)",
                    width: "clamp(200px, 30vw, 540px)",
                    height: "auto",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    objectPosition: "bottom left",
                    filter: "drop-shadow(0 -4px 0 black) drop-shadow(-4px 0 0 black) drop-shadow(4px 0 0 black)",
                    pointerEvents: "none",
                    willChange: "transform, opacity",
                }}
            />
            <m.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                style={{
                    willChange: "opacity, filter",
                }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.25, 0.8, 0.25, 1],
                }}
                className={tw(
                    "text-5xl md:text-6xl mb-6 opacity-100 lg:text-7xl xl:text-8xl font-semibold text-right text-background",
                )}
            >
                Building a story<br />through code.
            </m.h1>
            <m.div
                className={tw("bg-background rounded-full p-1 flex gap-2")}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                style={{
                    willChange: "opacity, filter",
                }}
            >
                <m.a
                    href="https://github.com/dhruv086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tw(
                        "rounded-full p-3 px-6 md:px-9 cursor-pointer",
                    )}
                    initial={{
                        background: "var(--background)",
                        color: "var(--color)",
                        opacity: 0.7,
                        willChange: "background, color, opacity",
                    }}
                    whileHover={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                    whileTap={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                >
                    <FaGithub className={tw("text-2xl md:text-4xl")} />
                </m.a>
                <m.a
                    href="http://www.linkedin.com/in/dhruvagarwal08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tw(
                        "rounded-full p-3 px-6 md:px-9 cursor-pointer",
                    )}
                    initial={{
                        background: "var(--background)",
                        color: "var(--color)",
                        opacity: 0.7,
                    }}
                    whileHover={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                    whileTap={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                    style={{
                        willChange: "background, color, opacity",
                    }}
                >
                    <FaLinkedinIn className={tw("text-2xl md:text-4xl")} />
                </m.a>
                <m.a
                    style={{
                        willChange: "background, color, opacity",
                    }}
                    href="mailto:dhruvagarwal086@gmail.com"
                    className={tw(
                        "rounded-full p-3 px-6 md:px-9 cursor-pointer",
                    )}
                    initial={{
                        background: "var(--background)",
                        color: "var(--color)",
                        opacity: 0.7,
                    }}
                    whileHover={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                    whileTap={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                >
                    <FaEnvelope className={tw("text-2xl md:text-4xl")} />
                </m.a>
            </m.div>

            <m.div
                className={tw("rounded-full p-1 flex gap-2")}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
            >
                <m.a
                    href="/Dhruv_Agarwal_Resume_LPU.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tw(
                        "rounded-full p-3 px-9 border-4 text-xl md:text-2xl font-semibold border-background cursor-pointer",
                    )}
                    initial={{
                        background: "#00000000",
                        color: "var(--background)",
                        opacity: 0.7,
                    }}
                    whileHover={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                    whileTap={{
                        background: "var(--color)",
                        color: "var(--background)",
                        opacity: 1,
                    }}
                >
                    Résumé
                </m.a>
                <m.button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={tw(
                        "rounded-full p-3 aspect-square w-[60px] h-[60px] flex items-center justify-center border-4 font-semibold border-background cursor-pointer",
                    )}
                    initial={{
                        background: "var(--background)",
                        color: "var(--color)",
                    }}
                    whileHover={{
                        background: "var(--color)",
                        color: "var(--background)",
                    }}
                >
                    <FaArrowUp className={tw("text-2xl md:text-3xl")} />
                </m.button>
            </m.div>


            <div className="absolute left-0 px-8 pl-32 md:pl-24 md:px-24 w-full bottom-24 flex gap-12 items-center justify-between w-full">
                <hr className="w-full border-2 border-background" />
            </div>
        </footer>
    );
}
