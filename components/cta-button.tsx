import type { ComponentPropsWithoutRef } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "filled" | "ghost"
}

export function CtaButton({
  className,
  variant = "filled",
  children,
  ...props
}: CtaButtonProps) {
  const Icon = variant === "filled" ? ArrowRight : ArrowUpRight
  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-display text-xl font-bold shadow-lg shadow-black/20 transition-all duration-300",
        variant === "filled" && "bg-coral text-[#f0eef8] hover:bg-[#ff6b85]",
        variant === "ghost" &&
          "bg-surface text-[#e4e1ed] hover:bg-[#16162a] hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <Icon
        className={cn(
          "size-5 transition-transform duration-300 group-hover:translate-x-0.5",
          variant === "filled" ? "text-[#f0eef8]" : "text-accent-light"
        )}
      />
    </a>
  )
}
