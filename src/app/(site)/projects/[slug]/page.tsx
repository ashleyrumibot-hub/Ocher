import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function OpenCrateDetails() {
  return (
    <div className="space-y-10 mt-10">
      {/* Problem */}
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">The Problem</h2>
        <p className="text-text-secondary leading-relaxed">
          Millions of people now create music with AI tools like Suno (10M+ users), Producer.ai, and Udio.
          They generate dozens of tracks a week — but have no way to curate, mix, or perform them.
          Traditional DJ software requires desktop installation, $200+ hardware controllers, and months of practice.
          openCrate eliminates every barrier: paste a playlist URL, and you&apos;re mixing live in seconds.
        </p>
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-6">Core Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Dual-Deck Architecture", emoji: "\uD83C\uDFA7", desc: "Two full decks with turntable visualization, real-time BPM sync, 3-band EQ, and hardware-style crossfader." },
            { title: "One-Touch Transitions", emoji: "\u26A1", desc: "6 transition types — Bass Swap, Clean Fade, Filter Sweep, Echo Drop, Punch Cut, and Stutter." },
            { title: "Effects Rack", emoji: "\uD83C\uDF1F", desc: "6 real-time effects: Reverb, Delay, Flanger, Bitcrusher, Distortion, Phaser — each with wet/dry control." },
            { title: "16-Pad SFX Bank", emoji: "\uD83E\uDD4A", desc: "4x4 grid across DJ Classics, Transitions, Percussion, and Effects. All synthesized in real-time via Tone.js." },
            { title: "Multi-Source Playlists", emoji: "\uD83D\uDCBF", desc: "Load from Suno, SoundCloud, or Spotify. Drag-and-drop tracks to decks from a vinyl crate UI." },
            { title: "Performance Controls", emoji: "\uD83C\uDFAF", desc: "Auto-loops, 4 hot cues per deck, beat jumping, and looping at beat divisions from 1/4 to 16 bars." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl bg-surface-card border border-border p-5">
              <div className="text-2xl mb-2">{f.emoji}</div>
              <h3 className="text-text-primary font-semibold mb-1">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Tech Stack</h2>
        <div className="rounded-xl bg-surface-card border border-border p-6 space-y-3">
          {[
            ["Framework", "Next.js 15, React 19, TypeScript"],
            ["Audio Engine", "Tone.js 14.8 + WaveSurfer.js 7.8 + Web Audio Beat Detector"],
            ["Styling", "Tailwind CSS 3 with neo-neumorphic design system"],
            ["Deployment", "Vercel, auto-deploys from master"],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-ocher-light text-sm font-medium min-w-[120px]">{label}</span>
              <span className="text-text-secondary text-sm">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Position */}
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Competitive Position</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          openCrate occupies a category of one — the only browser-based, zero-install DJ platform
          purpose-built for the AI music generation era. It sits at the intersection of three massive markets:
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { market: "AI Music Generation", size: "$400-500M", growth: "25-35% CAGR" },
            { market: "DJ Software", size: "$300-400M", growth: "Accessible alternative" },
            { market: "Creator Economy", size: "$20-30B", growth: "Music segment" },
          ].map((m) => (
            <div key={m.market} className="rounded-xl bg-surface-elevated border border-border p-4 text-center">
              <p className="text-text-primary font-semibold text-sm">{m.market}</p>
              <p className="text-ocher-light font-bold text-lg mt-1">{m.size}</p>
              <p className="text-text-muted text-xs mt-1">{m.growth}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Model */}
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Business Model</h2>
        <p className="text-text-secondary leading-relaxed mb-4">Launching June 2026 with three tiers:</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { tier: "Free", price: "$0", features: "Full 2-deck mixing, 4 SFX, 15-min watermarked recording" },
            { tier: "Pro", price: "$9.99/mo", features: "Effects rack, key detection, unlimited clean recording, 50+ SFX, mix sharing" },
            { tier: "Studio", price: "$24.99/mo", features: "Drum machine, synthesizers, 4-deck mode, MIDI support, AI features" },
          ].map((t) => (
            <div key={t.tier} className={`rounded-xl border p-5 ${t.tier === "Pro" ? "bg-ocher/5 border-ocher/20" : "bg-surface-card border-border"}`}>
              <p className="text-text-primary font-bold">{t.tier}</p>
              <p className="text-ocher-light font-bold text-xl mt-1">{t.price}</p>
              <p className="text-text-secondary text-sm mt-2 leading-relaxed">{t.features}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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

        <p className="text-text-secondary text-lg leading-relaxed">
          {project.description}
        </p>

        {project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-ocher to-ocher-dark text-white font-medium hover:shadow-[0_0_30px_rgba(18,80,243,0.3)] transition-all duration-300 hover:scale-105"
          >
            Visit {project.name}
            <ExternalLink size={16} />
          </a>
        )}

        {/* Rich content for OpenCrate */}
        {slug === "opencrate" && <OpenCrateDetails />}
      </div>
    </div>
  );
}
