// next
import Link from "next/link";
import Image from "next/image";
// imports
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

// fonts
import { bricolageGrotesque } from "@/common/fonts";

// data
import { socials } from "@/common/data";

const Sidebar = () => {
  return (
    <div className="py-40 px-10 flex flex-col justify-center gap-12">
      {/* personal info */}
      <div className="flex flex-col gap-3">
        <Image
          src="https://avatar.iran.liara.run/public"
          alt="Photo of me"
          width={120}
          height={120}
          className="rounded-full border-2"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Nathaniel Quansah</h1>
          <h4
            className={`text-base font-medium ${bricolageGrotesque.className}`}
          >
            Software Engineer
          </h4>
        </div>
      </div>
      {/* description */}
      <div className={`text-lg font-medium ${bricolageGrotesque.className}`}>
        <p>Crafting bold, creative solutions with passion and precision.</p>
      </div>
      {/* contact */}
      <div className="flex flex-col gap-5">
        <div>
          <Link
            href="mailto:n.bongo40@gmail.com"
            className={`bg-secondary hover:brightness-110 py-2 px-4 pr-5 text-sm inline-flex items-center gap-3 rounded-full border border-white/10 transition-shadow duration-300 shadow-[0_0_5px_rgba(255,255,255,0.1)] hover:shadow-[0_0_5px_rgba(255,255,255,0.3)] ${bricolageGrotesque.className}`}
          >
            <EnvelopeClosedIcon width={18} height={18} />
            <span>n.bongo40@gmail.com</span>
          </Link>
        </div>
        <div className="px-2 flex items-center gap-5">
          {socials.map(({ href, label, icon: SocialIcon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="text-white/80 hover:text-white"
            >
              <span className="sr-only">{label}</span>
              <SocialIcon width={22} height={22} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
