import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

const typeStyles: Record<string, string> = {
  meetup: "bg-violet-500/20 text-violet-400",
  workshop: "bg-blue-500/20 text-blue-400",
  hackathon: "bg-emerald-500/20 text-emerald-400",
  talk: "bg-ocher/20 text-ocher-light",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#events"
          className="inline-flex items-center gap-2 text-text-muted hover:text-ocher-light transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Events
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Upcoming meetups, hackathons, and talks from the Ocher community.
        </p>

        <div className="space-y-4">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.registrationUrl || "#"}
              className="group block rounded-xl bg-surface-card border border-border p-6 hover:border-ocher/30 hover:bg-surface-hover transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
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
                    <h3 className="text-text-primary font-semibold text-lg group-hover:text-ocher-light transition-colors">
                      {event.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${typeStyles[event.type]}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-text-muted text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
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
      </div>
    </div>
  );
}
