import * as Tone from "tone";
import { notes, sharpNotes } from "./constants";
import { PianoKey } from "./PianoKey";

export const Piano = () => {
  const sampler = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  const attackNote = (note: string) => {
    sampler.triggerAttackRelease(note, "8n");
  };

  return (
    <div className="mx-auto flex h-1/2 relative">
      {notes.map(({ note, key }) => (
        <PianoKey
          key={note}
          note={note}
          onAttack={attackNote}
          binding={key}
        />
      ))}

      {sharpNotes.map(
        (note, index) =>
          note.note && (
            <PianoKey
              sharp
              note={note.note}
              left={index}
              key={note.note + index}
              onAttack={attackNote}
              binding={note.key}
            />
          )
      )}
    </div>
  );
};
