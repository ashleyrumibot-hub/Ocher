export interface Project {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  url: string;
  status: "live" | "beta" | "coming-soon";
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "opencrate",
    name: "OpenCrate",
    emoji: "\uD83D\uDCE6",
    tagline: "Community-driven open source discovery",
    description:
      "OpenCrate is a curated platform for discovering, sharing, and collaborating on open source projects. Built to surface high-quality tools and foster meaningful connections between developers and maintainers.",
    url: "https://opencrate.club",
    status: "live",
    tags: ["Open Source", "Community", "Discovery"],
  },
  {
    slug: "project-atlas",
    name: "Project Atlas",
    emoji: "\uD83C\uDF10",
    tagline: "AI-powered knowledge mapping",
    description:
      "An intelligent system that maps the relationships between ideas, research, and data \u2014 transforming unstructured information into navigable knowledge graphs.",
    url: "#",
    status: "coming-soon",
    tags: ["AI", "Knowledge Graph", "Research"],
  },
  {
    slug: "project-sentinel",
    name: "Project Sentinel",
    emoji: "\uD83D\uDEE1\uFE0F",
    tagline: "Autonomous monitoring intelligence",
    description:
      "Next-generation monitoring that doesn\u2019t just alert \u2014 it understands. Sentinel uses AI to predict issues before they happen and suggest solutions in real-time.",
    url: "#",
    status: "coming-soon",
    tags: ["AI", "DevOps", "Monitoring"],
  },
];
