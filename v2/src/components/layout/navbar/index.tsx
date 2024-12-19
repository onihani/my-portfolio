// components
import NavItem from "./nav-item";

// data
import { navigation } from "@/common/data";

const Navbar = () => {
  return (
    <div className="flex">
      <nav className="bg-secondary p-1.5 grid grid-cols-3 gap-3 rounded-lg">
        {navigation.map((navItem) => (
          <NavItem key={navItem.label} {...navItem} />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
