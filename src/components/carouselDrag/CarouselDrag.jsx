import React from "react";
import "./CarouselDrag.scss";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

import homeHeroCard1 from "/src/assets/homeHeroCard1.webp";
// import homeHeroCard2 from "/src/assets/homeHeroCard2.webp";
// import homeHeroCard3 from "/src/assets/homeHeroCard3.webp";
// import homeHeroCard4 from "/src/assets/homeHeroCard4.webp";

function CarouselDrag() {
  const dragWrapperRef = useRef(null);
  const cardContainerRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  // Hero Cards Dragging
  useEffect(() => {
    const updateDragWidth = () => {
      if (dragWrapperRef.current && cardContainerRef.current) {
        const wrapperWidth = dragWrapperRef.current.offsetWidth;
        const containerWidth = cardContainerRef.current.scrollWidth;
        setDragWidth(containerWidth - wrapperWidth);
      }
    };

    updateDragWidth(); // Initial call
    window.addEventListener("resize", updateDragWidth); // Listen for resize
    return () => window.removeEventListener("resize", updateDragWidth); // Cleanup
  }, []);

  return (
    <>
      <div className="homeHeroDragWrapper" ref={dragWrapperRef}>
        <motion.div
          className="homeHeroCardContainer"
          ref={cardContainerRef}
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="homeHeroCard"
            variants={fadeInWithEase}
            whileHover={{ y: -10 }}
          >
            <img src={homeHeroCard1} alt="Test Image" draggable="false" />
          </motion.div>
          <motion.div
            className="homeHeroCard"
            variants={fadeInWithEase}
            whileHover={{ y: -10 }}
          >
            <img src={homeHeroCard1} alt="Test Image" draggable="false" />
          </motion.div>
          <motion.div
            className="homeHeroCard"
            variants={fadeInWithEase}
            whileHover={{ y: -10 }}
          >
            <img src={homeHeroCard1} alt="Test Image" draggable="false" />
          </motion.div>
          <motion.div
            className="homeHeroCard"
            variants={fadeInWithEase}
            whileHover={{ y: -10 }}
          >
            <img src={homeHeroCard1} alt="Test Image" draggable="false" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default CarouselDrag;
