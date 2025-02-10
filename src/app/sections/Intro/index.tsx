import { SectionCard } from "@/app/components/SectionCard";

export const Intro = () => {
  return (
    <SectionCard id="home">
      <div className="grid-cols-8 grid mt-3">
        <div className="col-span-7 gap-6 grid">
          <div className="grid gap-9 mb-20">
            <div className="font-display">
              <h1 className="text-6xl font-bold leading-10">
                I&apos;m Jônatas Gomes
              </h1>
              <h4 className="text-xl font-bold text-accent leading-10">
                (but you can call me Johny)
              </h4>
            </div>
            <h3 className="text-3xl font-bold font-display">
              and this is my portfolio 👨🏿‍💻
            </h3>
            <div className="text-base font-body py-4 border-y border-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed rhoncus libero. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Sed placerat sodales
              dignissim.
            </div>
          </div>
          <nav className="sticky top-0 text-xl font-display flex font-medium underline gap-14 mb-4 bg-light">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experiences">Experiences</a>
          </nav>
        </div>
      </div>
    </SectionCard>
  );
};
