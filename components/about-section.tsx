import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile, skillGroups, type SkillGroup } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const MAX_LEVEL = 10

const toneClass: Record<SkillGroup["tone"], string> = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  card: "bg-card text-card-foreground",
}

function Gauge({ level, label }: { level: number; label: string }) {
  return (
    <div
      role="meter"
      aria-label={`${label} のレベル`}
      aria-valuemin={0}
      aria-valuemax={MAX_LEVEL}
      aria-valuenow={level}
      className="flex h-4 flex-1 gap-0.5"
    >
      {Array.from({ length: MAX_LEVEL }, (_, i) => (
        <span
          key={i}
          className={cn(
            "gauge-seg flex-1 -skew-x-12",
            i < level ? "bg-primary-foreground" : "bg-card/15",
          )}
          style={{ transitionDelay: `${300 + i * 45}ms` }}
        />
      ))}
    </div>
  )
}

export function AboutSection() {
  const totalLevel = skillGroups.reduce(
    (sum, group) => sum + group.skills.reduce((s, skill) => s + skill.level, 0),
    0,
  )

  return (
    <section id="about" aria-labelledby="about-title" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading id="about-title" en="ABOUT" ja="自己紹介・スキル" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
          <Reveal>
            <article className="-rotate-1 border-4 border-foreground bg-card shadow-hard-lg">
              <div className="flex items-center justify-between bg-foreground px-4 py-2">
                <h3 className="font-display text-lg text-primary-foreground">PROFILE</h3>
                <span className="text-xs font-bold text-card">プロフィール</span>
              </div>
              <div className="flex flex-col gap-5 p-5 md:p-6">
                <div className="flex items-center gap-4">
                  <div
                    className="relative size-24 shrink-0 overflow-hidden border-4 border-foreground bg-colorbars md:size-28"
                    role="img"
                    aria-label="プロフィール画像（仮置き）"
                  >
                    <div className="scanlines absolute inset-0" />
                    <span className="absolute inset-x-0 bottom-2 mx-auto w-fit bg-foreground px-1.5 text-[10px] font-black text-primary-foreground">
                      NO SIGNAL
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-display text-2xl leading-tight text-foreground">{profile.name}</p>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground">{profile.nameEn}</p>
                  </div>
                </div>
                <p className="w-fit -rotate-1 bg-accent px-2 py-0.5 text-sm font-bold text-accent-foreground">
                  {profile.title}
                </p>
                <div className="flex flex-col gap-3 border-t-4 border-dashed border-foreground pt-5">
                  {profile.intro.map((line) => (
                    <p key={line} className="leading-relaxed text-foreground text-pretty">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="clip-cut bg-foreground p-5 text-card shadow-hard [--cut:36px] md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-2 border-b-4 border-primary-foreground pb-3">
                <h3 className="font-display text-3xl text-primary-foreground md:text-4xl">STATUS</h3>
                <p className="text-sm font-bold text-card">
                  {"スキル / TOTAL LV."}
                  <span className="font-display text-primary-foreground">{totalLevel}</span>
                </p>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <section key={group.id} aria-labelledby={`skill-${group.id}`} className="flex flex-col gap-3">
                    <h4
                      id={`skill-${group.id}`}
                      className={cn(
                        "clip-slant flex w-fit items-baseline gap-2 py-1 pl-3 pr-6",
                        toneClass[group.tone],
                      )}
                    >
                      <span className="font-display text-base">{group.en}</span>
                      <span className="text-xs font-bold">{group.ja}</span>
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {group.skills.map((skill) => (
                        <li key={skill.name} className="flex items-center gap-3">
                          <span className="w-24 shrink-0 truncate text-sm font-bold">{skill.name}</span>
                          <Gauge level={skill.level} label={skill.name} />
                          <span className="w-12 shrink-0 text-right font-display text-xs text-primary-foreground">
                            LV.{skill.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
