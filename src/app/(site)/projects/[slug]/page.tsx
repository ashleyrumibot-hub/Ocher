import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-ocher-light transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span
            className={`text-xs px-2.5 py-1 rounded-full border ${
              project.status === "live"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : project.status === "beta"
                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                : "bg-text-muted/20 text-text-muted border-text-muted/30"
            }`}
          >
            {project.status === "live"
              ? "Live"
              : project.status === "beta"
              ? "Beta"
              : "Coming Soon"}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {project.name}
        </h1>
        <p className="text-xl text-ocher-light mb-6">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-surface-card border border-border text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-ocher to-ocher-dark text-white font-medium hover:shadow-[0_0_30px_rgba(204,119,34,0.3)] transition-all duration-300 hover:scale-105"
          >
            Visit {project.name}
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
