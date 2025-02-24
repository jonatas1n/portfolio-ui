import Image from "next/image";
import { Carousel } from "../../../components/Carousel";

type ProjectGalleryProps = {
  images: string[];
};

export const ProjectGallery = ({
  images,
}: ProjectGalleryProps) => {
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
      showIndex
    />
  );
};
