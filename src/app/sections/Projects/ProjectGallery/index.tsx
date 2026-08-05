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
      className="flex items-center justify-center rounded-lg bg-neutral-900 p-4 w-full h-[60vh] sm:h-[30rem]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt="Portfolio image"
        className="max-h-full max-w-full w-auto object-contain mx-auto rounded-md"
      />
    </div>
  ));
  return (
    <Carousel
      items={imagesNodes}
      showIndex
    />
  );
};
