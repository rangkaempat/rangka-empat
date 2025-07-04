// horizontalDragScroll Hook
// Description: A reusable custom hook that enables horizontal drag-to-scroll for mouse users.
// Returns: a ref to attach to any horizontally scrollable container (e.g., card wrapper).
// Usage: const scrollRef = horizontalDragScroll(); then <div ref={scrollRef}>...</div>
// Notes:
// - Works alongside native touch scrolling.
// - Adds .dragging class for optional styling feedback.

import { useRef, useEffect } from "react";

export default function horizontalDragScroll() {
  const ref = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = ref.current;
    if (!slider) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.classList.add("dragging");
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("dragging");
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return ref;
}
