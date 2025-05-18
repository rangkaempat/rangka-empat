import React from "react";
import { Link } from "react-router";
import "./Button.scss";
import { motion } from "framer-motion";

function Button({ name, type, link, onClick, arrow }) {
  return (
    // type = btnType1, btnType2, btnType3
    // link = page address
    // name = button text
    // arrow = if true, show arrow
    // example: <Button name="Contact Us" type="btnType1" link="/contact" arrow={true} />

    <motion.div
      className="btnDiv"
      initial={{ opacity: 0, scale: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link className={type} to={link} onClick={onClick}>
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
      </Link>
    </motion.div>
  );
}

export default Button;
