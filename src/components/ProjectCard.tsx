"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const statusColors = {
  live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  beta: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "coming-soon": "bg-text-muted/20 text-text-muted border-text-muted/30",
};

const statusLabels = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block rounded-2xl bg-surface-card border border-border p-6 hover:border-ocher/30 hover:bg-surface-hover transition-all duration-500 hover:shadow-[0_0_40px_rgba(18,80,243,0.1)]"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocher/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocher/20 to-ocher/5 flex items-center justify-center border border-ocher/10">
            <span className="text-2xl leading-none">{project.emoji}</span>
          </div>
          <span
            className={`text-xs px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-ocher-light transition-colors">
          {project.name}
          <ArrowUpRight className="inline ml-1 w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
        </h3>
        <p className="text-text-secondary text-sm mb-4">{project.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-surface-elevated text-text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
