"use client"

import { useState } from "react"

import { ArrowUpRight, Check, Copy } from "lucide-react"

import { contact } from "@/core/profile"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

const socials = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "X-Twitter", href: contact.x },
]

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
    } catch {
      const input = document.createElement("textarea")
      input.value = contact.email
      input.style.position = "fixed"
      input.style.opacity = "0"
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="reveal relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-8"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-accent-light uppercase">
          <span className="text-text-muted">04</span>
          <span className="mx-[0.4em] text-text-muted">{"/"}</span>
          <span className="mx-[0.4em] text-text-muted">{"/"}</span>
          Initiate Transmission
        </p>

        <h2 className="mt-8 font-display text-6xl leading-[0.95] font-extrabold tracking-[-0.02em] text-foreground sm:text-[72px]">
          Let&apos;s build
          <br />
          something.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-[1.7] text-text-secondary">
          Have a project in mind? Let&apos;s translate ambition into
          architecture — fast, precise, quietly magnetic.
        </p>

        <div className="mt-12 w-full max-w-[448px]">
          <button
            type="button"
            onClick={copyEmail}
            aria-live="polite"
            className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/5 bg-surface px-6 py-5 text-left shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] transition-colors hover:border-accent-light/40"
          >
            <span className="truncate font-mono text-sm text-text-light sm:text-base">
              {contact.email}
            </span>
            <span
              className={cn(
                "flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase",
                copied ? "text-teal" : "text-text-muted"
              )}
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="size-4 transition-colors group-hover:text-accent-light" />
                  Copy
                </>
              )}
            </span>
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-surface px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-light/40 hover:text-text-light"
            >
              {social.label}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
