import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkDetail } from "@/components/work-detail"
import { personalWorks } from "@/lib/portfolio-data"
import styles from "../../main.module.css"

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>
}

// Only the slugs defined in personalWorks exist; anything else is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return personalWorks.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const work = personalWorks.find((item) => item.slug === slug)
  if (!work) return {}
  return {
    title: `${work.title} | WORKS | 河田 実 - PORTFOLIO`,
    description: work.summary,
  }
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params
  const work = personalWorks.find((item) => item.slug === slug)
  if (!work) notFound()

  return (
    <>
      <SiteHeader />
      <main id="top" className={`${styles.main} ${styles.subpage}`}>
        <WorkDetail work={work} />
        <PageLinks ids={["works", "top"]} />
      </main>
      <SiteFooter />
    </>
  )
}
