import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import background from "/src/assets/services-bg.webp";
import { ThemeContext } from "../../functions/themeContext";

function Services() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    document.title = "Rangka Empat Studio | Who We Are.";
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        title="A Plethora of Services to"
        titleSpan="Elevate Your Entire Digital Presence"
        desc="Built on four core pillars, our offerings are tailored to help your business stand out, scale up, and succeed online. Whether you're building a brand from scratch or refining your digital strategy, we bring creativity, strategy, and technical expertise together to make your vision a reality."
        background={background}
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">Services Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
