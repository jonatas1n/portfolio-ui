import { Container } from "@/app/components/Container";
import { SideMenu } from "@/app/components/SideMenu";
import { Experiences } from "@/app/sections/Experiences";
import { Intro } from "@/app/sections/Intro";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { FaChevronDown } from "react-icons/fa6";
import { BackToTop } from "./components/BackToTop";

import "@fontsource-variable/outfit";
import "@fontsource-variable/source-sans-3";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <Container>
      <div className="grid sm:grid-cols-6 grid-cols-1 gap-10 h-full items-center mb-24">
        <div className="h-[75dvh] md:h-dvh col-span-5 px-2 grid-rows-3 gap-4 grid items-center justify-center">
          <div className="row-start-2 row-end-4 md:row-end-3 md:self-center">
            <Intro />
          </div>
          <div className="w-full hidden row-start-3 m-30 text-accent md:flex justify-center text-center">
            <FaChevronDown />
          </div>
        </div>
        <div className="col-span-5 grid md:gap-24 gap-10 justify-center px-2">
          <Projects />
          <Skills />
          <Experiences />
        </div>
        <div className="relative md:col-span-1 col-span-5 grid items-center h-full">
          <SideMenu />
          <BackToTop />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
