"use client";

import useSWR from "swr";
import { getSkills, makePath, SKILLS_ROUTE } from "@/app/services";
import { SectionCard } from "@/app/components/SectionCard";
import { useState } from "react";
import { Skill, SkillGroupType } from "@/app/types";
import { Modal } from "@/app/components/Modal";
import DOMPurify from "dompurify";


import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { SkillGroup } from "./SkillGroup";
import { Spinner } from "@/app/components/Spinner";

export const Skills = () => {
  const [modalContent, setModalContent] = useState<
    Omit<Skill, "id"> | undefined
  >(undefined);

  const swrPath = makePath(SKILLS_ROUTE);
  const { data: skillsGroupsList, error, isLoading } = useSWR<SkillGroupType>(swrPath, getSkills);
  console.log(skillsGroupsList);

  const clearModalContent = () => setModalContent(undefined);

  return (
    <SectionCard id="skills">
      <AnimatePresence>
        {modalContent && (
          <Modal title={modalContent.title} onClose={clearModalContent}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(modalContent.description),
              }}
            />
          </Modal>
        )}
      </AnimatePresence>
      {error ? (
        "An error occured"
      ) : (
        <div className="grid gap-6">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-display font-bold"
          >
            Skills
          </motion.h3>
          {isLoading && <Spinner />}
          <div className="grid gap-10">
            {Object.entries(skillsGroupsList ?? {})?.map(([groupTitle, skillsList]) => (
              <motion.div
                initial={{ transform: "translateX(0)", opacity: 0 }}
                whileInView={{ opacity: 1, transform: "translateX(1)" }}
                key={groupTitle}
              >
                <SkillGroup title={groupTitle} skills={skillsList} onClick={(skill: Skill) => setModalContent(skill)} />
              </motion.div>
            ))}
            {Object.keys(skillsGroupsList ?? {}).length === 0 && (
              <p className="text-lg">No skills found</p>
            )}
          </div>
        </div>
      )}
    </SectionCard>
  );
};
