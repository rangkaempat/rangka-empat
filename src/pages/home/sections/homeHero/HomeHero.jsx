import React, { useContext } from "react";
import "./HomeHero.scss";
import { Link, Outlet } from "react-router";
import Button from "../../../../components/button/Button";
import homeHeroBg from "/src/assets/home-hero-bg.webp";
import homeHeroBg2 from "/src/assets/home-hero-bg-2.webp";
import homeHeroBg3 from "/src/assets/home-hero-bg-3.webp";
import homeHeroBg4 from "/src/assets/home-hero-bg-4.webp";
import { motion } from "framer-motion";

import clientLogo1Light from "/src/assets/clientLogo1Light.webp";
import clientLogo2Light from "/src/assets/clientLogo2Light.webp";
import clientLogo3Light from "/src/assets/clientLogo3Light.webp";

import clientLogo1Dark from "/src/assets/clientLogo1Dark.webp";
import clientLogo2Dark from "/src/assets/clientLogo2Dark.webp";
import clientLogo3Dark from "/src/assets/clientLogo3Dark.webp";

import phone1 from "/src/assets/phone1.webp";
import phone2 from "/src/assets/phone2.webp";
import phone3 from "/src/assets/phone3.webp";
import phone4 from "/src/assets/phone4.webp";

import {
  fadeInUp,
  fadeInWithEase,
  infiniteLoop,
  staggerContainer,
} from "../../../../functions/motionUtils";
import { workCardItems } from "../../../../data/workCardData";
import { ThemeContext } from "../../../../functions/themeContext";

const clientLogosDark = [clientLogo1Dark, clientLogo2Dark, clientLogo3Dark];
const clientLogosLight = [clientLogo1Light, clientLogo2Light, clientLogo3Light];

export default function HomeHero() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section
        className="sectionBackground homeHeroBackground"
        style={{ backgroundImage: `url(${homeHeroBg4})` }}
      >
        <div className="sectionBackgroundBlur homeHeroBackgroundGradient">
          <div className="sectionWrapper homeHeroWrapper">
            <div className="sectionContent homeHeroContent">
              {/* Hero Title */}
              <motion.div
                className="homeHeroTitle"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h1 variants={fadeInWithEase}>
                  We Design. <span>We Code.</span>
                  <br />
                  We Deliver. <span>We Care.</span>
                </motion.h1>
                <motion.p variants={fadeInWithEase}>
                  Crafting custom, beautiful, high-converting SEO-Optimized
                  digital experiences that connect you with your audience.
                </motion.p>

                {/* Hero Buttons */}
                <div className="homeHeroBtnContainer">
                  <Button
                    name="Start Your Project"
                    type="btnType1"
                    link="#"
                    arrow={true}
                  />
                  <Button
                    name="View Our Work"
                    type="btnType2"
                    link="#"
                    arrow={true}
                  />
                </div>
              </motion.div>

              <motion.div
                className="homeHeroImageContainer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                whileHover={{ y: -10 }}
                whileTap={{ y: -10 }}
              >
                <motion.img
                  src={phone1}
                  alt="Phone 1"
                  variants={fadeInWithEase}
                />
                <motion.img
                  src={phone2}
                  alt="Phone 2"
                  className="homeHeroImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                />
                <motion.img
                  src={phone3}
                  alt="Phone 3"
                  className="homeHeroImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    transition: { delay: 0.2 },
                  }}
                />
                <motion.img
                  src={phone4}
                  alt="Phone 4"
                  className="homeHeroImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    transition: { delay: 0.4 },
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
                <motion.h2 className="homeHeroTitle2" variants={fadeInWithEase}>
                  <span>Trusted</span> by Our Clients.
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

      <Outlet />
    </>
  );
}
