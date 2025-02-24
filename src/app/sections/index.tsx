import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Experiences } from "./Experiences";
import { Intro } from "./Intro";

export function SectionsWrapper() {
  return (
    <>
      <Intro />
      <Projects />
      <Projects />
      <Skills />
      <Experiences />
    </>
  );
}
