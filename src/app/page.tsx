import { Hero } from "@/components/Hero";
import { BrandStory } from "@/components/BrandStory";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Events } from "@/components/Events";
import { Community } from "@/components/Community";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <ProjectShowcase />
      <Events />
      <Community />
      <Newsletter />
    </>
  );
}
