"use client"

import type { CSSProperties } from "react"

import { contact, experience } from "@/core/profile"
import { useReveal, useRevealContainer } from "@/hooks/use-reveal"
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons"

export function About() {
  const quoteRef = useReveal<HTMLDivElement>()
  const bodyRef = useReveal<HTMLDivElement>()
  const timelineRef = useRevealContainer<HTMLDivElement>()

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
        <div ref={quoteRef} className="reveal lg:pr-10">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#7b61ff] uppercase">
            <span className="text-[#4a4866]">01</span> About
          </p>
          <p className="mt-6 font-display text-3xl leading-[1.25] font-bold tracking-[-0.01em] text-[#f0eef8] sm:text-4xl">
            <span className="text-[#7b61ff]">&quot;</span>I don&apos;t just
            build interfaces. I craft systems that think — fast, precise,
            quietly magnetic.
            <span className="text-[#7b61ff]">&quot;</span>
          </p>
        </div>

        <div
          className="relative hidden w-px bg-border lg:block"
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#7b61ff]" />
        </div>

        <div
          ref={bodyRef}
          className="reveal lg:pl-10"
          style={{ "--reveal-delay": "120ms" } as CSSProperties}
        >
          <p className="text-base leading-[1.7] text-[#8b89a8]">
            I&apos;m a frontend engineer who thinks like a product owner. For 4
            years I&apos;ve shipped real, high-impact web apps across
            e-commerce, healthcare, and strategy platforms — from checkout flows
            and payment rails to enterprise-scale dashboards.
          </p>
          <p className="mt-5 text-base leading-[1.7] text-[#8b89a8]">
            I turn complex ideas into interfaces that feel obvious, working
            shoulder-to-shoulder with design, product, and backend teams. The
            best UI is the part nobody has to think about.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-[#f0eef8] transition-colors hover:text-[#7b61ff]"
            >
              <MailIcon className="size-4" />
              Email
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#f0eef8] transition-colors hover:text-[#7b61ff]"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#f0eef8] transition-colors hover:text-[#7b61ff]"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 w-full max-w-screen-lg px-5 sm:px-8">
        <div
          ref={timelineRef}
          className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3"
        >
          {experience.map((job, index) => (
            <article
              key={job.company}
              className="reveal flex flex-col bg-[#0f0f1a] p-6"
              style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
            >
              <p className="font-mono text-[11px] tracking-[0.15em] text-[#4a4866] uppercase">
                {job.period}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold">
                {job.company}
              </h3>
              <p className="mt-1 font-mono text-xs tracking-[0.15em] text-[#7b61ff] uppercase">
                {job.role}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#8b89a8]">
                {job.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
