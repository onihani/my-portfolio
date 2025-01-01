// local components
import SkillCard from "./skill-card";
// shared components
import { SectionHeader } from "@/components/shared";

// data
import { skills } from "@/common/data";

const Skills = () => {
  return (
    <section className="relative w-full h-min flex flex-col gap-8 overflow-visible">
      <div className="relative w-full h-min flex flex-col justify-center gap-10 flex-nowrap overflow-hidden">
        {/* header */}
        <SectionHeader title="Skills And" subTitle="TechStack" />
        {/* tools */}
        <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* skill */}
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
