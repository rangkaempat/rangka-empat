import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

import aboutHeroBg from "/src/assets/about-bg.webp";

function About() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    document.title = "Rangka Empat Studio | Who We Are.";
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        title="About"
        titleSpan="Us."
        desc="We’re Rangka Empat Studio – a passionate team of creators, developers, and problem-solvers, united by a shared love for crafting meaningful digital experiences."
        background={aboutHeroBg}
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">About Us Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
