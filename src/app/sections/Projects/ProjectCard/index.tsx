import { useState } from "react";
import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { Project } from "@/app/types";
import DOMPurify from "dompurify";
import * as motion from "motion/react-client";
import { ProjectGallery } from "@/app/sections/Projects/ProjectGallery";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedImageIndex + 1 == images?.length) return;
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const prevImage = () => {
    if (selectedImageIndex == 0) return;
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  return (
    <Card className="h-full">
      <motion.div
        initial={{ opacity: 0, translateX: 15 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -15, height: 0 }}
        className="grid gap-4 grid-cols-4"
      >
        <div className="grid gap-4 col-span-full">
          <Link
            href={link ?? ""}
            target="_blank"
            className="hover:underline font-bold text-dark flex justify-between items-center font-display text-2xl"
          >
            {title}
            <HiOutlineExternalLink />
          </Link>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, translateX: 10 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: index * 0.125 }}
              >
                <Tag>{technology}</Tag>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3 mt-4"
          >
            {images && (
              <ProjectGallery
                images={images}
                imageIndex={selectedImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
              />
            )}
          </motion.div>
        </div>
      </motion.div>
    </Card>
  );
};
