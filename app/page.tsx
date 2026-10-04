import { AboutSection } from "@/components/about-section"
import { BootOverlay } from "@/components/boot-overlay"
import { CareerSection } from "@/components/career-section"
import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorksSection } from "@/components/works-section"

export default function Page() {
  return (
    <>
      <BootOverlay />
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <WorksSection />
      </main>
      <SiteFooter />
    </>
  )
}
