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
    <div className="transition col-span-1 fixed lg:top-1/2 lg:bottom-auto bottom-24 lg:right-auto right-4 lg:bg-transparent lg:-translate-y-1/2">
      <div className="grid lg:hidden">
        <FloatButton isActive={isOpen} onClick={toggleOpenState} />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col-reverse lg:flex-col transition font-display gap-5 lg:bg-transparent bg-accent lg:p-0 p-4 rounded-xl lg:rounded-none`}
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
