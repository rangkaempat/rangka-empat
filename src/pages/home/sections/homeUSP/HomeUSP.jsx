import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import "./HomeUSP.scss";
import { ThemeContext } from "../../../../functions/themeContext";

import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import USPCard from "../../../../components/USPCard/USPCard";
import { uspCards } from "../../../../data/USPCardData";

function HomeUSP() {
  const { darkMode } = useContext(ThemeContext);
  const dragContainerRef = useRef(null);

  return (
    <section
      className={
        darkMode
          ? "sectionDark homeUSPBackground"
          : "sectionLight homeUSPBackground"
      }
    >
      <div className="sectionWrapper">
        <motion.div
          className="sectionContent homeUSPContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInWithEase}>Why Choose Us?</motion.h2>
          <motion.p variants={fadeInWithEase}>
            We’re here to bring your ideas to life, blending creativity with
            technology to craft experiences that feel human, authentic, and
            unforgettable.
          </motion.p>
        </motion.div>
      </div>

      <div className="homeUSPDragWrapper" ref={dragContainerRef}>
        <motion.div
          className="homeUSPCardContainer"
          drag="x"
          dragConstraints={dragContainerRef}
          whileTap={{ cursor: "grabbing" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {uspCards.map((card, index) => (
            <USPCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              animation={fadeInWithEase}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HomeUSP;
