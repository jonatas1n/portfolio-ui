import * as motion from "motion/react-client";

type SoundPadItemProps = {
  frequency: number;
  stopNote: VoidFunction;
  startNote: (frequency: number) => void;
};

export const SoundPadItem = ({
  frequency,
  stopNote,
  startNote,
}: SoundPadItemProps) => {
  return (
    <motion.button
      whileHover={{ opacity: 0.15 }}
      whileTap={{ scale: 0.9, opacity: 0.15 }}
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
      className="bg-accent border-dark border text-dark font-display text-2xl opacity-5"
    />
  );
};
