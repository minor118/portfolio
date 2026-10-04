import { AboutSection } from "@/components/about-section"
import { BootOverlay } from "@/components/boot-overlay"
import { HeroSection } from "@/components/hero-section"
import { PageLinks } from "@/components/page-links"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <BootOverlay />
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <PageLinks ids={["career", "works"]} />
      </main>
      <SiteFooter />
    </>
  )
}
