import type { Metadata } from "next"
import { AboutSection } from "@/components/about-section"
import { CareerSection } from "@/components/career-section"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "CAREER | 山田 太郎 - Webエンジニア",
  description: "自己紹介とスキル、これまでの経歴・職歴と担当してきた業務内容を紹介します。",
}

export default function CareerPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="overflow-x-clip pt-8">
        <AboutSection />
        <CareerSection />
        <PageLinks ids={["works", "top"]} />
      </main>
      <SiteFooter />
    </>
  )
}
