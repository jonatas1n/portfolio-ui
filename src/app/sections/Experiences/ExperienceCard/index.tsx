"use client";

import { Experience } from "@/types";
import { Tag } from "@/components/Tag";
import { Card } from "@/components/Card";
import DOMPurify from "dompurify";
import * as motion from "motion/react-client";
import { useLanguage } from "@/context/LanguageContext";

export const ExperienceCard = ({
  position,
  companyName,
  startDate,
  endDate,
  technologies,
  description,
}: Experience) => {
  const { translation } = useLanguage();

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <div className="grid gap-3">
          <div className="grid gap-1">
            <h4 className="md:text-2xl text-xl font-display font-bold">
              {position}
            </h4>
            <div className="md:text-xl text-lg">
              {translation.experience.at} <strong>{companyName}</strong>
            </div>
            <div className="md:text-lg text-md">
              {startDate} ~ {endDate ?? translation.experience.present}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pb-4 border-b border-b-accent">
            {(technologies ?? []).map((technology: string) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
};
