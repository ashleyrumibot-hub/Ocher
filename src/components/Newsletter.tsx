"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";

export function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-surface-elevated overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ocher/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ocher/10 border border-ocher/20 mb-6">
            <Mail className="text-ocher" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Stay in the loop
          </h2>
          <p className="text-text-secondary mb-10 max-w-md mx-auto">
            Get exclusive updates on new ventures, events, and opportunities.
            No spam — just signal.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@email.com"
                className="w-full px-4 py-3.5 rounded-xl bg-surface-card border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-ocher/40 focus:ring-1 focus:ring-ocher/20 transition-all duration-200"
                required
                disabled={status === "success"}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-ocher to-ocher-dark text-white font-medium hover:shadow-[0_0_30px_rgba(204,119,34,0.3)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
            >
              {status === "loading" && <Loader2 size={18} className="animate-spin" />}
              {status === "success" && <Check size={18} />}
              {status === "idle" || status === "error" ? (
                <>
                  Subscribe <ArrowRight size={16} />
                </>
              ) : status === "loading" ? (
                "Subscribing..."
              ) : (
                "Subscribed!"
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
          )}
          {status === "success" && (
            <p className="text-emerald-400 text-sm mt-3">
              Welcome aboard. Check your inbox for a confirmation.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
