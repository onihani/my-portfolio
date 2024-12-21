// next
import Image from "next/image";

// static assets
import me from "@/../public/images/me.jpeg";

const Photo = () => {
  return (
    <div className="relative w-[272px] h-[340px] rounded-xl">
      <Image
        src={me}
        alt="Photo of me"
        width={769}
        height={1022}
        className="w-full rounded-xl"
      />
    </div>
  );
};

export default Photo;
