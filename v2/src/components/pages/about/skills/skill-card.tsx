// react
import { FC } from "react";
// next
import Image from "next/image";

// types
import { type SkillItem } from "@/common/data";

const SkillCard: FC<SkillItem> = ({ title, description, image }) => {
  return (
    <div className="w-full hover:bg-secondary p-4 grid grid-cols-[60px_1fr] gap-3 rounded-xl transition-colors duration-300">
      {/* Image */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-15 h-15 rounded-xl bg-foreground flex items-center justify-center">
          <Image
            src={image}
            alt={`${title} icon`}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-0.5">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-foreground/70 font-bricolageGrotesque">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
