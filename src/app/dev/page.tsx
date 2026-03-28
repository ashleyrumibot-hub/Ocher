import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Shield, LogOut, ArrowLeft } from "lucide-react";

export default async function DevPortal() {
  const session = await auth();

  if (!session?.user) {
    redirect("/dev/login");
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-ocher-light transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Shield className="text-ocher" size={28} />
          <h1 className="text-3xl font-bold tracking-tight">Dev Portal</h1>
        </div>

        <div className="rounded-2xl bg-surface-card border border-border p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            {session.user.image && (
              <img
                src={session.user.image}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-ocher/30"
              />
            )}
            <div>
              <p className="text-text-primary font-semibold">
                {session.user.name}
              </p>
              <p className="text-text-muted text-sm">{session.user.email}</p>
            </div>
          </div>

          <div className="rounded-xl bg-surface-elevated border border-border p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              Project Staging
            </h2>
            <p className="text-text-secondary text-sm">
              This is the protected developer area. Project staging environments,
              internal tools, and documentation will be available here.
            </p>
          </div>
        </div>

        <form
          action={async () => {
            "use server";
            const { signOut } = await import("@/lib/auth");
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="inline-flex items-center gap-2 text-text-muted hover:text-red-400 text-sm transition-colors"
          >
            <LogOut size={14} />
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
