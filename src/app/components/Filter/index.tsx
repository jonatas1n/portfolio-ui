import { Tag } from "../Tag";
import { X } from "lucide-react";

type FilterProps = {
  filtersList: string[];
  onClear: VoidFunction;
  onChange: (filter: string) => void;
  technologies: string[];
};

export const Filter = ({ filtersList, onClear, onChange, technologies }: FilterProps) => {
  return (
    <div className="flex gap-4 items-center font-body">
      <p className="text-accent">Filter by technology:</p>
      {filtersList?.map((filter) => (
        <Tag
          key={filter}
          onClick={() => onChange(filter)}
          active={technologies.includes(filter)}
        >
          {filter}
        </Tag>
      ))}
      {technologies.length !== 0 && (
        <p
          onClick={onClear}
          className="flex gap-1 hover:cursor-pointer text-sm items-center uppercase text-accent"
        >
          <FaTimes size="16" /> Clear
        </p>
      )}
    </div>
  );
};
