import { Fragment } from "react";
// proptypes
import propTypes from "prop-types";

// components
import MainNavigation from "./navigation/main-navigation";

function Header({
  headerProps: { navBackground, navScrollBackground, navFixed },
}) {
  return (
    <Fragment>
      <MainNavigation
        bgColor={navBackground}
        bgScrollColor={navScrollBackground}
        fixed={navFixed}
      />
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
