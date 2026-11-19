import Link from "next/link";

export default function CreateCloudPCPage() {
  return (
    <div className="min-h-screen bg-bg-main text-fg-primary">
      <header className="border-b border-glass-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            FRDP
          </Link>
          <Link href="/dashboard" className="text-sm text-fg-secondary hover:text-fg-primary">
            Back to dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight">Create Cloud PC</h1>
        <p className="mt-2 text-sm text-fg-secondary">
          Choose an operating system and configuration. Some options may be unavailable depending on
          provider capacity and licensing.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-fg-primary">
              Instance name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. dev-linux-01"
              className="mt-2 w-full rounded-md border border-glass-border bg-bg-secondary px-3 py-2 text-sm text-fg-primary placeholder:text-fg-secondary focus:border-brand-red/60 focus:outline-none"
            />
          </div>

          <div>
            <p className="block text-sm text-fg-primary">Operating system</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-start gap-3 rounded-md border border-glass-border bg-glass-card p-4">
                <input type="radio" name="os" value="windows" className="mt-1" />
                <span>
                  <span className="block text-sm font-medium text-fg-primary">Windows Server</span>
                  <span className="mt-1 block text-xs text-fg-secondary">
                    Availability depends on licensing and infrastructure support.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-md border border-glass-border bg-glass-card p-4">
                <input type="radio" name="os" value="linux" className="mt-1" />
                <span>
                  <span className="block text-sm font-medium text-fg-primary">Linux Ubuntu XFCE</span>
                  <span className="mt-1 block text-xs text-fg-secondary">
                    Lightweight desktop environment for general use.
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div className="rounded-md border border-glass-border bg-glass-card p-4">
            <p className="text-sm text-fg-primary">Resource and provisioning</p>
            <p className="mt-2 text-xs leading-relaxed text-fg-secondary">
              Resource profiles, quotas, and provisioning actions require backend and infrastructure
              integration. This form is a UI placeholder until APIs are connected.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
            >
              Submit request (not connected)
            </button>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md border border-glass-border px-5 py-2.5 text-sm text-fg-primary hover:border-brand-red/60"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
