import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const socials = [
  {
    href: "https://github.com/Onihani",
    label: "Github",
    icon: GitHubLogoIcon,
  },
  {
    href: "https://www.linkedin.com/in/onihani",
    label: "Linkedin",
    icon: LinkedInLogoIcon,
  },
  {
    href: "https://x.com/onihani",
    label: "Twitter",
    icon: TwitterLogoIcon,
  },
];

export type SocialItem = (typeof socials)[number];