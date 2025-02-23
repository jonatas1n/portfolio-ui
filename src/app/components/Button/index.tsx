import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: VoidFunction;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  className,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...buttonProps}
      className={`bg-accent shadow-xl rounded-lg py-1 px-5 font-semibold flex gap-1 items-center text-light font-display disabled:bg-opacity-20 ${className}`}
    >
      {children}
    </button>
  );
};
