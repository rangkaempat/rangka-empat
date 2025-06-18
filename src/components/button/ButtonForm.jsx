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
      <button className={`btn ${type}`} type="submit">
        {name}
        {arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"></path>
          </svg>
        )}
      </button>
    </motion.div>
  );
}

export default ButtonForm;
