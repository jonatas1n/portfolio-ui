import { Skill } from "@/app/types";

export const SkillCard = ({ description, title }: Skill) => {
  return (
    <div className=" border rounded-3xl border-dark p-6">
      <h4 className="bg-light flex absolute font-display px-4 font-bold text-2xl -translate-y-11">
        {title}
      </h4>
      <p className="font-body font-medium">{description}</p>
    </div>
  );
};
