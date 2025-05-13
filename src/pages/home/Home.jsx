import { React, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "../../index.scss";
import Hero from "./sections/Hero";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* Check index.scss for all Standardized Section Styles, maybe we can move it to a separate dedicated file */}
      {/* Example Standardized Section With Image Background */}
      <div className="sectionBackground">
        <div className="sectionBackgroundBlur">
          <div className="sectionContainer">Who We Are Section</div>
        </div>
      </div>

      {/* Example Standardized Section with Light Background*/}
      <div className="sectionLight">
        <div className="sectionWrapper">What We Offer Section</div>
      </div>

      {/* Example Standardized Section with Dark Background*/}
      <div className="sectionDark">
        <div className="sectionWrapper">Our Work Section</div>
      </div>
    </>
  );
}
