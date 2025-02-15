"use client";

import { getSkills } from "@/app/services";
import { SectionCard } from "@/app/components/SectionCard";
import { useEffect, useState } from "react";
import { Skill } from "@/app/types";
import { Modal } from "@/app/components/Modal";
import { SkillButton } from "./SkillButton";

export const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [modalContent, setModalContent] = useState<
    Omit<Skill, "id"> | undefined
  >(undefined);

  const clearModalContent = () => setModalContent(undefined);

  useEffect(() => {
    getSkills().then((fetchedSkills) => {
      setSkills(fetchedSkills);
    });
  });

  return (
    <SectionCard id="skills">
      {modalContent && (
        <Modal
          title={modalContent.title}
          isOpen={!!modalContent}
          onClose={clearModalContent}
        >
          {modalContent.description}
        </Modal>
      )}
      <div className="grid gap-6">
        <h3 className="text-4xl font-display font-bold">Skills</h3>
        <div className="flex gap-10">
          {skills?.map((skill) => (
            <SkillButton
              key={skill.id}
              skill={skill.title}
              onClick={() =>
                setModalContent({
                  title: skill.title,
                  description: skill.description,
                })
              }
            />
          ))}
          {skills?.length === 0 && <p className="text-lg">No skills found</p>}
        </div>
      </div>
    </SectionCard>
  );
};
