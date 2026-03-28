"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-surface">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src="/ocher-full-cropped.svg" alt="Ocher" className="h-10 mx-auto mb-6 brightness-0 invert" />
          <p className="text-text-secondary text-sm">
            Enter the password to access this site.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              autoFocus
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface-card border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-ocher/40 focus:ring-1 focus:ring-ocher/20 transition-all duration-200"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-ocher to-ocher-dark text-white font-medium hover:shadow-[0_0_30px_rgba(120,127,246,0.3)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                Enter <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
