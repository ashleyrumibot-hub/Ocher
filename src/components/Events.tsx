"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

const typeStyles = {
  meetup: "bg-violet-500/20 text-violet-400",
  workshop: "bg-blue-500/20 text-blue-400",
  hackathon: "bg-emerald-500/20 text-emerald-400",
  talk: "bg-ocher/20 text-ocher-light",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Events() {
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
    <section
      ref={sectionRef}
      id="events"
      className="relative py-32 px-6 bg-surface-elevated"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-ocher text-sm font-medium tracking-widest uppercase">
            Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Connect & create
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Join our community at meetups, hackathons, and talks. Where builders
            come together.
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <a
              key={event.id}
              href={event.registrationUrl || "#"}
              className={`group block rounded-xl bg-surface-card border border-border p-6 hover:border-ocher/30 hover:bg-surface-hover transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Date block */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-surface-elevated border border-border flex flex-col items-center justify-center">
                  <span className="text-ocher font-bold text-lg leading-none">
                    {new Date(event.date + "T00:00:00").getDate()}
                  </span>
                  <span className="text-text-muted text-xs uppercase">
                    {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-text-primary font-semibold text-lg group-hover:text-ocher-light transition-colors truncate">
                      {event.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${typeStyles[event.type]}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-text-muted text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  className="text-text-muted group-hover:text-ocher-light group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                />
              </div>
            </a>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-ocher-light hover:text-ocher text-sm font-medium transition-colors"
          >
            View all events
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
