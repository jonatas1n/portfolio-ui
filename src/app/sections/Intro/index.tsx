"use client";

import { SectionCard } from "@/app/components/SectionCard";
import * as motion from "motion/react-client";
import { FaArrowDown } from "react-icons/fa";
import { SoundPad } from "@/app/interactions/SoundPad";

const BIOGRAPHY_PHRASE =
  "I am a full-stack developer passionate about creating innovative solutions, always focused on improving user experience and optimizing processes through advanced technologies and agile practices.";

export const Intro = () => {
  return (
    <motion.div className="h-[85dvh] lg:h-dvh grid-rows-3 gap-4 grid">
      <SoundPad />
      <div className="row-start-2 row-end-4 lg:row-end-3 lg:self-center self-end">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-25dvh)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1 }}
        >
          <SectionCard>
            <div className="sm:grid-cols-8 grid-cols-1 grid mt-3 sm:py-16">
              <div className="lg:col-span-7 col-span-full gap-6 grid">
                <div className="grid sm:gap-9 gap-6 md:gap-3">
                  <div className="font-display">
                    <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold leading-10">
                      I&apos;m Jônatas Gomes
                    </h1>
                    <h4 className="sm:text-xl font-bold text-accent leading-10">
                      (but you can call me Johny)
                    </h4>
                  </div>
                  <h3 className="sm:text-3xl text-2xl font-bold font-display">
                    and this is my portfolio 👨🏿‍💻
                  </h3>
                  <div className="text-base font-body py-4 border-y border-dark">
                    {BIOGRAPHY_PHRASE}
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
          <div className="md:flex text-light items-center gap-2 justify-center translate-y-40 hidden opacity-25">
            Scroll to more
            <motion.div
              initial={{ translateY: -5 }}
              animate={{ translateY: 5 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
            >
              <FaArrowDown />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
