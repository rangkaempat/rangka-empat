import React, { useContext } from "react";
import "./AboutWhoWeAre.scss";
import { ThemeContext } from "../../../../functions/themeContext";

import image1 from "/src/assets/aboutImages/aboutImage1.webp";
import image2 from "/src/assets/aboutImages/aboutImage2.webp";

function AboutWhoWeAre() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent aboutWhoWeAreContent">
          <div className="aboutWhoWeAreText">
            <h2 className="textBold textXXXL">WHO WE ARE:</h2>
            <p className="textLight textM">
              <span className="textBold">We’re Rangka Empat Studio</span> — a
              small, close-knit team of designers, developers, and
              problem-solvers who genuinely love what we do.
              <br />
              <br />
              We’re friends who grew up together, studied together, and shared a
              dream{" "}
              <span className="textBold">
                to build something meaningful with people we trust and respect.
              </span>
              <br />
              <br />
              That dream turned into Rangka Empat Studio —{" "}
              <span className="textBold">
                a creative branding, web design and web development studio
              </span>{" "}
              focused on helping brands grow through thoughtful design, smart
              development, and real human connection.
            </p>
          </div>

          <div className="aboutWhoWeAreCarouselWrapper">
            <img src={image1} alt="About Us Image 1" />
            <img src={image2} alt="About Us Image 2" />
            <img src={image1} alt="About Us Image 1" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutWhoWeAre;
