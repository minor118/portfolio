import { ArrowDown } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

function Knob({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative size-12 rounded-full border-4 border-foreground bg-card shadow-hard-sm lg:size-14">
        <span className="absolute left-1/2 top-1 h-4 w-1 -translate-x-1/2 bg-foreground" />
      </div>
      <span className="text-[10px] font-black tracking-widest text-foreground">{label}</span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh flex-col items-center justify-center gap-10 overflow-hidden px-4 pb-16 pt-28"
    >
      <div className="bg-stripes absolute -left-20 top-24 h-64 w-[140%] -rotate-6" aria-hidden="true" />

      <div className="relative w-full max-w-5xl">
        <div className="flex flex-col gap-4 rounded-[2rem] border-4 border-foreground bg-secondary p-3 shadow-hard-lg md:flex-row md:gap-6 md:p-6">
          <div className="relative aspect-[4/3] flex-1 overflow-hidden rounded-[1.5rem] border-4 border-foreground bg-foreground md:aspect-[16/10]">
            <div className="tv-on absolute inset-0 flex flex-col">
              <div className="flex items-center justify-between px-4 pt-3 font-display text-xs text-primary-foreground md:px-6 md:pt-5 md:text-base">
                <span>CH.01</span>
                <span className="flex items-center gap-2">
                  <span className="blink size-2.5 rounded-full bg-secondary" />
                  ON AIR
                </span>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center md:gap-5">
                <p className="-rotate-3 bg-card px-3 py-0.5 text-xs font-black tracking-[0.3em] text-foreground md:text-sm">
                  ポートフォリオ
                </p>
                <h1
                  id="hero-title"
                  className="font-display -rotate-3 text-[clamp(2.1rem,9vw,6rem)] leading-none text-primary-foreground text-shadow-cyan"
                >
                  PORTFOLIO
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-display text-base text-card md:text-2xl">{profile.name}</p>
                  <p className="text-xs font-bold text-card md:text-sm">{profile.title}</p>
                </div>
              </div>

              <div className="bg-colorbars h-6 w-full md:h-10" />
            </div>

            <div className="scanlines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="tv-noise pointer-events-none absolute opacity-[0.12] mix-blend-screen" aria-hidden="true" />
            <div
              className="tv-roll pointer-events-none absolute inset-x-0 top-0 h-[12%] bg-card/10"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2 md:w-28 md:flex-col md:justify-center md:gap-6 md:px-0">
            <div className="flex gap-4 md:flex-col md:gap-6">
              <Knob label="CH" />
              <Knob label="VOL" />
            </div>
            <div className="bg-stripes h-12 w-24 rounded-md border-4 border-foreground bg-card md:h-24 md:w-20" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full border-2 border-foreground bg-accent" />
              <span className="text-[10px] font-black tracking-widest text-foreground">POWER</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-3/5 justify-between px-6" aria-hidden="true">
          <span className="h-6 w-4 -skew-x-12 border-4 border-t-0 border-foreground bg-foreground" />
          <span className="h-6 w-4 skew-x-12 border-4 border-t-0 border-foreground bg-foreground" />
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-6">
        <p className="font-display -rotate-2 bg-foreground px-5 py-3 text-xl text-primary-foreground shadow-hard md:text-3xl text-balance text-center">
          {profile.catchphrase}
        </p>
        <a
          href="#about"
          className="group flex items-center gap-2 border-[3px] border-foreground bg-card px-5 py-2 font-display text-sm text-foreground shadow-hard-sm transition-all hover:rotate-2 hover:bg-foreground hover:text-primary-foreground"
        >
          START
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
