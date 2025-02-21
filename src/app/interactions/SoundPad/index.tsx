import { useState } from "react";
import { SoundPadItem } from "./SoundPadItem";

const NOTE_FREQUENCIES = {
  C: { sharp: 277.18, normal: 261.63, diminished: 246.94 },
  D: { sharp: 311.13, normal: 293.66, diminished: 277.18 },
  E: { sharp: 349.23, normal: 329.63, diminished: 311.13 },
  F: { sharp: 369.99, normal: 349.23, diminished: 329.63 },
  G: { sharp: 415.3, normal: 392.0, diminished: 369.99 },
  A: { sharp: 466.16, normal: 440.0, diminished: 415.3 },
  B: { sharp: 523.25, normal: 493.88, diminished: 466.16 },
};

const TOUCH_MESSAGE = "Touch to interact";

export const SoundPad = () => {
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
    if (!oscillator) return;
    oscillator.stop();
    setOscillator(null);
  };

  return (
    <div className="grid align-center grid-rows-3">
      <div className="grid grid-cols-7 row-end-3 row-start-1 rounded-b-2xl overflow-hidden">
        {Object.entries(NOTE_FREQUENCIES).map(([note, frequencies]) => (
          <div key={note} className="grid grid-rows-3">
            {Object.values(frequencies).map((frequency) => (
              <SoundPadItem
                key={frequency}
                frequency={frequency}
                stopNote={stopNote}
                startNote={startNote}
              />
            ))}
          </div>
        ))}
      </div>
      <h4 className="font-semibold row-start-3 text-light text-opacity-30 self-center font-display text-center">
        {TOUCH_MESSAGE}
      </h4>
    </div>
  );
};
