import { social } from "@/app/constants/social";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export const SideMenu = () => {
  return (
    <div className="grid transition font-display gap-5 col-span-1 fixed top-1/2 transform -translate-y-1/2">
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
      <div className="text-light  gap-3 grid">
        <p className="font-bold">Get in touch</p>
        <ul className="grid gap-3 font-body">
          <Link target="__blank" className="underline" href={social.github}>
            <li className="flex gap-1 items-center">
              <div className="rounded-full bg-light text-dark p-1">
                <Github size={18} />
              </div>{" "}
              Github
            </li>
          </Link>
          <Link target="__blank" className="underline" href={social.linkedin}>
            <li className="flex gap-1">
                <FaGithub size={18} />
                <LucideLinkedin size={18} />
              </div>{" "}
              LinkedIn
            </li>
                <FaLinkedin size={18} />
          <Link className="underline" href={social.email}>
            <li className="flex gap-1">
              <div className="rounded-full bg-light text-dark p-1">
                <Mail size={18} />
                <FiMail size={18} />
              Email
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
