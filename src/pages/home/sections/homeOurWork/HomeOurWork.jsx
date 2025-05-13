import React from "react";
import Button from "../../../../components/button/Button";
import "./HomeOurWork.scss";
import { Link } from "react-router";

function HomeOurWork() {
  return (
    <>
      <div className="sectionDarkGradient">
        <div className="sectionWrapper ourWorkWrapper">
          <div className="ourWorkTextContainer">
            <h2>Our Featured Work.</h2>
            <p>
              See what we've built for our amazing clients.
              <br />
              Every project is a unique story of collaboration, creativity, and
              code.
            </p>
          </div>
          <div className="ourWorkImageContainer">
            <div className="ourWorkImageWrapper">
              <Link className="ourWorkImage" to="#"></Link>
              <Link className="ourWorkClient" to="#">
                Client Name
              </Link>
            </div>
            <div className="ourWorkImageWrapper">
              <Link className="ourWorkImage" to="#"></Link>
              <Link className="ourWorkClient" to="#">
                Client Name
              </Link>
            </div>
            <div className="ourWorkImageWrapper">
              <Link className="ourWorkImage" to="#"></Link>
              <Link className="ourWorkClient" to="#">
                Client Name
              </Link>
            </div>
            <div className="ourWorkImageWrapper">
              <Link className="ourWorkImage" to="#"></Link>
              <Link className="ourWorkClient" to="#">
                Client Name
              </Link>
            </div>
            <div className="ourWorkImageWrapper">
              <Link className="ourWorkImage" to="#"></Link>
              <Link className="ourWorkClient" to="#">
                Client Name
              </Link>
            </div>
            <div className="ourWorkImageWrapper">
              <Link className="ourWorkImage" to="#"></Link>
              <Link className="ourWorkClient" to="#">
                Client Name
              </Link>
            </div>
          </div>
          <Button name="View All Projects" type="btnType2" link="#" />
        </div>
      </div>
    </>
  );
}

export default HomeOurWork;
