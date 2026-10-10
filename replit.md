# Todawat Homes & Builders

A responsive Jaipur real-estate showcase for Todawat Homes & Builders, with direct WhatsApp and Instagram enquiries.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/todawat-builders/src/App.tsx` — the one-page marketing site and enquiry links
- `artifacts/todawat-builders/src/index.css` — site styling, motion, and responsive behavior
- `artifacts/todawat-builders/public/brand/` — supplied logo and property/interior photos
- `artifacts/todawat-builders/index.html` — title, sharing metadata, and favicon

## Architecture decisions

- The first release is a static one-page site; enquiries go directly to WhatsApp and Instagram, with no server-side listing inventory.

## Product

- Showcases the supplied Jaipur villa and interior photography.
- Helps visitors find property categories and contact the business about current listings.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
