import { social } from "@/app/constants/social";
import { Github, LucideLinkedin, Mail } from "lucide-react";
import Link from "next/link";

export const SideMenu = () => {
  return (
    <div className="text-light font-display gap-3 grid col-span-1 fixed top-1/2 transform -translate-y-1/2">
      <p className="font-bold">Get in touch</p>
      <ul className="grid gap-3 font-body">
        <Link className="underline" href={social.github}>
          <li className="flex gap-1 items-center">
            <div className="rounded-full bg-light text-dark p-1">
              <Github size={18} />
            </div>{" "}
            Github
          </li>
        </Link>
        <Link className="underline" href={social.linkedin}>
          <li className="flex gap-1">
            <div className="rounded-full bg-light text-dark p-1">
              <LucideLinkedin size={18} />
            </div>{" "}
            LinkedIn
          </li>
        </Link>
        <Link className="underline" href={social.email}>
          <li className="flex gap-1">
            <div className="rounded-full bg-light text-dark p-1">
              <Mail size={18} />
            </div>{" "}
            Email
          </li>
        </Link>
      </ul>
    </div>
  );
};
