import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { careers } from "@/lib/portfolio-data"
import styles from "./career-section.module.css"

export function CareerSection() {
  return (
    <section id="career" aria-labelledby="career-title" className={styles.section}>
      <div className={styles.backdropStripes} aria-hidden="true" />
      <div className={styles.inner}>
        <SectionHeading id="career-title" en="CAREER" ja="経歴・職歴" />

        <ol className={styles.timeline}>
          {careers.map((career, index) => (
            <li key={`${career.company}-${career.period}`} className={styles.entry}>
              <span className={styles.marker} aria-hidden="true" />
              <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
                <article className={styles.card}>
                  <div className={styles.panel}>
                    <div className={styles.meta}>
                      <p className={styles.period}>
                        <time>{career.period}</time>
                      </p>
                      <p className={styles.role}>{career.role}</p>
                    </div>
                    <h3 className={styles.company}>{career.company}</h3>
                    <p className={styles.description}>{career.description}</p>
                    <ul className={styles.tasks}>
                      {career.tasks.map((task) => (
                        <li key={task} className={styles.task}>
                          <span className={styles.bullet} aria-hidden="true" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
