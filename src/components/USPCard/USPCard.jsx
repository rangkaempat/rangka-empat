import React from "react";
import { motion } from "framer-motion";
import "./USPCard.scss";

function USPCard({ image, title, description, animation }) {
  return (
    <>
      <motion.div className="USPCardContainer" variants={animation}>
        <img src={image} alt={title} />
        <div className="USPCardDetails">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </motion.div>
    </>
  );
}

export default USPCard;
