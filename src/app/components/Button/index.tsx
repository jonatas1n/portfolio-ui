import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="bg-accent shadow-xl rounded-lg py-1 px-5 font-semibold flex gap-1 items-center text-light font-display">
      {children}
    </button>
  );
};
