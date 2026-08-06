"use client"

import { PropsWithChildren } from "react";
import { SectionCard } from "@/components/SectionCard";
import * as motion from "motion/react-client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const AnimatedIntro = ({ children }: PropsWithChildren) => (
  <motion.div
    initial={{ height: "100vh" }}
    animate={{ height: "88dvh" }}
    transition={{ duration: 1.5, delay: 1 }}
    className="h-[88dvh]"
  >
    {children}
  </motion.div>
);

export const Intro = () => {
  const [intro, setIntro] = useState(false);
  const { translation } = useLanguage();

  return (
    <AnimatedIntro>
      <div className="sticky top-[calc(50dvh-280px)]">
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
                    {translation.intro.greeting}{" "}
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
                        className="text-[clamp(2rem,5vw,4rem)] font-bold leading-10"
                      >
                        {translation.intro.name}
                      </motion.h1>
                      <motion.h4
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="sm:text-xl font-bold text-accent leading-10"
                      >
                        {translation.intro.nickname}
                      </motion.h4>
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="sm:text-3xl text-xl font-bold font-display"
                    >
                      {translation.intro.tagline}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.75, duration: 1 }}
                      className="text-base font-body py-2 md:py-4 border-y border-dark"
                    >
                      {translation.intro.biography}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </SectionCard>
        </motion.div>
      </div>
    </AnimatedIntro>
  );
};
