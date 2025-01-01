// local components
import ProjectCard from "./project-card";
// shared components
import { SectionHeader } from "@/components/shared";

// data
import { projects } from "@/common/data";

const Works = () => {
  return (
    <section className="relative w-full h-min flex flex-col gap-8 overflow-visible">
      <div className="relative w-full h-min flex flex-col justify-center gap-10 flex-nowrap overflow-hidden">
        {/* header */}
        <SectionHeader title="Featured" subTitle="Projects" />
        {/* projects */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
