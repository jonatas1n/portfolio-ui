import { FaCircleDot } from "react-icons/fa6";
import { skillIcons } from "../constants";

type SkillButtonProps = {
  skill: string;
};

export const SkillButton = ({ skill }: SkillButtonProps) => {
  const icon = skillIcons[skill.toLowerCase() as keyof typeof skillIcons]
    ? skillIcons[skill.toLowerCase().trim() as keyof typeof skillIcons]
    : FaCircleDot;

  return (
    <div className="grid justify-items-center gap-1 text-center font-display">
      <div className="rounded-lg bg-light p-4 shadow text-accent-dark flex items-center justify-center gap-2">
        {icon({ size: 30 })}
        {skill}
      </div>
    </div>
  );
};
