"use client";

import { SectionCard } from "@/app/components/SectionCard";
import * as motion from "motion/react-client";
import { FaArrowDown } from "react-icons/fa";
import { SoundPad } from "@/app/interactions/SoundPad";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const BIOGRAPHY_PHRASE =
  "I am a full-stack developer passionate about creating innovative solutions, always focused on improving user experience and optimizing processes through advanced technologies and agile practices.";

const SCROLL_MESSAGE = "Scroll to more";

export const Intro = () => {
  const [intro, setIntro] = useState(false);

  return (
    <motion.div className="h-[85dvh] min-h-[850px] lg:h-screen grid-rows-3 gap-4 grid">
      <AnimatePresence>{intro && <SoundPad />}</AnimatePresence>
      <div className="row-start-2 row-end-4 lg:row-end-3 lg:self-start self-end">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-25dvh)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.75 }}
        >
          <SectionCard>
            <div className="sm:grid-cols-8 grid-cols-1 grid mt-3 sm:py-16">
              {intro ? (
                <AnimatePresence>
                  <div className="lg:col-span-7 col-span-full gap-6 grid">
                    <div className="grid sm:gap-9 gap-4 md:gap-3 md:px-0 px-2">
                      <div className="font-display">
                        <motion.h1
                          initial={{ opacity: 0, translateY: 15 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{ delay: 0.1, duration: 1 }}
                          className="lg:text-6xl md:text-5xl text-3xl font-bold leading-10"
                        >
                          I&apos;m Jônatas Gomes
                        </motion.h1>
                        <motion.h4
                          initial={{ opacity: 0, translateY: 15 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{ delay: 0.4, duration: 1 }}
                          className="sm:text-xl font-bold text-accent leading-10"
                        >
                          (but you can call me Johny)
                        </motion.h4>
                      </div>
                      <motion.h3
                        initial={{ opacity: 0, translateX: 15 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="sm:text-3xl text-xl font-bold font-display"
                      >
                        and this is my portfolio 👨🏿‍💻
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, translateY: 15 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 1.75, duration: 1 }}
                        className="text-base font-body py-2 md:py-4 border-y border-dark"
                      >
                        {BIOGRAPHY_PHRASE}
                      </motion.div>
                    </div>
                  </div>
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, translateX: -64 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 0.75 }}
                    exit={{ opacity: 0, translateY: -30 }}
                    className="flex col-span-full gap-1 font-display text-6xl font-bold justify-center"
                  >
                    Hey!{" "}
                    <motion.div
                      animate={{ rotate: [12, -12, 12, -12, 12, -12] }}
                      transition={{ count: 2, duration: 1, delay: 1.25 }}
                      onAnimationComplete={() => setIntro(true)}
                    >
                      ✋🏿
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </SectionCard>
          <div className="md:flex text-light items-center gap-2 justify-center translate-y-40 hidden opacity-25">
            {SCROLL_MESSAGE}
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
