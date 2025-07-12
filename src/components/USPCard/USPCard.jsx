import React from "react";
import { motion } from "framer-motion";
import "./USPCard.scss";

function USPCard({ image, title, description, animation }) {
  return (
    <>
      <motion.div className="USPCardContainer" variants={animation}>
        <img src={image} alt={title} />
        <div className="USPCardDetails">
          <h3 className="textBold textM">{title}</h3>
          <p className="textLight textXS">{description}</p>
        </div>
      </motion.div>
    </>
  );
}

export default USPCard;
