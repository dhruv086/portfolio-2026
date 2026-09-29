import { tw } from "../../twind/twind";
import * as m from "motion/react-m";

export default function Comments({
    index,
    name,
    comment,
    title,
}: {
    index: number;
    name: string;
    comment: string;
    title: string;
}) {
    return (
        <m.div
            style={{
                backgroundColor: "#1E1E1E",
                top: `${24 + (index * 0.05)}rem`,
                willChange: "transform, opacity",
            }}
            className={tw(
                "md:w-[700px] w-[85vw] sticky top-96 shadow-xl rounded-2xl md:rounded-[38px] p-6 md:p-8 flex gap-4 flex-col",
            )}
            initial={{
                rotate: index % 2 === 0 ? 3 : -3,
                opacity: 0,
                scale: 0.7,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.2,
                    ease: [0.25, 0.8, 0.25, 1],
                },
            }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={tw("flex gap-4 items-center justify-start")}>
                <div>
                    <h1
                        className={tw(
                            "text-xl md:text-2xl font-bold text-color",
                        )}
                    >
                        {name}
                    </h1>
                    <p
                        className={tw(
                            "text-sm md:text-base opacity-40 text-color",
                        )}
                    >
                        {title}
                    </p>
                </div>
            </div>
            <p className={tw("text-base md:text-lg text-color")}>{comment}</p>
        </m.div>
    );
}
