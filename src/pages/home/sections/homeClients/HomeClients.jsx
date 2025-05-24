import React, { useContext } from "react";
import "./HomeClients.scss";
import { ThemeContext } from "../../../../functions/themeContext";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  infiniteLoop,
  staggerContainer,
} from "../../../../functions/motionUtils";
import { workCardItems } from "../../../../data/workCardData";
import clientLogo1Light from "/src/assets/clientLogo1Light.webp";
import clientLogo2Light from "/src/assets/clientLogo2Light.webp";
import clientLogo3Light from "/src/assets/clientLogo3Light.webp";

import clientLogo1Dark from "/src/assets/clientLogo1Dark.webp";
import clientLogo2Dark from "/src/assets/clientLogo2Dark.webp";
import clientLogo3Dark from "/src/assets/clientLogo3Dark.webp";
const clientLogosDark = [clientLogo1Dark, clientLogo2Dark, clientLogo3Dark];
const clientLogosLight = [clientLogo1Light, clientLogo2Light, clientLogo3Light];

function HomeClients() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionBackgroundBlurt">
          <div className="sectionWrapper">
            <div className="sectionContent">
              <motion.div
                className="sectionContent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h2
                  className="homeClientsTitle"
                  variants={fadeInWithEase}
                >
                  <span>A Malaysian-based </span>Web & Digital Solutions Studio
                  <span> for Malaysia's Boldest Brands</span>
                </motion.h2>

                <motion.div
                  className={
                    darkMode
                      ? "clientListContainer clientListContainerDark"
                      : "clientListContainer"
                  }
                  variants={fadeInWithEase}
                >
                  {darkMode
                    ? [...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="clientListWrapper"
                          variants={infiniteLoop}
                          animate="animate"
                        >
                          {clientLogosDark
                            .concat(clientLogosDark)
                            .map((logo, index) => (
                              <motion.img
                                key={`${i}-${index}`}
                                className="clientLogo"
                                src={logo}
                                alt="Client Logo"
                                whileHover={{ y: -10, opacity: 1 }}
                                whileTap={{ y: -10, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                              />
                            ))}
                        </motion.div>
                      ))
                    : [...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="clientListWrapper"
                          variants={infiniteLoop}
                          animate="animate"
                        >
                          {clientLogosLight
                            .concat(clientLogosLight)
                            .map((logo, index) => (
                              <motion.img
                                key={`${i}-${index}`}
                                className="clientLogo"
                                src={logo}
                                alt="Client Logo"
                                whileHover={{ y: -10, opacity: 1 }}
                                whileTap={{ y: -10, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                              />
                            ))}
                        </motion.div>
                      ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeClients;
