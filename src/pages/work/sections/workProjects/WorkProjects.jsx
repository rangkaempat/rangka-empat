import React, { useContext, useState } from "react";
import "./WorkProjects.scss";
import { ThemeContext } from "../../../../functions/themeContext";
import WorkCard from "../../../../components/workCard/WorkCard";
import { workCards } from "../../../../data/workCardData";
import mediaQuery from "../../../../functions/mediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer } from "../../../../functions/motionUtils";

function WorkProjects() {
  const { darkMode } = useContext(ThemeContext);
  const isDesktop = mediaQuery("(min-width: 1025px)");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL PROJECTS");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const filteredCards =
    selectedCategory === "ALL PROJECTS"
      ? workCards
      : workCards.filter((card) => card.category.includes(selectedCategory));

  const categories = [
    "ALL PROJECTS",
    "REBRANDING",
    "CUSTOM WEB APPS",
    "E-COMMERCE",
    "PRODUCT",
  ];

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent workProjectsSection">
          <nav className="workProjectsLeft">
            {isDesktop ? (
              <>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${
                      selectedCategory === category
                        ? "textBold active"
                        : "textLight"
                    } textL workProjectsButton`}
                    style={{
                      color: darkMode ? "#f2f2f2" : "#323232",
                      fill: darkMode ? "#f2f2f2" : "#323232",
                    }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </>
            ) : (
              <>
                {/* Menu */}

                <div>
                  <button
                    className="textBold textL workProjectsButton workProjectsMenuButton active"
                    style={{
                      color: darkMode ? "#f2f2f2" : "#323232",
                      fill: darkMode ? "#f2f2f2" : "#323232",
                    }}
                    onClick={toggleMenu}
                  >
                    {selectedCategory}
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                      </svg>
                    )}
                  </button>

                  {/* Menu Modal */}
                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        key="dropdown"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        {categories.map((category, i) => (
                          <motion.button
                            key={category}
                            className={`${
                              selectedCategory === category
                                ? "textBold"
                                : "textLight"
                            } textL workProjectsButton`}
                            style={{
                              color: darkMode ? "#f2f2f2" : "#323232",
                              fill: darkMode ? "#f2f2f2" : "#323232",
                            }}
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsOpen(false);
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {category}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </nav>

          <div className="workProjectsRight">
            <motion.div
              className="workProjectsCardWrapper"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              {filteredCards.map((card) => (
                <WorkCard key={card.id} {...card} workPage="True" />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkProjects;
