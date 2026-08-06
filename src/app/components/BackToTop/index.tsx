"use client";

import Link from "next/link";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

export const BackToTop = () => {
  const { translation } = useLanguage();

  return (
    <div className=" text-light lg:bottom-0 bottom-auto absolute lg:justify-self-auto justify-self-center">
      <Link className="flex gap-4 items-center" href="#home">
        {translation.misc.backToTop}
        <FaCircleArrowUp />
      </Link>
    </div>
  );
};
