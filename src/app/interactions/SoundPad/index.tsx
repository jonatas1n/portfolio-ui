"use client";

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
    const ctx = new (window.AudioContext || window.AudioContext)();
    setAudioContext(ctx);

    return () => {
      ctx.close();
    };
  }, []);

  const startNote = (frequency: number) => {
    let osc = oscillatorsRef.current.get(frequency);
    if (osc) {
      osc.start();
      return;
    }

    if (!audioContext) return;

    osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);

    osc.start();
    oscillatorsRef.current.set(frequency, osc);
  };

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

  return (
    <div className="grid align-center grid-rows-3">
      <div className="grid grid-cols-8 row-end-3 row-start-1 rounded-b-2xl overflow-hidden">
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
                  noteLabel={frequencyIndex === 1 ? note : undefined}
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
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 2, delay: 5 }}
        className="font-semibold row-start-3 text-light text-opacity-30 self-center font-display text-center flex items-center gap-1 justify-center"
      >
        <MdTouchApp /> {TOUCH_MESSAGE}
      </motion.h4>
    </div>
  );
};
