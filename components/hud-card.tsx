"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

const ringCircumference = 2 * Math.PI * 40

const sparkPoints = "0,10 20,6 40,12 60,0 80,8 100,-2 120,4 140,-4 160,2"

export function HudCard() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || typeof IntersectionObserver === "undefined") {
      node.classList.add("is-live")
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-live")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const terminalLines = [
    { text: "const app = createReactiveGraph({", className: "text-coral" },
    { text: 'state: "SYNCHRONIZED",', className: "pl-4 text-text-light" },
    {
      text: 'renderEngine: "WebGL-Pipelines",',
      className: "pl-4 text-text-light",
    },
    { text: "memoryLeakRate: 0.000%", className: "pl-4 text-text-light" },
    { text: "});", className: "text-foreground" },
  ]

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border border-white/5 bg-surface/90 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8)] backdrop-blur-xl"
    >
      <div
        className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-accent-light/20 blur-[60px]"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <span
            className="size-2.5 rounded-full bg-[#ffb4ab]"
            aria-hidden="true"
          />
          <span
            className="size-2.5 rounded-full bg-coral-light"
            aria-hidden="true"
          />
          <span className="size-2.5 rounded-full bg-teal" aria-hidden="true" />
          <span className="ml-3 font-mono text-[11px] font-medium tracking-[0.1em] text-text-secondary">
            sys://telemetry.core
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1f1f28]/60 px-2.5 py-1">
          <span className="relative flex size-1.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60 motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span
              className="relative inline-flex size-1.5 rounded-full bg-teal"
              aria-hidden="true"
            />
          </span>
          <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-teal">
            LIVE
          </span>
        </span>
      </div>

      <div className="relative grid grid-cols-2 gap-4 px-5 pt-5">
        <div className="rounded-xl bg-surface-elevated/70 p-4">
          <div className="relative mx-auto size-24">
            <svg
              viewBox="0 0 96 96"
              className="size-full -rotate-90"
              aria-hidden="true"
            >
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#1f1f28"
                strokeWidth="6"
              />
              <circle
                className="hud-ring-fg"
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#c9bfff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${ringCircumference * 0.999} ${ringCircumference}`}
                strokeDashoffset={ringCircumference}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="flex items-baseline gap-0.5 font-display text-xl font-bold text-foreground">
                90
                <span className="text-sm text-text-secondary">%</span>
              </span>
              <span className="font-mono text-[10px] font-medium tracking-[0.1em] text-text-muted">
                BUILD SPEEDUP
              </span>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] font-medium tracking-[0.1em] text-text-secondary">
            Measure: Future Face
          </p>
        </div>

        <div className="rounded-xl bg-surface-elevated/70 p-4">
          <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-text-muted">
            ENGINE FPS
          </p>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="font-display text-[44px] leading-none font-bold text-accent-light">
              121
            </span>
            <span className="font-mono text-[11px] font-medium text-text-secondary">
              hz
            </span>
          </p>
          <div className="spark-viewport relative mt-3 h-8 w-full">
            <svg
              className="spark-stream absolute left-0 h-8 w-[320px] max-w-none"
              viewBox="0 0 320 32"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g>
                <polyline
                  points={sparkPoints}
                  fill="none"
                  stroke="url(#hud-spark)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points={sparkPoints}
                  fill="none"
                  stroke="url(#hud-spark)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(160 0)"
                />
                <circle cx="153" cy="8" r="3" fill="#c9bfff" />
                <circle cx="313" cy="8" r="3" fill="#c9bfff" />
              </g>
              <defs>
                <linearGradient id="hud-spark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c9bfff" />
                  <stop offset="100%" stopColor="rgba(201, 191, 255, 0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="mt-2 font-mono text-[10px] leading-tight font-medium text-text-muted">
            Render thread:
            <br />
            1.2ms
          </p>
        </div>
      </div>

      <div className="relative mt-4 bg-[#080810] px-5 py-4 font-mono text-[11px] font-medium">
        <div className="flex items-center justify-between tracking-[0.1em] text-text-muted">
          <span>STACK_TRACE · VUE3_CORE</span>
          <span>SHA: e91ab04</span>
        </div>
        <div className="mt-3 flex flex-col gap-1.5 leading-[1.45]">
          {terminalLines.map((line, index) => (
            <p
              key={line.text}
              className={`hud-terminal-line ${line.className}`}
              style={{ "--line-delay": `${index * 140}ms` } as CSSProperties}
            >
              {line.text}
            </p>
          ))}
          <p
            className="hud-terminal-line text-foreground"
            style={{ "--line-delay": "700ms" } as CSSProperties}
          >
            <span className="hud-cursor" aria-hidden="true" />
          </p>
        </div>
        <p className="mt-3 flex items-center gap-2 tracking-[0.1em] text-teal">
          <svg
            className="size-3"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="6" cy="6" r="6" />
          </svg>
          Cluster nodes verified in 14 regions
        </p>
      </div>
    </div>
  )
}
