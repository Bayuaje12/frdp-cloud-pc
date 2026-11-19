# GitHub Actions

The workflow at `.github/workflows/ci.yml` runs on push/PR to `main` or `master`.

## What it does

1. Checkout
2. Setup Node.js 20 with npm cache
3. `npm ci`
4. `npx prisma generate`
5. `npx tsc --noEmit`
6. `npm run lint`
7. `npm run build` (with CI placeholder env vars for compile-time safety)

## Required secrets (optional for current CI)

Current CI uses placeholders for build. For future jobs that run migrations or integration tests, add repository secrets (Settings → Secrets and variables → Actions), for example:

- `DATABASE_URL`
- `AUTH_SECRET`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Do not print secret values in logs.

## Triggering

Push to `main`/`master` or open a pull request targeting those branches.
