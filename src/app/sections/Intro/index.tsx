import { SectionCard } from "@/app/components/SectionCard";

export const Intro = () => {
  return (
    <SectionCard>
      <div className="sm:grid-cols-8 grid-cols-1 grid mt-3 sm:py-16">
        <div className="lg:col-span-7 gap-6 grid">
          <div className="grid sm:gap-9 gap-8 md:gap-3">
            <div className="font-display">
              <h1 className="sm:text-6xl text-4xl font-bold leading-10">
                I&apos;m Jônatas Gomes
              </h1>
              <h4 className="sm:text-xl font-bold text-accent leading-10">
                (but you can call me Johny)
              </h4>
            </div>
            <h3 className="sm:text-3xl text-2xl font-bold font-display">
              and this is my portfolio 👨🏿‍💻
            </h3>
            <div className="text-base font-body py-4 border-y border-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed rhoncus libero. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Sed placerat sodales
              dignissim.
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};
