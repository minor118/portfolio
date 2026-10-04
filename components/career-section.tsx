import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { careers } from "@/lib/portfolio-data"

export function CareerSection() {
  return (
    <section id="career" aria-labelledby="career-title" className="relative px-4 py-24 md:py-32">
      <div className="bg-stripes absolute inset-y-0 right-0 hidden w-1/4 md:block" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-12">
        <SectionHeading id="career-title" en="CAREER" ja="経歴・職歴" />

        <ol className="relative flex flex-col gap-10 border-l-[6px] border-foreground pl-8 md:pl-12">
          {careers.map((career, index) => (
            <li key={`${career.company}-${career.period}`} className="relative">
              <span
                className="absolute -left-[47px] top-6 size-6 rotate-45 border-4 border-foreground bg-secondary md:-left-[63px]"
                aria-hidden="true"
              />
              <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
                <article className="clip-cut bg-foreground p-1 [--cut:32px]">
                  <div className="clip-cut flex flex-col gap-4 bg-card p-5 [--cut:29px] md:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="clip-slant bg-secondary py-1 pl-3 pr-6 font-display text-sm text-secondary-foreground">
                        <time>{career.period}</time>
                      </p>
                      <p className="border-2 border-foreground bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                        {career.role}
                      </p>
                    </div>
                    <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl text-balance">
                      {career.company}
                    </h3>
                    <p className="leading-relaxed text-foreground text-pretty">{career.description}</p>
                    <ul className="flex flex-col gap-1.5 border-t-4 border-dashed border-foreground pt-4">
                      {career.tasks.map((task) => (
                        <li key={task} className="flex gap-2 text-sm leading-relaxed text-foreground">
                          <span className="mt-2 size-2 shrink-0 bg-foreground" aria-hidden="true" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
