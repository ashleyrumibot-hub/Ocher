"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#projects", label: "Projects" },
  { href: "#events", label: "Events" },
  { href: "#community", label: "Community" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/ocher-full.png" alt="Ocher" className="h-8 transition-transform group-hover:scale-105 brightness-0 invert" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary text-sm hover:text-ocher-light transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/dev"
            className="text-sm px-4 py-2 rounded-lg bg-ocher/10 text-ocher-light border border-ocher/20 hover:bg-ocher/20 hover:border-ocher/40 transition-all duration-200"
          >
            Dev Portal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-elevated/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-ocher-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/dev"
              onClick={() => setMobileOpen(false)}
              className="text-sm px-4 py-2 rounded-lg bg-ocher/10 text-ocher-light border border-ocher/20 text-center"
            >
              Dev Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
