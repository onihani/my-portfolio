// prop types
import propTypes from "prop-types";
// next router
import { useRouter } from "next/router";
// react icons
import { RiTerminalFill } from "react-icons/ri";
import { FiAlignRight } from "react-icons/fi";

// components
import Container from "@components/ui/container";
import NavLink from "@components/ui/nav-link";

function MainNavigation({ openNav, fixed, bgColor }) {
  const { pathname } = useRouter();

  return (
    <nav
      className={`block ${
        fixed && "fixed"
      } z-30 w-full py-2 ${bgColor} text-neutral-content transition duration-500 ease-in-out`}
    >
      <Container>
        <div className="navbar justify-center">
          {/* logo */}
          <div className="flex-1 px-2 mx-2 text-white">
            <NavLink href="/">
              <div className="inline-flex items-center text-2xl font-title">
                <RiTerminalFill size="2rem" />
                <span className="sr-only">Nathaniel Quansah Logo</span>
              </div>
            </NavLink>
          </div>
          {/* Main Nav Links */}
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="items-stretch hidden lg:flex gap-6 text-base">
              <NavLink
                href="/about"
                // className="btn btn-ghost btn-sm btn-active rounded-btn"
                className={`${
                  pathname == "/about" ? "text-accent1" : "text-primary1"
                } px-4 hover:transition-all hover:duration-300 hover:text-accent1`}
              >
                About
              </NavLink>
              <NavLink
                href="/projects"
                className={`${
                  pathname == "/projects" ? "text-accent1" : "text-primary1"
                } px-4 hover:transition-all hover:duration-300 hover:text-accent1`}
              >
                Projects
              </NavLink>
              <NavLink
                href="/blog"
                className={`${
                  pathname == "/blog" ? "text-accent1" : "text-primary1"
                } px-4 hover:transition-all hover:duration-300 hover:text-accent1`}
              >
                Blog
              </NavLink>
              <NavLink
                href="/contact"
                className={`${
                  pathname == "/contact" ? "text-accent1" : "text-primary1"
                } px-4 hover:transition-all hover:duration-300 hover:text-accent1`}
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/* Menu Icon */}
          <div className="flex-none lg:hidden">
            <button onClick={openNav} className="btn btn-square btn-ghost">
              <FiAlignRight
                className="inline-block w-6 h-6 stroke-current text-white"
                size="3rem"
              />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

MainNavigation.propTypes = {
  openNav: propTypes.func,
  bgColor: propTypes.string,
  bgScrollColor: propTypes.string,
  fixed: propTypes.bool,
};

MainNavigation.defaultProps = {
  bgColor: "bg-transparent",
  bgScrollColor: "bg-purple-600",
  fixed: false,
};

export default MainNavigation;
