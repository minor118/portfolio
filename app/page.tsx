import { HeroSection } from "@/components/hero-section"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <PageLinks ids={["career", "works"]} />
      </main>
      <SiteFooter />
    </>
  )
}
