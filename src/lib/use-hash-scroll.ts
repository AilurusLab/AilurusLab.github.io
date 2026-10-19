import React from "react";
import { useLocation } from "react-router-dom";

/** Links like /people#join land at the top on client-side navigation; scroll to the target ourselves. */
export function useHashScroll() {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
}
