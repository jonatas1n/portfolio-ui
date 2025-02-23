import { useState } from "react";
import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/types";
import DOMPurify from "dompurify";
import * as motion from "motion/react-client";
import { IoMdPhotos } from "react-icons/io";
import { AnimatePresence } from "motion/react";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<undefined | number>(
    undefined
  );

  const toggleSelectedImage = () =>
    setSelectedImageIndex(!!selectedImageIndex ? undefined : 1);

  return ( 
    <Card>
      <AnimatePresence>
        {!!selectedImageIndex && images ? (
          <div className="grid gap-4">
            <Button className="justify-self-start" onClick={toggleSelectedImage}>
              <FaArrowLeft /> Voltar
            </Button>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="grid grid-flow-col gap-1 items-center justify-items-center"
            >
              <Button className="justify-self-start" disabled={selectedImageIndex - 1 == 0}>
                <FaChevronLeft />
              </Button>
              <Image
                src={images?.[selectedImageIndex - 1]}
                width={0}
                height={0}
                className="w-auto h-full max-h-[30rem] rounded-lg"
                alt="Portfolio image"
              />
              <Button className="justify-self-end" disabled={images.length == selectedImageIndex}>
                <FaChevronRight />
              </Button>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateX: 15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 1, translateX: -15 }}
            transition={{ duration: 0.75 }}
            className="grid gap-4 grid-cols-4"
          >
            <div className="grid gap-4 col-span-full">
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
                {images && (
                  <Button onClick={toggleSelectedImage}>
                    See images <IoMdPhotos />
                  </Button>
                )}
                {link && (
                  <Link href={link}>
                    <Button>
                      Visit page <FaExternalLinkAlt size={12} />
                    </Button>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
