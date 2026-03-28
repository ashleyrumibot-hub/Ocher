export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "meetup" | "workshop" | "hackathon" | "talk";
  registrationUrl?: string;
}

export const events: Event[] = [
  {
    id: "ai-builders-night-apr",
    title: "AI Builders Night",
    date: "2026-04-15",
    location: "San Francisco, CA",
    description:
      "An intimate evening for AI founders and builders. Demo your latest projects, exchange ideas, and connect with the Ocher community.",
    type: "meetup",
    registrationUrl: "#",
  },
  {
    id: "ocher-hackathon-q2",
    title: "Ocher Hackathon: Build with LLMs",
    date: "2026-05-10",
    location: "Virtual",
    description:
      "48-hour hackathon focused on building real products with large language models. Prizes, mentorship, and potential incubation for top projects.",
    type: "hackathon",
    registrationUrl: "#",
  },
  {
    id: "future-of-ai-talk",
    title: "The Future of AI Ventures",
    date: "2026-06-01",
    location: "New York, NY",
    description:
      "Boz Zou discusses the evolving landscape of AI ventures, what makes a successful AI startup, and where the industry is heading.",
    type: "talk",
    registrationUrl: "#",
  },
];
