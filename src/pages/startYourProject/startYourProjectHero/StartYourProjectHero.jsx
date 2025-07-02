import React, { useContext, useState } from "react";
import "./StartYourProjectHero.scss";
import { ThemeContext } from "../../../functions/themeContext";
import FormButton from "../../../components/button/ProjectFormButton";
import background from "/src/assets/start-your-project-background.webp";
import startProjectFormData from "../../../data/startProjectFormData";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInWithEase,
  fadeSlide,
  staggerContainer,
} from "../../../functions/motionUtils";

// TO ADD:
// 1. Save progress to localStorage
// 2. Add "Review" sreen before submission
// 3. Use proper Labels
// 4. Keyboard navigations
// 5. Input Validation
// 6. Submission Handling

function StartYourProjectHero() {
  const { darkMode } = useContext(ThemeContext);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formResponses, setFormResponses] = useState({});

  //   Continue Button Logic Handling
  const handleContinue = () => {
    if (currentSectionIndex === 0) {
      const currentSection = startProjectFormData[0];
      if (currentQuestionIndex < currentSection.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        return;
      }
    }

    // Move to next section
    if (currentSectionIndex < startProjectFormData.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0); // Reset for section 0 reuse
    }
  };

  //   Back Button Logic Handling
  const handleBack = () => {
    if (currentSectionIndex === 0 && currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      return;
    }

    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      setCurrentQuestionIndex(
        startProjectFormData[currentSectionIndex - 1].questions.length - 1
      );
    }
  };

  //   Submit Button Logic Handling
  const handleSubmit = () => {
    console.log("✅ Final form submission", formResponses);
    // TODO: Send data to backend or navigate to thank you page
  };

  //   User Input Collection
  const handleAnswer = (questionId, answer) => {
    setFormResponses((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  //   Progress Indicator Logic
  const totalSteps =
    startProjectFormData[0].questions.length +
    (startProjectFormData.length - 1);

  const currentStep =
    currentSectionIndex === 0
      ? currentQuestionIndex
      : startProjectFormData[0].questions.length + (currentSectionIndex - 1);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent startYourProjectContent">
          {/* Form */}
          <form className="startYourProjectForm" id="projectForm">
            <h1 className="textXXXL">START YOUR PROJECT</h1>
            <br />
            <p className="textXS">
              We’re just a few clicks away from getting your project started.
            </p>
            <br />
            <p className="textLight formDescription">
              This project brief helps us and you get aligned before we start
              your project. It lets us understand what you need, gather
              requirements and set clear goals so we can deliver a website that
              meets your vision and objectives.
            </p>
            <br />
            <br />
            {/* Section Title Navigation */}
            <div className="formSection">
              {startProjectFormData.map((section, index) => (
                <h2
                  key={index}
                  className={
                    index === currentSectionIndex
                      ? "textBold textXS"
                      : "textLight textXS"
                  }
                >
                  <span className="textXXL">{`0${index + 1}`}</span>
                  <br />
                  {section.title}
                </h2>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="formStepDots">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <span
                  key={index}
                  className={`stepDot ${index === currentStep ? "active" : ""}`}
                ></span>
              ))}
            </div>

            {/* Question(s) Display */}
            <AnimatePresence mode="wait">
              {startProjectFormData[currentSectionIndex].questions.map(
                (question, index) => {
                  // Show only the current question if in Section 0
                  if (
                    currentSectionIndex === 0 &&
                    index !== currentQuestionIndex
                  )
                    return null;

                  const value = formResponses[question.id] || "";

                  return (
                    <motion.div
                      key={question.id}
                      className="formQuestionBlock"
                      variants={fadeSlide}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="formQuestion">
                        <h4 className="textBold textM">{question.question}</h4>
                        {question.subtext && (
                          <p className="textLight">{question.subtext}</p>
                        )}
                      </div>

                      <div className="formAnswerWrapper">
                        {(() => {
                          if (question.type === "checkbox") {
                            return question.options.map((option, i) => {
                              const isSelected = (value || []).includes(option);
                              const isOther = option
                                .toLowerCase()
                                .includes("other");
                              const optionId = `${question.id}_${i}`;

                              return (
                                <div key={i}>
                                  <input
                                    type="checkbox"
                                    id={optionId}
                                    name={question.id}
                                    checked={isSelected}
                                    onChange={() => {
                                      const existing = value || [];
                                      const updated = isSelected
                                        ? existing.filter(
                                            (val) => val !== option
                                          )
                                        : [...existing, option];

                                      handleAnswer(question.id, updated);
                                    }}
                                    className="sr-only"
                                  />

                                  <label
                                    htmlFor={optionId}
                                    className={`formAnswer ${
                                      isSelected ? "selected" : ""
                                    }`}
                                  >
                                    <div className="tickbox">
                                      {isSelected && (
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 256 256"
                                        >
                                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                                        </svg>
                                      )}
                                    </div>
                                    {option}
                                  </label>

                                  {isOther && isSelected && (
                                    <input
                                      type="text"
                                      id={`${question.id}_other`}
                                      name={`${question.id}_other`}
                                      className="textInput"
                                      placeholder="Please specify"
                                      value={
                                        formResponses[`${question.id}_other`] ||
                                        ""
                                      }
                                      onChange={(e) =>
                                        setFormResponses((prev) => ({
                                          ...prev,
                                          [`${question.id}_other`]:
                                            e.target.value,
                                        }))
                                      }
                                    />
                                  )}
                                </div>
                              );
                            });
                          }

                          if (
                            question.type === "text" ||
                            question.type === "email" ||
                            question.type === "tel"
                          ) {
                            return (
                              <input
                                id={question.id}
                                name={question.id}
                                type={question.type}
                                className="textInput"
                                placeholder={question.placeholder || ""}
                                value={value}
                                onChange={(e) =>
                                  handleAnswer(question.id, e.target.value)
                                }
                              />
                            );
                          }

                          if (question.type === "textarea") {
                            return (
                              <>
                                {question.subfields && (
                                  <ul className="subfieldList textLight textXS">
                                    {question.subfields.map((sub, i) => (
                                      <li key={i}>• {sub}</li>
                                    ))}
                                  </ul>
                                )}
                                <textarea
                                  id={question.id}
                                  name={question.id}
                                  className="textArea"
                                  placeholder={question.placeholder || ""}
                                  value={value}
                                  onChange={(e) =>
                                    handleAnswer(question.id, e.target.value)
                                  }
                                />
                              </>
                            );
                          }

                          return null;
                        })()}
                      </div>
                    </motion.div>
                  );
                }
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Form Navigation Button */}
        <div
          className={
            darkMode ? "formButtonContainer dark" : "formButtonContainer"
          }
        >
          {/* Show Back Button */}
          {!(currentSectionIndex === 0 && currentQuestionIndex === 0) && (
            <FormButton
              name="Back"
              type={darkMode ? "btnType2" : "btnType2-light"}
              onClick={handleBack}
            />
          )}

          {/* Show Continue or Submit depending on the position */}
          {currentSectionIndex === startProjectFormData.length - 1 ? (
            <FormButton
              name="Submit"
              type={darkMode ? "btnType1" : "btnType1-light"}
              onClick={handleSubmit}
            />
          ) : (
            <FormButton
              name="Continue"
              type={darkMode ? "btnType1" : "btnType1-light"}
              onClick={handleContinue}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default StartYourProjectHero;
