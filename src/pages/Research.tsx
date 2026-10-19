import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { NavBar } from "@/components/ui/nav-bar";
import { Footer } from "@/components/ui/footer";
import { BackToTheTop } from "@/components/ui/back-to-the-top";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Hills, LeafBullet } from "@/components/ui/nature";
import { TOPICS } from "@/content/topics";
import { useHashScroll } from "@/lib/use-hash-scroll";

const PAPER = "#FAF5EC";
const LEAF = "#EAF0DC";

export function ResearchPage() {
  useHashScroll();

  return (
    <>
      <NavBar />

      <PageHeader title="What we study">
        We work on AI's weak points: energy use, privacy, and how well it helps people learn.
      </PageHeader>

      {/* Jump links */}
      <nav aria-label="Topics" className="bg-paper">
        <div className="container mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-4">
          {TOPICS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="rounded-full bg-card px-4 py-1.5 text-sm font-semibold ring-1 ring-border transition hover:bg-leaf hover:text-moss hover:ring-bamboo/60"
            >
              {t.name}
            </a>
          ))}
        </div>
      </nav>

      {TOPICS.map((t, i) => {
        const Visual = t.visual;
        const tinted = i % 2 === 1;
        const bg = tinted ? LEAF : PAPER;
        const next = i === TOPICS.length - 1 ? PAPER : tinted ? PAPER : LEAF;

        return (
          <section
            key={t.id}
            id={t.id}
            className="scroll-mt-20 md:scroll-mt-24"
            style={{ backgroundColor: bg }}
            aria-labelledby={`${t.id}-title`}
          >
            <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Illustration */}
                <div className={"lg:col-span-5 lg:sticky lg:top-28 " + (tinted ? "lg:order-2" : "")}>
                  <div className="rounded-[2rem] p-6" style={{ backgroundColor: tinted ? PAPER : LEAF }}>
                    <Visual className="mx-auto w-full max-w-[22rem]" />
                  </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-7">
                  <h2 id={`${t.id}-title`} className="text-3xl font-semibold tracking-tight md:text-5xl">
                    {t.name}
                  </h2>

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
                    {t.story.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-card p-6 ring-1 ring-border">
                    <h3 className="text-lg font-semibold tracking-tight">Questions we're asking</h3>
                    <ul className="mt-3 space-y-2.5">
                      {t.questions.map((q) => (
                        <li key={q} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                          <LeafBullet className="mt-1" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {t.related.length > 0 && (
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="text-sm text-muted-foreground">Student projects:</span>
                      {t.related.map((r) => (
                        <span
                          key={r}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {next !== bg && <Hills color={next} />}
          </section>
        );
      })}

      {/* Closing */}
      <section className="bg-paper" aria-label="Get involved">
        <div className="container mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Curious about one of these?</h2>
          <p className="mt-3 text-muted-foreground">
            Students lead the projects here, and we'd like to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/people#join">
                Join the lab <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full text-moss hover:bg-leaf hover:text-moss">
              <Link to="/people">Meet the people</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTheTop />
    </>
  );
}
