export interface Project {
  slug: string;
  name: string;
  emoji: string;
  icon?: string;
  tagline: string;
  description: string;
  url: string;
  status: "live" | "beta" | "coming-soon";
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "opencrate",
    name: "openCrate",
    emoji: "\uD83C\uDFB6",
    icon: "/opencrate-icon.svg",
    tagline: "AI-powered live DJ platform in your browser",
    description:
      "The world's first browser-based, zero-install DJ console built for the AI music era. Load tracks from Suno, SoundCloud, or Spotify \u2014 then mix them live with dual decks, real-time effects, 3-band EQ, auto-BPM sync, one-touch transitions, a 16-pad SFX bank, and a full effects rack. No downloads, no hardware, no experience required. Open the URL and you're on the decks.",
    url: "https://opencrate.club",
    status: "live",
    tags: ["AI Music", "DJ Platform", "Web Audio"],
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
