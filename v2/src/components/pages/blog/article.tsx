// next
import Link from "next/link";
import Image from "next/image";

const Article = () => {
  return (
    <Link
      href="https://onihani.hashnode.dev/building-fungible-tokens-with-the-near-js-sdk"
      target="_black"
      className="bg-secondary p-4 flex flex-col gap-6 border border-secondary rounded-2xl"
    >
      <div className="rounded-md overflow-hidden">
        <Image
          src="https://placehold.co/1600x1100/png" // jsVkNHGVkUY
          alt="tokens image"
          width={377}
          height={282}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-3.5">
        <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
        <p className="font-bricolageGrotesque text-foreground/75">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          tenetur voluptas ipsam exercitationem? Eveniet, illo.
        </p>
      </div>
    </Link>
  );
};

export default Article;
