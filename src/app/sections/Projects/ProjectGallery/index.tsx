import Image from "next/image";
import { Carousel } from "../../../components/Carousel";

type ProjectGalleryProps = {
  images: string;
};

export const ProjectGallery = ({
  images,
}: ProjectGalleryProps) => {
  const imagesNodes = JSON.parse(images).map((image: string) => (
    <Image
      key={image}
      src={image}
      layout="responsive"
      width={0}
      height={0}
      className="rounded-lg"
      alt="Portfolio image"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  ));
  return (
    <Carousel
      items={imagesNodes}
      showIndex
    />
  );
};
