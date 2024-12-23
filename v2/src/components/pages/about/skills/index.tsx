// local components
import SkillCard from "./skill-card";
// shared components
import { SectionHeader } from "@/components/shared";

const Skills = () => {
  return (
    <section className="relative w-full h-min flex flex-col gap-8 overflow-visible">
      <div className="relative w-full h-min flex flex-col justify-center gap-10 flex-nowrap overflow-hidden">
        {/* header */}
        <SectionHeader title="Skills And" subTitle="TechStack" />
        {/* tools */}
        <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* skill */}
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
