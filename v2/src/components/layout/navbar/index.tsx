"use client";

// components
import NavItem from "./nav-item";

// data
import { navigation } from "@/common/data";

const Navbar = () => {
  return (
    <div className="absolute z-10 top-[30px] left-1/2 -translate-x-1/2">
      <nav className="bg-secondary h-12 px-5 flex items-center justify-center gap-5 rounded-xl border border-white/10 transition-shadow duration-300 shadow-[0_0_5px_rgba(255,255,255,0.1)] hover:shadow-[0_0_5px_rgba(255,255,255,0.3)]">
        {navigation.map((navItem) => (
          <NavItem key={navItem.label} {...navItem} />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
