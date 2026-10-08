import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { navItems } from "@/lib/portfolio-data"
import styles from "./page-links.module.css"

type PageLinksProps = {
  ids: string[]
  label?: string
}

export function PageLinks({ ids, label = "LINKS" }: PageLinksProps) {
  const items = navItems.filter((item) => ids.includes(item.id))

  return (
    <nav aria-label="ページ移動" className={styles.nav}>
      <div className={styles.inner}>
        <p className={styles.label}>{label}</p>
        <ul className={styles.list} data-columns={items.length > 1 ? 2 : 1}>
          {items.map((item, index) => (
            <li key={item.id}>
              <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
                <Link
                  href={item.href}
                  className={styles.card}
                  data-tone={index % 2 === 0 ? "secondary" : "accent"}
                >
                  <span className={styles.text}>
                    <span className={styles.en}>{item.en}</span>
                    <span className={styles.ja}>{item.ja}</span>
                  </span>
                  <span className={styles.arrow}>
                    <ArrowRight className={styles.arrowIcon} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
