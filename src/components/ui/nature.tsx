import React from "react";

/**
 * Decorative pieces of the bamboo forest: stalks, leaves, hills, and grass.
 * All aria-hidden, all pure SVG; swaying stops under `prefers-reduced-motion`.
 */

const LEAF_PATH = "M0 0C10-7 30-8 46 0C30 8 10 7 0 0Z";

type LeafProps = { className?: string; color?: string; style?: React.CSSProperties };

/** A single bamboo leaf, pointing right from its stem. */
export function Leaf({ className = "", color = "#4F7A3A", style }: LeafProps) {
  return (
    <svg viewBox="-1 -9 48 18" className={className} style={style} aria-hidden="true">
      <path d={LEAF_PATH} fill={color} />
      <path d="M2 0H40" stroke="#000" strokeOpacity="0.15" strokeWidth="0.8" />
    </svg>
  );
}

type BambooProps = {
  className?: string;
  /** Number of segments in the stalk. */
  segments?: number;
  /** Node indexes (from the bottom) that grow a sprig of leaves, and which side. */
  sprigs?: { at: number; side: "left" | "right" }[];
  stalk?: string;
  leaf?: string;
  sway?: boolean;
};

const SEG = 70;

/** A bamboo stalk with nodes and the odd sprig of leaves. */
export function Bamboo({
  className = "",
  segments = 5,
  sprigs = [
    { at: 2, side: "right" },
    { at: 4, side: "left" },
  ],
  stalk = "#8DB255",
  leaf = "#4F7A3A",
  sway = true,
}: BambooProps) {
  const h = segments * SEG + 10;

  return (
    <svg viewBox={`0 0 120 ${h}`} className={"overflow-visible " + className} aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <g
        className={sway ? "motion-safe:animate-[sway_9s_ease-in-out_infinite]" : ""}
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        {Array.from({ length: segments }, (_, i) => {
          const y = h - (i + 1) * SEG;
          return (
            <g key={i}>
              <rect x="53" y={y + 3} width="14" height={SEG - 3} rx="3" fill={stalk} />
              <rect x="56" y={y + 8} width="3" height={SEG - 14} rx="1.5" fill="#fff" fillOpacity="0.25" />
              <rect x="51" y={y} width="18" height="5" rx="2.5" fill={leaf} fillOpacity="0.7" />
            </g>
          );
        })}
        {sprigs.map(({ at, side }) => {
          const y = h - at * SEG;
          const dir = side === "right" ? 1 : -1;
          const x0 = 60 + dir * 7;
          return (
            <g key={`${at}-${side}`} transform={`translate(${x0} ${y}) scale(${dir} 1)`}>
              <path d="M0 0C10-4 18-10 24-18" stroke={leaf} strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d={LEAF_PATH} fill={leaf} transform="translate(22 -17) rotate(-35)" />
              <path d={LEAF_PATH} fill={leaf} transform="translate(22 -17) rotate(10) scale(0.85)" />
              <path d={LEAF_PATH} fill={leaf} fillOpacity="0.8" transform="translate(12 -7) rotate(40) scale(0.7)" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/**
 * Rolling hills used as a soft edge between two sections. `color` is the
 * section below; the back hill is a lighter echo of it.
 */
export function Hills({ color, back, className = "", flip = false }: { color: string; back?: string; className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={"block h-12 w-full md:h-20 " + className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      {back && <path fill={back} d="M0 50C180 10 360 10 560 40S960 80 1160 40 1440 20 1440 20V90H0Z" />}
      <path fill={color} d="M0 70C240 30 420 40 640 62S1060 90 1260 58 1440 50 1440 50V90H0Z" />
    </svg>
  );
}

/** A strip of grass blades along the top of a dark section. */
export function Grass({ color, className = "" }: { color: string; className?: string }) {
  const blades = React.useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => {
        // Deterministic jitter so the strip looks hand-made but stays stable between renders.
        const r = Math.sin(i * 12.9898) * 43758.5453;
        const j = r - Math.floor(r);
        const x = i * 16 + j * 8;
        const hgt = 14 + j * 22;
        const lean = (j - 0.5) * 10;
        return `M${x - 4} 40Q${x + lean / 2} ${40 - hgt / 2} ${x + lean} ${40 - hgt}Q${x + 1} ${40 - hgt / 2} ${x + 4} 40Z`;
      }).join(""),
    []
  );

  return (
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className={"block h-8 w-full md:h-10 " + className} aria-hidden="true">
      <path fill={color} d={blades} />
      <rect y="38" width="1440" height="2" fill={color} />
    </svg>
  );
}

/** A small leaf used as a list bullet. */
export function LeafBullet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={"inline-block size-4 shrink-0 " + className} aria-hidden="true">
      <path d="M2 14C2 6 7 2 14 2C14 9 10 14 2 14Z" fill="#8DB255" />
      <path d="M3 13L11 5" stroke="#4F7A3A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
