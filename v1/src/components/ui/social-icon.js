import Link from "next/link";

function SocialIcon({ href, className, ...otherProps }) {
  return (
    <Link href={href}>
      <a
        className={`transition ease-in-out duration-300 rounded-full p-2 hover:bg-slate-700 hover:transform hover:scale-110 hover:cursor-pointer ${className}`}
      >
        {otherProps.children}
      </a>
    </Link>
  );
}

export default SocialIcon;
