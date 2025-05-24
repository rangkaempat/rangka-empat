import React, { useContext } from "react";
import "./HomeHero2.scss";

import homebg from "/src/assets/home-bg.webp";
import Button from "../../../../components/button/Button";
import { ThemeContext } from "../../../../functions/themeContext";
import { motion } from "framer-motion";

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
                <br />
                <span>STUDIO</span>
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
              We Design.
              <br />
              <span>We Code.</span>
              <br />
              We Deliver.
              <br />
              <span>We Care.</span>
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
