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
import horizontalDragScroll from "../../../../functions/horizontalDragScroll";

function HomeUSP() {
  const { darkMode } = useContext(ThemeContext);
  const dragContainerRef = horizontalDragScroll();
  const cardWidth = 24 % +16; // assume 280px card + 1rem gap

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
          <motion.h2 variants={fadeInWithEase} className="textBold textXXL">
            WHY <br />
            CHOOSE <br />
            RANGKA <br />
            EMPAT?
          </motion.h2>
          <motion.p variants={fadeInWithEase} className="textLight textS">
            At Rangka Empat Studio, we help brands grow through strategic
            branding, professional web design, and custom-built web
            applications.
            <br />
            <br />
            Whether you're a startup or established business, we work closely
            with you to turn ideas into digital experiences that connect and
            convert.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="homeUSPCardWrapper"
        ref={dragContainerRef}
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
    </section>
  );
}

export default HomeUSP;
