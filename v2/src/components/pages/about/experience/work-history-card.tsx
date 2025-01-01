// react
import { FC } from "react";

// components
import { MarkdownRenderer } from "@/components/shared";

// types
import { type ExperienceItem } from "@/common/data";

const WorkHistoryCard: FC<ExperienceItem> = ({
  details,
  duration,
  organization,
}) => {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="w-full flex flex-col gap-1">
        <h4 className="text-xl font-bold uppercase">{organization}</h4>
        <h6 className="text-foreground/80 font-medium capitalize">
          {duration}
        </h6>
      </div>
      <div className="text-accent text-sm lg:text-base font-bricolageGrotesque">
        <MarkdownRenderer content={details} />
      </div>
    </div>
  );
};

export default WorkHistoryCard;
