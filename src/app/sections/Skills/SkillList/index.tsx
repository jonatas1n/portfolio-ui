"use client";

import useSWR from "swr";
import { getSkills, makePath, SKILLS_ROUTE } from "@/services";
import { SkillGroup } from "../SkillGroup";
import { Spinner } from "@/components/Spinner";
import { SkillGroupType } from "@/types";
import * as motion from "motion/react-client";
import { useMemo } from "react";
import { Button } from "@/components/Button";
import { useLanguage } from "@/context/LanguageContext";

export const SkillList = () => {
  const { language, translation } = useLanguage();
  const swrPath = makePath(SKILLS_ROUTE);
  const {
    data: skillsGroupsList,
    error,
    mutate,
    isLoading,
  } = useSWR<SkillGroupType>(swrPath, getSkills);

  const skillsGroups = useMemo(() => {
    return (skillsGroupsList ?? []).map((group) => {
      const title =
        language === "pt" && group.namePt ? group.namePt : group.name;

      return (
        <motion.div
          key={group.name}
          initial={{ translateX: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="col-span-1"
        >
          <SkillGroup title={title} skills={group.skills} />
        </motion.div>
      );
    });
  }, [skillsGroupsList, language]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p className="text-lg">
        {translation.states.genericError}
        <Button onClick={mutate}>{translation.states.tryAgain}</Button>
      </p>
    );
  }

  if ((skillsGroupsList ?? []).length === 0) {
    return <p className="text-lg">{translation.states.noSkills}</p>;
  }

  return <div className="grid grid-cols-1 gap-10">{skillsGroups}</div>;
};
