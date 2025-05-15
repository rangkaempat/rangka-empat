import { React, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "../../index.scss";
import HomeHero from "./sections/homeHero/HomeHero";
import Navbar from "../../components/navbar/Navbar";
import HomeWork from "./sections/homeWork/HomeWork";
import HomePricing from "./sections/homePricing/HomePricing";

export default function Home() {
  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <Navbar />
      <HomeHero />

      {/* Check index.scss for all Standardized Section Styles, maybe we can move it to a separate dedicated file */}
      {/* Example Standardized Section With Image Background */}
      <div className="sectionBackground">
        <div className="sectionBackgroundBlur">
          <div className="sectionWrapper">
            <div className="sectionContent">Who We Are Section</div>
          </div>
        </div>
      </div>

      {/* Example Standardized Section with Light Background*/}
      <div className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">What We Offer Section</div>
        </div>
      </div>

      {/* Example Standardized Section with Dark Background*/}
      {/* <div className="sectionDark">
        <div className="sectionWrapper">Our Work Section</div>
      </div> */}

      <HomeWork />
      <HomePricing />
    </>
  );
}
