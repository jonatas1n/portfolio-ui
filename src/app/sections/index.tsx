import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Experiences } from "./Experiences";
import { Intro } from "./Intro";

export function SectionsWrapper() {
  return (
    <div className="lg:col-span-5 col-span-6 grid md:gap-24 gap-10">
      <Intro />
      <Projects />
      <Skills />
      <Experiences />
    </div>
  );
}
