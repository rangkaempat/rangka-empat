import React from "react";
import { motion } from "framer-motion";
import "./Button.scss";

function ButtonForm({ name, type, arrow }) {
  return (
    <motion.div
      className="btnDiv"
      initial={{ opacity: 0, scale: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <button className={type} type="submit">
        {name}
        {arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={type}
            viewBox="0 0 256 256"
          >
            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
          </svg>
        )}
      </button>
    </motion.div>
  );
}

export default ButtonForm;
