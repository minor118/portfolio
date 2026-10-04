"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Play, X } from "lucide-react"
import { navItems, profile } from "@/lib/portfolio-data"
import styles from "./site-header.module.css"

const pageIds: Record<string, string> = {
  "/career": "career",
  "/works": "works",
}

export function SiteHeader() {
  const pathname = usePathname()
  const pageId = pageIds[pathname]
  const [open, setOpen] = useState(false)
  const [sectionId, setSectionId] = useState(navItems[0].id)
  const activeId = pageId ?? sectionId
  const [selected, setSelected] = useState(0)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (pageId) return
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSectionId(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pageId])

  const openMenu = () => {
    const index = Math.max(
      0,
      navItems.findIndex((item) => item.id === activeId),
    )
    setSelected(index)
    setOpen(true)
    requestAnimationFrame(() => itemRefs.current[index]?.focus())
  }

  const closeMenu = (returnFocus = true) => {
    setOpen(false)
    if (returnFocus) buttonRef.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const handleListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const count = navItems.length
    let next: number | null = null
    if (event.key === "ArrowDown") next = (selected + 1) % count
    if (event.key === "ArrowUp") next = (selected - 1 + count) % count
    if (event.key === "Home") next = 0
    if (event.key === "End") next = count - 1
    if (next === null) return
    event.preventDefault()
    setSelected(next)
    itemRefs.current[next]?.focus()
  }

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>{profile.nameEn}</span>
          <span className={styles.logoBadge}>PORTFOLIO</span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => (open ? closeMenu() : openMenu())}
          aria-expanded={open}
          aria-controls="site-menu"
          className={styles.menuButton}
        >
          {open ? (
            <X className={styles.menuIcon} aria-hidden="true" />
          ) : (
            <Menu className={styles.menuIcon} aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "メニューを閉じる" : "メニューを開く"}</span>
        </button>
      </div>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => closeMenu(false)} aria-hidden="true" />
          <nav id="site-menu" aria-label="メインメニュー" className={styles.menu}>
            <div className={styles.window}>
              <div className={styles.titlebar}>
                <p className={styles.titlebarTitle}>COMMAND</p>
              </div>
              <ul className={styles.list} onKeyDown={handleListKeyDown}>
                {navItems.map((item, index) => {
                  const isSelected = selected === index
                  const isCurrent = activeId === item.id
                  return (
                    <li key={item.id}>
                      <Link
                        ref={(el) => {
                          itemRefs.current[index] = el
                        }}
                        href={item.href}
                        onClick={() => closeMenu(false)}
                        onMouseEnter={() => setSelected(index)}
                        onFocus={() => setSelected(index)}
                        aria-current={isCurrent ? (pageId ? "page" : "location") : undefined}
                        data-selected={isSelected}
                        className={styles.item}
                      >
                        <Play className={styles.cursor} aria-hidden="true" />
                        <span className={styles.itemEn}>{item.en}</span>
                        <span className={styles.itemJa}>{item.ja}</span>
                        {isCurrent && <span className={styles.now}>NOW</span>}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
