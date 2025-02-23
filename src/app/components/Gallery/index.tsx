import { Button } from "@/app/components/Button";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import * as motion from "motion/react-client";

type GalleryProps = {
  images: string[];
  imageIndex: number;
  closeGallery: VoidFunction;
  nextImage?: VoidFunction;
  prevImage?: VoidFunction;
};

export const Gallery = ({
  closeGallery,
  images,
  imageIndex,
  nextImage,
  prevImage,
}: GalleryProps) => {
  console.log(images);
  return (
    <div className="grid gap-4">
      <Button className="justify-self-start" onClick={closeGallery}>
        <FaArrowLeft /> Voltar
      </Button>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="grid grid-flow-col gap-1 items-center justify-items-center"
      >
        <Button
          className="justify-self-start py-4"
          disabled={imageIndex - 1 == 0}
          onClick={prevImage}
        >
          <FaChevronLeft />
        </Button>
        <div className="grid gap-1 justify-center">
          <Image
            src={images[imageIndex - 1]}
            width={0}
            height={0}
            className="w-auto h-full max-h-[30rem] rounded-lg"
            alt="Portfolio image"
          />
          <h6 className="text-center text-dark font-display">
            {imageIndex} of {images.length}
          </h6>
        </div>
        <Button
          className="justify-self-end py-4"
          disabled={images.length == imageIndex}
          onClick={nextImage}
        >
          <FaChevronRight />
        </Button>
      </motion.div>
    </div>
  );
};
