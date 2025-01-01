// react
import { FC } from "react";

// next
import Link from "next/link";
import Image from "next/image";

// types
import { type ArticleItem } from "@/common/data";

const Article: FC<ArticleItem> = ({ title, description, image, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-secondary p-4 flex flex-col gap-6 border border-secondary rounded-2xl"
    >
      <div className="rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={377}
          height={282}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-3.5">
        <h3 className="text-2xl font-semibold group-hover:text-coral">
          {title}
        </h3>
        <p className="font-bricolageGrotesque text-foreground/75">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Article;
