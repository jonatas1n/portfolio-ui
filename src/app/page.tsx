import { Container } from "@/app/components/Container";
import { SideMenu } from "@/app/components/SideMenu";
import { Experiences } from "@/app/sections/Experiences";
import { Intro } from "@/app/sections/Intro";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { BackToTop } from "./components/BackToTop";

import "@fontsource-variable/outfit";
import "@fontsource-variable/source-sans-3";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-10 h-full items-center mb-24">
        <div className="lg:col-span-5 col-span-6 grid md:gap-24 gap-10">
          <Intro />
          <Projects />
          <Skills />
          <Experiences />
        </div>
        <div className="relative lg:col-span-1 col-span-full grid items-center h-full">
          <SideMenu />
          <BackToTop />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
