import React, { useContext } from "react";
import "./HomeHero2.scss";

import homebg from "/src/assets/home-bg.webp";
import Button from "../../../../components/button/Button";
import { ThemeContext } from "../../../../functions/themeContext";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  fadeInWithEase,
  staggerContainer,
  containerVariants,
  childVariants,
} from "../../../../functions/motionUtils";

function HomeHero2() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "sectionDark" : "sectionLight"}>
        <motion.div className="sectionContent home2HeroContent">
          <motion.div className="home2HeroTextContainer">
            <div className="home2HeroTitle">
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
            </div>

            <motion.div
              className="homeHeroBtnContainer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Button
                  name="START YOUR PROJECT"
                  type="btnType1"
                  link="#"
                  arrow="rocket"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Button
                  name="VIEW OUR WORK"
                  type={darkMode ? "btnType2" : "btnType2-light"}
                  link="#"
                  arrow="code"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <h2 className="textLight textM">
                Custom Web Applications & Digital Solutions
              </h2>

              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill={darkMode ? "#ffffff" : "#000000"}
                viewBox="0 0 256 256"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <path d="M213.66,130.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,204.69l74.34-74.35A8,8,0,0,1,213.66,130.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,124.69,53.66,50.34A8,8,0,0,0,42.34,61.66Z"></path>
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* Hero Cards Section */}
          <motion.div
            className="sectionBackground home2HeroBackground"
            style={{ backgroundImage: `url(${homebg})` }}
          >
            <div className="sectionBackgroundBlur home2HeroBackgroundBlur">
              <div className="sectionContent">
                <h2 className="textOverflow textXXL">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default HomeHero2;
