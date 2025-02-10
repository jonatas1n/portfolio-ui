import { PropsWithChildren } from "react";


export const SectionCard = ({ children, id }: PropsWithChildren<{id: string}>) => {
  return (
    <div id={id} className="px-24 shadow shadow-accent text-dark py-9 rounded-2xl bg-light">
      {children}
    </div>
  );
};
