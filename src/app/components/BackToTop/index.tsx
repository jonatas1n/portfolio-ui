import Link from "next/link";
import { CircleArrowUp } from "lucide-react";

export const BackToTop = () => {
  return (
    <div className=" text-light absolute bottom-0">
      <Link className="flex gap-4" href="#home">
        Back to top
        <CircleArrowUp />
      </Link>
    </div>
  );
};
