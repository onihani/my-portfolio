import { Home, Folder, Briefcase, Wrench, SquarePen } from "lucide-react";

export const navigation = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: Folder,
  },
  {
    href: "/experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    href: "/tools",
    label: "Tools",
    icon: Wrench,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: SquarePen,
  },
];

export type NavigationItem = (typeof navigation)[number];
