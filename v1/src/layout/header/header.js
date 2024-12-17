import { Fragment, useState } from "react";
// proptypes
import propTypes from "prop-types";

// components
import MainNavigation from "./navigation/main-navigation";
import MobileNav from "./navigation/mobile-navigation";

function Header({
  headerProps: { navBackground, navScrollBackground, navFixed },
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function handleOpenMobileNav() {
    setMobileNavOpen(true);
  }

  function handleCloseMobileNav() {
    setMobileNavOpen(false);
  }

  function handleNavCloseWithEsc(event) {
    const keyPressedCode = event.which;

    if (keyPressedCode == 27) {
      setMobileNavOpen(false);
    }
  }

  return (
    <Fragment>
      <MainNavigation
        bgColor={navBackground}
        bgScrollColor={navScrollBackground}
        openNav={handleOpenMobileNav}
        fixed={navFixed}
      />
      <MobileNav isOpen={mobileNavOpen} onCloseNav={handleCloseMobileNav} />
    </Fragment>
  );
}

Header.propTypes = {
  headerProps: propTypes.shape({
    navBackground: propTypes.string,
    navScrollBackground: propTypes.string,
    navFixed: propTypes.bool,
  }),
};

Header.defaultProps = {
  navBackground: "bg-transparent",
  navScrollBackground: "bg-purple-600",
  navFixed: true,
};

export default Header;
