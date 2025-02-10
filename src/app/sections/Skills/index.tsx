import { OutlineCard } from "@/app/components/OutlineCard";
import { SectionCard } from "@/app/components/SectionCard";

export const Skills = () => {
  return (
    <SectionCard>
      <div className="grid gap-8">
        <h3 className="text-4xl font-display font-bold">Skills</h3>
        <OutlineCard title="Typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quasi, eaque fugiat saepe quibusdam exercitationem. Placeat nulla
          dicta quam voluptatum, mollitia accusantium dignissimos. Labore
          exercitationem mollitia eligendi iste, repudiandae delectus quas ad
          ullam cupiditate quod tempore ex eos, doloribus dolore qui aliquam
          porro voluptatibus repellendus?
        </OutlineCard>
        <OutlineCard title="React">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quasi, eaque fugiat saepe quibusdam exercitationem. Placeat nulla
          dicta quam voluptatum, mollitia accusantium dignissimos. Labore
          exercitationem mollitia eligendi iste, repudiandae delectus quas ad
          ullam cupiditate quod tempore ex eos, doloribus dolore qui aliquam
          porro voluptatibus repellendus?
        </OutlineCard>
        <OutlineCard title="Python">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quasi, eaque fugiat saepe quibusdam exercitationem. Placeat nulla
          dicta quam voluptatum, mollitia accusantium dignissimos. Labore
          exercitationem mollitia eligendi iste, repudiandae delectus quas ad
          ullam cupiditate quod tempore ex eos, doloribus dolore qui aliquam
          porro voluptatibus repellendus?
        </OutlineCard>
      </div>
    </SectionCard>
  );
};
