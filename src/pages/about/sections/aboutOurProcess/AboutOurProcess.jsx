import React, { useContext } from "react";
import "./AboutOurProcess.scss";
import { ThemeContext } from "../../../../functions/themeContext";

import image1 from "/src/assets/processCard/process-discovery-&-strategy.webp";
import Button from "../../../../components/button/Button";
import ProcessCard from "../../../../components/processCard/ProcessCard";
import processCardData from "../../../../data/processCardData";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";

function AboutOurProcess() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent aboutOurProcessContent">
          <motion.div
            className="aboutOurProcessTitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 className="textBold textXXXL" variants={fadeInWithEase}>
              OUR 4-PHASE PROCESS
            </motion.h2>
            <motion.p className="textLight textS" variants={fadeInWithEase}>
              We like to keep things simple, collaborative, and transparent.
            </motion.p>
          </motion.div>

          <div className="aboutOurProcessCardWrapper">
            {processCardData.map((item, index) => (
              <ProcessCard
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                features={item.features}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutOurProcess;
