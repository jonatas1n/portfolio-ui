"use client";

import { SectionCard } from "@/app/components/SectionCard";
import * as motion from "motion/react-client";
import { FaArrowDown } from "react-icons/fa";
import { SoundPad } from "@/app/interactions/SoundPad";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

import { BIOGRAPHY_PHRASE, SCROLL_MESSAGE } from "./constants";

export const Intro = () => {
  const [intro, setIntro] = useState(false);

  return (
    <motion.div className="h-[85dvh] min-h-[850px] lg:h-screen grid-rows-3 gap-4 grid">
      <AnimatePresence>{intro && <SoundPad />}</AnimatePresence>
      <div className="row-start-2 row-end-4 lg:row-end-3 lg:self-start self-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <SectionCard>
            <div className="sm:grid-cols-8 grid-cols-1 grid mt-3 sm:py-16 relative min-h-52 overflow-hidden">
              <AnimatePresence>
                {!intro && (
                  <motion.div
                    initial={{ opacity: 0, x: -64 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 64 }}
                    className="flex absolute transform top-1/4 text-center h-full w-full col-span-full gap-1 font-display text-6xl font-bold justify-center"
                  >
                    Hey!{" "}
                    <motion.div
                      animate={{ rotate: [12, -12, 12, -12, 12] }}
                      transition={{ duration: 1, delay: 0 }}
                      onAnimationComplete={() => setIntro(true)}
                    >
                      ✋🏿
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              {intro && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="lg:col-span-7 col-span-full gap-6 grid transition-all"
                >
                  <div className="grid sm:gap-9 gap-4 md:gap-3 md:px-0 px-2">
                    <div className="font-display">
                      <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 1 }}
                        className="lg:text-6xl md:text-5xl text-3xl font-bold leading-10"
                      >
                        I&apos;m Jônatas Gomes
                      </motion.h1>
                      <motion.h4
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="sm:text-xl font-bold text-accent leading-10"
                      >
                        (but you can call me Johny)
                      </motion.h4>
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="sm:text-3xl text-xl font-bold font-display"
                    >
                      and this is my portfolio 👨🏿‍💻
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.75, duration: 1 }}
                      className="text-base font-body py-2 md:py-4 border-y border-dark"
                    >
                      {BIOGRAPHY_PHRASE}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </SectionCard>
          <div className="md:flex text-light items-center gap-2 justify-center translate-y-40 hidden opacity-25">
            {SCROLL_MESSAGE}
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: 5 }}
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
