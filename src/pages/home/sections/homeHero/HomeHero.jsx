import { useContext } from "react";
import "./HomeHero.scss";
import Button from "../../../../components/button/Button";
import { ThemeContext } from "../../../../functions/themeContext";
import mediaQuery from "../../../../functions/mediaQuery";
import { motion } from "framer-motion";
import { workCards } from "../../../../data/workCardData";
import WorkCard from "../../../../components/workCard/WorkCard";
import Tagline from "../../../../components/tagline/Tagline";

function HomeHero() {
  const { darkMode } = useContext(ThemeContext);
  const isDesktop = mediaQuery("(min-width: 1025px)");

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
              <WorkCard {...workCards[0]} />
              <WorkCard {...workCards[1]} />
            </motion.div>

            {isDesktop && (
              <>
                <hr />

                <Tagline />
              </>
            )}
          </motion.div>

          <motion.div
            className="homeHeroSectionContainer right"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isDesktop && (
              <Button
                name="VIEW OUR WORK"
                type={darkMode ? "btnType5-dark" : "btnType5"}
                link="/work"
                arrow="arrow"
              />
            )}

            <div className="workCardWrapper">
              <WorkCard {...workCards[2]} />
              <WorkCard {...workCards[3]} />
            </div>

            <div className="workCardWrapper">
              <WorkCard {...workCards[4]} />
              <WorkCard {...workCards[5]} />
            </div>

            {!isDesktop && (
              <Button
                name="VIEW OUR WORK"
                type={darkMode ? "btnType5-dark" : "btnType5"}
                link="/work"
                arrow="arrow"
              />
            )}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default HomeHero;
