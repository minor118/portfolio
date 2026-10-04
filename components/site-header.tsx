"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Play, X } from "lucide-react"
import { navItems, profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="group flex -rotate-2 items-center gap-2 border-[3px] border-foreground bg-foreground px-3 py-1.5 shadow-hard-sm transition-colors hover:bg-card"
        >
          <span className="font-display text-sm text-primary-foreground transition-colors group-hover:text-foreground">
            {profile.nameEn}
          </span>
          <span className="hidden bg-accent px-1.5 text-xs font-bold text-accent-foreground sm:inline">
            PORTFOLIO
          </span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => (open ? closeMenu() : openMenu())}
          aria-expanded={open}
          aria-controls="site-menu"
          className="flex size-12 items-center justify-center border-[3px] border-foreground bg-foreground text-primary-foreground shadow-hard-sm transition-all hover:-rotate-6 hover:bg-card hover:text-foreground"
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          <span className="sr-only">{open ? "メニューを閉じる" : "メニューを開く"}</span>
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 -z-10 bg-foreground/40 animate-in fade-in duration-200"
            onClick={() => closeMenu(false)}
            aria-hidden="true"
          />
          <nav
            id="site-menu"
            aria-label="メインメニュー"
            className="absolute right-4 top-20 w-[min(22rem,calc(100vw-2rem))] animate-in fade-in slide-in-from-right-10 duration-300 md:right-6"
          >
            <div className="-rotate-1 border-4 border-foreground bg-foreground shadow-hard-lg">
              <div className="flex items-center justify-between bg-primary-foreground px-4 py-1.5">
                <p className="font-display text-sm text-foreground">COMMAND</p>
                <p className="text-xs font-bold text-foreground">{"↑↓ で選択 / Enter で決定"}</p>
              </div>
              <ul className="flex flex-col gap-1 p-3" onKeyDown={handleListKeyDown}>
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
                        className={cn(
                          "clip-slant flex items-center gap-3 px-3 py-2.5 outline-none transition-all duration-150",
                          isSelected
                            ? "translate-x-2 bg-primary-foreground text-foreground"
                            : "text-card",
                        )}
                      >
                        <Play
                          className={cn(
                            "size-4 shrink-0 fill-current transition-opacity",
                            isSelected ? "opacity-100" : "opacity-0",
                          )}
                          aria-hidden="true"
                        />
                        <span className="font-display text-2xl leading-none">{item.en}</span>
                        <span className="text-xs font-bold">{item.ja}</span>
                        {isCurrent && (
                          <span
                            className={cn(
                              "ml-auto px-1.5 text-[10px] font-black tracking-wider",
                              isSelected ? "bg-foreground text-primary-foreground" : "bg-accent text-accent-foreground",
                            )}
                          >
                            NOW
                          </span>
                        )}
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
