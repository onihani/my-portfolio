// next
import Image from "next/image";
// imports
import { ArrowRight } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="w-full h-min bg-secondary py-3 px-2.5 grid lg:grid-cols-[35%_1fr] gap-3 border border-secondary rounded-3xl shadow-3d">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full p-3 flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Medtrack</h3>
          <p className="text-foreground/90 font-bricolageGrotesque">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            obcaecati eos, reprehenderit minima eligendi ipsam dicta accusamus.
            Possimus, pariatur a!
          </p>
        </div>
        <div className="w-full pb-1">
          <button
            className="group relative w-full px-6 py-2 bg-coral/50 rounded-full transition-all duration-300 border-[1.5px] border-coral/40
    before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
    before:shadow-[0px_4px_8px_rgba(0,0,0,0.2)]
    hover:bg-gradient-to-b hover:from-coral/90 hover:via-coral/50 hover:to-coral/20
    hover:before:shadow-[0px_6px_8px_rgba(255,127,80,0.2)]
    active:translate-y-[1px]"
          >
            <div className="relative text-sm font-medium flex items-center justify-between">
              <span>View Project</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center flex-[1_0_0] gap-2.5 overflow-visible">
        <div className="relative w-full border border-secondary rounded-2xl overflow-hidden">
          <Image
            src="https://placehold.co/800x600/png"
            alt="project image"
            width={800}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
