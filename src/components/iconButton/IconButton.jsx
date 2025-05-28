import { motion } from "framer-motion";
import React from "react";
import "./IconButton.scss";
import { Link } from "react-router";

function IconButton({ label, icon, onClick, to, variants }) {
  const content = (
    <motion.div
      onClick={onClick}
      className="navButton"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h6>{label}</h6>
      <div className="navIcon2">{icon}</div>
    </motion.div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

export default IconButton;
