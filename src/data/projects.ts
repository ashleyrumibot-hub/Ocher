export interface Project {
  slug: string;
  name: string;
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
    tagline: "AI-powered knowledge mapping",
    description:
      "An intelligent system that maps the relationships between ideas, research, and data — transforming unstructured information into navigable knowledge graphs.",
    url: "#",
    status: "coming-soon",
    tags: ["AI", "Knowledge Graph", "Research"],
  },
  {
    slug: "project-sentinel",
    name: "Project Sentinel",
    tagline: "Autonomous monitoring intelligence",
    description:
      "Next-generation monitoring that doesn't just alert — it understands. Sentinel uses AI to predict issues before they happen and suggest solutions in real-time.",
    url: "#",
    status: "coming-soon",
    tags: ["AI", "DevOps", "Monitoring"],
  },
];
