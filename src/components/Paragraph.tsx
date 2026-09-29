import React, { useEffect, useMemo, useState } from "react";
import { useScroll } from "framer-motion";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const { scrollY } = useScroll();
  const words = useMemo(() => text.split(" "), [text]);
  const [opacityValues, setOpacityValues] = useState<number[]>(
    new Array(words?.length).fill(0.1),
  );
  useEffect(() => {
    const updateOpacity = (latest: number) => {
      const windowHeight = window.innerHeight;
      setOpacityValues(words.map((_, index) => {
        const start = windowHeight * (1.2 + index * 0.05) / 4;
        const end = windowHeight * (1.2 + index * 0.05) / 3;
        const progress = Math.min(Math.max((latest - start) / (end - start), 0), 1);
        return 0.1 + progress * 0.9;
      }));
    };

    updateOpacity(scrollY.get());
    const unsubscribe = scrollY.on("change", updateOpacity);
    return () => unsubscribe();
  }, [scrollY, words]);

  return (
    <p
      className={tw(
        'max-w-screen-lg font-semibold z-10 break-words'
      )}
    >
      <span className={tw('inline-block md:w-[200px] w-[100px]')}>&nbsp;</span>
      {words.map((word, index) => (
        <m.span
          key={index}
          style={{ opacity: opacityValues[index] }}
          className={tw('inline-block text-2xl md:text-3xl lg:text-4xl mr-2')}
        >
          {word}
        </m.span>
      ))}
    </p>
  );
};

export default Paragraph;
