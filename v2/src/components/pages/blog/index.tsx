// local components
import Article from "./article";
// shared components
import { SectionHeader } from "@/components/shared";

// data
import { articles } from "@/common/data";

const BlogSection = () => {
  return (
    <section className="relative w-full h-min flex flex-col gap-8 overflow-visible">
      <div className="relative w-full h-min flex flex-col justify-center gap-10 flex-nowrap overflow-hidden">
        {/* header */}
        <SectionHeader title="Technical" subTitle="Writing" />
        {/* acticles */}
        <div className="w-full grid lg:grid-cols-2 gap-y-12 gap-x-10">
          {/* article */}
          {articles.map((article) => (
            <Article key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
