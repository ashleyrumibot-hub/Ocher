"use client";

import { useEffect, useRef, useState } from "react";

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-32 px-6 bg-surface-elevated"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-ocher text-sm font-medium tracking-widest uppercase">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 tracking-tight">
            Intelligence,{" "}
            <span className="text-text-secondary">reimagined</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Ocher was founded with a singular vision: to build AI ventures
              that don&apos;t just leverage technology, but fundamentally
              transform how industries operate. We believe the most impactful AI
              companies are built at the intersection of deep technical
              expertise and genuine human need.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Led by <span className="text-text-primary font-medium">Boz Zou</span>,
              our studio takes a hands-on approach — working alongside founders
              from first principles to product-market fit, providing the
              infrastructure, mentorship, and capital that ambitious AI projects
              demand.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Incubate",
                  text: "We identify and nurture breakthrough AI ideas from concept to prototype.",
                },
                {
                  number: "02",
                  title: "Build",
                  text: "Our engineering team works shoulder-to-shoulder with founders to ship real products.",
                },
                {
                  number: "03",
                  title: "Scale",
                  text: "We provide the resources, network, and strategy to take ventures from zero to one.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-5 group">
                  <span className="text-ocher/40 text-2xl font-bold group-hover:text-ocher transition-colors duration-300">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-text-primary font-semibold text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
