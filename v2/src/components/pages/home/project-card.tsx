// next
import Link from "next/link";
import Image from "next/image";

// fonts
import { bricolageGrotesque } from "@/common/fonts";

export const ProjectCard = () => {
  return (
    <div className="bg-secondary p-12 flex flex-col gap-y-6 rounded-3xl">
      {/* image */}
      <Image
        src="https://placehold.co/528x258/png"
        alt="project image"
        width={528}
        height={258}
        className="w-full rounded-xl"
      />
      {/* details */}
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Soloist Collective</h1>
        <p className="text-base font-semibold">
          A fashion brand that uniquely design to suit their customers
        </p>
        <div className="flex">
          <Link
            href="#"
            className={`py-1.5 px-3 text-xs font-light ${bricolageGrotesque.className} border border-[rgba(255,255,255,0.24)] rounded-full`}
          >
            Link to project detail page
          </Link>
        </div>
      </div>
    </div>
  );
};
