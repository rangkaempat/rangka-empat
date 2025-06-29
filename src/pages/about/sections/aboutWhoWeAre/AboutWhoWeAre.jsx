import React, { useContext } from "react";
import "./AboutWhoWeAre.scss";
import { ThemeContext } from "../../../../functions/themeContext";

import image1 from "/src/assets/aboutImages/aboutImage1.webp";
import image2 from "/src/assets/aboutImages/aboutImage2.webp";
import image3 from "/src/assets/aboutImages/aboutImage3.webp";
import image4 from "/src/assets/aboutImages/aboutImage4.webp";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";

function AboutWhoWeAre() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <motion.div
          className="sectionContent aboutWhoWeAreContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="aboutWhoWeAreText">
            <motion.h2 className="textBold textXXXL" variants={fadeInWithEase}>
              WHO WE ARE:
            </motion.h2>

            <div className="aboutWhoWeAreTextRight">
              <div className="aboutWhoWeAreCarouselWrapper">
                <motion.img
                  src={image1}
                  alt="About Us Image 1"
                  variants={fadeInWithEase}
                />
                <motion.img
                  src={image3}
                  alt="About Us Image 2"
                  variants={fadeInWithEase}
                />
                <motion.img
                  src={image2}
                  alt="About Us Image 1"
                  variants={fadeInWithEase}
                />
              </div>
              <motion.p
                className="textLight textM"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.span className="textBold" variants={fadeInWithEase}>
                  We’re Rangka Empat Studio
                </motion.span>{" "}
                <motion.span variants={fadeInWithEase}>
                  — a small, close-knit team of designers, developers, and
                  problem-solvers who genuinely love what we do.
                  <br />
                  <br />
                  We’re friends who grew up together, studied together, and
                  shared a dream{" "}
                </motion.span>
                <motion.span className="textBold" variants={fadeInWithEase}>
                  to build something meaningful with people we trust and
                  respect.
                </motion.span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="sectionWrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="sectionContent">
            <motion.h2 className="textLight textS" variants={fadeInWithEase}>
              That dream turned into <br />
              <br />
              <span
                className="textBold textXXXL textMask"
                style={{ backgroundImage: `url(${image4})` }}
              >
                RANGKA EMPAT STUDIO
              </span>
            </motion.h2>
            <motion.p className="textLight textS" variants={fadeInWithEase}>
              <span className="textBold">
                A creative branding, web design and web development studio
              </span>{" "}
              focused on helping brands grow through thoughtful design, smart
              development, and real human connection.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default AboutWhoWeAre;
