"use client"

import { useEffect } from "react"

const BOOT_DURATION_MS = 1700

export function BootOverlay() {
  useEffect(() => {
    // Mounted once in the root layout, so this only runs on the first document load.
    // Marking the document as booted stops the hero's TV power-on from replaying on later visits.
    const timer = window.setTimeout(() => {
      document.documentElement.dataset.booted = "true"
    }, BOOT_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      className="boot-overlay pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-foreground"
      aria-hidden="true"
    >
      <div className="boot-line h-0.5 w-full bg-card" />
    </div>
  )
}
