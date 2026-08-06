"use client";

import { SyntheticEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type ProjectGalleryProps = {
  images: string[];
};

type Orientation = "portrait" | "landscape";

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const { translation } = useLanguage();
  const [orientations, setOrientations] = useState<Record<number, Orientation>>(
    {}
  );

  const handleImageLoad =
    (index: number) => (event: SyntheticEvent<HTMLImageElement>) => {
      const { naturalWidth, naturalHeight } = event.currentTarget;
      const orientation: Orientation =
        naturalWidth > naturalHeight ? "landscape" : "portrait";
      setOrientations((previous) => ({ ...previous, [index]: orientation }));
    };

  return (
    <div className="rounded-lg bg-black p-3 sm:p-4">
      <div className="columns-2 sm:columns-3 gap-3 [column-fill:balance]">
        {images.map((image, index) => (
          <figure
            key={index}
            className={`mb-3 break-inside-avoid ${
              orientations[index] === "landscape" ? "[column-span:all]" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={translation.misc.galleryImageAlt}
              onLoad={handleImageLoad(index)}
              className="w-full h-auto max-h-[70vh] object-contain rounded-md"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};
