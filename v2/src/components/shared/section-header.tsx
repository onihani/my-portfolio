// react
import { FC } from "react";

// types
type SectionHeaderProps = {
  title: string;
  subTitle?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="relative w-full h-auto whitespace-pre-wrap break-words flex flex-shrink-0">
      <h1 className="inline-block text-6xl font-bold leading-[100%] uppercase">
        {title}

        {subTitle && (
          <>
            <br />
            <span className="text-[rgba(182,180,189,.2)]">{subTitle}</span>
          </>
        )}
      </h1>
    </div>
  );
};

export default SectionHeader;
