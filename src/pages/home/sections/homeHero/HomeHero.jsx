import React, { useState, useContext, useEffect } from "react";
import "./HomeHero.scss";

import Button from "../../../../components/button/Button";
import { ThemeContext } from "../../../../functions/themeContext";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  fadeInWithEase,
  staggerContainer,
  containerVariants,
  childVariants,
} from "../../../../functions/motionUtils";

import clientWork from "/src/assets/clientWork/clientWork1.webp";
import clientWork2 from "/src/assets/clientWork/clientWork2.webp";
import clientWork3 from "/src/assets/clientWork/clientWork3.webp";
import clientWork4 from "/src/assets/clientWork/clientWork4.webp";
import clientWork5 from "/src/assets/clientWork/clientWork5.webp";
import clientWork6 from "/src/assets/clientWork/clientWork6.webp";

import clientLogo1 from "/src/assets/clientLogos/clientLogo1Dark.webp";
import clientLogo2 from "/src/assets/clientLogos/clientLogo2Dark.webp";
import clientLogo3 from "/src/assets/clientLogos/clientLogo3Dark.webp";
import clientLogo4 from "/src/assets/clientLogos/clientLogo4Dark.webp";
import clientLogo5 from "/src/assets/clientLogos/clientLogo5Dark.webp";
import clientLogo6 from "/src/assets/clientLogos/clientLogo6Dark.webp";

function HomeHero() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <motion.div className="sectionContent homeHeroContent">
          <motion.div className="homeHeroSectionContainer left">
            <div className="homeHeroTitle">
              <h1 className="textXXXL">
                <div className="textOverflow">
                  <motion.div
                    initial={{ y: 200, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    RANGKA
                  </motion.div>
                </div>

                <div className="textOverflow">
                  <motion.div
                    initial={{ x: -300, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    EMPAT
                  </motion.div>
                </div>

                <div className="textOverflow">
                  <motion.div
                    className="textXXL textLight"
                    initial={{ y: 200, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    STUDIO
                  </motion.div>
                </div>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="textLight textS">
                  Custom Web Applications & Digital Solutions
                </h2>
              </motion.div>
            </div>

            <motion.div
              className="homeHeroBtnContainer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <Button
                  name="START YOUR PROJECT"
                  type={darkMode ? "btnType1" : "btnType1-light"}
                  link="/start-your-project"
                  arrow="rocket"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <Button
                  name="GET IN TOUCH"
                  type={darkMode ? "btnType4-dark" : "btnType4"}
                  link="/contact"
                  arrow="contact"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="workCardWrapper"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="workCardContent">
                <h3>01</h3>
                <Link to="/work/amachi's-palagaram">
                  <img
                    src={clientLogo1}
                    alt="Amachi's Palagaram Logo"
                    className="clientLogo"
                  />
                  <img
                    src={clientWork}
                    alt="Amachi's Palagaram"
                    className="clientWorkImage"
                  />
                  {/* <div className="clientLink">VIEW</div> */}
                </Link>
                <h4 className="textXXS textRegular">Amachi's Palagaram</h4>
                <h5 className="textXXS textLight">F&B</h5>
              </div>
              <div className="workCardContent">
                <h3>02</h3>
                <Link to="/work/property-geek">
                  <img
                    src={clientLogo2}
                    alt="Property Geek Logo"
                    className="clientLogo"
                  />
                  <img
                    src={clientWork2}
                    alt="Property Geek"
                    className="clientWorkImage"
                  />
                </Link>
                <h4 className="textXXS textRegular">Property Geek</h4>
                <h5 className="textXXS textLight">Real Estate</h5>
              </div>
            </motion.div>

            <hr className="homeHeroTagline" />

            <h2 className="textOverflow textL homeHeroTagline">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                We Design.
              </motion.div>

              <motion.span
                className="textLight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Typewriter
                  words={["We Code."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={5000}
                />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                We Deliver.
              </motion.div>

              <motion.span
                className="textLight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                We Care.
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            className="homeHeroSectionContainer right"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="homeHeroWorkButton">
              <Button
                name="VIEW OUR WORK"
                type={darkMode ? "btnType5-dark" : "btnType5"}
                link="/work"
              />
            </div>
            <div className="workCardWrapper">
              <div className="workCardContent">
                <h3>03</h3>
                <Link to="/work/harappan-investments">
                  <img
                    src={clientLogo3}
                    alt="Harappan Investments Logo"
                    className="clientLogo"
                  />
                  <img
                    src={clientWork3}
                    alt="Harappan Investments"
                    className="clientWorkImage"
                  />
                </Link>
                <h4 className="textXXS textRegular">Harappan Investments</h4>
                <h5 className="textXXS textLight">Investment</h5>
              </div>
              <div className="workCardContent">
                <h3>04</h3>
                <Link to="/work/face-by-aisya">
                  <img
                    src={clientLogo4}
                    alt="Face by Aisya Logo"
                    className="clientLogo"
                  />
                  <img
                    src={clientWork4}
                    alt="Face by Aisya"
                    className="clientWorkImage"
                  />
                </Link>
                <h4 className="textXXS textRegular">Face by Aisya</h4>
                <h5 className="textXXS textLight">Beauty</h5>
              </div>
            </div>

            <div className="workCardWrapper">
              <div className="workCardContent">
                <h3>05</h3>
                <Link to="/work/stacked-burgers">
                  <img
                    src={clientLogo5}
                    alt="Stacked Burgers Logo"
                    className="clientLogo"
                  />
                  <img
                    src={clientWork5}
                    alt="Stacked Burgers"
                    className="clientWorkImage"
                  />
                </Link>
                <h4 className="textXXS textRegular">Stacked Burgers</h4>
                <h5 className="textXXS textLight">F&B</h5>
              </div>
              <div className="workCardContent">
                <h3>06</h3>
                <Link to="/work/hyrax-oil">
                  <img
                    src={clientLogo6}
                    alt="Hyrax Oil Logo"
                    className="clientLogo"
                  />
                  <img
                    src={clientWork6}
                    alt="Hyrax Oil"
                    className="clientWorkImage"
                  />
                </Link>
                <h4 className="textXXS textRegular">Hyrax Oil</h4>
                <h5 className="textXXS textLight">Oil & Gas</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default HomeHero;
