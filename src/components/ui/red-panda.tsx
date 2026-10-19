/**
 * RedPanda: the lab's mascot, inline so the eyes can blink.
 * Same artwork as `public/ailurus-mascot.svg`; keep the two in step.
 * All motion is dropped under `prefers-reduced-motion`.
 */

const RUST = "#C8501E";
const CREAM = "#FFF4E6";
const EAR = "#4A1D0E";
const TEAR = "#7A2A10";
const DARK = "#24120A";

export function RedPanda({ className = "", animated = false }: { className?: string; animated?: boolean }) {
  const blink = animated ? "motion-safe:animate-[blink_6s_ease-in-out_infinite]" : "";

  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Ailurus Lab red panda">
      {/* Ears: rust back, cream rim, dark inner */}
      <path fill={RUST} d="M6 48C1 30 6 11 21 6c9-3 18 3 26 15L30 42Z" />
      <path fill={RUST} d="M94 48c5-18 0-37-15-42-9-3-18 3-26 15l17 21Z" />
      <path fill={CREAM} d="M9 46C5 30 9 14 22 9c7-2 15 3 22 13L30 40Z" />
      <path fill={CREAM} d="M91 46c4-16 0-32-13-37-7-2-15 3-22 13l14 18Z" />
      <path fill={EAR} d="M15 41c-2-11 1-22 9-25 5-2 10 2 14 8L26 37Z" />
      <path fill={EAR} d="M85 41c2-11-1-22-9-25-5-2-10 2-14 8l12 13Z" />

      {/* Head with fluffy cheeks */}
      <path
        fill={RUST}
        d="M50 20c20 0 36 11 39 28 1 6 6 10 7 16-4 0-6 2-6 4 2 4 1 8-3 10-6 9-20 15-37 15S19 87 13 78c-4-2-5-6-3-10 0-2-2-4-6-4 1-6 6-10 7-16C14 31 30 20 50 20Z"
      />

      {/* Brows, cheeks, muzzle */}
      <ellipse fill={CREAM} cx="32" cy="45" rx="8" ry="5.5" transform="rotate(-14 32 45)" />
      <ellipse fill={CREAM} cx="68" cy="45" rx="8" ry="5.5" transform="rotate(14 68 45)" />
      <path fill={CREAM} d="M10 68c4 0 8 2 12 6 3 3 4 8 2 11-5-1-9-4-12-7-3-2-4-6-2-10Z" />
      <path fill={CREAM} d="M90 68c-4 0-8 2-12 6-3 3-4 8-2 11 5-1 9-4 12-7 3-2 4-6 2-10Z" />
      <path fill={CREAM} d="M50 55c9 0 17 8 17 18 0 9-8 14-17 14s-17-5-17-14c0-10 8-18 17-18Z" />

      {/* Tear marks */}
      <path fill={TEAR} d="M30 57c4-2 8 0 9 4 1 6-2 14-7 22-3-6-5-12-5-18 0-4 1-7 3-8Z" />
      <path fill={TEAR} d="M70 57c-4-2-8 0-9 4-1 6 2 14 7 22 3-6 5-12 5-18 0-4-1-7-3-8Z" />

      {/* Eyes */}
      <g className={blink} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle fill={DARK} cx="34" cy="60" r="4.6" />
        <circle fill={DARK} cx="66" cy="60" r="4.6" />
        <circle fill="#fff" cx="35.6" cy="58.4" r="1.5" />
        <circle fill="#fff" cx="67.6" cy="58.4" r="1.5" />
      </g>

      {/* Nose and mouth */}
      <path
        fill={DARK}
        d="M43.5 66.5c3-2 10-2 13 0 1 1 0 3-1.5 4.5L50 75l-5-4c-1.5-1.5-2.5-3.5-1.5-4.5Z"
      />
      <path
        fill="none"
        stroke={DARK}
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M50 75v3m0 0c-1.5 2.5-5 3-7 1m7-1c1.5 2.5 5 3 7 1"
      />
    </svg>
  );
}
