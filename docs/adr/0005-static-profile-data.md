# Static profile data (no CMS, no backend)

The profile data — contact details, experience entries (Robusta, Future Face, Sindion), skills/tools, and projects (PixelCraft, HyperOne, Impactor) — are hardcoded as TypeScript-typed static arrays in the codebase, not fetched from a CMS or API. We chose this because the portfolio is genuinely static: content changes rarely, and keeping the data in-code is simple to edit, type-checked, and deployable without any infrastructure.
