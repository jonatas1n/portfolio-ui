import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/types";
import DOMPurify from "dompurify";
import * as motion from "motion/react-client";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, translateX: 15 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.75 }}
        className="grid gap-4 grid-cols-4"
      >
        <div className="grid gap-4 col-span-3">
          <h5 className="font-bold font-display text-2xl">{title}</h5>
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
            {link && (
              <Link href={link}>
                <Button>
                  Visit page <FaExternalLinkAlt size={16} />
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
        {images && <Image src={images[0]} alt="Photo" />}
      </motion.div>
    </Card>
  );
};
