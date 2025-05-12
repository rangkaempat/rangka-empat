// Home.js

import { React, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "../../index.scss";
import "./Home.scss";
import Hero from "./Hero";
  
export default function Home() {

  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <div className="navbarWrapper">
        <div className="mainWrapper">
          <div className="navbar">
            <img
              className="navlogo"
              src="././src/assets/rangka-empat-studio-logo.webp"
            />
            <div className="navlinkContainer">
              <div className="navlink">About</div>
              <div className="navlink">Services</div>
              <div className="navlink">Our Work</div>
            </div>
            <button className="navButton">Start Your Project</button>
          </div>
        </div>
      </div>

      <Hero />
    </>
  );
}
