"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Users } from "lucide-react";

const communities = [
  {
    name: "Discord",
    description: "Join the conversation. Share ideas, get feedback, and collaborate with builders.",
    icon: MessageCircle,
    href: "#",
    color: "from-indigo-500/20 to-indigo-600/5",
    borderHover: "hover:border-indigo-500/30",
    iconColor: "text-indigo-400",
    members: "500+",
  },
  {
    name: "Telegram",
    description: "Real-time updates, announcements, and direct access to the Ocher team.",
    icon: Send,
    href: "#",
    color: "from-sky-500/20 to-sky-600/5",
    borderHover: "hover:border-sky-500/30",
    iconColor: "text-sky-400",
    members: "300+",
  },
];

export function Community() {
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
    <section ref={sectionRef} id="community" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-ocher text-sm font-medium tracking-widest uppercase">
            Community
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Join the builders
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Connect with AI enthusiasts, founders, and developers who are
            shaping the next generation of intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((community, i) => (
            <a
              key={community.name}
              href={community.href}
              className={`group relative block rounded-2xl bg-surface-card border border-border p-8 ${community.borderHover} transition-all duration-500 hover:shadow-lg ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${community.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <community.icon
                    size={32}
                    className={`${community.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="flex items-center gap-1.5 text-text-muted text-sm">
                    <Users size={14} />
                    {community.members} members
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {community.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {community.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
