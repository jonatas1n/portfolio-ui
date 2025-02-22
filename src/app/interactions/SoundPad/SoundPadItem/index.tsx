import * as motion from "motion/react-client";

type SoundPadItemProps = {
  frequency: number;
  stopNote: VoidFunction;
  startNote: (frequency: number) => void;
  noteLabel?: string;
};

export const SoundPadItem = ({
  frequency,
  stopNote,
  startNote,
  noteLabel,
}: SoundPadItemProps) => {
  return (
    <motion.button
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 0.15 }}
      whileTap={{ opacity: 0.25 }}
      onMouseDown={() => startNote(frequency)}
      onMouseUp={stopNote}
      onMouseEnter={(e) => {
        if (e.buttons === 1) startNote(frequency);
      }}
      onMouseLeave={stopNote}
      onTouchStart={(e) => {
        e.preventDefault();
        startNote(frequency);
      }}
      onTouchEnd={stopNote}
      className="bg-accent bg-opacity-40 border-dark border h-full w-full text-opacity-25 text-accent font-display text-2xl"
    >
      {noteLabel && noteLabel[0]}
    </motion.button>
  );
};
