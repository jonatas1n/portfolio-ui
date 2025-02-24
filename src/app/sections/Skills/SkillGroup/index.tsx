import { Skill } from "@/types";
import { SkillButton } from "../SkillButton";
import * as motion from "motion/react-client";

type SkillGroupProps = {
  title: string;
  skills: Skill[];
  onClick: (skill: Skill) => void;
};

export const SkillGroup = ({ title, skills, onClick }: SkillGroupProps) => {
  return (
    <div className="rounded-lg bg-card p-4 w-full grid gap-6">
      <motion.h4
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="pl-4 text-2xl font-semibold text-center font-display"
      >
        {title}
      </motion.h4>
      <div className="flex flex-wrap gap-10 justify-center">
        {skills?.map((skill, index) => (
          <motion.div
            initial={{ transform: "scale(0)", opacity: 0 }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ delay: index * 0.06125 }}
            key={skill.id}
          >
            <SkillButton skill={skill.title} onClick={() => onClick(skill)} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
