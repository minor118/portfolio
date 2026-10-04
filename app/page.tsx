import { HeroSection } from "@/components/hero-section"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import styles from "./main.module.css"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <HeroSection />
        <PageLinks ids={["career", "works"]} />
      </main>
      <SiteFooter />
    </>
  )
}
