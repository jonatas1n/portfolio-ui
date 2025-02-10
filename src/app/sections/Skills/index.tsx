import { OutlineCard } from "@/app/components/OutlineCard";
import { SectionCard } from "@/app/components/SectionCard";

export const Skills = () => {
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi, eaque fugiat saepe quibusdam exercitationem. Placeat nulla dicta quam voluptatum, mollitia accusantium dignissimos. Labore exercitationem mollitia eligendi iste, repudiandae delectus quas ad ullam cupiditate quod tempore ex eos, doloribus dolore qui aliquam porro voluptatibus repellendus?"
  return (
    <SectionCard>
      <div className="grid gap-8">
        <h3 className="text-4xl font-display font-bold">Skills</h3>
        <OutlineCard title="Typescript" description={description} />
        <OutlineCard title="React" description={description} />
        <OutlineCard title="Python" description={description} />
      </div>
    </SectionCard>
  );
};
