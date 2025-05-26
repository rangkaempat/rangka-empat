import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import background from "/src/assets/about-bg-2.webp";
import { ThemeContext } from "../../functions/themeContext";
import Navbar2 from "../../components/navbar2/Navbar2";
import Footer2 from "../../components/footer2/Footer2";

function About() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    document.title = "Rangka Empat Studio | Who We Are.";
  }, []);

  return (
    <>
      <Navbar2 />
      <Hero
        title="Turning Coffee & Conversations into"
        titleSpan="Ideas That Move"
        desc="We’re Rangka Empat Studio – a passionate team of creators, developers, and problem-solvers, united by a shared love for crafting meaningful digital experiences."
        background={background}
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">About Us Section</div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}

export default About;
