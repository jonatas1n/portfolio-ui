import Link from "next/link";
import { FaCircleArrowUp } from "react-icons/fa6";

export const BackToTop = () => {
  return (
    <div className=" text-light sm:bottom-0 bottom-auto absolute md:justify-self-auto justify-self-center">
      <Link className="flex gap-4 items-center" href="#home">
        Back to top
        <FaCircleArrowUp />
      </Link>
    </div>
  );
};
