import { Reveal } from "@/components/reveal"
import styles from "./section-heading.module.css"

type SectionHeadingProps = {
  id: string
  en: string
  ja: string
}

export function SectionHeading({ id, en, ja }: SectionHeadingProps) {
  return (
    <Reveal className={styles.heading}>
      <p className={styles.label}>{ja}</p>
      <h2 id={id} className={styles.title}>
        {en}
      </h2>
    </Reveal>
  )
}
