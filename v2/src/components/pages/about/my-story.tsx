// components
import { SectionHeader } from "@/components/shared";

const MyStory = () => {
  return (
    <section className="relative w-full h-min flex flex-col gap-8 overflow-visible">
      <div className="relative w-full h-min flex flex-col justify-center gap-10 flex-nowrap overflow-hidden">
        {/* header */}
        <SectionHeader title="My Story" />
        {/* description */}
        <div className="flex flex-col gap-6 text-white/80 text-lg font-medium font-bricolageGrotesque leading-[145%]">
          <p>
            Born in Kharkiv, Ukraine. Thriving in Porto, Portugal. {"I've"}{" "}
            spent the past 4+ years collaborating with VC-backed products on
            branding, websites, apps, and marketing.
          </p>
          <p>
            I join forces with founders to create compelling stories and digital
            experiences. Ones that make their products shine, resonate with
            users, and attract more investors.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            iste vel, voluptates facere nihil corporis ab ullam asperiores vitae
            quis illo minima omnis itaque quos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
