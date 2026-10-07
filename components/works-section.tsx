import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Work, works } from "@/lib/portfolio-data"
import styles from "./works-section.module.css"

export function WorksSection() {
  return (
    <section id="works" aria-labelledby="works-title" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading id="works-title" en="WORKS" ja="作品・実績" />

        <ul className={styles.grid}>
          {works.sort((a, b)=> a.date < b.date ? 1 : -1).map((work, index) => (
            <li key={work.title}>
              <Reveal
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
                className={styles.revealFill}
              >
                <article className={styles.card} data-tilt={index % 2 === 0 ? "left" : "right"}>
                  {work.image ? (
                    <div className={styles.thumbnail} data-has-image="true">
                      <Image
                        src={work.image}
                        alt={`${work.title} のサムネイル`}
                        fill
                        sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw"
                        className={styles.thumbnailImage}
                      />
                      <div className={styles.scanlines} />
                    </div>
                  ) : (
                    <div
                      className={styles.thumbnail}
                      role="img"
                      aria-label={`${work.title} のサムネイル（仮置き）`}
                    >
                      <div className={styles.scanlines} />
                      <div className={styles.thumbnailCenter}>
                        <span className={styles.thumbnailLabel}>{work.title}</span>
                      </div>
                    </div>
                  )}

                  <div className={styles.body}>
                    <p className={styles.date}>{work.date}</p>
                    <h3 className={styles.title}>{work.title}</h3>
                    <p className={styles.summary}>{work.summary}</p>
                    <ul className={styles.techList} aria-label="使用技術">
                      {work.tech.map((tech) => (
                        <li key={tech} className={styles.tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                    {work.url &&
                    <a href={work.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      VIEW SITE
                      <ArrowUpRight className={styles.linkIcon} aria-hidden="true" />
                      <span className="sr-only">{`${work.title}（新しいタブで開く）`}</span>
                    </a>
                    }
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
