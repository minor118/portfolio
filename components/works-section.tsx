import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Work, works } from "@/lib/portfolio-data"
import styles from "./works-section.module.css"

type WorkCardProps = {
  work: Work
  index: number
  /** PICKUP エリアがあるときは小見出し（h3）の下に入るため h4 にする */
  titleAs: "h3" | "h4"
}

function WorkCard({ work, index, titleAs: Title }: WorkCardProps) {
  return (
    <Reveal
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 100}
      className={styles.revealFill}
    >
      <article
        className={styles.card}
        data-tilt={index % 2 === 0 ? "left" : "right"}
        data-pickup={work.pickup ? "true" : undefined}
      >
        {work.image ? (
          <div className={styles.thumbnail} data-has-image="true">
            <Image
              src={work.image}
              alt={`${work.title} のサムネイル`}
              fill
              sizes={
                work.pickup
                  ? "(min-width: 40rem) 50vw, 100vw"
                  : "(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw"
              }
              className={styles.thumbnailImage}
            />
            <div className={styles.scanlines} />
          </div>
        ) : (
          <div
            className={styles.thumbnail}
            role="img"
            aria-label={`${work.title} `}
          >
            <div className={styles.scanlines} />
            <div className={styles.thumbnailCenter}>
              <span className={styles.thumbnailLabel}>{work.title}</span>
            </div>
          </div>
        )}

        <div className={styles.body}>
          {work.pickup && (
            <p className={styles.pickupBadge} aria-hidden="true">
              PICKUP
            </p>
          )}
          <p className={styles.date}>{work.date}</p>
          <Title className={styles.title}>{work.title}</Title>
          <p className={styles.summary}>{work.summary}</p>
          {work.skills && work.skills.length > 0 && (
            <div className={styles.skills}>
              <p className={styles.skillsLabel}>NEW SKILLS / 得たスキル</p>
              <ul className={styles.skillList}>
                {work.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    <span className={styles.bullet} aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className={styles.techList} aria-label="使用技術">
            {work.tech.map((tech) => (
              <li key={tech} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
          {work.url && (
            <a href={work.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              VIEW SITE
              <ArrowUpRight className={styles.linkIcon} aria-hidden="true" />
              <span className="sr-only">{`${work.title}（新しいタブで開く）`}</span>
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export function WorksSection() {
  const sorted = [...works].sort((a, b) => (a.date < b.date ? 1 : -1))
  const pickups = sorted.filter((work) => work.pickup)
  const others = sorted.filter((work) => !work.pickup)
  const hasPickups = pickups.length > 0
  const titleAs = hasPickups ? "h4" : "h3"

  return (
    <section id="works" aria-labelledby="works-title" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading id="works-title" en="WORKS" ja="作品・実績" />

        {hasPickups && (
          <div className={styles.group}>
            <h3 className={styles.groupHeading}>
              PICKUP
              <span className={styles.groupHeadingJa}></span>
            </h3>
            <ul className={`${styles.grid} ${styles.pickupGrid}`}>
              {pickups.map((work, index) => (
                <li key={work.title}>
                  <WorkCard work={work} index={index} titleAs={titleAs} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.group}>
          {hasPickups && (
            <h3 className={styles.groupHeading}>
              ALL WORKS
              <span className={styles.groupHeadingJa}></span>
            </h3>
          )}
          <ul className={styles.grid}>
            {others.map((work, index) => (
              <li key={work.title}>
                <WorkCard work={work} index={index} titleAs={titleAs} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
