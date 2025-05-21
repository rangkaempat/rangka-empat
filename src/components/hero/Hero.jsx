import React from "react";
import "./Hero.scss";
import { Link, Outlet } from "react-router";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

function Hero({ title, titleSpan, desc, background }) {
  // Hero Component for Pages
  // Titles = title + titleSpan
  // Description = desc
  // Background Image = background

  // Example Use Case
  // <Hero
  //     title="About"
  //     titleSpan="Us."
  //     desc="We’re Rangka Empat Studio – a passionate team of creators, developers, and problem-solvers, united by a shared love for crafting meaningful digital experiences."
  //     background={homeHeroBg2}
  //   />
  return (
    <>
      <section
        className="sectionBackground heroBackground"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="sectionBackgroundBlur heroBackgroundGradient">
          <div className="sectionWrapper heroWrapper">
            <div className="sectionContent heroContent">
              {/* Hero Title */}
              <motion.div
                className="heroTitle"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h1 variants={fadeInWithEase}>
                  {title} <span>{titleSpan}</span>
                </motion.h1>
                <motion.p variants={fadeInWithEase}>{desc}</motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
