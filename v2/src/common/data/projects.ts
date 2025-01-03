// static assets
import kendal_png from "@/../public/images/projects/kendal.png";
import ocqfund_png from "@/../public/images/projects/ocqfund.png";
import medtrack_png from "@/../public/images/projects/medtrack.png";
import soccersm_png from "@/../public/images/projects/soccersm.png";
import rehoboth_png from "@/../public/images/projects/rehobothimmigration.png";

export const projects = [
  {
    title: "Medtrack",
    description:
      "At MedTrack, we're creating a progressive health-data solution for Africa's 1 billion citizens by decentralizing health data and making it more accessible to patients and healthcare providers.",
    image: medtrack_png,
    link: {
      href: "https://medtrack.africa",
      isExternal: true,
    },
  },
  {
    title: "Kendal AI",
    description:
      "Kendal AI is a real estate CRM for agencies and brokers that uses AI to boost lead conversion, marketing, and client management. Key features include WhatsApp integration and listing management.",
    image: kendal_png,
    link: {
      href: "https://www.kendal.ai",
      isExternal: true,
    },
  },
  {
    title: "Soccersm",
    description:
      "An AI Platform For Soccer Prediction Tips and Web3 Games. Soccersm is an AI tool where you can request and get pre-match predictions with high accuracy and detailed analysis for all major leagues and competitions.",
    image: soccersm_png,
    link: {
      href: "https://soccersm.ai",
      isExternal: true,
    },
  },
  {
    title: "Ocqfund",
    description:
      "Ocqfund is a platform that gives trading talents the opportunity to manage funds and earn a percentage of the profits they generate. It's a platform that gives traders access to funds to trade with.",
    image: ocqfund_png,
    link: {
      href: "https://ocq-fund.vercel.app",
      isExternal: true,
    },
  },
  {
    title: "Rehoboth Immigration",
    description:
      "Rehoboth Immigration is an immigration consultancy firm that specializes in helping people migrate to US. They offer a range of services including Express Entry, Study Permit, Work Permit, and more.",
    image: rehoboth_png,
    link: {
      href: "https://rehobothimmigration.com",
      isExternal: true,
    },
  },
];

export type ProjectItem = (typeof projects)[number];
