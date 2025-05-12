// Home.js

import { React, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "../../index.scss";
import "./Home.scss";
export default function Home() {
  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to Rangka Empat Studio</h1>
        <p>Your digital partner for innovative solutions.</p>

        {/* Link to Hero Page */}
        <Link to="/hero">Go to Hero Page</Link>
      </div>

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
    </>
  );
}
