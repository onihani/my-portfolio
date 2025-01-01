// static assets
import goIcon from "@/../public/images/skills/go.svg";
import fiberIcon from "@/../public/images/skills/fiber.svg";
import nextIcon from "@/../public/images/skills/next-js.svg";
import graphqlIcon from "@/../public/images/skills/graphql.svg";
import postgresIcon from "@/../public/images/skills/postgresql.svg";
import typescriptIcon from "@/../public/images/skills/typescript.svg";
import javascriptIcon from "@/../public/images/skills/javascript.svg";

export const skills = [
  {
    title: "Go",
    description: "Coding Language",
    image: goIcon,
  },
  {
    title: "Typescript",
    description: "Coding Language",
    image: typescriptIcon,
  },
  {
    title: "Javascript",
    description: "Coding Language",
    image: javascriptIcon,
  },
  {
    title: "NextJs",
    description: "Fullstack Framework",
    image: nextIcon,
  },
  {
    title: "Fiber",
    description: "Web Framework",
    image: fiberIcon,
  },
  {
    title: "Postgres",
    description: "Database",
    image: postgresIcon,
  },
  {
    title: "GraphQL",
    description: "Server-side Runtime",
    image: graphqlIcon,
  },
];

export type SkillItem = (typeof skills)[number];
