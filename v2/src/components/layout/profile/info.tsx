// next
import Link from "next/link";

// data
import { socials } from "@/common/data";

const Info = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="max-w-96 flex flex-col items-center gap-1">
        <h1 className="text-background text-xl lg;text-2xl font-semibold">
          Nathaniel Quansah
        </h1>
        <h4
          className={`text-black/80 lg:text-lg font-medium text-center font-bricolageGrotesque`}
        >
          A Software Developer passionate about building scalable, innovative
          solutions that drive impact.
        </h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex">
          <Link
            href="mailto:n.bongo40@gmail.com"
            className="bg-background py-2 px-6 flex items-center gap-2 rounded-full border border-secondary"
          >
            <span className="text-sm font-bricolageGrotesque">
              Send me an email
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-6 flex-nowrap">
          {socials.map(({ href, icon: SocialIcon, label }) => (
            <Link key={label} href={href} className="group">
              <span className="sr-only">{label}</span>
              <SocialIcon size={20} className="text-black hover:text-coral transition-colors duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
