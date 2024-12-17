import PropTypes from "prop-types";

// components
import Header from "./header/header";
import Footer from "./footer/main-footer";

// constants
import theme from "@constants/theme";

function Layout({
  showHeader,
  showFooter,
  PageHeader,
  PageFooter,
  headerProps,
  footerProps,
  ...otherProps
}) {
  return (
    <main>
      <div
        className="min-h-screen font-sans"
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          background: theme.colors.background1,
        }}
      >
        {/* Header */}
        {showHeader && <PageHeader headerProps={headerProps} />}
        {/* Main Page Area */}
        <div id="main-page-content">{otherProps.children}</div>
        {/* Footer */}
        {showFooter && <PageFooter footerProps={footerProps} />}
      </div>
    </main>
  );
}

Layout.propTypes = {
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  PageHeader: PropTypes.elementType,
  PageFooter: PropTypes.elementType,
  headerProps: PropTypes.object,
  footerProps: PropTypes.object,
};

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
  PageHeader: Header, // Use main header as default if header component wasn't specified
  PageFooter: Footer, // Use main footer as default if footer component wasn't specified
  headerProps: {
    navBackground: "bg-transparent",
    navScrollBackground: "bg-purple-600",
    navFixed: false,
  },
};

export default Layout;
