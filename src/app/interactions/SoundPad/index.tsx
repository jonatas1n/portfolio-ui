import { useState, useEffect, useCallback, useRef } from "react";
import { SoundPadItem } from "./SoundPadItem";
import { MdTouchApp } from "react-icons/md";
import * as motion from "motion/react-client";
import { NOTE_FREQUENCIES, TOUCH_MESSAGE } from "./constants";

export const SoundPad = () => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const oscillatorsRef = useRef<Map<number, OscillatorNode>>(new Map());

  const stopNote = useCallback((frequency: number) => {
    const osc = oscillatorsRef.current.get(frequency);
    if (!osc) return;
    osc.stop();
    osc.disconnect();
    oscillatorsRef.current.delete(frequency);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        oscillatorsRef.current.forEach((osc) => {
          osc.stop();
          osc.disconnect();
        });
        oscillatorsRef.current.clear();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const startNote = (frequency: number) => {
    if (oscillatorsRef.current.has(frequency)) return; // Evita duplicação da nota

    const ctx =
      audioContext || new (window.AudioContext || window.AudioContext)();
    setAudioContext(ctx);

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    oscillatorsRef.current.set(frequency, osc);
  };

  return (
    <div className="grid align-center grid-rows-3">
      <div className="grid grid-cols-7 row-end-3 row-start-1 rounded-b-2xl overflow-hidden">
        {Object.entries(NOTE_FREQUENCIES).map(([note, frequencies], index) => (
          <motion.div
            transition={{ delay: index * 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={note}
            className="grid grid-rows-3"
          >
            {Object.values(frequencies).map((frequency, frequencyIndex) => (
              <motion.div
                transition={{ delay: frequencyIndex * 0.1 + index * 0.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                key={frequency}
              >
                <SoundPadItem
                  frequency={frequency}
                  stopNote={() => stopNote(frequency)}
                  startNote={() => startNote(frequency)}
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      <motion.h4
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="font-semibold row-start-3 text-light text-opacity-30 self-center font-display text-center flex items-center gap-1 justify-center"
      >
        <MdTouchApp /> {TOUCH_MESSAGE}
      </motion.h4>
    </div>
  );
};
