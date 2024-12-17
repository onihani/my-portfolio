import { Fragment } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";

// hero icons
import {
  XIcon,
  HomeIcon,
  UserIcon,
  CodeIcon,
  RssIcon,
  ChatIcon,
  LoginIcon,
  LockOpenIcon,
} from "@heroicons/react/outline";
// react icons
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

// components
import NavLink from "@components/ui/nav-link";

function MobileNav(props) {
  // implement on click outside for this component
  const { isOpen, onCloseNav } = props;

  const { pathname } = useRouter();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-50 inset-0 overflow-y-auto"
        // initialFocus={initialFocus}
        open={isOpen}
        onClose={onCloseNav}
      >
        {/* Dialog Dackdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        {/* mobile Nav */}
        <div className="mobile-navbar">
          {/* navbar wrapper */}
          <Transition.Child
            className="navbar-wrapper overflow-y-scroll fixed top-0 right-0 h-full max-h-screen bg-neutral-focus text-base-300 z-30 w-64 shadow-lg p-5 pt-0"
            // show={isOpen}
            enter="transition duration-300 -mr-64"
            enterFrom=""
            enterTo="transform -translate-x-64"
            leave="transition duration-300"
            leaveFrom=""
            leaveTo="transform translate-x-64"
          >
            <div className="close z-20 h-10 w-full">
              <button
                className="absolute btn btn-ghost btn-sm btn-circle top-0 left-0 mt-2 ml-3 focus:outline-none focus:border-0"
                onClick={onCloseNav}
              >
                <XIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <ul className="menu flex flex-col gap-2 flex-grow py-4 pt-5 compact">
              <li>
                <NavLink
                  href="/"
                  className={`${
                    pathname == "/" ? "active" : "rounded"
                  } capitalize`}
                >
                  <HomeIcon className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/about"
                  className={`${
                    pathname == "/about" ? "active" : "rounded"
                  } capitalize`}
                >
                  <UserIcon className="inline-block w-6 h-6 mr-2 stroke-current" />
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/projects"
                  className={`${
                    pathname == "/projects" ? "active" : "rounded"
                  } capitalize`}
                >
                  <CodeIcon className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/blog"
                  className={`${
                    pathname == "/blog" ? "active" : "rounded"
                  } capitalize`}
                >
                  <RssIcon className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/contact"
                  className={`${
                    pathname == "/contact" ? "active" : "rounded"
                  } capitalize`}
                >
                  <ChatIcon className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Contact
                </NavLink>
              </li>

              <li className="mt-1 menu-title">
                <span className="underline  underline-offset-2 decoration-double" style={{ color: "wheat" }}>Connect With Me</span>
              </li>
              <li>
                <NavLink
                  href="https://github.com/onihani"
                  className={`${
                    pathname == "https://github.com/onihani" ? "active" : "rounded"
                  } capitalize`}
                  passHref={true}
                  target="_blank"
                >
                  <AiFillGithub className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="https://www.linkedin.com/in/onihani"
                  className={`${
                    pathname == "https://www.linkedin.com/in/onihani"
                      ? "active"
                      : "rounded"
                  } capitalize`}
                  passHref={true}
                  target="_blank"
                >
                  <AiFillLinkedin className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Linkedin
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="https://twitter.com/onihani"
                  className={`${
                    pathname == "https://twitter.com/onihani"
                      ? "active"
                      : "rounded"
                  } capitalize`}
                  passHref={true}
                  target="_blank"
                >
                  <AiFillTwitterCircle className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Twitter
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="https://www.instagram.com/nattibonngo/"
                  className={`${
                    pathname == "https://www.instagram.com/nattibonngo/"
                      ? "active"
                      : "rounded"
                  } capitalize`}
                  passHref={true}
                  target="_blank"
                >
                  <AiFillInstagram className="inline-block w-6 h-6 mr-2 stroke-current" />
                  Instagram
                </NavLink>
              </li>
            </ul>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default MobileNav;
