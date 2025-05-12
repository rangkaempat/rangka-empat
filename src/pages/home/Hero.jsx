// Hero.js

import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>We Design. <span>We Code.</span></h1>
        <h2>We Deliver. <span>We Care.</span></h2>
        <p>
          Crafting custom, beautiful, high-converting SEO-Optimized digital experiences that connect brands with their audiences.
        </p>
        <div className="buttons">
          <button>Let's Start Your Project</button>
          <button>View Our Work</button>
        </div>
      </div>
    </section>
  );
}
