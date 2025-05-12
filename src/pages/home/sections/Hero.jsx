import React from "react";
import "./Hero.scss";
import { Link, Outlet } from "react-router";
import Button from "../../../components/button/Button";
import homeHeroBg from "/src/assets/home-hero-bg.webp";

export default function Hero() {
  return (
    <>
      <section
        className="heroBackground"
        style={{ backgroundImage: `url(${homeHeroBg})` }}
      >
        <div className="bgBlur">
          <div className="heroContainer">
            {/* Hero Title */}
            <div className="heroTitle">
              <h1>
                We Design. <span>We Code.</span>
              </h1>
              <h1>
                We Deliver. <span>We Care.</span>
              </h1>
            </div>

            {/* Hero Description */}
            <p>
              Crafting custom, beautiful, high-converting SEO-Optimized digital
              experiences that connect brands with their audiences.
            </p>

            {/* Hero Buttons */}
            <div className="heroBtnContainer">
              <Button name="Start Your Project" type="btnType1" link="#" />
              <Button name="View Our Work" type="btnType2" link="#" />
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}
