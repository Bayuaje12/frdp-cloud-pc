# GitHub OAuth setup (FRDP)

## 1) Create a GitHub OAuth App

1. Go to GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Set:
   - **Application name:** FRDP (or your choice)
   - **Homepage URL:** `http://localhost:3000` (local) or your production URL
   - **Authorization callback URL:**
     - Local: `http://localhost:3000/api/auth/callback/github`
     - Production: `https://your-domain.com/api/auth/callback/github`
3. Create the app, then copy **Client ID** and generate a **Client Secret**.

## 2) Environment variables

Set in `.env.local` (local) or your hosting secrets (production):

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `AUTH_SECRET` (generate with `openssl rand -base64 32`)
- `NEXT_PUBLIC_APP_URL` (e.g. `http://localhost:3000`)
- `NEXTAUTH_URL` if required by your deployment platform (often same as app URL)

## 3) Notes

- Never expose secrets to the client. Only `NEXT_PUBLIC_*` variables are public.
- In production, use HTTPS so secure cookies work correctly.
- After changing callback URLs, update the OAuth App settings to match exactly.
