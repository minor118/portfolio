import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Work, personalWorks, works } from "@/lib/portfolio-data"
import styles from "./works-section.module.css"

type WorkCardProps = {
  work: Work
  index: number
  /** PICKUP エリアがあるときは小見出し（h3）の下に入るため h4 にする */
  titleAs: "h3" | "h4"
  /** 指定すると VIEW SITE の代わりに詳細ページへのリンクを表示する */
  detailHref?: string
}

function WorkCard({ work, index, titleAs: Title, detailHref }: WorkCardProps) {
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
          {detailHref ? (
            <Link href={detailHref} className={styles.link}>
              READ MORE
              <ArrowRight className={styles.linkIcon} aria-hidden="true" />
              <span className="sr-only">{`${work.title} の詳細を見る`}</span>
            </Link>
          ) : work.url && (
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
  const hasPersonal = personalWorks.length > 0
  const hasGroups = hasPickups || hasPersonal
  const titleAs = hasGroups ? "h4" : "h3"

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

        {hasPersonal && (
          <div className={styles.group}>
            <h3 className={styles.groupHeading}>
              PERSONAL
              <span className={styles.groupHeadingJa}>個人開発</span>
            </h3>
            <ul className={`${styles.grid} ${styles.pickupGrid}`}>
              {personalWorks.map((work, index) => (
                <li key={work.slug}>
                  <WorkCard
                    work={work}
                    index={index}
                    titleAs={titleAs}
                    detailHref={`/works/${work.slug}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.group}>
          {hasGroups && (
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
