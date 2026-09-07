"use client"

import { useEffect, useRef } from "react"

type Blob = {
  cx: number
  cy: number
  r: number
  rx: number
  ry: number
  speed: number
  phase: number
  color: string
}

function drawStatic(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const blobs = [
    { cx: w * 0.2, cy: h * 0.18, r: 380, color: "rgba(123, 97, 255, 0.16)" },
    { cx: w * 0.85, cy: h * 0.2, r: 320, color: "rgba(0, 243, 194, 0.1)" },
    { cx: w * 0.55, cy: h * 0.9, r: 420, color: "rgba(201, 191, 255, 0.07)" },
  ]
  ctx.globalCompositeOperation = "lighter"
  for (const b of blobs) {
    const gradient = ctx.createRadialGradient(b.cx, b.cy, 0, b.cx, b.cy, b.r)
    gradient.addColorStop(0, b.color)
    gradient.addColorStop(1, "rgba(8, 8, 16, 0)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, w, h)
  }
}

function makeBlobs(w: number, h: number): Blob[] {
  return [
    {
      cx: w * 0.22,
      cy: h * 0.22,
      r: Math.max(w, h) * 0.45,
      rx: w * 0.16,
      ry: h * 0.14,
      speed: 0.00022,
      phase: 0,
      color: "rgba(123, 97, 255, 0.16)",
    },
    {
      cx: w * 0.82,
      cy: h * 0.25,
      r: Math.max(w, h) * 0.38,
      rx: w * 0.12,
      ry: h * 0.16,
      speed: 0.00016,
      phase: 2.1,
      color: "rgba(0, 243, 194, 0.1)",
    },
    {
      cx: w * 0.6,
      cy: h * 0.85,
      r: Math.max(w, h) * 0.5,
      rx: w * 0.2,
      ry: h * 0.12,
      speed: 0.00012,
      phase: 4.2,
      color: "rgba(201, 191, 255, 0.09)",
    },
  ]
}

export function ShaderBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      return
    }

    const host = canvas.parentElement
    if (!host) {
      return
    }

    let width = 0
    let height = 0
    let raf = 0
    let running = false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = host.clientWidth
      height = host.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const blobs = makeBlobs(width, height)
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduced || typeof IntersectionObserver === "undefined") {
      drawStatic(ctx, width, height)
      return
    }

    ctx.clearRect(0, 0, width, height)
    drawStatic(ctx, width, height)

    const resetSurface = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = "lighter"
    }

    const frame = (time: number) => {
      if (!running) {
        return
      }
      resetSurface()
      const t = time * 0.001
      for (const blob of blobs) {
        const x =
          blob.cx + Math.sin(t * blob.speed * 1000 + blob.phase) * blob.rx
        const y =
          blob.cy + Math.cos(t * blob.speed * 700 + blob.phase) * blob.ry
        const radius = blob.r + Math.sin(t * 0.5 + blob.phase) * 26
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, "rgba(8, 8, 16, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }
      raf = requestAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting === true
        if (visible) {
          if (!running) {
            running = true
            raf = requestAnimationFrame(frame)
          }
        } else {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 }
    )

    observer.observe(host)
    running = true
    raf = requestAnimationFrame(frame)

    window.addEventListener("resize", resize)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-60"
      aria-hidden="true"
    />
  )
}
