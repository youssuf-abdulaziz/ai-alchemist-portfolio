"use client"

import type { CSSProperties } from "react"

import { useRevealContainer } from "@/hooks/use-reveal"
import { profile, stats } from "@/core/profile"
import { CtaButton } from "@/components/cta-button"
import { CountUp } from "@/components/count-up"

export function Hero() {
  const statsRef = useRevealContainer<HTMLDivElement>()

  let wordIndex = 0
  const headlineWords = profile.heroHeadline.map((line) => {
    return line.split(" ").map((word) => ({ word, index: wordIndex++ }))
  })

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div
        className="hero-glow size-[520px] bg-[#7b61ff]/25"
        style={{ top: "-10%", right: "-10%" }}
      />
      <div
        className="hero-glow size-[360px] bg-[#00f5c4]/10"
        style={{ bottom: "5%", left: "-5%" }}
      />

      <div className="relative mx-auto w-full max-w-screen-lg px-5 pt-32 pb-16 sm:px-8">
        <p
          className="hero-fade font-mono text-xs tracking-[0.3em] text-[#8b89a8] uppercase"
          style={{ "--fade-delay": "0ms" } as CSSProperties}
        >
          {profile.ruleLabel}
        </p>

        <h1 className="mt-8 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[1.02] font-extrabold tracking-[-0.02em]">
          {headlineWords.map((line, lineIndex) => (
            <span key={lineIndex} className="block">
              {line.map(({ word, index }) => (
                <span key={index} className="hero-word-wrap">
                  <span
                    className="hero-word"
                    style={
                      { "--word-delay": `${index * 110}ms` } as CSSProperties
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
          className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-[#8b89a8]"
          style={{ "--fade-delay": "650ms" } as CSSProperties}
        >
          {profile.tagline}
        </p>

        <p
          className="hero-fade mt-4 font-mono text-xs tracking-[0.15em] text-[#4a4866] uppercase"
          style={{ "--fade-delay": "750ms" } as CSSProperties}
        >
          {profile.heroSubtext}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {profile.heroCtas.map((cta, index) => (
            <span
              key={cta.href}
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
      </div>

      <div
        ref={statsRef}
        className="relative mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-px overflow-hidden border-y border-border px-5 sm:grid-cols-3 sm:px-8"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="reveal flex flex-col gap-1 bg-[#0f0f1a]/40 px-2 py-6"
            style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
          >
            <span className="font-display text-4xl font-extrabold text-[#7b61ff]">
              <CountUp value={stat.value} prefix={stat.prefix} />
            </span>
            <span className="font-mono text-[11px] tracking-[0.15em] text-[#8b89a8] uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <p className="relative mx-auto mt-8 w-full max-w-screen-lg px-5 font-mono text-xs tracking-[0.15em] text-[#4a4866] uppercase sm:px-8">
        {profile.heroRule}
      </p>
    </section>
  )
}
