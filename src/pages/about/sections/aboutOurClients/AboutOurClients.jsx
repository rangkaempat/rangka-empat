import React, { useContext } from "react";
import "./AboutOurClients.scss";
import { ThemeContext } from "../../../../functions/themeContext";

import clientLogo1Light from "/src/assets/clientLogos/clientLogo1Light.webp";
import clientLogo2Light from "/src/assets/clientLogos/clientLogo2Light.webp";
import clientLogo3Light from "/src/assets/clientLogos/clientLogo3Light.webp";
import clientLogo4Light from "/src/assets/clientLogos/clientLogo4Light.webp";
import clientLogo5Light from "/src/assets/clientLogos/clientLogo5Light.webp";
import clientLogo6Light from "/src/assets/clientLogos/clientLogo6Light.webp";

import clientLogo1Dark from "/src/assets/clientLogos/clientLogo1Dark.webp";
import clientLogo2Dark from "/src/assets/clientLogos/clientLogo2Dark.webp";
import clientLogo3Dark from "/src/assets/clientLogos/clientLogo3Dark.webp";
import clientLogo4Dark from "/src/assets/clientLogos/clientLogo4Dark.webp";
import clientLogo5Dark from "/src/assets/clientLogos/clientLogo5Dark.webp";
import clientLogo6Dark from "/src/assets/clientLogos/clientLogo6Dark.webp";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";

const clientLogosDark = [
  clientLogo1Dark,
  clientLogo2Dark,
  clientLogo3Dark,
  clientLogo4Dark,
  clientLogo5Dark,
  clientLogo6Dark,
];
const clientLogosLight = [
  clientLogo1Light,
  clientLogo2Light,
  clientLogo3Light,
  clientLogo4Light,
  clientLogo5Light,
  clientLogo6Light,
];

function AboutOurClients() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">
            <motion.div
              className="abourOurClientsText"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.span
                className="textLight textM"
                variants={fadeInWithEase}
              >
                • Our Clientele •
              </motion.span>

              <motion.h2 className="textBold textXXL" variants={fadeInWithEase}>
                TRUSTED BRANDS ACROSS INDUSTRIES
              </motion.h2>
              <motion.p className="textLight textS" variants={fadeInWithEase}>
                From ambitious startups to established enterprises, we’ve
                partnered with a diverse range of companies. Our clients span
                industries and sectors — each trusting us to deliver impactful
                branding, website designs and development, and digital solutions
                and systems tailored to their goals and requirements.
              </motion.p>
            </motion.div>

            <motion.div
              className="aboutOurClientsLogoWrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {(darkMode ? clientLogosDark : clientLogosLight).map(
                (logo, index) => (
                  <motion.img
                    key={index}
                    className="clientLogo"
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    variants={fadeInWithEase}
                  />
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutOurClients;
