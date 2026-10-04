"use client"

import { useEffect } from "react"
import styles from "./boot-overlay.module.css"

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
    <div className={styles.overlay} aria-hidden="true">
      <div className={styles.line} />
    </div>
  )
}
