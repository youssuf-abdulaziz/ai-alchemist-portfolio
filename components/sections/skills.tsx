"use client"

import type { CSSProperties } from "react"

import { skillClusters } from "@/core/profile"
import { useReveal, useRevealContainer } from "@/hooks/use-reveal"
import { SectionMarker } from "@/components/section-marker"

export function Skills() {
  const ref = useRevealContainer<HTMLDivElement>()
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="stack" className="relative overflow-hidden py-28 sm:py-36">
      <div className="dot-matrix" aria-hidden="true" />

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12"
      >
        <SectionMarker
          number="02"
          label="ARSENAL"
          subtitle="ENGINE · FRAMEWORKS"
          labelClassName="text-text-muted"
          subtitleClassName="text-teal"
        />

        <div
          ref={headerRef}
          className="reveal mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
              The Technical Matrix.
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-text-secondary">
              Precision instruments selected for stability, rendering speed, and
              composability.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-divider bg-surface px-4 py-2 font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase">
            Updated_Q2_2024
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillClusters.map((cluster, clusterIndex) => (
            <article
              key={cluster.label}
              className="reveal flex flex-col rounded-xl border border-white/5 bg-surface p-6 shadow-[0_16px_60px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_24px_80px_-24px_rgba(123,97,255,0.35)]"
              style={
                {
                  "--reveal-delay": `${clusterIndex * 120}ms`,
                } as CSSProperties
              }
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.15em] text-text-muted">
                  {String(clusterIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-divider" />
                <span className="size-1.5 rounded-full bg-teal/70" />
              </div>

              <h3 className="mt-8 font-display text-2xl font-bold text-foreground">
                {cluster.label}
              </h3>

              <ul className="mt-6 space-y-3.5">
                {cluster.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-text-light"
                  >
                    <span className="size-1 shrink-0 rounded-full bg-accent-light/70" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
