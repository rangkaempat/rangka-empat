import React from "react";
import "./Hero.scss";
import { Link, Outlet } from "react-router";
import Button from "../../../components/button/Button";
import homeHeroBg from "/src/assets/home-hero-bg.webp";
import { motion } from "framer-motion";

import clientLogo1 from "/src/assets/clientLogo1.webp";
import clientLogo2 from "/src/assets/clientLogo2.webp";
import clientLogo3 from "/src/assets/clientLogo3.webp";

const clientLogos = [clientLogo1, clientLogo2, clientLogo3];

export default function Hero() {
  return (
    <>
      <section
        className="sectionBackground"
        style={{ backgroundImage: `url(${homeHeroBg})` }}
      >
        <div className="sectionBackgroundBlur">
          <div className="sectionContainer">
            {/* Hero Title */}
            <div className="heroTitle">
              <h1>
                We Design. <span>We Code.</span>
                <br />
                We Deliver. <span>We Care.</span>
              </h1>
            </div>

            {/* Hero Description */}
            <p>
              Crafting custom, beautiful, high-converting SEO-Optimized digital
              experiences that connect brands with their audiences.
            </p>

            {/* Hero Buttons */}
            <div className="heroBtnContainer">
              <Button name="Start Your Project" type="btnType1" link="#" />
              <Button name="View Our Work" type="btnType2" link="#" />
            </div>

            {/* Clientele Section */}
            <h2 className="heroTitle2">
              <span>Trusted</span> by Our Clients.
            </h2>

            <div className="clientListContainer">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="clientListWrapper"
                  initial={{ x: 0 }}
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
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
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}
