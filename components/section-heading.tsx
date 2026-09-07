"use client"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  number: string
  label: string
  title: string
  className?: string
}

export function SectionHeading({
  number,
  label,
  title,
  className,
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={cn("reveal", className)}>
      <p className="font-mono text-[11px] tracking-[0.2em] text-[#7b61ff] uppercase">
        <span className="text-[#4a4866]">{number}</span> {label}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] font-extrabold tracking-[-0.01em] sm:text-5xl">
        {title}
      </h2>
      <div className="section-rule mt-6 max-w-[220px]">
        <span />
      </div>
    </div>
  )
}
