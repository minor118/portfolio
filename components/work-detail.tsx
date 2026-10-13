import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PersonalWork } from "@/lib/portfolio-data"
import styles from "./work-detail.module.css"

type WorkDetailProps = {
  work: PersonalWork
}

export function WorkDetail({ work }: WorkDetailProps) {
  return (
    <article aria-labelledby="work-title" className={styles.section}>
      <div className={styles.inner}>
        <Link href="/works" className={styles.back}>
          <ArrowLeft className={styles.backIcon} aria-hidden="true" />
          WORKS に戻る
        </Link>

        <Reveal className={styles.header}>
          <p className={styles.label}>PERSONAL / 個人開発</p>
          <p className={styles.date}>{work.date}</p>
          <h1 id="work-title" className={styles.title}>
            {work.title}
          </h1>
          <p className={styles.summary}>{work.summary}</p>
          <ul className={styles.techList} aria-label="使用技術">
            {work.tech.map((tech) => (
              <li key={tech} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right">
          {work.image ? (
            <div className={styles.screenshot} data-has-image="true">
              <Image
                src={work.image}
                alt={`${work.title} のスクリーンショット`}
                fill
                sizes="(min-width: 56rem) 56rem, 100vw"
                className={styles.screenshotImage}
                priority
              />
              <div className={styles.scanlines} />
            </div>
          ) : (
            <div className={styles.screenshot} aria-hidden="true">
              <div className={styles.scanlines} />
            </div>
          )}
        </Reveal>

        <div className={styles.sections}>
          {work.sections.map((section, index) => (
            <Reveal key={section.heading} direction={index % 2 === 0 ? "left" : "right"}>
              <section className={styles.block}>
                <h2 className={styles.blockHeading}>{section.heading}</h2>
                <div className={styles.blockBody}>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.prompt && (
                  <div className={styles.prompt}>
                    <p id={`prompt-label-${index}`} className={styles.promptLabel}>
                      PROMPT
                      <span className={styles.promptLabelJa}>（{section.prompt.label}）</span>
                    </p>
                    {/* Focusable so the scrollable box can be scrolled with the keyboard */}
                    <pre
                      className={styles.promptText}
                      tabIndex={0}
                      role="region"
                      aria-labelledby={`prompt-label-${index}`}
                    >
                      {section.prompt.text}
                    </pre>
                  </div>
                )}
              </section>
            </Reveal>
          ))}
        </div>

        <ul className={styles.links}>
          {work.url && (
            <li>
              <a href={work.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                VIEW SITE
                <ArrowUpRight className={styles.linkIcon} aria-hidden="true" />
                <span className="sr-only">{`${work.title}（新しいタブで開く）`}</span>
              </a>
            </li>
          )}
          {work.repo && (
            <li>
              <a href={work.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GITHUB
                <ArrowUpRight className={styles.linkIcon} aria-hidden="true" />
                <span className="sr-only">{`${work.title} のリポジトリ（新しいタブで開く）`}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}
