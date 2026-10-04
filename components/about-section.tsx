import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile, skillGroups } from "@/lib/portfolio-data"
import styles from "./about-section.module.css"

const MAX_LEVEL = 7

function Gauge({ level, label }: { level: number; label: string }) {
  return (
    <div
      role="meter"
      aria-label={`${label} のレベル`}
      aria-valuemin={0}
      aria-valuemax={MAX_LEVEL}
      aria-valuenow={level}
      className={styles.gauge}
    >
      {Array.from({ length: MAX_LEVEL }, (_, i) => (
        <span
          key={i}
          className={styles.gaugeSeg}
          data-filled={i < level}
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
    <section id="about" aria-labelledby="about-title" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading id="about-title" en="ABOUT" ja="自己紹介・スキル" />

        <div className={styles.columns}>
          <Reveal>
            <article className={styles.profile}>
              <div className={styles.profileHeader}>
                <h3 className={styles.profileHeading}>PROFILE</h3>
                <span className={styles.profileHeadingJa}>プロフィール</span>
              </div>
              <div className={styles.profileBody}>
                <div className={styles.identity}>
                  <div className={styles.avatar} role="img" aria-label="プロフィール画像（仮置き）">
                    <div className={styles.avatarScanlines} />
                    <span className={styles.noSignal}>NO SIGNAL</span>
                  </div>
                  <div className={styles.names}>
                    <p className={styles.name}>{profile.name}</p>
                    <p className={styles.nameEn}>{profile.nameEn}</p>
                  </div>
                </div>
                <p className={styles.jobTitle}>{profile.title}</p>
                <div className={styles.intro}>
                  {profile.intro.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className={styles.status}>
              <div className={styles.statusHeader}>
                <h3 className={styles.statusHeading}>STATUS</h3>
                <p className={styles.totalLevel}>
                  {"（経験年数）"}
                </p>
              </div>

              <div className={styles.groups}>
                {skillGroups.map((group) => (
                  <section key={group.id} aria-labelledby={`skill-${group.id}`} className={styles.group}>
                    <h4 id={`skill-${group.id}`} className={styles.groupHeading} data-tone={group.tone}>
                      <span className={styles.groupHeadingEn}>{group.en}</span>
                      <span className={styles.groupHeadingJa}>{group.ja}</span>
                    </h4>
                    <ul className={styles.skills}>
                      {group.skills.map((skill) => (
                        <li key={skill.name} className={styles.skill}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <Gauge level={skill.level} label={skill.name} />
                          <span className={styles.skillLevel}>{skill.level}年</span>
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
