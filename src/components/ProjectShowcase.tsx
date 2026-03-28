"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useElementScroll } from "@/hooks/useParallax";

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { ref: parallaxRef, progress } = useElementScroll();

  const decorY1 = (progress - 0.5) * -100;
  const decorY2 = (progress - 0.5) * 150;
  const decorRotate = progress * 60;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (parallaxRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      id="projects"
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb */}
        <div
          className="absolute -right-40 top-1/4 w-[600px] h-[600px] rounded-full bg-ocher/[0.025] blur-[120px]"
          style={{ transform: `translateY(${decorY1}px)` }}
        />
        {/* Wireframe ring */}
        <div
          className="absolute left-[5%] top-[15%] w-48 h-48 md:w-64 md:h-64 rounded-full border border-ocher/[0.05]"
          style={{ transform: `translateY(${decorY2}px) rotate(${decorRotate}deg)` }}
        />
        {/* Cross shape */}
        <div
          className="absolute right-[12%] bottom-[25%]"
          style={{ transform: `translateY(${decorY1 * 0.6}px) rotate(${decorRotate * 0.3}deg)` }}
        >
          <div className="w-6 h-px bg-ocher/15 absolute top-1/2 left-1/2 -translate-x-1/2" />
          <div className="w-px h-6 bg-ocher/15 absolute top-1/2 left-1/2 -translate-y-1/2" />
        </div>
        {/* Dots trailing */}
        <div
          className="absolute left-[8%] bottom-[30%] flex flex-col gap-2"
          style={{ transform: `translateY(${decorY2 * 0.5}px)` }}
        >
          <div className="w-1 h-1 rounded-full bg-ocher/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-ocher/15 ml-2" />
          <div className="w-1 h-1 rounded-full bg-ocher/10 ml-1" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-ocher text-sm font-medium tracking-widest uppercase">
            Ventures
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            What we&apos;re building
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            From open source platforms to cutting-edge AI tools — our portfolio
            of ventures pushing the boundaries of what&apos;s possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
