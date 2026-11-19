# FRDP (FreeRDP)

FRDP is a Cloud PC platform concept: create and access Windows or Linux desktops from Android, PC, and other devices.

Tagline: **Your Desktop. Anywhere. Anytime.**

## Status

- Frontend scaffold (Next.js App Router, TypeScript, Tailwind) with landing, login, dashboard placeholders.
- Authentication scaffolding via Auth.js (NextAuth v5 beta) with GitHub provider and Prisma adapter (database sessions).
- Prisma schema includes auth models and draft models for cloud instances, snapshots, connection sessions, providers, and audit logs.
- Infrastructure uses an abstraction layer (`src/lib/infrastructure`) with a no-op provider by default (no fake instance states).
- **Not production-ready.** Database migrations, real provider integration, RDP tunneling, and full instance lifecycle are not implemented.

## Principles

- All planned product features are intended to be free for users (no Pro tier, no paywalls).
- Infrastructure limits must be enforced transparently based on provider capacity and cost.

## Tech

- Frontend: Next.js (App Router), TypeScript, Tailwind CSS
- API: Next.js Route Handlers (`src/app/api/*`)
- Auth: Auth.js (GitHub OAuth), database sessions via Prisma
- Database/ORM: PostgreSQL (Supabase recommended) + Prisma
- CI: GitHub Actions (Ubuntu) — see `.github/workflows/ci.yml`

## Getting started (local)

```bash
npm install
cp .env.local.example .env.local
# Fill .env.local (see docs below)
npx prisma generate
npm run dev
```

Open `http://localhost:3000`.

### Notes about Termux / Android (ARM64)

Next.js production builds may fail on Android/Termux due to missing SWC binaries for that platform. Use GitHub Actions (Ubuntu) or a Linux host for `npm run build` and Prisma CLI workflows when possible.

## Environment variables

Copy `.env.local.example` to `.env.local`. **Never commit real secrets.**

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Public app URL (e.g. `http://localhost:3000`) |
| `DATABASE_URL` | PostgreSQL connection string (Supabase) |
| `GITHUB_CLIENT_ID` | GitHub OAuth App client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App client secret |
| `AUTH_SECRET` | Random secret for Auth.js (e.g. `openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Optional in many setups; set to app URL if required by your deployment |

## Documentation

- [GitHub OAuth setup](./docs/GITHUB_OAUTH.md)
- [Supabase (PostgreSQL) setup](./docs/SUPABASE.md)
- [GitHub Actions](./docs/GITHUB_ACTIONS.md)
- [Deployment (draft)](./DEPLOYMENT.md)
- [Android / Termux (draft)](./ANDROID_TERMUX_SETUP.md)

## API (current)

- `GET /api/health` — health check (no auth)
- `GET /api/instances` — list instances for the authenticated user (requires session; returns 401 if not logged in, 503 if DB not configured/unavailable)

## Security notes

- Do not store RDP/remote desktop passwords in plaintext. The schema reserves `encryptedSecretRef` for a future secrets layer.
- Dashboard routes are protected by middleware; API routes must still validate sessions server-side.
- Instance data is scoped by `userId`.
