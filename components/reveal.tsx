"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import styles from "./reveal.module.css"

type RevealProps = {
  children: ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
}

export function Reveal({ children, className, direction = "left", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-visible={visible}
      data-direction={direction}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(styles.reveal, className)}
    >
      {children}
    </div>
  )
}
