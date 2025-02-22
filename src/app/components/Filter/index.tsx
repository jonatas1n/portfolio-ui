import { Tag } from "../Tag";
import { FaTimes } from "react-icons/fa";
import * as motion from "motion/react-client";

type FilterProps = {
  filtersList: string[];
  onClear: VoidFunction;
  onChange: (filter: string) => void;
  technologies: string[];
};

export const Filter = ({ filtersList, onClear, onChange, technologies }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 items-center font-body">
      <p className="text-accent">Filter:</p>
      {filtersList?.map((filter, index) => (
        <motion.div
          key={filter}
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: index * 0.0625 }}
        >
          <Tag
            onClick={() => onChange(filter)}
            active={technologies.includes(filter)}
          >
            {filter}
          </Tag>
        </motion.div>
      ))}
      {technologies.length !== 0 && (
        <p
          onClick={onClear}
          className="flex gap-1 cursor-pointer text-sm items-center uppercase text-accent"
        >
          <FaTimes size="16" /> Clear
        </p>
      )}
    </div>
  );
};
