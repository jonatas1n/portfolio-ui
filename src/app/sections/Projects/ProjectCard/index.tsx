import { useState } from "react";
import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { Project } from "@/app/types";
import DOMPurify from "dompurify";
import * as motion from "motion/react-client";
import { IoMdPhotos } from "react-icons/io";
import { AnimatePresence } from "motion/react";
import { Gallery } from "@/app/components/Gallery";

export const ProjectCard = ({
  technologies,
  title,
  link,
  description,
  images,
}: Project) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<
    undefined | number
  >(undefined);

  const toggleSelectedImage = () =>
    setSelectedImageIndex(!!selectedImageIndex ? undefined : 1);

  const nextImage = () => {
    if (!selectedImageIndex) return;
    if (selectedImageIndex == images?.length) return;
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const prevImage = () => {
    if (!selectedImageIndex) return;
    if (selectedImageIndex == 1) return;
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  return (
    <Card>
      <AnimatePresence>
        {!!selectedImageIndex && images && (
          <Gallery
            closeGallery={toggleSelectedImage}
            images={images}
            imageIndex={selectedImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!selectedImageIndex && (
          <motion.div
            initial={{ opacity: 0, translateX: 15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -15, height: 0 }}
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
                    Images <IoMdPhotos />
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
