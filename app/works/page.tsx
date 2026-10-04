import type { Metadata } from "next"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import styles from "../main.module.css"
import { WorksSection } from "@/components/works-section"

export const metadata: Metadata = {
  title: "WORKS | 河田 実 - PORTFOLIO",
  description: "これまでに制作した作品・実績と使用技術を紹介します。",
}

export default function WorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className={`${styles.main} ${styles.subpage}`}>
        <WorksSection />
        <PageLinks ids={["career", "top"]} />
      </main>
      <SiteFooter />
    </>
  )
}
