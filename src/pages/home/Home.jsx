import { React, useContext, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "../../index.scss";
import HomeHero from "./sections/homeHero/HomeHero";
import Navbar from "../../components/navbar/Navbar";
import HomeWork from "./sections/homeWork/HomeWork";
import HomePricing from "./sections/homePricing/HomePricing";
import HomeCTA from "./sections/homeCTA/HomeCTA";
import HomeForm from "./sections/homeForm/HomeForm";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <Navbar />
      <HomeHero />

      {/* Check index.scss for all Standardized Section Styles, maybe we can move it to a separate dedicated file */}

      {/* Example Standardized Section with Light Background*/}
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">Why Choose Us Section</div>
        </div>
      </section>

      {/* Example Standardized Section with Light Background*/}
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">What We Offer Section</div>
        </div>
      </section>

      <HomeWork />
      <HomePricing />

      {/* Example Standardized Section With Image Background */}
      <section className="sectionBackground">
        <div className="sectionBackgroundBlur">
          <div className="sectionWrapper">
            <div className="sectionContent">Who We Are Section</div>
          </div>
        </div>
      </section>

      <HomeCTA />
      <HomeForm />
      <Footer />
    </>
  );
}
