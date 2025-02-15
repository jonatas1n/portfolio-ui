import { PropsWithChildren } from "react";

type SectionCardProps = {
  id?: string;
};

export const SectionCard = ({
  children,
  id,
}: PropsWithChildren<SectionCardProps>) => {
  return (
    <div
      id={id}
      className="sm:px-24 shadow shadow-accent text-dark py-9 rounded-2xl bg-light px-4"
    >
      {children}
    </div>
  );
};
