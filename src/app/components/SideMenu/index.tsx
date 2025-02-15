"use client";

import { useState } from "react";
import { social } from "@/app/constants/social";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import { FloatButton } from "../FloatButton";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenState = () => setIsOpen(!isOpen);

  return (
    <div className="transition col-span-1 fixed sm:top-1/2 sm:bottom-auto bottom-24 sm:right-auto right-4 sm:bg-transparent sm:-translate-y-1/2">
      <div className="grid md:hidden">
        <FloatButton isActive={isOpen} onClick={toggleOpenState} />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col-reverse sm:flex-col transition font-display gap-5 sm:bg-transparent bg-accent sm:p-0 p-4 rounded-xl sm:rounded-none`}
      >
        <ul className="grid gap-2">
          <Link href="#projects">
            <li className="bg-light text-dark py-1 px-4 hover:text-light hover:bg-accent rounded-xl font-semibold text-lg">
              Projects
            </li>
          </Link>
          <Link href="#skills">
            <li className="bg-light text-dark py-1 px-4 hover:text-light hover:bg-accent rounded-xl font-semibold text-lg">
              Skills
            </li>
          </Link>
          <Link href="#experiences">
            <li className="bg-light text-dark py-1 px-4 hover:text-light hover:bg-accent rounded-xl font-semibold text-lg">
              Experiences
            </li>
          </Link>
        </ul>
        <hr />
        <div className="text-light gap-3 grid">
          <p className="font-bold">Get in touch</p>
          <ul className="flex justify-between font-body">
            <Link target="__blank" className="underline" href={social.github}>
              <li className="flex hover:bg-accent hover:text-light rounded-full bg-light text-dark p-1">
                <FaGithub size={18} />
              </li>
            </Link>
            <Link target="__blank" className="underline" href={social.linkedin}>
              <li className="flex hover:bg-accent hover:text-light rounded-full bg-light text-dark p-1">
                <FaLinkedin size={18} />
              </li>
            </Link>
            <Link className="underline" href={social.email}>
              <li className="flex hover:bg-accent hover:text-light rounded-full bg-light text-dark p-1">
                <FiMail size={18} />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
