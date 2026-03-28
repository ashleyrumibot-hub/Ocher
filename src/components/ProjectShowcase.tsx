"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
    <section ref={sectionRef} id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-ocher text-sm font-medium tracking-widest uppercase">
            Ventures
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
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
