import React, { useContext } from "react";
import "./AboutOurProcess.scss";
import { ThemeContext } from "../../../../functions/themeContext";

import image1 from "/src/assets/processCard/process-discovery-&-strategy.webp";
import Button from "../../../../components/button/Button";
import ProcessCard from "../../../../components/processCard/ProcessCard";
import processCardData from "../../../../data/processCardData";

function AboutOurProcess() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent aboutOurProcessContent">
          <div className="aboutOurProcessTitle">
            <h2 className="textBold textXXXL">OUR 4-PHASE PROCESS</h2>
            <p className="textLight textS">
              We like to keep things simple, collaborative, and transparent.
            </p>
          </div>

          <div className="aboutOurProcessCardWrapper">
            {processCardData.map((item, index) => (
              <ProcessCard
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                features={item.features}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutOurProcess;
