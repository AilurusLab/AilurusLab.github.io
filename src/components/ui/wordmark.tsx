/**
 * The logo spelling "AIlurus Lab", with the "AI" picked out. Screen readers
 * get the plain spelling, which is also what running text should use.
 */
export function Wordmark({ accentClassName = "text-[#B4441A]" }: { accentClassName?: string }) {
  return (
    <span aria-label="Ailurus Lab">
      <span aria-hidden="true">
        <span className={accentClassName}>AI</span>lurus Lab
      </span>
    </span>
  );
}
