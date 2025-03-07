"use client"

import { ReactNode, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import * as motion from "motion/react-client";

type GalleryProps = {
  items: ReactNode[];
  showIndex?: boolean;
};

export const Carousel = ({
  items,
  showIndex = false,
}: GalleryProps) => {
  const [itemIndex, setItemIndex] = useState(0);

  const nextItem = () => {
    if (itemIndex + 1 == items.length) return;
    setItemIndex(itemIndex + 1);
  }

  const prevItem = () => {
    if (itemIndex == 0) return;
    setItemIndex(itemIndex - 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-flow-col gap-4 items-center justify-items-center"
    >
      {items.length > 1 && (
        <button
          className="justify-self-start disabled:opacity-35 flex gap-2 items-center font-display"
          disabled={itemIndex == 0}
          onClick={prevItem}
        >
          <FaRegArrowAltCircleLeft size={24} /> <span className="inline lg:hidden">Previous</span>
        </button>
      )}
      <div className="grid lg:row-start-1 lg:col-span-1 gap-4 justify-center row-start-2 col-start-1 col-span-2 w-full">
        {items[itemIndex]}
        {showIndex && items.length > 1 && (
          <h6 className="text-center text-dark font-display">
            {itemIndex + 1} of {items.length}
          </h6>
        )}
      </div>
      {items.length > 1 && (
        <button
          className="justify-self-end disabled:opacity-35 flex gap-2 items-center font-display"
          disabled={items.length == itemIndex + 1}
          onClick={nextItem}
        >
          <span className="inline lg:hidden">Next</span> <FaRegArrowAltCircleRight size={24} />
        </button>
      )}
    </motion.div>
  );
};
