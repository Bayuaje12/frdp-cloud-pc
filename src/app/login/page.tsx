import Link from "next/link";
import { signIn } from "@/auth";

export default function LoginPage() {
  async function handleGitHubSignIn() {
    "use server";
    await signIn("github", { redirectTo: "/dashboard" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 text-fg-primary">
      <div className="w-full max-w-md rounded-lg border border-glass-border bg-glass-card p-6 sm:p-8">
        <p className="text-sm font-medium text-brand-accent">FRDP</p>
        <h1 className="mt-2 text-xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-fg-secondary">
          Authentication is required to access your Cloud PC dashboard.
        </p>

        <form action={handleGitHubSignIn} className="mt-6 space-y-3">
          <button
            type="submit"
            className="w-full rounded-md bg-brand-red px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
          >
            Continue with GitHub
          </button>
          <p className="text-xs text-fg-secondary">
            Configure GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET, and DATABASE_URL to enable
            sign-in.
          </p>
        </form>

        <div className="mt-6 border-t border-glass-border pt-4">
          <Link href="/" className="text-sm text-fg-secondary hover:text-fg-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
