import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { navItems } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

type PageLinksProps = {
  ids: string[]
  label?: string
}

export function PageLinks({ ids, label = "NEXT STAGE" }: PageLinksProps) {
  const items = navItems.filter((item) => ids.includes(item.id))

  return (
    <nav aria-label="ページ移動" className="px-4 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <p className="w-fit -rotate-2 bg-foreground px-3 py-1 font-display text-sm text-primary-foreground">
          {label}
        </p>
        <ul className={cn("grid gap-6", items.length > 1 && "md:grid-cols-2")}>
          {items.map((item, index) => (
            <li key={item.id}>
              <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center justify-between gap-4 border-4 border-foreground p-6 shadow-hard transition-all duration-200 hover:-translate-y-1 hover:shadow-hard-lg md:p-8",
                    index % 2 === 0 ? "bg-secondary text-secondary-foreground hover:-rotate-1" : "bg-accent text-accent-foreground hover:rotate-1",
                  )}
                >
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-4xl leading-none md:text-5xl">{item.en}</span>
                    <span className="text-sm font-bold">{item.ja}</span>
                  </span>
                  <span className="flex size-14 shrink-0 items-center justify-center border-4 border-foreground bg-foreground text-primary-foreground transition-transform group-hover:translate-x-2">
                    <ArrowRight className="size-6" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
