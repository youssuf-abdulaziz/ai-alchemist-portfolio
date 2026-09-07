"use client"

import { SectionMarker } from "@/components/section-marker"
import { useReveal } from "@/hooks/use-reveal"

export function About() {
  const quoteRef = useReveal<HTMLDivElement>()
  const narrativeRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0d0d16] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <SectionMarker
          number="01"
          label="PHILOSOPHY"
          subtitle="THE ALCHEMIST'S PATH"
          labelClassName="text-text-muted"
          subtitleClassName="text-accent-light"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,465px)_48px_minmax(0,568px)] lg:gap-0 lg:gap-x-12">
          <figure
            ref={quoteRef}
            className="reveal relative overflow-hidden rounded-xl border border-white/5 bg-surface p-8 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] sm:p-10"
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal/70 via-accent-light/40 to-transparent"
              aria-hidden="true"
            />
            <blockquote className="font-display text-2xl leading-[1.38] font-medium text-accent-light sm:text-[28px]">
              &ldquo;Code is trivial. Building experiences that anticipate human
              intention, feel immediate, and endure scale — that&apos;s the
              alchemy.&rdquo;
            </blockquote>
          </figure>

          <div
            className="relative hidden flex-col items-center lg:flex"
            aria-hidden="true"
          >
            <div className="w-px flex-1 bg-gradient-to-b from-transparent to-accent-light/50" />
            <div className="my-5 size-4 rotate-45 rounded-[2px] bg-accent-light/15 ring-1 ring-accent-light/60" />
            <div className="w-px flex-1 bg-gradient-to-b from-accent-light/50 to-transparent" />
          </div>

          <div ref={narrativeRef} className="reveal">
            <p className="text-lg leading-[1.625] text-foreground">
              I am a Frontend Engineer based in Cairo, acting as the structural
              bridge between rigorous software engineering and high-fidelity
              interaction design. My day-to-day focuses on deep component
              architecture, WebGL graphics, and performance profiling.
            </p>
            <p className="mt-6 text-base leading-[1.625] text-text-secondary">
              Rather than simply handing off mockups into static code, I
              approach frontend as an operating system layer: reactive state
              graphs, sub-millisecond DOM reconciliation, and fluid spatial
              interfaces that feel tactile beneath user inputs. Backed by 4+
              years in production and a 20+ tool arsenal, I have architected
              systems processing real-time telemetry streams and 8+ shipped
              projects relied on by distributed teams globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
