"use client";

import { useState } from "react";
import Link from "next/link";
import { FloatButton } from "../FloatButton";
import { LanguageSwitch } from "../LanguageSwitch";
import { ContactList } from "./ContactList";
import { ResumeButton } from "./ResumeButton";
import { useLanguage } from "@/context/LanguageContext";
import * as motion from "motion/react-client";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translation } = useLanguage();

  const sectionsLinks = [
    { link: "#projects", label: translation.menu.creations },
    { link: "#skills", label: translation.menu.skills },
    { link: "#experiences", label: translation.menu.journey },
  ];

  const toggleOpenState = () => setIsOpen(!isOpen);

  return (
    <div className="lg:shadow-none shadow transition col-span-1 z-40 fixed lg:top-1/2 lg:bottom-auto bottom-24 lg:right-auto right-4 lg:bg-transparent lg:-translate-y-1/2">
      <div className="grid lg:hidden">
        <FloatButton isActive={isOpen} onClick={toggleOpenState} />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col-reverse lg:flex-col transition font-display gap-5 lg:bg-transparent bg-accent lg:p-0 p-4 rounded-xl lg:rounded-none`}
      >
        <div className="order-last lg:order-first grid">
          <LanguageSwitch />
        </div>
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
        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "unset" }}
        />
        <div className="text-light gap-5 grid">
          <ContactList />
          <ResumeButton />
        </div>
      </div>
    </div>
  );
};
