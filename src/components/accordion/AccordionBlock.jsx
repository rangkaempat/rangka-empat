import React, { useState } from "react";
import "./AccordionBlock.scss";
import { ArrowCaretDown } from "../../data/Icons";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
export function AccordionBlock({ title, children, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordionBlock">
      <div className="accordionHeader" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <ArrowCaretDown darkMode={darkMode} isOpen={isOpen} />{" "}
      </div>
      {isOpen && <div className="accordionContent">{children}</div>}
    </div>
  );
}
