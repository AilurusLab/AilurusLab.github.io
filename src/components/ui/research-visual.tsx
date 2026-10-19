import React from "react";

/**
 * One small nature illustration per research topic. Pure SVG + CSS;
 * all motion is dropped under `prefers-reduced-motion`.
 */

const MOSS = "#4F7A3A";
const BAMBOO = "#8DB255";
const BARK = "#6B4A2F";
const RUST = "#C8501E";
const LEAF = "M0 0C10-7 30-8 46 0C30 8 10 7 0 0Z";

type Props = { className?: string };

function Frame({ children, className = "" }: React.PropsWithChildren<Props>) {
  return (
    <div className={"grid aspect-[4/3] place-items-center " + className} aria-hidden="true">
      <svg viewBox="0 0 200 150" className="h-full w-full overflow-visible">
        {children}
      </svg>
    </div>
  );
}

const swayStyle = (origin: string, delay = 0): React.CSSProperties => ({
  transformBox: "view-box",
  transformOrigin: origin,
  animationDelay: `${delay}s`,
});

/** A sprout growing from a small mound: something capable, kept close to home. */
export function SproutVisual(props: Props) {
  return (
    <Frame {...props}>
      <ellipse cx="100" cy="126" rx="62" ry="12" fill={BARK} fillOpacity="0.18" />
      <path d="M52 126C62 104 138 104 148 126Z" fill={BARK} fillOpacity="0.55" />
      <g className="motion-safe:animate-[sway_6s_ease-in-out_infinite]" style={swayStyle("100px 112px")}>
        <path d="M100 112C100 90 98 70 102 46" stroke={MOSS} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d={LEAF} fill={BAMBOO} transform="translate(101 72) rotate(-28) scale(1.05)" />
        <path d={LEAF} fill={MOSS} transform="translate(100 84) rotate(205) scale(0.95)" />
        <path d={LEAF} fill={BAMBOO} transform="translate(102 48) rotate(-70) scale(0.6)" />
      </g>
      <circle cx="100" cy="30" r="5" fill={RUST} className="motion-safe:animate-pulse" />
    </Frame>
  );
}

/** A tree's cross-section: each ring is a season of growth you can read back. */
export function RingsVisual(props: Props) {
  const rings = [12, 21, 28, 37, 44, 50];
  return (
    <Frame {...props}>
      <circle cx="100" cy="75" r="62" fill={BARK} />
      <circle cx="100" cy="75" r="56" fill="#E9D3B0" />
      {rings.map((r, i) => (
        <circle
          key={r}
          cx={100 + (i % 2 ? 1.5 : -1)}
          cy={75 + (i % 3) - 1}
          r={r}
          fill="none"
          stroke={BARK}
          strokeOpacity={0.35}
          strokeWidth={i % 2 ? 1 : 1.6}
        />
      ))}
      <circle
        cx="100"
        cy="75"
        r="37"
        fill="none"
        stroke={RUST}
        strokeWidth="2.5"
        className="motion-safe:animate-pulse"
        style={{ animationDuration: "3.5s" }}
      />
      <circle cx="100" cy="75" r="4" fill={BARK} fillOpacity="0.6" />
      <path d="M100 75L150 40" stroke={BARK} strokeOpacity="0.25" strokeWidth="1" />
    </Frame>
  );
}

/** A branch putting out leaves in turn, the way a conversation builds. */
export function BranchVisual(props: Props) {
  const leaves = [
    { x: 58, y: 98, a: -60, s: 0.75, c: BAMBOO },
    { x: 82, y: 86, a: 50, s: 0.8, c: MOSS },
    { x: 108, y: 72, a: -55, s: 0.85, c: BAMBOO },
    { x: 132, y: 60, a: 45, s: 0.8, c: MOSS },
    { x: 154, y: 46, a: -40, s: 0.7, c: BAMBOO },
  ];
  return (
    <Frame {...props}>
      <path d="M30 118C70 100 120 76 172 36" stroke={BARK} strokeWidth="4" fill="none" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <g
          key={i}
          className="motion-safe:animate-[sway_5s_ease-in-out_infinite]"
          style={swayStyle(`${l.x}px ${l.y}px`, i * 0.6)}
        >
          <path d={LEAF} fill={l.c} transform={`translate(${l.x} ${l.y}) rotate(${l.a}) scale(${l.s})`} />
        </g>
      ))}
      <circle cx="172" cy="36" r="4" fill={RUST} />
    </Frame>
  );
}

/** Roots spreading under a small plant: the groundwork everything else stands on. */
export function RootsVisual(props: Props) {
  return (
    <Frame {...props}>
      <rect x="20" y="50" width="160" height="90" rx="10" fill={BARK} fillOpacity="0.12" />
      <path d="M20 50H180" stroke={BARK} strokeOpacity="0.5" strokeWidth="2" />
      <g stroke={BARK} strokeOpacity="0.55" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M100 50C100 70 96 84 84 100S60 122 48 130" />
        <path d="M100 50C102 72 110 86 126 98S148 116 160 128" />
        <path d="M100 50C100 80 102 104 100 134" />
        <path d="M90 92C80 96 70 94 62 88M114 90C124 92 134 88 142 80M100 110C92 116 86 124 82 134" />
      </g>
      <path
        d="M100 50C100 70 96 84 84 100S60 122 48 130"
        stroke={RUST}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="16 130"
        className="motion-safe:animate-[dash-travel_4s_linear_infinite]"
      />
      <g className="motion-safe:animate-[sway_7s_ease-in-out_infinite]" style={swayStyle("100px 50px")}>
        <path d="M100 50V22" stroke={MOSS} strokeWidth="3" strokeLinecap="round" />
        <path d={LEAF} fill={BAMBOO} transform="translate(100 32) rotate(-35) scale(0.7)" />
        <path d={LEAF} fill={MOSS} transform="translate(100 38) rotate(215) scale(0.65)" />
      </g>
    </Frame>
  );
}
