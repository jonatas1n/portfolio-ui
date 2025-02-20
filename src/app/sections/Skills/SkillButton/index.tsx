import { FaCircleDot } from "react-icons/fa6";
import { skillIcons } from "../constants";

type SkillButtonProps = {
  onClick: VoidFunction;
  skill: string;
};

export const SkillButton = ({ onClick, skill }: SkillButtonProps) => {
  const icon = skillIcons[skill.toLowerCase() as keyof typeof skillIcons]
    ? skillIcons[skill.toLowerCase().trim() as keyof typeof skillIcons]
    : FaCircleDot;

  return (
    <div className="cursor-pointer grid justify-items-center gap-1 text-center font-display">
      <div
        onClick={onClick}
        className="rounded-lg bg-light p-4 shadow hover:shadow-lg transition-all"
      >
        {icon({ size: 36 })}
      </div>
      {skill}
    </div>
  );
};
