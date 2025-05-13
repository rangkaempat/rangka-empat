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
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link className={type} to={link}>
        {name}
      </Link>
    </motion.div>
  );
}

export default Button;
