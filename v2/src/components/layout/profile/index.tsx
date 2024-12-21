// components
import Photo from "./photo";
import Info from "./info";

const Profile = () => {
  return (
    <div className="z-1 relative w-80 h-min">
      <div className="relative w-full h-full bg-foreground py-[30px] px-5 flex flex-col items-center justify-start flex-nowrap gap-10 rounded-2xl overflow-hidden transition-transform will-change-transform">
        {/* image */}
        <Photo />
        {/* personal info */}
        <Info />
      </div>
    </div>
  );
};

export default Profile;
