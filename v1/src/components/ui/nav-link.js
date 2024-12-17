import Link from "next/link";

function NavLink({ href, passHref = false, className, ...otherProps }) {
  return (
    <Link href={href} passHref={passHref}>
      <a {...otherProps} className={className}>
        {otherProps.children}
      </a>
    </Link>
  );
}

export default NavLink;
