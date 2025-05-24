import React, { useContext } from "react";
import "./HomeHero2.scss";

import homebg from "/src/assets/home-bg.webp";
import Button from "../../../../components/button/Button";
import { ThemeContext } from "../../../../functions/themeContext";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
                  name="Start Your Project"
                  type="btnType1"
                  link="#"
                  arrow={true}
                />
                <Button
                  name="View Our Work"
                  type={darkMode ? "btnType2" : "btnType2-light"}
                  link="#"
                  arrow={true}
                />
              </div>
            </div>

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
          <div
            className="sectionBackground home2HeroBackground"
            style={{ backgroundImage: `url(${homebg})` }}
          >
            <div className="sectionBackgroundBlur"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero2;
