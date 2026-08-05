import { Tag } from "@/components/Tag";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { Project } from "@/types";
import DOMPurify from "dompurify";
import * as motion from "motion/react-client";
import { ProjectGallery } from "@/sections/Projects/ProjectGallery";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  const headerClassName =
    "sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-lg bg-card px-6 py-4 font-display text-2xl font-bold text-dark";

  return (
    <div className="rounded-lg bg-card text-dark shadow-lg">
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${headerClassName} hover:underline`}
        >
          {title}
          <HiOutlineExternalLink />
        </Link>
      ) : (
        <h3 className={headerClassName}>{title}</h3>
      )}
      <div className="grid gap-4 px-6 pb-6">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {(technologies ?? []).map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description),
          }}
        />
        {images && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mx-auto mt-4 w-full"
          >
            <ProjectGallery images={images} />
          </motion.div>
        )}
      </div>
    </div>
  );
};
