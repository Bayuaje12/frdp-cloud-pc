import Link from "next/link";
import { Plus, Server, Activity, HardDrive } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-bg-main text-fg-primary">
      <header className="border-b border-glass-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            FRDP
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link href="/dashboard" className="text-fg-primary">
              Dashboard
            </Link>
            <Link href="/api/auth/signout" className="text-fg-secondary hover:text-fg-primary">
              Sign out
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-fg-secondary">
              Overview of your Cloud PC instances. Data shown here requires a connected backend.
            </p>
          </div>
          <Link
            href="/dashboard/create"
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Create Cloud PC
          </Link>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-glass-border bg-glass-card p-4">
            <div className="flex items-center gap-2 text-fg-secondary">
              <Server className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs">Total Cloud PCs</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-fg-primary">-</p>
          </div>
          <div className="rounded-lg border border-glass-border bg-glass-card p-4">
            <div className="flex items-center gap-2 text-fg-secondary">
              <Activity className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs">Active</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-fg-primary">-</p>
          </div>
          <div className="rounded-lg border border-glass-border bg-glass-card p-4">
            <div className="flex items-center gap-2 text-fg-secondary">
              <Server className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs">Stopped</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-fg-primary">-</p>
          </div>
          <div className="rounded-lg border border-glass-border bg-glass-card p-4">
            <div className="flex items-center gap-2 text-fg-secondary">
              <HardDrive className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs">Storage</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-fg-primary">-</p>
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-glass-border bg-glass-card p-6">
          <h2 className="text-sm font-medium text-fg-primary">Instances</h2>
          <p className="mt-2 text-sm text-fg-secondary">
            No instance data available yet. Connect the backend and provisioning service to list and manage
            Cloud PCs.
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/create"
              className="text-sm text-brand-accent hover:text-brand-bright"
            >
              Create your first Cloud PC
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
