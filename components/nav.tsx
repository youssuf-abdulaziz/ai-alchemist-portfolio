"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks, profile } from "@/core/profile"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-screen-lg items-center justify-between px-5 sm:px-8"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-wide text-[#7b61ff]"
          >
            {profile.monogram}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-mono text-xs tracking-[0.15em] text-[#8b89a8] uppercase transition-colors hover:text-[#f0eef8]"
              >
                {link.label}
              </a>
            ))}
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#8b89a8] uppercase">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f5c4] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#00f5c4]" />
              </span>
              Available for work
            </span>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center text-[#f0eef8] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[#080810]/95 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl font-bold text-[#f0eef8] transition-colors hover:text-[#7b61ff]"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
