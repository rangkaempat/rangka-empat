import React, { useContext } from "react";
import "./Hero.scss";
import { Link, Outlet } from "react-router";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import { ThemeContext } from "../../functions/themeContext";
import Button from "../button/Button";

function Hero({ title1, title2, subTitle, button, link }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent heroContent">
          <div className="heroSectionContainer">
            <div className="heroTitle">
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
                    {title1}
                  </motion.div>
                </div>

                <div className="textOverflow">
                  <motion.div
                    initial={{ y: 200, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {title2}
                  </motion.div>
                </div>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="textLight textM">{subTitle}</h2>
              </motion.div>
            </div>

            <Button
              name={button}
              type={darkMode ? "btnType5-dark" : "btnType5"}
              link={link}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
