# Supabase (PostgreSQL) setup

## 1) Create a Supabase project

1. Create a project at Supabase.
2. In **Project Settings → Database**, copy the connection string (URI).

## 2) Configure `DATABASE_URL`

Use the PostgreSQL connection string in `.env.local`:

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?schema=public"
```

Adjust user/host/port per Supabase instructions (pooler vs direct). For Prisma migrations, prefer a direct connection if required by your setup.

## 3) Run Prisma

In a compatible environment (Linux/macOS/CI), from the repo root:

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
```

For production deployments, use `npx prisma migrate deploy` as part of your release process.

## 4) Notes

- Do not commit `.env.local`.
- Ensure your database allows connections from your deployment environment (Supabase network settings).
- If migrations fail on Termux/Android, run them on Ubuntu (local VM or GitHub Actions runner).
