import React, { useContext } from "react";
import "./faq.scss";
import { ThemeContext } from "../../functions/themeContext";

function FAQ() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent faqContent">
          <div className="faqHalf">FAQ LEFT</div>
          <div className="faqHalf">FAQ RIGHT</div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
