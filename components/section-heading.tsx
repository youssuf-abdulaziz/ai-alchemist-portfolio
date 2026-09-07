"use client"

import { SectionMarker } from "@/components/section-marker"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  number: string
  label: string
  title?: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={cn("reveal", className)}>
      <SectionMarker number={number} label={label} subtitle={subtitle} />
      {title ? (
        <h2 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-[-0.01em] sm:text-5xl">
          {title}
        </h2>
      ) : null}
    </div>
  )
}
