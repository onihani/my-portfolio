import { Home, User, SquarePen } from "lucide-react";

export const navigation = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/about",
    label: "About Me",
    icon: User,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: SquarePen,
  },
];

export type NavigationItem = (typeof navigation)[number];
