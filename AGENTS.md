<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** — CSS-first config in `app/globals.css` via `@theme inline`. No `tailwind.config.*` file exists.
- **shadcn/ui** — `base-nova` style, `@base-ui/react` primitives. Add components with `npx shadcn@latest add <name>`.
- `cn()` utility re-exported from the `cn` package through `lib/utils.ts`.

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run lint       # eslint (flat config, eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write **/*.{ts,tsx}
```

No test framework is configured. There are no tests.

## Code style

- Prettier: no semicolons, double quotes, 2-space indent, trailing commas `es5`.
- Tailwind class sorting via `prettier-plugin-tailwindcss` — run `npm run format` after large edits.
- `suppressHydrationWarning` is set on `<html>` — do not remove.
- The portfolio is dark-only; there is no theme toggle or `next-themes`.

## Structure

```
app/              # Next.js App Router — pages and layouts
components/       # nav, shared components, ui/, and sections/
core/             # profile data + font definitions
hooks/            # custom React hooks (use-reveal, etc.)
lib/utils.ts      # cn() re-export
public/           # static assets
```

## Design spec

`DESIGN.md` contains the full visual design brief (colors, typography, animations, layout, sections). Read it before implementing any UI.

## Design source

Figma design file: https://www.figma.com/design/keRpgtpmFLY39Qg0HUhGma/Stich-portfolio (file key `keRpgtpmFLY39Qg0HUhGma`). Fetch via the Figma MCP when implementing UI.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues, created via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles with default label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: root `CONTEXT.md` plus `docs/adr/`. See `docs/agents/domain.md`.
