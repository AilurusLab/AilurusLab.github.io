import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { NavBar } from "@/components/ui/nav-bar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { BackToTheTop } from "@/components/ui/back-to-the-top";
import { RedPanda } from "@/components/ui/red-panda";
import { Wordmark } from "@/components/ui/wordmark";
import { JoinLab } from "@/components/ui/join-lab";
import { Bamboo, Hills, Leaf, LeafBullet } from "@/components/ui/nature";
import { TOPICS } from "@/content/topics";

const FIELD_NOTES = [
  { label: "Home", value: "Himalayan forests" },
  { label: "Diet", value: "mostly bamboo" },
  { label: "Habits", value: "shy, mostly solitary" },
];

const TRAITS = [
  {
    title: "Efficient",
    body: "Red pandas get by on bamboo, a low-energy diet. We want AI that runs well on modest hardware.",
  },
  {
    title: "Private",
    body: "They are shy and keep to themselves. We favor models that keep personal data on the device.",
  },
  {
    title: "Effective",
    body: "None of that matters unless the AI still helps. We measure that, mostly in education.",
  },
];

export function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero: a clearing in the bamboo */}
      <section className="relative overflow-hidden bg-paper">
        <Bamboo
          className="pointer-events-none absolute -bottom-4 -left-14 hidden h-[110%] opacity-90 lg:block"
          segments={7}
          sprigs={[
            { at: 2, side: "right" },
            { at: 5, side: "right" },
          ]}
        />
        <Bamboo
          className="pointer-events-none absolute -bottom-4 -left-4 hidden h-[60%] opacity-50 xl:block"
          segments={5}
          sprigs={[{ at: 3, side: "right" }]}
        />

        <div className="container relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-6 pt-12 md:grid-cols-[1.1fr_1fr] md:pt-20 lg:pl-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-leaf px-3 py-1 text-sm font-semibold text-moss">
              <LeafBullet className="size-3.5" /> Trinity University
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              <Wordmark accentClassName="text-rust" />
            </h1>
            <p className="mt-5 max-w-[44ch] text-lg text-muted-foreground md:text-xl">
              A research lab working on efficient, private AI, with a focus on education.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary px-6 hover:bg-primary/90">
                <Link to="/research">
                  What we study <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-rust/40 px-6 text-ember hover:bg-rust/5 hover:text-ember">
                <Link to="/people#join">Join the lab</Link>
              </Button>
            </div>
          </div>

          {/* The mascot, peeking out of the leaves */}
          <div className="relative mx-auto aspect-square w-full max-w-[19rem] md:max-w-[26rem]">
            <div className="absolute inset-[4%] rounded-full bg-leaf" aria-hidden="true" />
            <div className="absolute inset-[14%] rounded-full bg-[#dfe9c9]" aria-hidden="true" />
            <Bamboo
              className="absolute -right-[4%] bottom-[6%] h-[92%]"
              segments={5}
              sprigs={[
                { at: 3, side: "left" },
                { at: 4, side: "right" },
              ]}
            />
            <RedPanda
              animated
              className="absolute left-[14%] top-[16%] w-[64%] drop-shadow-[0_10px_18px_rgba(74,29,14,0.25)]"
            />
            {/* Foreground foliage over the panda's chin */}
            <div className="absolute inset-x-0 bottom-[10%] h-[24%]" aria-hidden="true">
              {[
                { l: "6%", b: "10%", w: "34%", r: -20, c: "#4F7A3A" },
                { l: "22%", b: "0%", w: "30%", r: -40, c: "#8DB255" },
                { l: "46%", b: "4%", w: "34%", r: 200, c: "#4F7A3A" },
                { l: "60%", b: "18%", w: "28%", r: 165, c: "#8DB255" },
                { l: "34%", b: "-6%", w: "26%", r: -75, c: "#6E9A4E" },
              ].map((f, i) => (
                <span
                  key={i}
                  className="absolute motion-safe:animate-[sway_6s_ease-in-out_infinite]"
                  style={{ left: f.l, bottom: f.b, width: f.w, animationDelay: `${i * 0.7}s`, transformOrigin: "0% 50%" }}
                >
                  <Leaf color={f.c} className="w-full" style={{ transform: `rotate(${f.r}deg)` }} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <Hills color="#EAF0DC" back="#F1F5E8" />
      </section>

      {/* Field notes: why a red panda */}
      <section id="about" className="bg-leaf" aria-label="Why a red panda">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[22rem_1fr] md:py-20">
          <aside className="h-fit -rotate-1 rounded-2xl border-2 border-dashed border-bark/30 bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src="/ailurus-mascot.svg" alt="" className="size-16" />
              <div>
                <p className="font-display text-xl font-semibold">Red panda</p>
                <p className="text-sm italic text-muted-foreground">Ailurus fulgens</p>
              </div>
            </div>
            <dl className="mt-5 divide-y divide-dashed divide-bark/20 text-sm">
              {FIELD_NOTES.map((n) => (
                <div key={n.label} className="flex justify-between gap-4 py-2">
                  <dt className="text-muted-foreground">{n.label}</dt>
                  <dd className="text-right font-medium">{n.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Why a red panda?</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {TRAITS.map((t) => (
                <div key={t.title}>
                  <div className="flex items-center gap-2">
                    <LeafBullet className="size-5" />
                    <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Hills color="#FAF5EC" back="#F3EEE2" />
      </section>

      {/* What we study: a trail of topics */}
      <section id="research" className="bg-paper" aria-label="What we study">
        <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">What we study</h2>
              <p className="mt-3 max-w-[58ch] text-muted-foreground">
                Four topics, each with students leading the work.
              </p>
            </div>
            <Button asChild variant="ghost" className="rounded-full text-moss hover:bg-leaf hover:text-moss">
              <Link to="/research">
                Read more <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {TOPICS.map(({ id, name, short, visual: Visual }) => (
              <li key={id}>
                <Link
                  to={`/research#${id}`}
                  className="group flex h-full items-center gap-5 rounded-[1.75rem] bg-card p-5 ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-md hover:ring-bamboo/60"
                >
                  <div className="w-28 shrink-0 rounded-2xl bg-leaf/70 p-2 sm:w-36">
                    <Visual className="w-full" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-moss">{name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{short}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <JoinLab />

      <Footer />
      <BackToTheTop />
    </>
  );
}
