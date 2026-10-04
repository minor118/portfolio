import type { Metadata } from "next"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorksSection } from "@/components/works-section"

export const metadata: Metadata = {
  title: "WORKS | 山田 太郎 - Webエンジニア",
  description: "これまでに制作した作品・実績と使用技術を紹介します。",
}

export default function WorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="overflow-x-clip pt-8">
        <WorksSection />
        <PageLinks ids={["career", "top"]} />
      </main>
      <SiteFooter />
    </>
  )
}
