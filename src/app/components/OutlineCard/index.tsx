import { PropsWithChildren } from "react";

type OutlineCardProps = {
  title: string;
};

export const OutlineCard = ({
  children,
  title,
}: PropsWithChildren<OutlineCardProps>) => {
  return (
    <div className=" border rounded-3xl border-dark p-6">
      <h4 className="bg-light flex absolute px-4 font-bold text-2xl -translate-y-11">
        {title}
      </h4>
      <p>
        {children}
        
      </p>
    </div>
  );
};
