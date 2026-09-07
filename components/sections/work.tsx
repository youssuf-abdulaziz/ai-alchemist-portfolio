"use client"

import type { CSSProperties } from "react"

import { ArrowUpRight } from "lucide-react"

import { projects } from "@/core/profile"
import { useReveal, useRevealContainer } from "@/hooks/use-reveal"
import { SectionMarker } from "@/components/section-marker"
import { cn } from "@/lib/utils"

const statusVisual: Record<string, { dot: string; text: string }> = {
  Shipped: { dot: "bg-teal", text: "text-teal" },
  "In Progress": { dot: "bg-accent-light", text: "text-accent-light" },
  Concept: { dot: "bg-[#ff506f]", text: "text-[#ff506f]" },
}

const artLayer = (index: number): CSSProperties => {
  const palettes = [
    {
      core: "rgba(123, 97, 255, 0.55)",
      glow: "rgba(201, 191, 255, 0.25)",
    },
    {
      core: "rgba(0, 243, 194, 0.5)",
      glow: "rgba(0, 243, 194, 0.2)",
    },
    {
      core: "rgba(255, 80, 111, 0.5)",
      glow: "rgba(255, 80, 111, 0.2)",
    },
    {
      core: "rgba(123, 97, 255, 0.4)",
      glow: "rgba(0, 243, 194, 0.2)",
    },
  ]
  const p = palettes[(index + 1) % palettes.length] ?? palettes[0]
  return {
    backgroundImage: [
      `radial-gradient(circle 520px at 78% 18%, ${p.glow}, transparent 70%)`,
      `radial-gradient(circle 360px at 62% 82%, ${p.core}, transparent 72%)`,
      "linear-gradient(155deg, #14141f 0%, #0c0c14 100%)",
    ].join(", "),
  }
}

function StatusChip({ status }: { status: string }) {
  const visual = statusVisual[status] ?? statusVisual.Shipped
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-[#1f1f28]/60 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase backdrop-blur-md">
      <span className={cn("size-1.5 rounded-full", visual.dot)} />
      {status}
    </span>
  )
}

export function Work() {
  const headerRef = useReveal<HTMLDivElement>()
  const gridRef = useRevealContainer<HTMLDivElement>()

  const featured = projects.find((p) => p.featured)
  const standard = projects.filter((p) => !p.featured && !("fullWidth" in p))
  const fullWidth = projects.filter((p) => "fullWidth" in p)

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#1b1b23] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <SectionMarker
          number="03"
          label="PORTFOLIO"
          subtitle="SELECTED WORKS"
          labelClassName="text-text-muted"
          subtitleClassName="text-[#ff506f]"
        />

        <div
          ref={headerRef}
          className="reveal mt-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
              Featured Deployments.
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-text-secondary">
              Production-grade systems, spatial computing prototypes, and
              scalable architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Shipped", "In Progress", "Concept"].map((status) => (
              <span
                key={status}
                className={cn(
                  "inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase",
                  statusVisual[status].text
                )}
              >
                <span
                  className={cn(
                    "size-2 rounded-full",
                    statusVisual[status].dot
                  )}
                />
                {status}
              </span>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="mt-16 space-y-6">
          {featured ? (
            <article
              className="reveal group relative min-h-[440px] overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
              style={{ "--reveal-delay": "0ms" } as CSSProperties}
            >
              <div
                className="absolute inset-0"
                style={artLayer(0)}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/50 to-transparent"
                aria-hidden="true"
              />
              <div className="relative z-10 flex min-h-[440px] flex-col justify-between p-8 sm:p-10">
                <StatusChip status={featured.status} />
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
                    Case Study 01
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
                    {featured.name}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-[1.7] text-text-light">
                    {featured.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    {featured.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-[#1f1f28] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-text-muted uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent-light"
                >
                  View Case Study
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ) : null}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {standard.map((project, index) => (
              <article
                key={project.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-[0_16px_60px_-20px_rgba(0,0,0,0.7)]"
                style={
                  {
                    "--reveal-delay": `${(index + 1) * 100}ms`,
                  } as CSSProperties
                }
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <div
                    className="absolute inset-0"
                    style={artLayer(index + 1)}
                    aria-hidden="true"
                  />
                  <div
                    className="scanlines absolute inset-0 opacity-40"
                    aria-hidden="true"
                  />
                  <div className="absolute top-5 left-5">
                    <StatusChip status={project.status} />
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full border border-white/10 bg-[#1f1f28]/50 text-text-light backdrop-blur-md transition-all group-hover:border-accent-light/40 group-hover:text-accent-light"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
                      Case Study {String(index + 2).padStart(2, "0")}
                    </p>
                    <span className="h-px flex-1 bg-divider" />
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-[1.7] text-text-secondary">
                    {project.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-[#1f1f28] px-3 py-1 font-mono text-[11px] tracking-[0.1em] text-text-muted uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {fullWidth.map((project, index) => (
            <article
              key={project.name}
              className="reveal group relative min-h-[323px] overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
              style={
                {
                  "--reveal-delay": `${(standard.length + index + 1) * 100}ms`,
                } as CSSProperties
              }
            >
              <div
                className="absolute inset-0"
                style={artLayer(standard.length + index + 1)}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/40 to-transparent"
                aria-hidden="true"
              />
              <div className="relative z-10 flex min-h-[323px] flex-col justify-between p-8 sm:flex-row sm:items-center sm:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
                      Case Study{" "}
                      {String(standard.length + index + 2).padStart(2, "0")}
                    </p>
                    <span className="h-px w-16 bg-divider" />
                  </div>
                  <h3 className="mt-4 font-display text-4xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-[1.7] text-text-light">
                    {project.tagline}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-6 sm:mt-0">
                  <div className="flex flex-wrap gap-2.5 sm:max-w-56 sm:justify-end">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-[#1f1f28] px-3 py-1 font-mono text-[11px] tracking-[0.1em] text-text-muted uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#1f1f28]/50 text-text-light backdrop-blur-md transition-all hover:border-accent-light/40 hover:text-accent-light"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
