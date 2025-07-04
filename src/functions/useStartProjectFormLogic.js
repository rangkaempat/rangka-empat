import { useState } from "react";
import startProjectFormData from "../data/startProjectFormData";

/**
 * Custom hook to encapsulate all logic for the Start Your Project form.
 * Handles navigation, user input, step tracking, and submission.
 */

export default function useStartProjectFormLogic() {
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
    console.log("Final form submission", formResponses);
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

  return {
    currentSectionIndex,
    currentQuestionIndex,
    formResponses,
    setFormResponses,
    handleContinue,
    handleBack,
    handleSubmit,
    handleAnswer,
    totalSteps,
    currentStep,
  };
}
