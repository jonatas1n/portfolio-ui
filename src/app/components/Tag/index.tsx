import { PropsWithChildren } from "react";

type TagProps = {
  onClick?: VoidFunction;
  active?: boolean;
};

export const Tag = ({
  children,
  onClick,
  active = true,
}: PropsWithChildren<TagProps>) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-accent text-light" : "bg-light text-accent"
      } border-accent border hover:cursor-pointer rounded-full px-4 text-xs font-body uppercase font-bold`}
    >
      {children}
    </div>
  );
};
