import { contact, profile } from "@/core/profile"

const socialLinks = [
  { label: "GitHub", href: contact.github, external: true },
  { label: "LinkedIn", href: contact.linkedin, external: true },
  { label: "X", href: "https://x.com", external: true },
  { label: "Email", href: `mailto:${contact.email}`, external: false },
] as const

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-foreground">
              {profile.monogram}
            </span>
            <span className="text-text-muted" aria-hidden="true">
              ·
            </span>
            <span className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase">
              Digital Noir Alchemist
            </span>
          </div>
          <p className="text-sm font-medium text-text-secondary">
            © 2024 Youssef Abdulaziz. Engineered with precision.
          </p>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2">
          <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
          <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-teal uppercase">
            UTC+02:00 / Cairo Active
          </span>
        </span>

        <nav className="flex items-center gap-6" aria-label="Social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="font-mono text-xs font-medium tracking-[0.15em] text-text-secondary uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
