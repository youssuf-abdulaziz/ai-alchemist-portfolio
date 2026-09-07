"use client"

import { Fragment } from "react"
import type { CSSProperties } from "react"

import { profile } from "@/core/profile"
import { CtaButton } from "@/components/cta-button"
import { HudCard } from "@/components/hud-card"
import { ShaderBackdrop } from "@/components/shader-backdrop"
import { cn } from "@/lib/utils"

const metricTones = {
  default: "text-foreground",
  teal: "text-teal",
  "accent-light": "text-accent-light",
} as const

export function Hero() {
  let wordIndex = 0
  const headlineWords = profile.heroHeadline.map((line) => {
    return line.split(" ").map((word) => ({ word, index: wordIndex++ }))
  })

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <ShaderBackdrop />
        <div className="scanlines absolute inset-0" />
        <div
          className="hero-glow size-[384px] bg-accent-light/10"
          style={{ top: "-10%", left: "-10%" }}
        />
        <div
          className="hero-glow size-[500px] bg-teal/10"
          style={{ bottom: "-5%", right: "-8%" }}
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] lg:grid-cols-[minmax(0,1fr)_minmax(0,465px)] lg:gap-12">
        <div className="px-5 pt-32 pb-16 sm:px-8 lg:px-0">
          <div className="max-w-[671px]">
            <p
              className="hero-fade inline-flex items-center gap-3 rounded-full bg-[#1f1f28]/80 px-4 py-2 font-mono text-[11px] font-medium tracking-[0.1em] text-text-secondary uppercase"
              style={{ "--fade-delay": "0ms" } as CSSProperties}
            >
              <span
                className="size-2 rounded-full bg-teal"
                aria-hidden="true"
              />
              {profile.ruleLabel}
            </p>

            <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.04] font-extrabold tracking-[-0.025em]">
              {headlineWords.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                  {line.map(({ word, index }) => (
                    <span key={index} className="hero-word-wrap">
                      <span
                        className="hero-word"
                        style={
                          {
                            "--word-delay": `${index * 110}ms`,
                          } as CSSProperties
                        }
                      >
                        {word}
                      </span>{" "}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p
              className="hero-fade mt-8 max-w-xl text-lg leading-[1.625] text-text-secondary"
              style={{ "--fade-delay": "650ms" } as CSSProperties}
            >
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {profile.heroCtas.map((cta, index) => (
                <span
                  key={cta.label}
                  className="cta-rise inline-flex"
                  style={
                    { "--cta-delay": `${950 + index * 120}ms` } as CSSProperties
                  }
                >
                  <CtaButton href={cta.href} variant={cta.variant}>
                    {cta.label}
                  </CtaButton>
                </span>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 sm:gap-9">
              {profile.heroMetrics.map((metric, index) => (
                <Fragment key={metric.label}>
                  <div>
                    <span
                      className={cn(
                        "block font-display text-[28px] leading-tight font-bold",
                        metricTones[metric.tone]
                      )}
                    >
                      {metric.value}
                    </span>
                    <span className="mt-1 block font-mono text-[11px] font-medium tracking-[0.1em] text-text-muted uppercase">
                      {metric.label}
                    </span>
                  </div>
                  {index < profile.heroMetrics.length - 1 ? (
                    <span
                      className="hidden h-8 w-px bg-divider sm:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="relative px-5 pb-16 sm:px-8 lg:px-0">
          <HudCard />
        </div>
      </div>
    </section>
  )
}
