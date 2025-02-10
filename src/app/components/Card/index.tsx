import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-6 shadow-lg text-dark rounded-[2.125rem] bg-card">{children}</div>
  );
};
