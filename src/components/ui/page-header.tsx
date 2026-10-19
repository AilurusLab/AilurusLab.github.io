import React from "react";
import { Bamboo, Hills } from "./nature";

/** Leafy banner at the top of inner pages, easing into the paper below with a hill line. */
export function PageHeader({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <header className="relative overflow-hidden bg-leaf">
      <Bamboo
        className="pointer-events-none absolute -bottom-2 right-[6%] hidden h-[120%] md:block"
        segments={5}
        sprigs={[
          { at: 2, side: "left" },
          { at: 4, side: "left" },
        ]}
      />
      <Bamboo
        className="pointer-events-none absolute -bottom-2 right-[14%] hidden h-[80%] opacity-50 lg:block"
        segments={4}
        sprigs={[{ at: 3, side: "right" }]}
      />
      <div className="container relative mx-auto max-w-6xl px-4 pb-4 pt-12 md:pt-16">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <div className="mt-4 max-w-[62ch] text-lg text-muted-foreground md:pr-56">{children}</div>
      </div>
      <Hills color="#FAF5EC" back="#F3F1E4" />
    </header>
  );
}
