import { Mail } from "lucide-react";
import { Button } from "./button";
import { Bamboo, LeafBullet } from "./nature";

const CONTACT = "davalosedu515@trinity.edu";
const SUBJECT = "Undergraduate/Graduate Research Interest";
const BODY = `Hi Prof. Davalos,

My research interests are: ...

I've attached my CV.

Thanks!`;

const MAJORS = ["Computer Science", "Computer Engineering", "Psychology", "Education"];

const MAILTO = `mailto:${CONTACT}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export function JoinLab() {
  return (
    <section id="join" className="scroll-mt-24 md:scroll-mt-28" aria-label="Joining the lab">
      <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-leaf px-6 py-10 md:px-12 md:py-14">
          <Bamboo
            className="pointer-events-none absolute -bottom-2 right-2 hidden h-[115%] md:block"
            segments={6}
            sprigs={[
              { at: 2, side: "left" },
              { at: 4, side: "right" },
              { at: 5, side: "left" },
            ]}
          />
          <Bamboo
            className="pointer-events-none absolute -bottom-2 right-24 hidden h-[80%] opacity-60 lg:block"
            segments={4}
            sprigs={[{ at: 3, side: "left" }]}
          />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:pr-40">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Joining the lab</h2>
              <p className="mt-3 max-w-[48ch] text-muted-foreground">
                I'm currently accepting Trinity University students from these majors:
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {MAJORS.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm font-medium">
                    <LeafBullet /> {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="self-center rounded-2xl bg-card p-6 shadow-sm ring-1 ring-bamboo/30">
              <h3 className="text-lg font-semibold tracking-tight">How to reach out</h3>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
                <li>Email me with a short paragraph about what you want to research.</li>
                <li>Attach your current CV.</li>
              </ol>
              <Button asChild className="mt-6 rounded-full bg-ember px-5 text-white hover:bg-ember/90">
                <a href={MAILTO}>
                  <Mail className="size-4" /> Email Prof. Davalos
                </a>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">{CONTACT}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
