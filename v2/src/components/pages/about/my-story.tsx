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
            I’m a Full Stack Developer with over 6+ years of experience,
            specializing in modern technologies like Go, JavaScript, TypeScript,
            React, Next.js, Node.js, SQL and NoSQL. I’ve built and maintained
            scalable, fast, and user-friendly web applications, with hands-on
            experience in blockchain development, including decentralized apps,
            smart contracts, and integrating web apps with blockchain
            ecosystems.
          </p>
          <p>
            I excel at developing RESTful and GraphQL APIs, optimizing web performance, and
            collaborating with others to meet user and business needs. I’m
            well-versed in agile methodologies, version control systems like
            Git, and solving complex technical challenges within tight
            deadlines.
          </p>
          <p>
            I’m passionate about delivering quality results and building
            impactful tools and platforms. I focus on balancing technical
            precision with exceptional user experiences, always striving to
            drive innovation and solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
