import { ArrowUp } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="mt-12">
      <div className="bg-stripes-yellow h-4 border-y-4 border-foreground" aria-hidden="true" />
      <div className="bg-foreground px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-bold text-card">
            <small className="text-sm">{`© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`}</small>
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 border-[3px] border-primary-foreground px-4 py-1.5 font-display text-sm text-primary-foreground transition-all hover:-rotate-2 hover:bg-primary-foreground hover:text-foreground"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            BACK TO TOP
          </a>
        </div>
      </div>
    </footer>
  )
}
