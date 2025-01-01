import {
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export const socials = [
  {
    href: "https://github.com/onihani",
    label: "Github",
    icon: Github,
  },
  {
    href: "https://x.com/onihani",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.linkedin.com/in/onihani",
    label: "Linkedin",
    icon: Linkedin,
  },
];

export type SocialItem = (typeof socials)[number];