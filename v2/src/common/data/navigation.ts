import { HomeIcon, PersonIcon, ReaderIcon } from "@radix-ui/react-icons";

export const navigation = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/about",
    label: "About Me",
    icon: PersonIcon,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: ReaderIcon,
  },
];

export type NavigationItem = (typeof navigation)[number];
