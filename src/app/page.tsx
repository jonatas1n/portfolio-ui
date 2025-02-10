import { Container } from "@/app/components/Container";
import { SideMenu } from "@/app/components/SideMenu";
import { Experiences } from "@/app/sections/Experiences";
import { Intro } from "@/app/sections/Intro";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { ChevronDown } from "lucide-react";

import "@fontsource-variable/outfit";
import "@fontsource-variable/source-sans-3";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-6 h-full min-h-dvh items-start">
        <div className="col-span-5 grid gap-32 justify-center">
          <div className="h-dvh grid-rows-3 gap-4 grid items-center justify-center -mb-60">
            <div className="row-start-2">
              <Intro />
            </div>
            <div className="w-full row-start-3 text-accent flex justify-center text-center">
              <ChevronDown />
            </div>
          </div>
          <Projects />
          <Skills />
          <Experiences />
        </div>
        <div className="relative col-span-1 grid items-center h-dvh max-h-dvh">
          <SideMenu />
        </div>
      </div>
    </Container>
  );
}