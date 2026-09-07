import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "filled" | "ghost"
}

export function CtaButton({
  className,
  variant = "filled",
  ...props
}: CtaButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-mono text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300",
        variant === "filled" &&
          "bg-[#ff4d6d] text-[#0b0714] hover:bg-[#ff6b85]",
        variant === "ghost" &&
          "border border-[#7b61ff]/60 text-[#f0eef8] hover:border-[#7b61ff] hover:bg-[#7b61ff]/10",
        className
      )}
      {...props}
    />
  )
}
