import Image from "next/image";
import { Carousel } from "../../../components/Carousel";

type ProjectGalleryProps = {
  images: string[];
};

export const ProjectGallery = ({
  images,
}: ProjectGalleryProps) => {
  const imagesNodes = images.map((image: string) => (
    <div
      key={image}
      className="flex items-center justify-center rounded-lg bg-neutral-900 p-4"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          fill
          className="object-contain"
          alt="Portfolio image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  ));
  return (
    <Carousel
      items={imagesNodes}
      showIndex
    />
  );
};
