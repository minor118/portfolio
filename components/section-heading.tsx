import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  id: string
  en: string
  ja: string
}

export function SectionHeading({ id, en, ja }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col items-start gap-3">
      <p className="-rotate-2 bg-foreground px-3 py-1 text-sm font-bold tracking-widest text-primary-foreground shadow-hard-sm">
        {ja}
      </p>
      <h2
        id={id}
        className="font-display -rotate-3 text-6xl leading-none text-foreground text-shadow-hard md:text-8xl"
      >
        {en}
      </h2>
    </Reveal>
  )
}
