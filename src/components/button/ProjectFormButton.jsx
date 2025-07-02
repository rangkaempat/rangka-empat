import React, { useContext } from "react";
import "./Button.scss";
import { motion } from "framer-motion";
import { ThemeContext } from "../../functions/themeContext";

function FormButton({ name, type, onClick }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      className="btnDiv"
      initial={{ opacity: 0, scale: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <button
        className={`btn ${type}`}
        onClick={onClick}
        type={name === "Submit" ? "submit" : "button"}
      >
        {name}
      </button>
    </motion.div>
  );
}

export default FormButton;
