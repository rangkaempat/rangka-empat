import React from "react";
import { Link } from "react-router";

import "./HomeOurWork.scss";
import Button from "../../../../components/button/Button";
import WorkCard from "../../../../components/workCards/WorkCard";
import { workCardItems } from "../../../../data/workCardData";

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
            {workCardItems.slice(0, 3).map((item_) => (
              <WorkCard
                key={item_.id}
                image={item_.image}
                client={item_.client}
              />
            ))}
          </div>
          <Button name="View All Projects" type="btnType2" link="#" />
        </div>
      </div>
    </>
  );
}

export default HomeOurWork;
