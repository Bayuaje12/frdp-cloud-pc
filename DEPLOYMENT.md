# Deployment (Draft)

This document will describe production deployment steps for FRDP (frontend, backend, database, and infrastructure providers).

## Current state

- Frontend scaffold only (Next.js). No production backend is wired yet.

## Planned notes

- Set environment variables from `.env.example`.
- Configure GitHub OAuth and session secrets securely.
- Provision database and run migrations before enabling auth-dependent features.
- Deploy infrastructure services (provisioning, RDP gateway/tunnels) separately with least-privilege credentials.
