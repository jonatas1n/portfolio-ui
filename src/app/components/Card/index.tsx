import { PropsWithChildren } from "react";

type CardProps = {
  className?: string;
}

export const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  return (
    <div className={`p-6 shadow-lg text-dark rounded-lg bg-card overflow-hidden ${className}`}>{children}</div>
  );
};
