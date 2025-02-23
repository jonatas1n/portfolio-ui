import Image from "next/image";
import { Carousel } from "../Carousel";
import React from "react";

type GalleryProps = {
  images: string[];
  imageIndex: number;
  nextImage?: VoidFunction;
  prevImage?: VoidFunction;
};

export const Gallery = ({
  images,
  imageIndex,
  nextImage,
  prevImage,
}: GalleryProps) => {
  const imagesNodes = images.map((image) => (
    <Image
      key={image}
      src={image}
      width={0}
      height={0}
      className="w-auto h-full min-h-[20rem] max-h-[30rem] rounded-lg"
      alt="Portfolio image"
    />
  ));
  return (
    <Carousel
      items={imagesNodes}
      itemIndex={imageIndex}
      nextItem={nextImage}
      prevItem={prevImage}
      showIndex
    />
  );
};
