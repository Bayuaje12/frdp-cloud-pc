import Link from "next/link";
import { Monitor, Smartphone, Shield, Zap, Cloud, Download } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-main text-fg-primary">
      {/* Header */}
      <header className="border-b border-glass-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-fg-primary">FRDP</span>
          </div>
          <nav className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-md border border-glass-border bg-glass-card px-4 py-2 text-sm text-fg-primary transition-colors hover:border-brand-red/60 hover:text-fg-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              className="rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-accent">FreeRDP Cloud PC</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg-primary sm:text-4xl lg:text-5xl">
              Your Desktop. Anywhere. Anytime.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-fg-secondary sm:text-lg">
              Create and access Windows or Linux desktops from Android, PC, and other devices.
              All planned features are free to use. No subscriptions, no paywalls.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-brand-red px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
              >
                Open Dashboard
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-md border border-glass-border bg-glass-card px-5 py-2.5 text-sm text-fg-primary transition-colors hover:border-brand-red/60"
              >
                Sign in with GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-glass-border">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-xl font-semibold tracking-tight text-fg-primary sm:text-2xl">
              Built for real work
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-fg-secondary sm:text-base">
              FRDP focuses on clear access, managed instances, and practical desktop environments.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-glass-border bg-glass-card p-5">
                <Monitor className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-medium text-fg-primary">Windows and Linux</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Choose Windows Server or Linux Ubuntu XFCE presets based on your workflow.
                </p>
              </div>
              <div className="rounded-lg border border-glass-border bg-glass-card p-5">
                <Smartphone className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-medium text-fg-primary">Access from anywhere</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Connect from Android, PC, or other devices using RDP-compatible clients.
                </p>
              </div>
              <div className="rounded-lg border border-glass-border bg-glass-card p-5">
                <Shield className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-medium text-fg-primary">Security-first design</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Session-based auth, credential handling guidance, and isolated user data practices.
                </p>
              </div>
              <div className="rounded-lg border border-glass-border bg-glass-card p-5">
                <Zap className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-medium text-fg-primary">Managed lifecycle</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Create, start, stop, restart, and track instance status from one dashboard.
                </p>
              </div>
              <div className="rounded-lg border border-glass-border bg-glass-card p-5">
                <Cloud className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-medium text-fg-primary">Snapshots and restore</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Create snapshots and restore points with clear status and history.
                </p>
              </div>
              <div className="rounded-lg border border-glass-border bg-glass-card p-5">
                <Download className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-medium text-fg-primary">RDP file export</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Download .rdp files for quick connection setup on supported clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free note */}
        <section className="border-t border-glass-border">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="rounded-lg border border-glass-border bg-glass-card p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-fg-primary sm:text-xl">100% features free</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-secondary sm:text-base">
                FRDP does not use Pro plans, paywalls, or feature locks. Infrastructure capacity is limited by
                providers and operating costs, so availability and quotas may be shown transparently when enforced.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-glass-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-fg-secondary sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>FRDP — Your Desktop. Anywhere. Anytime.</p>
          <p>100% features free. No Pro. No paywall.</p>
        </div>
      </footer>
    </div>
  );
}
