import React from "react";
import Button from "../../../../components/button/Button";
import "./HomeOurPricing.scss";
import { Link } from "react-router";

function HomeOurPricing() {
  return (
    <>
      <div className="sectionDarkGradient homeOurPricingGradient">
        <div className="sectionWrapper homeOurPricingWrapper">
          <div className="homeOurPricingTextContainer">
            <h2>Our Pricing.</h2>
          </div>

          <h4>Web Design & Development Packages</h4>

          <div className="homeOurPricesCardContainer">
            <div className="homeOurPricesCardWrapper">
              <h4>Freelance</h4>
              <h3>RM2,000</h3>
              <Button
                name="Book a Free Consultation"
                type="btnType2"
                link="#"
              />

              <ul>
                <li>Custom Website Design</li>
                <li>3-5 Pages</li>
                <li>1 Revision</li>
                <li>Basic SEO Setup</li>
                <li>Basic Motion & Animations</li>
              </ul>

              <Link to="#">Learn More</Link>
            </div>
            <div className="homeOurPricesCardWrapper">
              <h4>Business</h4>
              <h3>RM3,500</h3>
              <Button
                name="Book a Free Consultation"
                type="btnType2"
                link="#"
              />

              <ul>
                <li>Custom Website Design</li>
                <li>3-5 Pages</li>
                <li>1 Revision</li>
                <li>Basic SEO Setup</li>
                <li>Basic Motion & Animations</li>
              </ul>

              <Link to="#">Learn More</Link>
            </div>
            <div className="homeOurPricesCardWrapper">
              <h4>Enterprise</h4>
              <h3>RM5,000</h3>
              <Button
                name="Book a Free Consultation"
                type="btnType2"
                link="#"
              />

              <ul>
                <li>Custom Website Design</li>
                <li>3-5 Pages</li>
                <li>1 Revision</li>
                <li>Basic SEO Setup</li>
                <li>Basic Motion & Animations</li>
              </ul>

              <Link to="#">Learn More</Link>
            </div>
          </div>
          <Button name="View All Prices" type="btnType2" link="#" />
        </div>
      </div>
    </>
  );
}

export default HomeOurPricing;
