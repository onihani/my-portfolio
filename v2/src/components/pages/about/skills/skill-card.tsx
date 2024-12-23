// next
import Image from "next/image";

const SkillCard = () => {
  return (
    <div className="w-full hover:bg-secondary p-4 grid grid-cols-[60px_1fr] gap-3 rounded-xl transition-colors duration-300">
      {/* Image */}
      <div className="w-full flex items-center justify-center">
        <Image
          src="https://framerusercontent.com/images/SvTAZZonMqViqF7fP6GK7CWmL84.png"
          alt="figma icon"
          width={60}
          height={60}
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-0.5">
        <h4 className="text-xl font-bold">Figma</h4>
        <p className="text-foreground/70 font-bricolageGrotesque">
          Website Builer
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
