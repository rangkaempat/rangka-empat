// useMediaQuery Hook
// Description: A custom hook that returns a boolean for responsive breakpoints.
// Params:
// - query (string): a valid CSS media query (e.g., "(max-width: 768px)")
// Returns:
// - true if the media query matches, false otherwise
// How to Use:
// const isDesktop = useMediaQuery("(min-width: 1025px)")
//
// Note:
// This runs in real-time and listens for changes in screen size.

import { useEffect, useState } from "react";

export default function mediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
