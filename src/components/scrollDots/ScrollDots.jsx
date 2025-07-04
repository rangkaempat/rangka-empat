// ScrollDots Component
// Description: A reusable scroll indicator (dot-style) component that shows which item/card is currently in view.
// Props:
// - containerRef: Ref to the horizontally scrollable container.
// - totalItems: Number of scrollable items (e.g., cards).
// - itemWidth: The width of each item (including margin/gap) to calculate active index.
// Usage: <ScrollDots containerRef={ref} totalItems={3} itemWidth={316} />

import React, { useEffect, useState } from "react";
import "./ScrollDots.scss";

export default function ScrollDots({ containerRef, totalItems, itemWidth }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, itemWidth]);

  return (
    <div className="scrollDotWrapper">
      {Array.from({ length: totalItems }).map((_, index) => (
        <div
          key={index}
          className={`scrollDot ${index === activeIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
