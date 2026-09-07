"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type CountUpProps = {
  value: number
  prefix?: string
  className?: string
}

export function CountUp({ value, prefix, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setDisplay(value))
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) {
            continue
          }

          started.current = true
          const start = performance.now()
          const duration = 1100

          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(value * eased))
            if (t < 1) {
              requestAnimationFrame(step)
            }
          }

          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [value])

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {display}
    </span>
  )
}
