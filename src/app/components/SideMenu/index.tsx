"use client";

import { useState } from "react";
import { social } from "@/app/constants/social";
import Link from "next/link";
import { FloatButton } from "../FloatButton";
import * as motion from "motion/react-client";

const sectionsLinks = [
  { link: "#projects", label: "Creations" },
  { link: "#skills", label: "Skills" },
  { link: "#experiences", label: "Journey" },
];

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenState = () => setIsOpen(!isOpen);

  return (
    <div className="lg:shadow-none shadow transition col-span-1 z-50 fixed lg:top-1/2 lg:bottom-auto bottom-24 lg:right-auto right-4 lg:bg-transparent lg:-translate-y-1/2">
      <div className="grid lg:hidden">
        <FloatButton isActive={isOpen} onClick={toggleOpenState} />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col-reverse lg:flex-col transition font-display gap-5 lg:bg-transparent bg-accent lg:p-0 p-4 rounded-xl lg:rounded-none`}
      >
        <ul className="grid gap-2">
          {sectionsLinks.map((link) => (
            <Link key={link.link} href={link.link}>
              <motion.li
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.125 }}
                className="bg-light text-center text-dark py-1 px-4 hover:text-light hover:bg-accent rounded-xl font-semibold text-lg"
              >
                {link.label}
              </motion.li>
            </Link>
          ))}
        </ul>
        <motion.hr initial={{ opacity: 0, width: 0 }} animate={{opacity: 1, width: "unset"}} />
        <div className="text-light gap-5 grid">
          <motion.p
            initial={{ opacity: 0, transform: "translateX(1rem)" }}
            animate={{ opacity: 1, transform: "translateX(0)" }}
            className="font-bold text-center"
          >
            Get in touch
          </motion.p>
          <ul className="flex justify-around font-body">
            {Object.values(social).map((social, index) => (
              <Link
                key={social.link}
                target="__blank"
                className="underline"
                href={social.link}
              >
                <motion.li
                  initial={{ opacity: 0, transform: "translateY(1.5rem)" }}
                  animate={{ opacity: 1, transform: "translateY(0)" }}
                  transition={{ delay: 0.06125 * index }}
                  className="flex hover:bg-accent transition-all hover:text-light hover:scale-110 rounded-full bg-light text-dark p-1"
                >
                  {social.icon({})}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
