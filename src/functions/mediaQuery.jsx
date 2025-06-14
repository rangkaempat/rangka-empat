import { useEffect, useState } from "react";

/**
 * useMediaQuery - a custom hook that returns true or false
 * based on whether the current screen matches the given media query.
 *
 * @param {string} query - CSS media query string e.g. "(min-width: 1025px)"
 * @returns {boolean} - true if the query matches, false otherwise
 */

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
