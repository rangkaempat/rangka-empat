import React, { useContext } from "react";
import "./AboutOurProcess.scss";
import { ThemeContext } from "../../../../functions/themeContext";

function AboutOurProcess() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">Our Process Section</div>
        </div>
      </section>
    </>
  );
}

export default AboutOurProcess;
