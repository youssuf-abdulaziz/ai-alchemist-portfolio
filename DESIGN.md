# DESIGN.md — Youssef Abdulaziz Frontend Portfolio

---

## CONCEPT: "Digital Noir Alchemist"

A dark, cinematic portfolio that feels like stepping inside a high-end creative lab. Not corporate. Not generic dev portfolio. Something between a luxury editorial magazine and a hacker's sanctum — refined chaos. The visitor should feel like they're accessing something exclusive.

---

## VISUAL IDENTITY

**Tone:** Vibrant dark. Deep blacks layered with electric accent bursts. The dark theme isn't just "dark mode" — it's atmospheric. Think molten glass, bioluminescence, liquid metal.

**Personality:** Confident, precise, curious. A frontend developer who thinks like a product owner.

---

## COLOR PALETTE

| Role | Value |
|---|---|
| Primary Background | `#080810` (near-black with faint blue undertone, not pure black) |
| Surface / Cards | `#0f0f1a` |
| Elevated Surface | `#16162a` |
| Primary Accent | `#7B61FF` (electric violet — vibrant, not pastel) |
| Secondary Accent | `#00F5C4` (neon mint/teal — used sparingly as a "spark") |
| Tertiary Accent | `#FF4D6D` (hot coral — only for emphasis moments, CTAs) |
| Text Primary | `#F0EEF8` (off-white with cool tint) |
| Text Secondary | `#8B89A8` |
| Text Muted | `#4a4866` |
| Border / Divider | `rgba(123, 97, 255, 0.15)` |
| Glow Base | `rgba(123, 97, 255, 0.35)` |

---

## TYPOGRAPHY

- **Display / Hero Headings:** "Syne" — geometric, wide, distinct. Weight 700–800.
- **Body / UI Text:** "DM Sans" — clean but not sterile. Weight 400/500.
- **Monospace / Code Labels:** "JetBrains Mono" — for tech labels, skill tags, section markers.

### Type Scale

| Role | Size | Notes |
|---|---|---|
| Hero | 72–96px | Letter-spacing: -0.02em |
| Section Titles | 48px | |
| Card Titles | 24px | |
| Body | 16px | Line-height: 1.7 |
| Labels / Tags | 11–12px | Uppercase, letter-spacing: 0.15em, JetBrains Mono |

---

## LAYOUT & COMPOSITION

**Grid:** 12-column, max-width 1280px, with intentional bleed moments where elements escape the grid.

### Sections (in order)
1. Hero
2. About / Philosophy
3. Skills / Stack
4. Work / Projects
5. Contact

### Rules
- Asymmetric layouts preferred — titles left-aligned, supplemental content offset right
- Generous vertical rhythm — sections breathe with 120–160px padding
- Overlapping elements allowed (e.g. a project card partially overlapping its section title)
- Section numbers displayed as faint monospace markers (01, 02, 03...) using muted color

---

## HERO SECTION

Full viewport height. No navbar overlap — sticky nav appears after scroll.

### Layout
- **Left side:** name + title + short tagline + CTA buttons
- **Right side:** abstract animated visual (see animation spec below)
- A faint horizontal rule with the label `— Frontend Developer & Product Thinker` in monospace

### Headline Copy
```
Crafting Interfaces
That Think.
```

**Subtext:** "Vue · React · TypeScript · Product Ownership · 3 years shipping things that matter."

**CTAs:**
- "View Work" — filled, coral `#FF4D6D`
- "Contact Me" — ghost, violet border `#7B61FF`

**Background:** Animated mesh gradient — slow-moving blobs of violet and teal against near-black. Very subtle, not distracting. Layered with a noise/grain texture at 4% opacity.

---

## ANIMATIONS

These are mandatory — the portfolio lives and dies by its motion.

### Page Load Sequence
- Nav fades in from top (0ms delay)
- Hero headline: each word slides up from below with stagger (100ms apart), opacity 0→1
- Subtext fades in after headline completes
- CTA buttons scale up from 0.9 with spring ease
- Right-side abstract visual draws in last

### Scroll Animations (trigger on enter viewport)
- Section numbers count up quickly (0 → actual number, 300ms)
- Section titles have a "reveal wipe" — a violet line sweeps across then text appears
- Project cards: stagger-fade from bottom, each 80ms apart
- Skill tags: scatter-to-place effect (start slightly offset + rotated, snap into grid)

### Hover States
- Project cards: lift with `translateY(-8px)` + box-shadow glow in violet
- Nav links: underline draws in from left, accent color
- CTA buttons: subtle shimmer sweep across the button surface
- Skill tags: border color pulses to teal, slight `scale(1.05)`

### Ambient / Always-On
- Hero mesh gradient animates continuously (slow, 15s loop)
- A single horizontal scan line slowly moves down the hero (very faint, 8% opacity white)
- **Custom cursor:** small filled circle with a larger ring that lags behind slightly (magnetic snap near interactive elements)

### Section Transitions
- Scroll-jacking is **OFF** — do not interfere with native scroll
- Use Intersection Observer to trigger class additions for all animations

---

## NAVIGATION

Sticky after hero scroll. Glassmorphism background: `backdrop-filter: blur(20px)` + semi-transparent bg.

- **Left:** Logo / Name initials — "YA" in display font, violet tinted
- **Right:** Links — Work, About, Stack, Contact + small "Available for work" indicator (green dot, pulsing)

**Mobile:** Hamburger → fullscreen overlay menu with staggered link reveal animation.

---

## ABOUT / PHILOSOPHY SECTION

Two-column layout:
- **Left:** Large pull quote — something personal and opinionated about building software
- **Right:** Short paragraphs, no bullet points. Written in first person. Reads like a person, not a resume.

**Decorative element:** A thin vertical violet line with a small diamond connector between columns.

---

## SKILLS / STACK SECTION

Not a flat list. Grouped into categories displayed as floating tag clusters:

| Category | Tags |
|---|---|
| Frontend Core | Vue 3, Vuetify, TypeScript, SCSS, Pinia, Vuex, Vue Router |
| Ecosystem | React, Next.js, Nuxt 4, Vite, Axios |
| Backend / Infra | NestJS, Supabase, Prisma, PostgreSQL |
| Tooling | Turborepo, pnpm, Git, Cursor, Payload CMS |

- Each category has a faint label above in monospace muted text
- Tags are pill-shaped, dark surface with violet border
- Hover: border transitions to teal

**Background:** Faint dot matrix grid pattern (1px dots, 6% opacity)

---

## PROJECTS SECTION

Large cards, one dominant per row or 2-column grid for secondary ones.

### Card Contents
- Project name (display font, large)
- One-line description
- Tech stack tags (mini pills)
- Status indicator: **Shipped** / **In Progress** / **Concept** — color-coded
- Hover: reveals a "View Case →" arrow + card lifts with glow

### Featured Card Treatment
Spans full width, with a blurred background preview image tinted dark, title overlaid in large type.

---

## CONTACT SECTION

Dark background, centered, editorial feel. No form — just direct info.

- Large headline: **"Let's build something."**
- Email address in large monospace type (click to copy + confirmation animation)
- Social links: GitHub, LinkedIn — icon + label, horizontal layout

**Decorative:** Faint circular gradient bloom centered behind the headline in teal `#00F5C4`.

---

## RESPONSIVE BEHAVIOR

| Breakpoint | Behavior |
|---|---|
| < 768px | Single column, hero headline ~48px, animations simplified (no parallax, no custom cursor) |
| 768–1024px | Hybrid — some two-column layouts collapse to stacked |
| > 1024px | Full experience |

**Touch devices:** Custom cursor disabled. Hover states replaced with tap-active states.

---

## WHAT MAKES THIS UNFORGETTABLE

The single thing a visitor remembers: the moment the page loads and the hero headline assembles word-by-word from below while the violet mesh glows behind it — it communicates craft before a single word is read.

---

*Brief prepared for Google Stitch. All values are design-ready and implementation-specific.*
