"use client";

import useSWR from "swr";
import { getSkills, makePath, SKILLS_ROUTE } from "@/services";
import { AnimatePresence } from "motion/react";
import { SkillGroup } from "../SkillGroup";
import { Spinner } from "@/components/Spinner";

import { Skill, SkillGroupType } from "@/types";
import { Modal } from "@/components/Modal";
import DOMPurify from "dompurify";

import * as motion from "motion/react-client";

import { useState, useMemo } from "react";
import { Button } from "@/components/Button";

export const SkillList = () => {
  const [modalContent, setModalContent] = useState<
    Omit<Skill, "id"> | undefined
  >(undefined);
  const swrPath = makePath(SKILLS_ROUTE);
  const {
    data: skillsGroupsList,
    error,
    mutate,
    isLoading,
  } = useSWR<SkillGroupType>(swrPath, getSkills);

  const clearModalContent = () => setModalContent(undefined);

  const skillsGroups = useMemo(() => {
    return Object.entries(skillsGroupsList ?? {}).map(
      ([groupTitle, skillsList], index) => (
        <motion.div
          key={index}
          initial={{ translateX: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <SkillGroup
            title={groupTitle}
            skills={skillsList}
            onClick={(skill: Skill) => setModalContent(skill)}
          />
        </motion.div>
      )
    );
  }, [skillsGroupsList]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p className="text-lg">
        An error occurred.
        <Button onClick={mutate}>Try again</Button>
      </p>
    );
  }

  if (Object.keys(skillsGroupsList ?? {}).length === 0) {
    return <p className="text-lg">No skills found</p>;
  }

  return (
    <>
      {modalContent && (
        <AnimatePresence>
          <Modal
            title={modalContent.title}
            onClose={clearModalContent}
            key={modalContent.title}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(modalContent.description),
              }}
            />
          </Modal>
        </AnimatePresence>
      )}
      <div className="grid gap-10">
        {skillsGroups.map((skillGroup) => skillGroup)}
      </div>
    </>
  );
};
