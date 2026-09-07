import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import { fontDisplay, fontMono, fontSans } from "@/core/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Youssef Abdulaziz — Frontend Engineer",
  description:
    "A Frontend Engineer building scalable, high-impact web apps. Crafting high-performance, visually striking interfaces from complex ideas.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        fontDisplay.variable
      )}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}
