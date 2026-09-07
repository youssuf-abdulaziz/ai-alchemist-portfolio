"use client"

import { useEffect, useRef } from "react"

type RevealOptions = {
  threshold?: number
  rootMargin?: string
}

function createObserver(options?: RevealOptions) {
  if (typeof IntersectionObserver === "undefined") {
    return null
  }

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (prefersReducedMotion) {
    return null
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      }
    },
    {
      threshold: options?.threshold ?? 0.15,
      rootMargin: options?.rootMargin ?? "0px 0px -60px 0px",
    }
  )

  return observer
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: RevealOptions
) {
  const ref = useRef<T | null>(null)
  const threshold = options?.threshold
  const rootMargin = options?.rootMargin

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    const observer = createObserver({ threshold, rootMargin })
    if (!observer) {
      node.classList.add("is-visible")
      return
    }

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return ref
}

export function useRevealContainer<T extends HTMLElement = HTMLDivElement>(
  options?: RevealOptions
) {
  const ref = useRef<T | null>(null)
  const threshold = options?.threshold
  const rootMargin = options?.rootMargin

  useEffect(() => {
    const root = ref.current
    if (!root) {
      return
    }

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"))

    if (targets.length === 0) {
      return
    }

    const observer = createObserver({ threshold, rootMargin })
    if (!observer) {
      for (const target of targets) {
        target.classList.add("is-visible")
      }
      return
    }

    for (const target of targets) {
      observer.observe(target)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return ref
}
