import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/types";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  return (
    <Card>
      <div className="grid-gap-4 grid-cols-4">
        <div className="grid gap-3 col-span-3">
          <h5 className="font-bold font-display text-2xl">{title}</h5>
          <div className="flex gap-4">
            {technologies.map((technology, index) => (
              <Tag key={index}>{technology}</Tag>
            ))}
          </div>
          <div>{description}</div>
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
