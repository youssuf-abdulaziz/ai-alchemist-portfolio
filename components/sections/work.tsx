"use client"

import type { CSSProperties } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"

import { projects } from "@/core/profile"
import { useRevealContainer } from "@/hooks/use-reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const statusColor: Record<string, string> = {
  Shipped: "bg-[#00f5c4]",
  "In Progress": "bg-amber-400",
  Concept: "bg-[#7b61ff]",
}

export function Work() {
  const ref = useRevealContainer<HTMLDivElement>()

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div ref={ref} className="mx-auto w-full max-w-screen-lg px-5 sm:px-8">
        <SectionHeading number="03" label="Work" title="Selected projects." />

        <div className="mt-16 grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "reveal group relative flex flex-col gap-6 overflow-hidden rounded-xl border border-border bg-[#0f0f1a] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#7b61ff]/60 hover:shadow-[0_20px_60px_-20px_rgba(123,97,255,0.5)] sm:p-10",
                project.featured && "md:flex-row md:items-center"
              )}
              style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
            >
              {project.featured && (
                <div
                  className="absolute inset-0 -z-10 opacity-40"
                  aria-hidden="true"
                >
                  <div className="hero-glow inset-0 size-full bg-[#7b61ff]/30" />
                </div>
              )}

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        statusColor[project.status]
                      )}
                    />
                    <span className="font-mono text-[11px] tracking-[0.15em] text-[#8b89a8] uppercase">
                      {project.status}
                    </span>
                  </span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[#8b89a8]">
                  {project.tagline}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-[#8b89a8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#f0eef8] uppercase transition-transform duration-300 group-hover:translate-x-1">
                View Case
                {project.featured ? (
                  <ExternalLink className="size-4" />
                ) : (
                  <ArrowRight className="size-4" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
