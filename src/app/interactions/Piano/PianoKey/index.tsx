import { useEffect } from "react";
import * as motion from "motion/react-client";

type PianoKeyProps = {
  onAttack: (note: string) => void;
  note: string;
  binding: string[];
  sharp?: boolean;
  left?: number;
};

export const PianoKey = ({
  onAttack,
  note,
  binding,
  left = 0,
  sharp = false,
}: PianoKeyProps) => {
  const className = sharp ? "absolute bg-accent w-10 h-1/2" : "w-16 h-full";

  useEffect(() => {
    let isKeyPressed = false;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (!binding.includes(event.key) || isKeyPressed) return;
      isKeyPressed = true;
      onAttack(note);
    };

    const handleKeyRelease = (event: KeyboardEvent) => {
      if (binding.includes(event.key)) {
        isKeyPressed = false;
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, [binding, note, onAttack]);

  return (
    <motion.div
      initial={{ translateY: -32, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      whileTap={{ background: "#E5D9C0", scaleX: 0.9 }}
      style={{ left: sharp ? `${left * 4 + 2.75}rem` : "auto" }}
      className={
        "border border-t-0 cursor-pointer border-light rounded-b-lg " +
        className
      }
    />
  );
};