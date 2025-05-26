import React, { useContext, useEffect, useRef, useState } from "react";
import "./HomeHero2.scss";

import homebg from "/src/assets/home-bg.webp";
import Button from "../../../../components/button/Button";
import { ThemeContext } from "../../../../functions/themeContext";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const AnimatedWord = ({ text }) => (
  <div>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={letterVariants}
      >
        {char}
      </motion.span>
    ))}
  </div>
);

function HomeHero2() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent home2HeroContent">
          <div className="home2HeroTextContainer">
            <div className="home2HeroTitle">
              <h1>
                RANGKA
                <br />
                EMPAT
                <AnimatedWord text="STUDIO" />
              </h1>

              <div className="homeHeroBtnContainer">
                <Button
                  name="START YOUR PROJECT"
                  type="btnType1"
                  link="#"
                  arrow="rocket"
                />
                <Button
                  name="VIEW OUR WORK"
                  type={darkMode ? "btnType2" : "btnType2-light"}
                  link="#"
                  arrow="code"
                />
              </div>
            </div>

            <div>
              <h2>Custom Web Applications & Digital Solutions</h2>

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
            </div>
          </div>

          {/* Hero Cards Section */}
          <div
            className="sectionBackground home2HeroBackground"
            style={{ backgroundImage: `url(${homebg})` }}
          >
            <div className="sectionBackgroundBlur home2HeroBackgroundBlur">
              <div className="sectionContent">
                <h2>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    We Design.
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    We Deliver.
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    We Care.
                  </motion.span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero2;
