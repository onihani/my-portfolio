import Link from "next/link";

function NavLink({ href, className, ...otherProps }) {
  return (
    <Link href={href} >
      <a {...otherProps} className={className}>
        {otherProps.children}
      </a>
    </Link>
  );
}

export default NavLink;
