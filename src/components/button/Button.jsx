import React from "react";
import { Link } from "react-router";
import "./Button.scss";
import { motion } from "framer-motion";

function Button({ name, type, link }) {
  return (
    // type = btnType1, btnType2
    // link = page address
    // name = button text

    <motion.div
      className="btnDiv"
      initial={{ opacity: 0, scale: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link className={type} to={link}>
        {name}
      </Link>
    </motion.div>
  );
}

export default Button;
