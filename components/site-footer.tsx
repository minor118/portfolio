import { ArrowUp } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import styles from "./site-footer.module.css"

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.hazardStripe} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.inner}>
          <p className={styles.copyright}>
            <small>{`© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`}</small>
          </p>
          <a href="#top" className={styles.backToTop}>
            <ArrowUp className={styles.icon} aria-hidden="true" />
            BACK TO TOP
          </a>
        </div>
      </div>
    </footer>
  )
}
