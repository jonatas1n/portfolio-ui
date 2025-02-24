import { memo } from "react";
import { Container } from "@/components/Container";
import { SideMenu as SideMenuComponent } from "@/components/SideMenu";
import { BackToTop as BackToTopComponent } from "./components/BackToTop";
import { SectionsWrapper } from "@/sections";

import "@fontsource-variable/outfit";
import "@fontsource-variable/source-sans-3";
import { Footer } from "./sections/Footer";

const SideMenu = memo(SideMenuComponent);
SideMenu.displayName = "SideMenu";

const BackToTop = memo(BackToTopComponent);
BackToTop.displayName = "BackToTop";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-10 h-full items-center mb-24">
        <SectionsWrapper />

        <div className="relative lg:col-span-1 col-span-full grid items-center h-full">
          <SideMenu />
          <BackToTop />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
