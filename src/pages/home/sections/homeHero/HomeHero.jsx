import React from "react";
import "./HomeHero.scss";
import { Link, Outlet } from "react-router";
import Button from "../../../../components/button/Button";
import homeHeroBg from "/src/assets/home-hero-bg.webp";
import { motion } from "framer-motion";

import clientLogo1 from "/src/assets/clientLogo1.webp";
import clientLogo2 from "/src/assets/clientLogo2.webp";
import clientLogo3 from "/src/assets/clientLogo3.webp";
import {
  fadeInUp,
  fadeInWithEase,
  infiniteLoop,
  staggerContainer,
} from "../../../../functions/motionUtils";

const clientLogos = [clientLogo1, clientLogo2, clientLogo3];

export default function HomeHero() {
  return (
    <>
      <section
        className="sectionBackground"
        style={{ backgroundImage: `url(${homeHeroBg})` }}
      >
        <div className="sectionBackgroundBlur">
          <div className="sectionWrapper homeHeroWrapper">
            <div className="sectionContent">
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
                  digital experiences that connect brands with their audiences.
                </motion.p>
              </motion.div>

              {/* Hero Description */}

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

              {/* Clientele Section */}
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
                  className="clientListContainer"
                  variants={fadeInWithEase}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="clientListWrapper"
                      variants={infiniteLoop}
                      animate="animate"
                    >
                      {clientLogos.concat(clientLogos).map((logo, index) => (
                        <motion.img
                          key={`${i}-${index}`}
                          className="clientLogo"
                          src={logo}
                          alt="Client Logo"
                          whileHover={{ y: -10 }}
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
