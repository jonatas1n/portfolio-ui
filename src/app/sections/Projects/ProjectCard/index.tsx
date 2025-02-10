import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  key: string;
  technologies: string[];
  title: string;
  link?: string;
  description: string;
  photos?: string[];
};

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  photos,
}: ProjectCardProps) => {
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
            <Button>More photos</Button>
            {link && (
              <Link href={link}>
                <Button>
                  Visit page <ExternalLink size={16} />
                </Button>
              </Link>
            )}
          </div>
        </div>
        {photos && <Image src={photos[0]} alt="Photo" />}
      </div>
    </Card>
  );
};
