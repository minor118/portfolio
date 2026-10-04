import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import styles from "./hero-section.module.css"

function Knob({ label }: { label: string }) {
  return (
    <div className={styles.knob}>
      <div className={styles.knobDial} />
      <span className={styles.controlLabel}>{label}</span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className={styles.hero}>
      <div className={styles.backdropStripes} aria-hidden="true" />

      <div className={styles.stage}>
        <div className={styles.tv}>
          <div className={styles.screen}>
            <div className={styles.picture}>
              <div className={styles.osd}>
                <span>CH.01</span>
                <span className={styles.onAir}>
                  <span className={styles.onAirDot} />
                  ON AIR
                </span>
              </div>

              <div className={styles.titleArea}>
                <p className={styles.eyebrow}>ポートフォリオ</p>
                <h1 id="hero-title" className={styles.title}>
                  PORTFOLIO
                </h1>
                <div className={styles.nameBlock}>
                  <p className={styles.name}>{profile.name}</p>
                  <p className={styles.jobTitle}>{profile.title}</p>
                </div>
              </div>

              <div className={styles.colorbars} />
            </div>

            <div className={styles.scanlines} aria-hidden="true" />
            <div className={styles.noise} aria-hidden="true" />
            <div className={styles.roll} aria-hidden="true" />
          </div>

          <div className={styles.controls}>
            <div className={styles.knobs}>
              <Knob label="CH" />
              <Knob label="VOL" />
            </div>
            <div className={styles.speaker} aria-hidden="true" />
            <div className={styles.power}>
              <span className={styles.powerLed} />
              <span className={styles.controlLabel}>POWER</span>
            </div>
          </div>
        </div>
        <div className={styles.legs} aria-hidden="true">
          <span className={styles.leg} />
          <span className={styles.leg} />
        </div>
      </div>

    </section>
  )
}
