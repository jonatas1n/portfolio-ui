import { useState } from "react";
import { SoundPadItem } from "./SoundPadItem";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const NOTE_FREQUENCIES = {
  C: { normal: 261.63, sharp: 277.18, diminished: 246.94 },
  D: { normal: 293.66, sharp: 311.13, diminished: 277.18 },
  E: { normal: 329.63, sharp: 349.23, diminished: 311.13 },
  F: { normal: 349.23, sharp: 369.99, diminished: 329.63 },
  G: { normal: 392.0, sharp: 415.3, diminished: 369.99 },
  A: { normal: 440.0, sharp: 466.16, diminished: 415.3 },
  B: { normal: 493.88, sharp: 523.25, diminished: 466.16 },
};

export const SoundPad = () => {
  const [hasTouched, setHasTouched] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const startNote = (note: number) => {
    const ctx =
      audioContext || new (window.AudioContext || window.AudioContext)();
    setAudioContext(ctx);

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    setOscillator(osc);
  };

  const stopNote = () => {
    if (oscillator) {
      oscillator.stop();
      setOscillator(null);
    }
  };

  return (
    <div
      onClick={() => setHasTouched(true)}
      onTouchStart={() => setHasTouched(true)}
      className="grid align-center grid-rows-3"
    >
      <div className="grid grid-cols-7 row-end-3 row-start-1">
        {Object.entries(NOTE_FREQUENCIES).map(([note, frequencies]) => (
          <div key={note} className="grid grid-rows-3">
            <SoundPadItem
              frequency={frequencies.diminished}
              stopNote={stopNote}
              startNote={startNote}
            />
            <SoundPadItem
              frequency={frequencies.normal}
              stopNote={stopNote}
              startNote={startNote}
            />
            <SoundPadItem
              frequency={frequencies.sharp}
              stopNote={stopNote}
              startNote={startNote}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {!hasTouched && (
          <motion.h4
            animate={{ opacity: [0, 0.25, 0.25, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="text-xl font-semibold row-start-3 text-light self-center font-display text-center"
          >
            Touch to interact
          </motion.h4>
        )}
      </AnimatePresence>
    </div>
  );
};
