"use client";

import useSWR from "swr";
import { getSkills, makePath, SKILLS_ROUTE } from "@/app/services";
import { SectionCard } from "@/app/components/SectionCard";
import { useState } from "react";
import { Skill } from "@/app/types";
import { Modal } from "@/app/components/Modal";
import { SkillButton } from "./SkillButton";
import DOMPurify from "dompurify";

export const Skills = () => {
  const [modalContent, setModalContent] = useState<
    Omit<Skill, "id"> | undefined
  >(undefined);

  const swrPath = makePath(SKILLS_ROUTE);
  const { data: skillsList, error } = useSWR<Skill[]>(swrPath, getSkills);

  const clearModalContent = () => setModalContent(undefined);

  return (
    <SectionCard id="skills">
      {modalContent && (
        <Modal
          title={modalContent.title}
          isOpen={!!modalContent}
          onClose={clearModalContent}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(modalContent.description),
            }}
          />
        </Modal>
      )}
      {error ? (
        "An error occured"
      ) : (
        <div className="grid gap-6">
          <h3 className="text-4xl font-display font-bold">Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {skillsList?.map((skill) => (
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
            {skillsList?.length === 0 && (
              <p className="text-lg">No skills found</p>
            )}
          </div>
        </div>
      )}
    </SectionCard>
  );
};
