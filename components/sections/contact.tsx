"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import { Check, Copy } from "lucide-react"

import { contact } from "@/core/profile"
import { useReveal } from "@/hooks/use-reveal"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
    } catch {
      return
    }
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-44">
      <div
        className="hero-glow top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 bg-[#00f5c4]/10"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="reveal relative mx-auto flex w-full max-w-screen-lg flex-col items-center px-5 text-center sm:px-8"
      >
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#7b61ff] uppercase">
          <span className="text-[#4a4866]">04</span> Contact
        </p>

        <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.01em] sm:text-6xl">
          Let&apos;s build
          <br />
          something.
        </h2>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#8b89a8]">
          Have a project in mind, or want to talk interfaces and product? My
          inbox is open.
        </p>

        <button
          type="button"
          onClick={copyEmail}
          className="group mt-10 inline-flex items-center gap-3 rounded-lg border border-[#7b61ff]/60 px-6 py-4 font-mono text-lg text-[#f0eef8] transition-colors hover:border-[#7b61ff] hover:bg-[#7b61ff]/10"
          aria-live="polite"
        >
          <span className="break-all">{contact.email}</span>
          {copied ? (
            <Check className="size-5 text-[#00f5c4]" />
          ) : (
            <Copy className="size-5 text-[#8b89a8] transition-colors group-hover:text-[#f0eef8]" />
          )}
        </button>
        <span
          className="mt-2 font-mono text-xs tracking-[0.15em] text-[#4a4866] uppercase"
          aria-hidden={copied ? "false" : "true"}
        >
          {copied ? "Copied to clipboard" : "Click to copy"}
        </span>

        <div
          className="mt-12 flex items-center gap-8"
          style={{ "--reveal-delay": "150ms" } as CSSProperties}
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#f0eef8] transition-colors hover:text-[#7b61ff]"
          >
            <GithubIcon className="size-5" />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#f0eef8] transition-colors hover:text-[#7b61ff]"
          >
            <LinkedinIcon className="size-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
