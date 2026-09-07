"use client"

import type { CSSProperties } from "react"

import { skillClusters } from "@/core/profile"
import { useRevealContainer } from "@/hooks/use-reveal"
import { SectionHeading } from "@/components/section-heading"

export function Skills() {
  const ref = useRevealContainer<HTMLDivElement>()

  return (
    <section id="stack" className="dot-grid relative py-28 sm:py-36">
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-screen-lg px-5 sm:px-8"
      >
        <SectionHeading
          number="02"
          label="Stack"
          title="The tools I think in."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillClusters.map((cluster, clusterIndex) => (
            <div key={cluster.label}>
              <p
                className="reveal font-mono text-[11px] tracking-[0.2em] text-[#4a4866] uppercase"
                style={
                  {
                    "--reveal-delay": `${clusterIndex * 100}ms`,
                  } as CSSProperties
                }
              >
                {cluster.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {cluster.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="reveal rounded-full border border-[#7b61ff]/40 bg-[#0f0f1a] px-4 py-2 font-mono text-xs text-[#f0eef8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00f5c4] hover:text-[#00f5c4]"
                    style={
                      {
                        "--reveal-delay": `${clusterIndex * 100 + index * 60}ms`,
                      } as CSSProperties
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
