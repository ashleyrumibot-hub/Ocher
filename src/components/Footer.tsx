import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/ocher-full-cropped.svg" alt="Ocher" className="h-6 brightness-0 invert opacity-60" />
            <span className="text-text-secondary text-sm">
              Ocher &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#story" className="hover:text-text-secondary transition-colors">
              Story
            </a>
            <a href="#projects" className="hover:text-text-secondary transition-colors">
              Projects
            </a>
            <a href="#events" className="hover:text-text-secondary transition-colors">
              Events
            </a>
            <a href="#community" className="hover:text-text-secondary transition-colors">
              Community
            </a>
            <Link href="/dev" className="hover:text-text-secondary transition-colors">
              Dev Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
