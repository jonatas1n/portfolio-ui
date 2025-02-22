import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/types";
import DOMPurify from "dompurify";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  return (
    <Card>
      <div className="grid gap-4 grid-cols-4">
        <div className="grid gap-4 col-span-3">
          <h5 className="font-bold font-display text-2xl">{title}</h5>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {technologies.map((technology, index) => (
              <Tag key={index}>{technology}</Tag>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          ></div>
          <div className="flex gap-3 mt-4">
            {link && (
              <Link href={link}>
                <Button>
                  Visit page <FaExternalLinkAlt size={16} />
                </Button>
              </Link>
            )}
          </div>
        </div>
        {images && <Image src={images[0]} alt="Photo" />}
      </div>
    </Card>
  );
};
