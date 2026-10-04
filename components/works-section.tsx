import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { works } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function WorksSection() {
  return (
    <section id="works" aria-labelledby="works-title" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading id="works-title" en="WORKS" ja="作品・実績" />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <li key={work.title}>
              <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 100} className="h-full">
                <article
                  className={cn(
                    "group flex h-full flex-col border-4 border-foreground bg-card shadow-hard transition-all duration-200 hover:-translate-y-2 hover:shadow-hard-lg focus-within:-translate-y-2 focus-within:shadow-hard-lg",
                    index % 2 === 0 ? "hover:-rotate-2 focus-within:-rotate-2" : "hover:rotate-2 focus-within:rotate-2",
                  )}
                >
                  <div
                    className="relative aspect-video overflow-hidden border-b-4 border-foreground bg-colorbars"
                    role="img"
                    aria-label={`${work.title} のサムネイル（仮置き）`}
                  >
                    <div className="scanlines absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="-rotate-3 bg-foreground px-3 py-1 font-display text-sm text-primary-foreground transition-transform group-hover:rotate-0 group-hover:scale-110">
                        {work.title}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <h3 className="font-display text-xl leading-tight text-foreground">{work.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-foreground text-pretty">{work.summary}</p>
                    <ul className="flex flex-wrap gap-2" aria-label="使用技術">
                      {work.tech.map((tech) => (
                        <li
                          key={tech}
                          className="border-2 border-foreground bg-background px-2 py-0.5 text-xs font-bold text-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border-[3px] border-foreground bg-foreground px-4 py-2 font-display text-sm text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
                    >
                      VIEW SITE
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">{`${work.title}（新しいタブで開く）`}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
