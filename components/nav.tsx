"use client"

import { useEffect, useState } from "react"
import { MessageSquare } from "lucide-react"

import { contact, navLinks, profile } from "@/core/profile"
import { cn } from "@/lib/utils"

const sectionIds = ["work", "about", "stack", "contact"]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300",
        scrolled
          ? "border-border bg-background/70"
          : "border-transparent bg-background/40"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8"
        aria-label="Primary"
      >
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-display text-sm font-extrabold text-accent">
            {profile.monogram}
          </span>
          <span className="hidden flex-col justify-center leading-none md:flex">
            <span className="font-display text-xl font-bold tracking-[-0.025em] text-foreground">
              {profile.name}
            </span>
            <span className="mt-1 font-mono text-[11px] font-medium tracking-[0.15em] text-text-secondary uppercase">
              Frontend · Alchemist
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#917eff] text-[#28008a]"
                    : "text-text-light hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 sm:px-4 sm:py-2"
            aria-hidden="true"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-teal" />
            </span>
            <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-teal uppercase sm:hidden">
              Available
            </span>
            <span className="hidden font-mono text-[11px] font-medium tracking-[0.15em] text-teal uppercase sm:inline">
              Available for work
            </span>
          </span>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Direct message"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-[#2e009c] transition-colors hover:bg-[#917eff] hover:text-[#28008a]"
          >
            <MessageSquare className="size-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}
