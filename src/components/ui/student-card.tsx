import React from "react";
import clsx from "clsx";
import { Button } from "./button";

export type StudentLink = { label: string; href: string };

export type StudentCardProps = {
  name: string;
  role?: string; // e.g., Undergraduate • CS, Graduate • HCI
  project?: string; // short project label
  bio?: React.ReactNode; // 1-3 sentences
  photoSrc?: string; // relative to public/ or absolute URL
  photoAlt?: string;
  links?: StudentLink[]; // GitHub, Scholar, LinkedIn, etc.
  className?: string;
};

export function StudentCard({ name, role, project, bio, photoSrc, photoAlt, links, className }: StudentCardProps) {
  const img = React.useMemo(() => photoSrc, [photoSrc]);

  return (
    <article className={clsx("rounded-[1.5rem] bg-card text-card-foreground p-4 sm:p-5 shadow-sm ring-1 ring-border", className)}>
      <div className="flex gap-4">
        <div className="shrink-0 grid place-items-center rounded-full bg-leaf ring-4 ring-leaf overflow-hidden" style={{ width: 96, height: 96 }}>
          {img ? (
            <img src={img} alt={photoAlt ?? name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-moss/70">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg sm:text-xl font-semibold leading-tight tracking-tight">{name}</h3>
          {role && <p className="text-sm text-muted-foreground mt-0.5">{role}</p>}

          {project && (
            <p className="mt-2 text-sm">
              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground mr-2">Project</span>
              {project}
            </p>
          )}

          {bio && <p className="mt-2 text-sm leading-relaxed text-muted-foreground/90">{bio}</p>}

          {links && links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {links.map((l) => (
                <Button key={l.href} size="sm" variant="outline" asChild>
                  <a href={l.href} target="_blank" rel="noreferrer noopener">{l.label}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default StudentCard;
