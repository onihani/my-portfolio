// local components
import WorkHistoryCard from "./work-history-card";
// shared components
import { SectionHeader } from "@/components/shared";

const Experience = () => {
  return (
    <section className="relative w-full h-min flex flex-col gap-8 overflow-visible">
      <div className="relative w-full h-min flex flex-col justify-center gap-10 flex-nowrap overflow-hidden">
        {/* header */}
        <SectionHeader title="6+ Years Of" subTitle="Experience" />
        {/* work historys */}
        <div className="w-full flex flex-col gap-10">
          <WorkHistoryCard />
          <WorkHistoryCard />
          <WorkHistoryCard />
          <WorkHistoryCard />
        </div>
      </div>
    </section>
  );
};

export default Experience;
