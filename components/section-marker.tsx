"use client"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type SectionMarkerProps = {
  number: string
  label: string
  subtitle?: string
  labelClassName?: string
  subtitleClassName?: string
  className?: string
}

export function SectionMarker({
  number,
  label,
  subtitle,
  labelClassName,
  subtitleClassName,
  className,
}: SectionMarkerProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn("reveal flex items-center gap-4 sm:gap-8", className)}
    >
      <p
        className={cn(
          "shrink-0 font-mono text-[11px] font-medium tracking-[0.15em] text-accent-light uppercase sm:text-xs",
          labelClassName
        )}
      >
        <span className="text-text-muted">{number}</span>
        <span className="mx-[0.35em] text-text-muted">{"/"}</span>
        <span className="mx-[0.35em] text-text-muted">{"/"}</span>
        {label}
      </p>
      <div
        aria-hidden="true"
        className="h-px min-w-8 flex-1 bg-gradient-to-r from-accent/60 to-accent/5"
      />
      {subtitle ? (
        <p
          className={cn(
            "hidden shrink-0 font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase md:block",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
